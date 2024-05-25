/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(false);
	const fetchData = useAxios();

	const saveUserData = async (name, email) => {
		await fetchData.post("/users", {
			name: name,
			email: email,
			role: "guest",
		});
	};

	useEffect(() => {
		const active = onAuthStateChanged(auth, async (currentUser) => {
			const { data } = await fetchData.post("/token-in", {
				email: currentUser?.email,
			});

			localStorage.setItem("token", data.token);

			setUser(currentUser);
			setLoading(false);
		});
		return () => active();
	}, [fetchData]);

	const signUp = async ({ username, password, photo, email }) => {
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, {
				displayName: username,
				photoURL: photo,
			});
			await saveUserData(username, email);
			toast.success("Sign up successfully");
		} catch (_) {
			toast.error("Failed to register");
		} finally {
			setLoading(false);
		}
	};

	const signIn = async ({ email, password }) => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Sign in successfully");
		} catch (_) {
			toast.error("Wrong creadentials");
		} finally {
			setLoading(false);
		}
	};

	const logOut = async () => {
		await signOut(auth);
		// await fetchData("/sign-out");
		toast.success("Sign out successfully");
	};

	const logInWith = async (provide) => {
		let provider;
		switch (provide) {
			case "google":
				provider = new GoogleAuthProvider();
				break;
			case "github":
				provider = new GithubAuthProvider();
				break;
			default:
				throw new Error("Unknown provider");
		}
		const { user: curUser } = await signInWithPopup(auth, provider);
		await saveUserData(curUser.displayName, curUser.email);
		toast.success("Sign in successfully");
	};

	return (
		<AuthContext.Provider
			value={{ user, signUp, signIn, loading, logOut, logInWith }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Calling outside the provider");
	return context;
};

export { useAuth, AuthProvider };

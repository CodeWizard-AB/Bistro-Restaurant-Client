import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { loginForm } from "../constants/index";
import {
	TextField,
	IconButton,
	OutlinedInput,
	InputAdornment,
	FormControl,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonContainer from "../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";
import login from "../assets/others/authentication1.png";

function Login() {
	const [recaptcha, setRecaptcha] = useState();
	const { signIn, loading, logInWith, user } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		user && navigate(location.state || "/");
	}, [user, navigate, location.state]);

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="grid mb-10 items-center lg:grid-cols-12 gap-6 px-40 h-screen">
			<Helmet>
				<title>TastyTap | Log In</title>
			</Helmet>
			<figure className="lg:col-span-7">
				<img src={login} />
			</figure>
			<div className="border p-6 md:p-10 rounded-xl lg:col-span-5 shadow-md md:mx-32 lg:mx-0">
				<h1 className="font-bold text-2xl mb-6">Sign in to you account</h1>
				<form
					onSubmit={handleSubmit(async (data) => {
						if (recaptcha) {
							await signIn(data);
							setRecaptcha();
							reset();
						}
					})}
					className="flex flex-col gap-2"
				>
					{loginForm?.map(({ label, type, id, placeholder, name }) => (
						<div className="mb-3 flex flex-col" key={id}>
							<label htmlFor={id} className="font-medium mb-2 text-sm">
								{label}
							</label>
							{String(id).includes("password") ? (
								<FormControl variant="outlined" size="small">
									<OutlinedInput
										{...register(name, { required: true })}
										autoComplete={name}
										id={id}
										placeholder={placeholder}
										type={showPassword ? "text" : "password"}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{showPassword ? (
														<Visibility fontSize="small" />
													) : (
														<VisibilityOff fontSize="small" />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							) : (
								<TextField
									{...register(name, { required: true })}
									placeholder={placeholder}
									key={id}
									id={id}
									type={type}
									variant="outlined"
									size="small"
									autoComplete={name}
								/>
							)}
						</div>
					))}

					<div className="flex items-center justify-between">
						<FormControlLabel
							control={<Checkbox size="small" />}
							label={<p className="text-sm">Remember me</p>}
						/>
						<span className="text-[#4F46E5] text-sm cursor-pointer font-medium">
							Forgot password?
						</span>
					</div>

					<ReCAPTCHA
						sitekey={import.meta.env.VITE_SITE_KEY}
						onChange={(value) => setRecaptcha(value)}
					/>

					<ButtonContainer type={"submit"} variant={"contained"}>
						{loading ? <Loader /> : "Sign in"}
					</ButtonContainer>
				</form>

				<p className="grid grid-cols-3 items-center justify-between before:h-[1px] before:w-full before:bg-gray-200 after:h-[1px] flex-1 gap-3 after:w-full after:bg-gray-200 my-6 text-sm">
					Or continue with
				</p>

				<div className="grid grid-cols-2 gap-4 *:flex *:gap-2">
					<ButtonContainer
						borderCol={"#e5e7eb"}
						variant={"outlined"}
						event={logInWith.bind(null, "google")}
					>
						<img
							src="https://i.postimg.cc/HxZb3zwB/google.png"
							alt="google"
							className="w-6"
						/>
						<span>Google</span>
					</ButtonContainer>
					<ButtonContainer
						borderCol={"#e5e7eb"}
						variant={"outlined"}
						event={logInWith.bind(null, "github")}
					>
						<img
							src="https://i.postimg.cc/nzcvvgDX/github.png"
							alt="github"
							className="w-6"
						/>
						<span>GitHub</span>
					</ButtonContainer>
				</div>

				<p className="text-sm mt-5 text-center">
					Don’t have an account yet?
					<Link
						to="/signup"
						className="text-[#4F46E5] font-medium cursor-pointer hover:border-b hover:border-[#4F46E5]"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;

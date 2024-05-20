import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signupForm } from "../constants/index";
import signup from "../assets/others/authentication1.png";
import {
	Checkbox,
	FormControlLabel,
	TextField,
	IconButton,
	OutlinedInput,
	InputAdornment,
	FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonContainer from "../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";
import { boolean, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

function Signup() {
	const { signUp, loading } = useAuth();

	const validationSchema = object({
		username: string()
			.required("Username is required")
			.min(2, "Username must be at least 2 characters long")
			.max(50, "Username must not exceed 50 characters"),

		password: string()
			.required("Password is required")
			.min(8, "Password must be a least 8 characters")
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(/[0-9]/, "Password must contain at least one number")
			.matches(
				/[!@#$%^&*(),.?":{}|<>]/,
				"Password must contain at least one special character"
			),

		email: string()
			.required("Email is required")
			.email("Invalid email format")
			.lowercase()
			.matches(
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				"Invalid email format"
			),

		photo: string()
			.required("Photo is required")
			.url("Invalid URL format")
			.matches(/\.(jpeg|jpg|gif|png)$/, "Invalid image URL"),

		terms: boolean().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		isSubmitSuccessful && reset();
	}, [isSubmitSuccessful, reset]);

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="grid mb-10 items-center lg:grid-cols-12 py-6 gap-6 px-40 h-screen">
			<Helmet>
				<title>TastyTap | Signup</title>
			</Helmet>
			<figure className="lg:col-span-7">
				<img src={signup} />
			</figure>
			<form
				className="flex flex-col gap-2 border p-6 md:p-10 rounded-xl lg:col-span-5 shadow-md md:mx-32 lg:mx-0"
				onSubmit={handleSubmit(signUp)}
			>
				<h1 className="font-bold text-2xl mb-4">Create an account</h1>
				{signupForm?.map(({ label, type, id, placeholder, name }) => (
					<div className="mb-3 flex flex-col" key={id}>
						<label htmlFor={id} className="font-medium mb-2 text-sm">
							{label}
						</label>
						{id.includes("password") ? (
							<FormControl variant="outlined" size="small">
								<OutlinedInput
									{...register(name)}
									autoComplete={name}
									error={!!errors?.[name]}
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
								<p className="text-xs text-[#D62F6B] ml-4 mt-2">
									{errors?.[name]?.message}
								</p>
							</FormControl>
						) : (
							<TextField
								autoComplete={name}
								{...register(name)}
								placeholder={placeholder}
								key={id}
								id={id}
								type={type}
								variant="outlined"
								size="small"
								error={!!errors?.[name]}
								helperText={errors[name]?.message}
							/>
						)}
					</div>
				))}
				<FormControlLabel
					sx={{ width: "fit-content" }}
					control={<Checkbox size="small" {...register("terms")} />}
					label={
						<p className="text-sm">
							I accept the{" "}
							<span className="text-[#4F46E5] font-medium hover:border-b hover:border-[#2562eb]">
								Terms and Conditions
							</span>
						</p>
					}
				/>
				<ButtonContainer type={"submit"} variant={"contained"}>
					{loading ? <Loader /> : "Create an account"}
				</ButtonContainer>
				<p className="text-sm mt-3">
					Already have an account?{" "}
					<Link
						to="/login"
						className="text-[#2563EB] font-medium cursor-pointer hover:border-b hover:border-[#2562eb]"
					>
						Login here
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Signup;

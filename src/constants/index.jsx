import { HiMiniHome } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaCalendarPlus } from "react-icons/fa6";

class Link {
	constructor(title, link, icon) {
		this.title = title;
		this.link = link;
		this.icon = icon;
	}
}

class Label {
	constructor(label, type, id, placeholder, name) {
		this.label = label;
		this.type = type;
		this.id = id;
		this.placeholder = placeholder;
		this.name = name;
	}
}

const navigation = [
	new Link("home", "/"),
	new Link("contact us", "/contact"),
	new Link("dashboard", "/dashboard"),
	new Link("our menu", "/menu"),
	new Link("our shop", "/shop"),
];

const sideNav = [
	new Link("user home", "/", <HiMiniHome size={20} />),
	new Link("reservation", "/", <FaCalendarAlt size={20} />),
	new Link("payment history", "/", <IoWallet size={20} />),
	new Link("my cart", "/dashboard/cart", <FaShoppingCart size={20} />),
	new Link("add review", "/", <MdRateReview size={20} />),
	new Link("my booking", "/", <FaCalendarPlus size={20} />),
];

const navButtons = [
	new Link("Log in", "/login"),
	new Link("Sign up", "/signup"),
];

const loginForm = [
	new Label(
		"Email address",
		"email",
		"email_signin",
		"name@gmail.com",
		"email"
	),
	new Label("Password", "password", "password_signin", "••••••••", "password"),
];

const signupForm = [
	new Label("Username", "text", "username_register", "John Doe", "username"),
	new Label(
		"Email address",
		"email",
		"email_register",
		"name@gmail.com",
		"email"
	),
	new Label(
		"Password",
		"password",
		"password_register",
		"••••••••",
		"password"
	),
	new Label("Profile Photo", "text", "photo_register", "profile.png", "photo"),
];

export { navigation, navButtons, loginForm, signupForm, sideNav };

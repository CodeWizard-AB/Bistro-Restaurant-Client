class Link {
	constructor(title, link) {
		this.title = title;
		this.link = link;
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
	new Link("our menu", "/menu"),
	new Link("our shop", "/shop"),
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

export { navigation, navButtons, loginForm, signupForm };

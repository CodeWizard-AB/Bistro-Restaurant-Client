class Link {
	constructor(title, link) {
		this.title = title;
		this.link = link;
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

export { navigation, navButtons };

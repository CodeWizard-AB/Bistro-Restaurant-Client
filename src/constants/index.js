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

export { navigation };

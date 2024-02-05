class myHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<header>
			<!--<h1 id="header-text">Marshall Johnson</h1>-->
			<nav id="header-nav">
				<a class="nav_item" href="./index.html">Home</a>|
				<a class="nav_item" href="./Portfolio.html">Portfolio</a>|
				<a class="nav_item" href="./Resume.html">Resume</a>|
				<a class="nav_item" href="./Contact.html">Contact</a>
			</nav>
		</header>
		`;
	}
}

class myFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<footer>
			<a>2024 - Marshall Johnson</a>
			<a id="footer-top-button" href="#">Top</a>
		</footer>
		`;
	}
}

customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);
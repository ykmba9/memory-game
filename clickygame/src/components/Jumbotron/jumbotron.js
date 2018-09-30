//sets up the reusable Jumbotron component
import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Princess Clicky Game!</h1>
		<h2>Test your memory by clicking on each image just once. To win, remember not to click on the same picture twice.</h2>
	</header>
);
export default Jumbotron;
/* eslint-disable no-unused-vars, react/react-in-jsx-scope */
import { Component, createElement, render } from "../src";

class MyComponent extends Component {
	render() {
		return (
			<div>
				<h1>My Component</h1>
				{this.children}
			</div>
		);
	}
}

const app = (
	<MyComponent id="hello" title="hello">
		JowayYoung
		<div>!</div>
		<div></div>
	</MyComponent>
);
const root = document.getElementById("root");

render(app, root);
/* eslint-enable */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
	useParams
} from "react-router-dom";

import * as View from './views';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPageView } from './views/landingPage/index';

import { Light, Dark, GlobalStyle } from './styles/index';

function App() {
	const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') === 'true' || false);

	const themeChangerHanddler = () => {
		localStorage.setItem('theme', !darkTheme);
		setDarkTheme(!darkTheme);
	};

	return (
		<ThemeProvider theme={darkTheme ? Dark : Light}>
			<GlobalStyle/>

			<Router>
				<Header darkTheme={darkTheme} themeChangerHanddler={themeChangerHanddler} />
				{/* <div>
					<Link to="/" style={{'marginRight': '2em'}} >Landing Page</Link>
					<Link to="/products" style={{'marginRight': '2em'}} >Products</Link>
					<Link to={'/product/' + 1} style={{'marginRight': '2em'}} >Product Detail</Link>
					<Link to="/manage-products" style={{'marginRight': '2em'}} >Manage Products</Link>
					<Link to="/categories" style={{'marginRight': '2em'}} >Categories</Link>
					<Link to="/manage-categories" style={{'marginRight': '2em'}} >Manage Categories</Link>
					<Link to="/promotions" style={{'marginRight': '2em'}} >Promotions</Link>
					<Link to="/Manage-promotions" style={{'marginRight': '2em'}} >Manage Promotions</Link>
					<Link to="/statistics" style={{'marginRight': '2em'}} >Statistics</Link>
				</div>
				<hr /> */}

				<Switch>
					<Route exact path="/">
						<View.LandingPageView />
					</Route>
					<Route exact path="/products/:id">
						<View.ProductsPage />
					</Route>
					<Route path="/product/:id">
						<View.ProductDetail />
					</Route>
					<Route path="/manage-products">
						<ManageProducts />
					</Route>
					<Route path="/categories">
						<View.CategoryPage />
					</Route>
					<Route path="/manage-categories">
						<ManageCategories />
					</Route>
					<Route path="/promotions">
						<View.PromotionPage />
					</Route>
					<Route path="/manage-promotions">
						<ManagePromotions />
					</Route>
					<Route path="/statistics">
						<Statistics />
					</Route>
					<Redirect to="/" />
				</Switch>
				<Footer />
			</Router>


		</ThemeProvider>
	);
}

function ManageProducts() {
	return (
		<div>
			<h2>Manage Products</h2>
		</div>
	);
}

function ManageCategories() {
	return (
		<div>
			<h2>Manage Categories</h2>
		</div>
	);
}

function ManagePromotions() {
	return (
		<div>
			<h2>Manage Promotions</h2>
		</div>
	);
}

function Statistics() {
	return (
		<div>
			<h2>Statistics</h2>
		</div>
	);

}

export default App;

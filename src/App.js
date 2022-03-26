import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/Layout.jsx';

import { Index } from './pages/Index.jsx';
import { EventsPage } from './pages/Event.jsx';
import { LoginPage } from './pages/Login.jsx';

export default function App() {
	const [isLoggedIn, setLogin] = useState(false);
	const [username, setUsername] = useState('');

	return (
		<Layout
			loggedIn={isLoggedIn}
			title="Viðburðir"
			footer={
				<p>
					Viðburðir frá{' '}
					<a href="https://vef2-20222-v3-synilausn.herokuapp.com/">
						Viðburðarþjónustu
					</a>
					.
				</p>
			}
		>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Index
							isLog={isLoggedIn}
							updLog={setLogin}
							isNam={username}
							updNam={setUsername}
						/>
					}
				/>
				<Route
					exact
					path="/:id"
					element={
						<EventsPage
							isLog={isLoggedIn}
							updLog={setLogin}
							isNam={username}
							updNam={setUsername}
						/>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<LoginPage
							isLog={isLoggedIn}
							updLog={setLogin}
							isNam={username}
							updNam={setUsername}
						/>
					}
				/>
				<Route
					exact
					path="/logout"
					element={
						<LoginPage
							logginOut={true}
							isLog={isLoggedIn}
							updLog={setLogin}
							isNam={username}
							updNam={setUsername}
						/>
					}
				/>
			</Routes>
		</Layout>
	);
}

import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import { EventsPage } from './pages/Event';
import { LoginPage } from './pages/Login';

export default function App() {
	return (
		<Layout
			title="Viðburðir"
			footer={
				<p>
					Fréttir frá{' '}
					<a href="https://vef2-20222-v3-synilausn.herokuapp.com/">
						Viðburðarþjónustu
					</a>
					.
				</p>
			}
		>
			<Routes>
				<Route exact path="/" element={<Index />} />
				<Route exact path="/:id" element={<EventsPage />} />
				<Route exact path="/login" element={<LoginPage />} />
					
			</Routes>
		</Layout>
	);
}

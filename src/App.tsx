import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='/projects/:slug'
					element={<ProjectDetails />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesPage from "./containers/NotesPage";
import CreatePage from "./containers/CreatePage";
import Layout from "./components/Layout";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route exact path="/" element={<NotesPage />} />
					<Route path="/create" element={<CreatePage />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;

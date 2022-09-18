// styles
import "./styles/style.css"
import Portfolio from './views/Portfolio';
import Loading from './views/Loading';
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Loading />} />
					<Route path='/portfolio' element={<Portfolio />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

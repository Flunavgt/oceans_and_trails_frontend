import {
  BrowserRouter,
  Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import './index.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
	return (
		<BrowserRouter >
			<div className="App">
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path='/home' element={<Home/>} />
					<Route path='/sign-up' element={<SignUpPage />}/>
					<Route path='/sign-in' element={<SignInPage />}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
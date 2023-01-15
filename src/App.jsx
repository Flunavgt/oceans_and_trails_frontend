import {
  BrowserRouter,
  Routes, Route, Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import './index.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Tour from './components/Tour/Tour';
import Reservation from './components/Reservation/Reservation';
import ReservationForm from './components/Reservation/ReservationForm';

function App() {
	return (
		<BrowserRouter >
			<div className="App">
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path='/home' element={<Home/>} />
					<Route path='/sign-up' element={<SignUpPage />}/>
					<Route path='/sign-in' element={<SignInPage />}/>
					if (localStorage.getItem('token')) {
						<Route path='/tour' element={<Tour />}/>
					}
					
						<Route path='/reservation' element={<Reservation />}/>
					
					if (localStorage.getItem('token')) {
						<Route path='/reservationForm' element={<ReservationForm />}/>
					}


				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
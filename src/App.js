// import logo from './logo.svg'; React Logo
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DiningPage from './pages/DiningPage';
import BeerPage from './pages/BeerPage';
import BookingPage from './pages/BookingPage';
import LogInPage from './pages/LogInPage';
import NavBar from './components/NavigationBar';
import BookingForm from './pages/BookingForm';
import BookingViewer from './pages/BookingViewer';
import CreateAccount from './pages/CreateAccount';
import SocialMedia from './components/SocialMedia';
import FootNotes from './components/FootNotes';



function App() {
  return (
    <div className="App">

      <h1>Taylor Made Dining and Brewery</h1>
      <NavBar/>
      
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/booking" element={<Outlet />}>
        <Route index element={<BookingPage />}/>
        <Route path="bookingForm" element={<BookingForm />} />
        <Route path="bookingViewer" element={<BookingViewer />} />
      </Route>

      <Route path="/beer" element={<BeerPage />} />

      <Route path="/log-in" element={<Outlet />}>
        <Route index element={<LogInPage />}/>
        <Route path="createAccount" element={<CreateAccount />} />
      </Route>

      <Route path="/dining" element={<DiningPage />} />

    </Routes>

      <div className="footer">
        <br/>
        <SocialMedia/>
        <FootNotes />
      </div>

    </div>
  );
}

export default App;

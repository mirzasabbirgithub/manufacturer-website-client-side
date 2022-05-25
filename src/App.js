
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blogs from './Pages/Blogs/Blogs';
import Error404 from './Pages/Error404/Error404';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPurchased from './Pages/Purchase/MyPurchased';
import AddReviews from './Pages/Dashboard/AddReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myportfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyPurchased></MyPurchased>}></Route>
          <Route path="addreviews" element={<AddReviews></AddReviews>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>

        </Route>

        <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

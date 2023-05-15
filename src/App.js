import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header/Header';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NewProduct from './pages/NewProduct/NewProduct';
import ProductPage from './pages/Product/ProductPage';
import CategoryPage from './pages/Category/CategoryPage';
import CartPage from './pages/Cart/CartPage';
import OrderPage from './pages/Order/OrderPage';
import AdminDashboardPage from './pages/AdminDashboard/AdminDashboardPage';
import EditProductPage from './pages/EditProduct/EditProductPage';
// import Footer from './components/footer/Footer';

import ScrollTop from './components/ScrollTop';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const user = useSelector((state) => state.user);

	return (
		<div className='App'>
			<BrowserRouter>
				<ScrollTop />
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route
						path='/login'
						element={user ? <Navigate to='/' /> : <Login />}
					/>
					<Route
						path='/signup'
						element={user ? <Navigate to='/' /> : <Signup />}
					/>

					{user && (
						<>
							<Route path='/cart' element={<CartPage />} />
							<Route path='/orders' element={<OrderPage />} />
						</>
					)}

					<Route
						path='/admin'
						element={
							user && user.isAdmin ? (
								<AdminDashboardPage />
							) : (
								<Navigate to='/' />
							)
						}
					/>

					<Route
						path='/product/:id/edit'
						element={
							user && user.isAdmin ? <EditProductPage /> : <Navigate to='/' />
						}
					/>

					<Route path='/new-product' element={<NewProduct />} />
					<Route path='/product/:id' element={<ProductPage />} />
					<Route path='/category/:category' element={<CategoryPage />} />

					<Route path='*' element={<Home />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;

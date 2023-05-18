import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../features/userSlice';

import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './header.scss';

const Header = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>
						<img
							src='https://ocs.alatoo.edu.kg/pluginfile.php/1/core_admin/logocompact/300x300/1684120109/Logo.png'
							alt=''
						/>
						Ala-Too Store
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						{!user && (
							<LinkContainer to='/login'>
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}

						{user && !user.isAdmin && (
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i>
									{user?.cart.count > 0 && (
										<span className='badge badge-warning' id='cartcount'>
											{user.cart.count}
										</span>
									)}
								</Nav.Link>
							</LinkContainer>
						)}

						{user && (
							<>
								<NavDropdown title={`${user.email}`} id='basic-nav-dropdown'>
									{user.isAdmin && (
										<>
											<LinkContainer to='/admin'>
												<NavDropdown.Item>Dashboard</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to='/new-product'>
												<NavDropdown.Item>Create Product</NavDropdown.Item>
											</LinkContainer>
										</>
									)}
									{!user.isAdmin && (
										<>
											<LinkContainer to='/cart'>
												<NavDropdown.Item>Cart</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to='/orders'>
												<NavDropdown.Item>My orders</NavDropdown.Item>
											</LinkContainer>
										</>
									)}

									<NavDropdown.Divider />
									<Button
										variant='danger'
										onClick={handleLogout}
										className='logout-btn'
									>
										Logout
									</Button>
								</NavDropdown>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;

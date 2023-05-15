import AdminDashboardClients from '../../components/adminDashboardClients/AdminDashboardClients';
import AdminDashboardOrders from '../../components/adminDashboardOrders/AdminDashboardOrders';
import AdminDashboardProducts from '../../components/adminDashboardProducts/AdminDashboardProducts';

import { Container, Nav, Tab, Col, Row } from 'react-bootstrap';

import './adminDashboardPage.scss'

const AdminDashboardPage = () => {
	return (
		<Container className='admin_dashboard'>
			<Tab.Container defaultActiveKey='products'>
				<Row>
					<Col sm={3}>
						<Nav variant='pills' className='flex-column'>
							<Nav.Item>
								<Nav.Link eventKey='products'>Products</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='orders'>Orders</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='clients'>Clients</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey='products'>
								<AdminDashboardProducts />
							</Tab.Pane>
							<Tab.Pane eventKey='orders'>
								<AdminDashboardOrders />
							</Tab.Pane>
							<Tab.Pane eventKey='clients'>
								<AdminDashboardClients />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
};

export default AdminDashboardPage;

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDeleteProductMutation } from '../../services/appApi';
import Pagination from '../pagination/Pagination';

import { Table, Button } from 'react-bootstrap';
import './dashboardProducts.scss';

const AdminDashboardProducts = () => {
	const products = useSelector((state) => state.products);
	const user = useSelector((state) => state.user);

	const [deleteProduct, { isLoading }] = useDeleteProductMutation();
	function handleDeleteProduct(id) {
		if (window.confirm('Are you sure?'))
			deleteProduct({ product_id: id, user_id: user._id });
	}

	const TableRow = ({ pictures, _id, name, price }) => {
		return (
			<tr>
				<td>
					<img src={pictures[0].url} className='dashboard-product-preview' alt=''/>
				</td>
				<td>{_id}</td>
				<td>{name}</td>
				<td>{price}</td>
				<td>
					<Button
						onClick={() => handleDeleteProduct(_id, user._id)}
						disabled={isLoading}
					>
						Delete
					</Button>
					<Link to={`/product/${_id}/edit`} className='btn btn-warning'>
						Edit
					</Link>
				</td>
			</tr>
		);
	};

	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th></th>
					<th>Product ID</th>
					<th>Product Name</th>
					<th>Product Price</th>
				</tr>
			</thead>
			<tbody>
				<Pagination
					data={products}
					RenderComponent={TableRow}
					pageLimit={1}
					dataLimit={5}
					tablePagination={true}
				/>
			</tbody>
		</Table>
	);
};

export default AdminDashboardProducts;
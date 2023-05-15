import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../axios.js';
import { updateProducts } from '../../features/productSlice';

import categories from '../../categories';
import ProductPreview from '../../components/ProductPreview';

import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './home.scss';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	const lastProducts = products.slice(0, 8);
	useEffect(() => {
		axios.get('/products').then(({ data }) => dispatch(updateProducts(data)));
	}, [dispatch]);

	return (
		<div className='home_page'>
			<div className='featured-products-container container mt-4'>
				<h2>Last products</h2>

				<div className='d-flex justify-content-center flex-wrap'>
					{lastProducts.map((product, idx) => (
						<ProductPreview {...product} key={idx}/>
					))}
				</div>
				<div>
					<Link
						to='/category/all'
						style={{
							textAlign: 'right',
							display: 'block',
							textDecoration: 'none',
						}}
					>
						See more {'>>'}
					</Link>
				</div>
			</div>

			<div className='recent-products-container container mt-4'>
				<h2>Categories</h2>
				<Row>
					{categories.map((category, idx) => (
						<LinkContainer
							to={`/category/${category.name.toLocaleLowerCase()}`}
							key={idx}
						>
							<Col md={4}>
								<div
									style={{
										backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
										gap: '10px',
									}}
									className='category-tile'
								>
									{category.name}
								</div>
							</Col>
						</LinkContainer>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Home;

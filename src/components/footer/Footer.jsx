import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './footer.scss';

const Footer = () => {
	return (
		<div className='footer bg-light'>
			<Container>
				<Row>
					<Col>© Copyright 2023. All Rights Reserved</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;

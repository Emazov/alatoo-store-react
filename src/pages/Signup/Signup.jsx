import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSignupMutation } from '../../services/appApi.js';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [signup, { error, isLoading, isError }] = useSignupMutation();

	const handleSignup = (e) => {
		e.preventDefault();
		signup({ name, email, password });

		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<Container>
			<Row>
				<Col md={6}>
					<Form style={{ width: '100%' }} onSubmit={handleSignup}>
						<h1>Create an account</h1>

						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Your name'
								value={name}
								required
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Enter Password'
								value={password}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Button type='submit' disabled={isLoading}>
								Create account
							</Button>
						</Form.Group>

						{isError && <Alert variant='danger'>{error.data}</Alert>}

						<p className='pt-3 text-center'>
							Already have an account? <Link to='/login'>login</Link>
						</p>
					</Form>
				</Col>
				<Col md={6}></Col>
			</Row>
		</Container>
	);
};

export default Signup;

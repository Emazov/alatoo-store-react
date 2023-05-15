import axios from "axios";

const instance = axios.create({
	// baseURL: "http://localhost:8080",
	baseURL: 'https://erin-stormy-squid.cyclic.app/',
});

export default instance;

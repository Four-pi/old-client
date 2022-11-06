import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialState = {
	ip: "",
	port: "",
	request: "",
	service: "",
	mail: "",
	number: ""
};

const AddEdit = () => {
	const [state, setState] = useState(initialState);

	const { ip, port, request, service, mail, number } = state;

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!ip || !port || !request || !service || !mail || !number) {
			alert("빈칸이 존재합니다.");
		} else {
			axios.post("http://localhost:3001/api/post", {
				ip,
				port,
				request,
				service,
				mail,
				number,
			}).then(() => {
				setState({ ip: "", port: "", request: "", service: "", mail: "", number: "" })
			})
			setTimeout(() => { navigate("/"); }, 2000);
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	return <div class="p-3">
		<div className="mb-3">
			<h2>Add Port</h2>
		</div>
		<form onSubmit={handleSubmit}>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="ip"
					name="ip"
					value={ip}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">IP Address</label>
			</div>
			<div class="form-floating mb-3">
				<input type="number"
					class="form-control"
					id="port"
					name="port"
					value={port}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Port</label>
			</div>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="request"
					name="request"
					value={request}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Request</label>
			</div>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="service"
					name="service"
					value={service}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Service</label>
			</div>
			<div class="form-floating mb-3">
				<input type="email"
					class="form-control"
					id="mail"
					name="mail"
					value={mail}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">E-mail</label>
			</div>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="number"
					name="number"
					value={number}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Number</label>
			</div>

			<div class="form-floating mt-4 text-end">
				<input class="btn btn-success mx-3 px-3" type="submit" value="승인 신청" />
				<Link to="/">
					<input class="btn btn-danger px-3" type="button" value="취소" />
				</Link>
			</div>
		</form>
	</div>;
};

export default AddEdit;

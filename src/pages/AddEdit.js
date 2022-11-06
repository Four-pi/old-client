import React, { useState, useEffect} from "react";
import {useNavigate,useParams ,Link} from "react-router-dom";
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

	const {ip,port,request,service,mail,number} = state;

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!ip || !port || !request || !service || !mail || !number) {
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
				setState({ip: "", port: "", request: "", service: "", mail: "", number: "" })
			})
			setTimeout(() => { navigate("/");},2000);
	}
	}
	
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setState({...state, [name]: value});
	};
  return <div>
	<form onSubmit={handleSubmit}>
		<label htmlFor="ip">IP</label>
		<input
			type="text"
			id="ip"
			name="ip"
			value={ip}
			onChange={handleInputChange}
		/>
		<label htmlFor="port">PORT</label>
		<input
			type="text"
			id="port"
			name="port"
			value={port}
			onChange={handleInputChange}
		/>
		<label htmlFor='request'>request</label>
		<input
			type="text"
			id="request"
			name="request"
			value={request}
			onChange={handleInputChange}
		/>
		<label htmlFor='service'>service</label>
		<input
			type="text"
			id="service"
			name="service"
			value={service}
			onChange={handleInputChange}
		/>
<label htmlFor='mail'>mail</label>
<input
type="text"
id="mail"
name="mail"
value={mail}
onChange={handleInputChange}
/>
<label htmlFor='number'>number</label>
<input
type="text"
id="number"
name="number"
value={number}
onChange={handleInputChange}
/>

<input type="submit" value="승인 신청" />
<Link to="/">
	<input type="button" value="취소" />
</Link>
	</form>
    </div>;
};

export default AddEdit;

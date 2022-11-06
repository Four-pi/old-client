import React, { useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialState = {
	name: "",
	userid: "",
	pw: "",
	mail: "",
	number: ""
};

const AddEdit = () => {
	const [state, setState] = useState(initialState);

	const {name,userid,pw,mail,number} = state;

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!name || !userid || !pw || !mail || !number) {
			alert("빈칸이 존재합니다.");
		} else {
			axios.post("http://localhost:3001/api/join", {
				name,
				userid,
				pw,
				mail,
				number,
			}).then(() => {
				setState({name: "", userid: "", pw: "", mail: "", number: "" })
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
		<label htmlFor="name">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			value={name}
			onChange={handleInputChange}
		/>
		<label htmlFor="userid">UserID</label>
		<input
			type="text"
			id="userid"
			name="userid"
			value={userid}
			onChange={handleInputChange}
		/>
		<label htmlFor='pw'>PW</label>
		<input
			type="password"
			id="pw"
			name="pw"
			value={pw}
			onChange={handleInputChange}
		/>
		<label htmlFor='email'>Email</label>
		<input
			type="text"
			id="mail"
			name="mail"
			value={mail}
			onChange={handleInputChange}
		/>
<label htmlFor='phone'>Phone</label>
<input
type="text"
id="number"
name="number"
value={number}
onChange={handleInputChange}
/>
<input type="submit" value="Sign up" />
<Link to="/">
	<input type="button" value="취소" />
</Link>
	</form>
    </div>;
};

export default AddEdit;

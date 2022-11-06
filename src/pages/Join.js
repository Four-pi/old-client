import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

	const { name, userid, pw, mail, number } = state;

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !userid || !pw || !mail || !number) {
			alert("빈칸이 존재합니다.");
		} else {
			axios.post("http://localhost:3001/api/join", {
				name,
				userid,
				pw,
				mail,
				number,
			}).then(() => {
				setState({ name: "", userid: "", pw: "", mail: "", number: "" })
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
			<h2>Join</h2>
		</div>
		<form onSubmit={handleSubmit}>
			<p>로그인 정보</p>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="userid"
					name="userid"
					placeholder="id"
					value={userid}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">User ID</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password"
					class="form-control"
					id="pw"
					name="pw"
					placeholder="password"
					value={pw}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Password</label>
			</div>

			<p>사용자 정보</p>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="name"
					name="name"
					placeholder="Bomin"
					value={name}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Name</label>
			</div>
			<div class="form-floating mb-3">
				<input type="email"
					class="form-control"
					id="mail"
					name="mail"
					placeholder="name@example.com"
					value={mail}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Email address</label>
			</div>
			<div class="form-floating mb-3">
				<input type="text"
					class="form-control"
					id="number"
					name="number"
					placeholder="000-0000-0000"
					value={number}
					onChange={handleInputChange}
				/>
				<label for="floatingInput">Phone Number</label>
			</div>

			<div class="form-floating mt-4 text-end">
				<input class="btn btn-success mx-3 px-3" type="submit" value="Sign up" />
				<Link to="/">
					<input class="btn btn-danger px-3" type="button" value="취소" />
				</Link>
			</div>

		</form>
	</div>;
};

export default AddEdit;

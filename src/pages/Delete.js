import React, {useState, useEffect} from 'react';
import {useParams, Link } from "react-router-dom";
import axios from 'axios';

const Delete = () => {
	const [user, setUser] = useState({});

	const {id} = useParams();

	useEffect(()=> {
		axios
		.get(`http://localhost:3001/api/get/${id}`)
		.then((resp) => setUser({...resp.data[0]}));
	}, [id]);

	return (
		<div>
			<strong>id: </strong>
			<span>{user.port}</span>
		</div>

	)
}

export default Delete

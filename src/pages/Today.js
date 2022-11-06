import React, { useState, useEffect} from 'react';
import {useNavigate ,useParams,Link } from "react-router-dom";
import axios from "axios";

const Today = () => {
	const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/compare");
    setData(response.data);
};

useEffect(() => {
	loadData();
},[]);

return(
    <div>
	<h4>오늘의 nmap 데이터 테이블</h4>
        <table>
            <thead>
            <tr>
                <th>date</th>
                <th>port</th>
                <th>service</th>
                <th>version</th>
                <th>os</th>
            </tr>
            </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.port}</td>
                        <td>{item.service}</td>
                        <td>{item.version}</td>
                        <td>{item.os}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
    );
};

export default Today;

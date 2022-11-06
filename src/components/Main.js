import React, { useState, useEffect} from 'react';
import axios from "axios";

const Main = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/get");
    setData(response.data);
};

useEffect(() => {
    loadData();
}, []);
return(
    <div>
        <table>
            <thead>
            <tr>
                <th>date</th>
                <th>port</th>
                <th>request</th>
                <th>service</th>
                <th>mail</th>
                <th>number</th>
            </tr>
            </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.port}</td>
                        <td>{item.request}</td>
                        <td>{item.service}</td>
                        <td>{item.mail}</td>
                        <td>{item.number}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
	<button variant="outline-success">승인 신청</button>
    </div>
    );
};

export default Main;


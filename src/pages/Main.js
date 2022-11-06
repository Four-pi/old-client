import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/port");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h4>port 승인 테이블</h4>
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
                        return (
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
            <Link to="/addport">
                <button>승인 신청</button>
            </Link>
        </div>
    );
};

export default Main;

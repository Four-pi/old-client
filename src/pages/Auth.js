import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Auth = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/auth");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const update = (id) => {
        if (window.confirm("승인을 하시겠습니까?")) {
            axios.get(`http://localhost:3001/api/update/${id}`);
            alert("승인이 완료 되었습니다.");
            setTimeout(() => loadData(), 500);
        } else {
            setTimeout(() => navigate("/Auth"), 500);
        }
    }
    return (
        <div>
            <h4>승인 요청/거절 테이블</h4>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>port</th>
                        <th>request</th>
                        <th>service</th>
                        <th>mail</th>
                        <th>number</th>
                        <th>Action</th>
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
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button
                                            onClick={() => update(item.id)}>승인</button>
                                    </Link>
                                    <Link to={`/reject/${item.id}`}>
                                        <button>거절</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Auth;

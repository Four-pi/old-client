import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const useMockup = true;
const mockupData = [
    {
        date: '보민',
        port: 3000,
        request: 'request',
        service: 'service',
        mail: 'mail',
        number: 'number',
    },
    {
        date: '보민2',
        port: 3001,
        request: 'request2',
        service: 'service2',
        mail: 'mai2l',
        number: 'numbe2r',
    },
    {
        date: "2022-11-031",
        port: "1",
        request: "1",
        service: 1,
        number: "1",
        mail: 'mai2l',
    },
    {
        date: "2022-11-031",
        port: "1",
        request: "1",
        service: 1,
        number: "1",
    },
    {
        date: "2022-11-03a",
        port: "a",
        request: "a",
        service: "a",
        number: "a",
    },
    {
        date: "2022-11-031",
        port: "1",
        request: "1",
        service: 1,
        number: "1",
    },
    {
        date: "2022-11-033",
        port: "3",
        request: "3",
        service: 3,
        number: "3",
    },
    {
        date: "2022-11-0312",
        port: "asdasd",
        request: "ssh",
        service: "a@a.com",
        number: "1111-1111-1111"
    }
];


const Auth = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/auth");
        setData(response.data);
    };

    useEffect(() => {
        // XXX: 디버그용 임시 목업 데이터 생성
        if (useMockup) {
            setData(mockupData);
        }

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
            <div class="my-2 p-2">
                <h1>승인 요청/거절 테이블</h1>
            </div>
            <div class="my-2">
                <table class="table table-striped">
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
                                            <button class="mx-1 py-0 btn btn-success"
                                                onClick={() => update(item.id)}>승인</button>
                                        </Link>
                                        <Link to={`/reject/${item.id}`}>
                                            <button class="mx-1 py-0 btn btn-danger">거절</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Auth;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Main () {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/port");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // XXX: 디버그용 임시 목업 데이터 생성
    setData(useMockData());

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
                    {data.map((item) => createRow(item.data, item.port, item.request, item.service, item.mail, item.number))}
                </tbody>
            </table>
            <Link to="/addport">
                <button>승인 신청</button>
            </Link>
        </div>
    );
};

function useMockData() {
    return [
        {
            data: '보민',
            port: 3000,
            request: 'request',
            service: 'service',
            mail: 'mail',
            number: 'number',
        },
        {
            data: '보민2',
            port: 3001,
            request: 'request2',
            service: 'service2',
            mail: 'mai2l',
            number: 'numbe2r',
        }
    ]
}

function createRow(data, port, request, service, mail, number) {
    return (
        <tr>
            <td>{data}</td>
            <td>{port}</td>
            <td>{request}</td>
            <td>{service}</td>
            <td>{mail}</td>
            <td>{number}</td>
        </tr>
    );
}
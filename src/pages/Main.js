import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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


export default function Main () {
    const [data, setData] = useState([]);

    useEffect(() => {
        // XXX: 디버그용 임시 목업 데이터 생성
        if (useMockup) {
            setData(mockupData);
        }

        loadData()
            .then(data => setData(data))
            .catch(e => console.log("데이터를 불러올 수 없습니다."));
    }, []);

    return (
        <div>
            <div class="my-2 p-2">
                <h1>port 승인 테이블</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => createRow(index, item.date, item.port, item.request, item.service, item.mail, item.number))}
                    </tbody>
                </table>
            </div>
            <div class="my-2 p-2">
                <Link to="/addport">
                    <button type="button" class="btn btn-primary primary-bg-color" >승인 신청</button>
                </Link>
            </div>
        </div>
    );
};

async function loadData() {
    const response = await axios.get("http://localhost:3001/api/port");
    return response.data;
};

function createRow(rowNo, date, port, request, service, mail, number) {
    return (
        <tr key={`main.table-row.${rowNo}`}>
            <td>{date}</td>
            <td>{port}</td>
            <td>{request}</td>
            <td>{service}</td>
            <td>{mail}</td>
            <td>{number}</td>
        </tr>
    );
}
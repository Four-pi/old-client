import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Main () {
    const [data, setData] = useState([]);

    useEffect(() => {
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
            <div class="my-2 p-2 text-end">
                <Link to="/addport">
                    <button type="button" class="btn btn-success mx-3 px-3" >승인 신청</button>
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
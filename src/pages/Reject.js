import React, { useState, useEffect } from 'react';
import axios from "axios";

const Reject = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/reject");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div class="my-2 p-2">
                <h1>거절 테이블</h1>
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
            </div>
        </div>
    );
};

export default Reject;

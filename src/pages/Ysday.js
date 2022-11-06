import React, { useState, useEffect } from 'react';
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

const Yesterday = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/compare_ys");
        setData(response.data);
    };

    useEffect(() => {
        // XXX: 디버그용 임시 목업 데이터 생성
        if (useMockup) {
            setData(mockupData);
        }

        loadData();
    }, []);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="comparePageAccordion-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#comparePageAccordion-collapseTwo" aria-expanded="false" aria-controls="comparePageAccordion-collapseTwo">
                    어제의 nmap 데이터 테이블
                </button>
            </h2>
            <div id="comparePageAccordion-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="comparePageAccordion-headingTwo" data-bs-parent="#comparePageAccordion">
                <div className="accordion-body">
                    <table className="table table-striped">
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
                            {data.map(item => {
                                return (
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
            </div>
        </div>
    );
};

export default Yesterday;

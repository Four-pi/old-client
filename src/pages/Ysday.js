import React, { useState, useEffect } from 'react';
import axios from "axios";

const Yesterday = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/compare_ys");
        setData(response.data);
    };

    useEffect(() => {
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

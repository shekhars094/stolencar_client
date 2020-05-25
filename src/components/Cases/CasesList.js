import React, { useState, useEffect } from "react";

const CasesList = () => {
    const [caseList, setCaseList] = useState([]);

    const getCaseList = async () => {
        const response = await fetch(
            "https://stolencar-server.herokuapp.com/api/cases",
            {
                method: "GET",
            }
        );

        const result = await response.json();
        setCaseList([...result]);
    };

    useEffect(() => {
        getCaseList();
    }, []);

    return (
        <div className="container">
            {caseList.map((data) => {
                return (
                    <div key={data._id} className="row mt-3">
                        <div className="col">
                            <div
                                className="card"
                                style={{ background: "#e5e5e5" }}
                            >
                                <div className="card-title text-center mt-1">
                                    Owner Name: {data.name}
                                </div>
                                <div className="card-body text-center">
                                    Car Stolen: {data.car_detail}
                                    <br />
                                    {!data.assigned_police ? (
                                        <div className="text-success">Case is Resolved</div>
                                    ) : (
                                        <div className="text-danger">
                                            Police Handling Case :
                                            {data.assigned_police.name}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CasesList;

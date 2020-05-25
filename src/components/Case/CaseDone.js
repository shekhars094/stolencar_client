import React, { useState, useEffect } from "react";

const CaseDone = () => {
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

    const resolveCar = async (id) => {
        const response = await fetch(
            `https://stolencar-server.herokuapp.com/api/casedone/${id}`,
            {
                method: "POST",
            }
        );
    };

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
                                    Police Handling Case:{" "}
                                    {data.assigned_police ? (
                                        <div>
                                            <span>
                                                {data.assigned_police.name}
                                            </span>
                                            <div className="d-block w-15 mx-auto">
                                                <button
                                                    className="btn btn-primary m-3"
                                                    onClick={() =>
                                                        resolveCar(data._id)
                                                    }
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="bg-success p-1 rounded">
                                            Case is Resolved
                                        </span>
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

export default CaseDone;

import React, { useState, useEffect } from "react";

const PolicesList = () => {
    const [policeList, setPoliceList] = useState([]);

    const getPoliceList = async () => {
        const response = await fetch(
            "https://stolencar-server.herokuapp.com/api/polices",
            {
                method: "GET",
            }
        );

        const result = await response.json();
        setPoliceList([...result]);
    };

    useEffect(() => {
        getPoliceList();
    }, []);

    return (
        <div className="container">
            {policeList.map((data) => {
                return (
                    <div key={data._id} className="row mt-3">
                        <div className="col">
                            <div
                                className="card"
                                style={{ background: "#e5e5e5" }}
                            >
                                <div className="card-title text-center mt-1">
                                    Police Name: {data.name}
                                </div>
                                {data.handling_case ? (
                                    <div className="bg-danger d-block w-20 text-center p-2">
                                        Engaged
                                    </div>
                                ) : (
                                    <span className="bg-success d-block w-20 text-center p-2">
                                        Free
                                    </span>
                                )}
                                <div className="card-body text-center">
                                    Area Working: {data.area}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PolicesList;

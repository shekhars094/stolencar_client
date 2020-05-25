import React, { useState } from "react";

const Case = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        car_detail: "",
        assigned_police: "",
        success: false,
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const caseData = {
                name: values.name,
                email: values.email,
                car_detail: values.car_detail,
            };

            const response = await fetch(
                "https://stolencar-server.herokuapp.com/api/case",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(caseData),
                }
            );

            const result = await response.json();

            setValues({
                ...values,
                name: "",
                email: "",
                car_detail: "",
                assigned_police: "",
                success: true,
            });
        } catch (error) {
            setValues({ ...values, success: false });
        }
    };

    return (
        <div className="container">
            <h2 className="text-center text-success bg-dark mt-2 p-3 rounded w-50 mx-auto">
                Case Report
            </h2>
            {values.success ? (
                <div className="bg-success">Case Register Succesful</div>
            ) : (
                <div className="bg-danger" style={{ display: "none" }}>
                    Not Able to Case Register
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={values.name}
                        onChange={handleChange("name")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange("email")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Car Detail</label>
                    <textarea
                        type="textarea"
                        className="form-control"
                        value={values.car_detail}
                        onChange={handleChange("car_detail")}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="form-control bg-success" />
                </div>
            </form>
        </div>
    );
};

export default Case;

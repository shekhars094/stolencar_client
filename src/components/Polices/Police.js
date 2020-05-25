import React, { useState } from "react";

const Police = () => {
    const [values, setValues] = useState({
        name: "",
        area: "",
        success: false,
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const policeData = { name: values.name, area: values.area };
            console.log(policeData);

            const response = await fetch(
                "https://stolencar-server.herokuapp.com/api/createpolice",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(policeData),
                }
            );

            const result = await response.json();

            setValues({ ...values, name: "", area: "", success: true });
        } catch (error) {
            setValues({ ...values, success: false });
        }
    };

    return (
        <div className="container">
            <h2 className="text-center text-success bg-dark mt-2 p-3 rounded w-50 mx-auto">
                Police Registration
            </h2>

            {values.success ? (
                <div>Registration Succesful</div>
            ) : (
                <div style={{ display: "none" }}>Not Able to Register</div>
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
                    <label htmlFor="">Area</label>
                    <textarea
                        type="textarea"
                        className="form-control"
                        value={values.area}
                        onChange={handleChange("area")}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="form-control bg-success" />
                </div>
            </form>
        </div>
    );
};

export default Police;

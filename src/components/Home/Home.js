import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="nav d-block mx-auto mt-3">
                <div className="navbar navbar-light bg-dark">
                    <div className="nav-item">
                        <Link className="nav-link" to="/case">
                            CASE REPORT
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/cases">
                            CASES
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/police">
                            POLICE REG
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/polices">
                            POLICES
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/casedone/">
                            CASEDONE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

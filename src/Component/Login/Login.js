import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
    return (
        <div className='login'>
            <section className="vh-75 gradient-custom">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card  text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-2 text-center">

                                    <div className="mb-md-2 mt-md-2 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control " />
                                            <label className="form-label" for="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control" />
                                            <label className="form-label" for="typePasswordX">Password</label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <Link to="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></Link>
                                            <Link to="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></Link>
                                            <Link to="#!" className="text-white"><i className="fab fa-google fa-lg"></i></Link>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-3">Don't have an account? <Link to="#!" className="text-white-50 fw-bold">Sign Up</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
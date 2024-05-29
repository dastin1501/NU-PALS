import React from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';

function Login() {
    return (
        <>
        <div className ='bg'>
            <div id="main-wrapper" className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7"></div> {/* Empty column to push the form to the right */}
                    <div className="col-xl-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="row no-gutters">
                                    <div className="col-lg-11">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                            </div>
                                            <h6 className="h5 mb-0">Welcome back!</h6>
                                            <p className="text-muted mt-2 mb-5">Enter your email address and password.</p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Student Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                
                                                <div className="d-flex">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>Login</button>
                                                <a href="#l" className="forgot-link float-right text-primary ml-auto">Forgot password?</a>
                                                </div>
                                            </form>
                                            <p className="text-muted text-center mt-3 mb-0">Don't have an account? <Link to="/signup" className="text-primary ml-1">Register</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;

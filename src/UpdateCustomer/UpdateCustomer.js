import React from 'react';
import './UpdateCustomer.css';
import { useNavigate } from 'react-router-dom';

function UpdateCustomer() {
    let navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

    const navigateToSuccessMsg = () => {
        navigate('/create-customer-success');
    }

    const navigateToHome = () => {
        navigate('/bank-manager-home');
    }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-11 offset-md-1">
                    <section className="card" style={{opacity: "90%"}}>
                        <section className="card-header text-white">
                            <h2 className="text-center mb-4">Customers</h2>
                        </section>
                        <section className="card-body">
                            <br />
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Add rows with backend info */}
                                </tbody>
                            </table>
                        </section>
                        <section className="card-footer text-left">
                            <section className="d-flex justify-content-between">
                                <section className="d-flex align-items-center">
                                    <a onClick={navigateBack} className="btn btn-secondary mt-3">Back</a>
                                </section>
                                <section className="d-flex align-items-center">
                                    <a onClick={navigateToSuccessMsg} className="btn btn-success mt-3">Edit</a>
                                    &nbsp;
                                    <a onClick={navigateToHome} className="btn btn-danger mt-3">Delete</a>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default UpdateCustomer;
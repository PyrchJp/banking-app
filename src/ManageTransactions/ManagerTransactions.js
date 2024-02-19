import React from 'react';
import './ManagerTransactions.css';
import { useNavigate } from 'react-router-dom';

function ManagerTransactions() {
    let navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

    const navigateHome = () => {
        navigate('/bank-manager-home');
    }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-11 offset-md-1">
                    <section className="card">
                        <section className="card-header text-white">
                            <h2 className="text-center mb-4">Transactions</h2>
                        </section>
                        <section className="card-body">
                            <br />
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Reference Number</th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">SubType</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Current Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </section>
                        <section className="card-footer text-left">
                            <section className="d-flex justify-content-between">
                                <section className="d-flex align-items-center">
                                    <a onClick={navigateBack} className="btn btn-secondary mt-3">Back</a>
                                </section>
                                <section className="d-flex align-items-center">
                                    <a onClick={navigateHome} className="btn btn-success mt-3">Edit</a>
                                    &nbsp;
                                    <a onClick={navigateHome} className="btn btn-danger mt-3">Delete</a>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default ManagerTransactions;

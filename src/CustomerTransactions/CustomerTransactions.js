import React from 'react';
import './CustomerTransactions.css';
import { useNavigate } from 'react-router-dom';

function CustomerTransactions() {

    let navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-8 offset-md-2">
                    <section className="card">
                        <section className="card-header text-white">
                            <h2 className="text-center mb-4">Transaction History</h2>
                        </section>
                        <section className="card-body">
                            <br />
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Transaction ID</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Balance</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Add rows with our backend data */}
                                    //backend data
                                </tbody>
                            </table>
                        </section>
                        <section className="card-footer text-left">
                            <a onClick={navigateBack} className="btn btn-secondary">Back</a>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CustomerTransactions;
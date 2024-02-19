import React from 'react';
import './CustomerDeposit.css';
import { useNavigate } from 'react-router-dom';


function CustomerDeposit() {

    let navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/customer-home');
      }

    const navigateBack = () => {
        navigate(-1);
      }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-8 offset-md-2">
                    <section className="card">
                        <section className="card-header text-white">
                            <h2 className="text-center mb-4">Deposit Page</h2>
                        </section>
                        <section className="card-body">
                            <form>
                                <section className="mb-3">
                                    <label htmlFor="accountNumber" className="form-label">Account Number</label>
                                    <input type="text" className="form-control" id="accountNumber" readOnly value="123456" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="currentBalance" className="form-label">Current Balance</label>
                                    <input type="text" className="form-control" id="currentBalance" readOnly value="\$30000" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="withdrawalAmount" className="form-label">Deposit Amount</label>
                                    <input type="number" className="form-control" id="withdrawalAmount" placeholder="\$10000" />
                                </section>
                                <section className="mb-3">
                                    <label htmlFor="newBalance" className="form-label">New Balance</label>
                                    <input type="text" className="form-control" id="newBalance" readOnly value="\$40000" />
                                </section>
                                <section className="d-flex justify-content-between">
                                    <section className="d-flex align-items-center">
                                        <a onClick={navigateBack} className="btn btn-secondary">Back</a>
                                    </section>
                                    <section className="d-flex align-items-center">
                                        <a onClick={navigateToHome} className="btn btn-primary">Deposit</a>
                                    </section>
                                </section>
                            </form>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CustomerDeposit;
import React from 'react';
import './CustomerWithdraw.css';
import { useNavigate } from 'react-router-dom';

function CustomerWithdraw() {

    let navigate = useNavigate();

    const navigateHome = () => {
        navigate('/customer-home');
    }

    return (
        <section className="container mt-5">
            <section className="row">
                <section className="col-md-8 offset-md-2">
                    <section className="card">
                        <section className="card-header text-white">
                            <h2 className="mb-0">Withdrawal</h2>
                        </section>
                        <section className="card-body">
                            <form>
                                <section className="form-group">
                                    <label htmlFor="account">Select Account:</label>
                                    <select className="form-control" id="account">
                                        <option value="123456">123456</option>
                                        <option value="123632">123632</option>
                                        <option value="131281">131281</option>
                                    </select>
                                    <br />
                                    <label htmlFor="amount">Select Amount to Withdraw:</label>
                                    <select className="form-control" id="amount">
                                        <option value="10">£10</option>
                                        <option value="20">£20</option>
                                        <option value="50">£50</option>
                                        <option value="100">£100</option>
                                        <option value="150">£150</option>
                                        <option value="200">£200</option>
                                        <option value="other">Other</option>
                                    </select>
                                </section>
                                <section className="form-group custom-amount" id="custom-amount-input" style={{display: "none"}}>
                                    <label htmlFor="custom-amount">Enter Custom Amount:</label>
                                    <input type="number" className="form-control" id="custom-amount" placeholder="Enter custom amount" />
                                </section>
                                <section className="d-flex justify-content-between">
                                    <section className="d-flex align-items-center">
                                        <a onClick={navigateHome} className="btn btn-secondary">Back</a>
                                    </section>
                                    <section className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </section>
                                </section>
                            </form>
                            <p id="current-balance" className="mt-3">Current Balance: £1000</p>
                            <p id="new-balance">New Balance: £900</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CustomerWithdraw;
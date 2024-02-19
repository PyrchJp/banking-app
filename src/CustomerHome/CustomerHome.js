import React from 'react';
import './CustomerHome.css';
import { useNavigate } from 'react-router-dom';


function CustomerHome() {

    let navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/customer-login');
    }

    const navigateToDeposits = () => {
        navigate('/manager-transactions');
    }

    const navigateToTransactions = () => {
        navigate('/customer-transactions');
    }

    const navigateToTransfer = () => {
        navigate('/customer-transfer');
    }

    const navigateToWithdraw = () => {
        navigate('/customer-withdraw');
    }

    return (
        <div>
            <nav className="nav-bar">
                <a className="nav-links" href="#">Home</a>&nbsp;| {/**Nav should be its own component if we reuse it on all pgs */}
                <a className="nav-links" href="#">Contact Us</a>&nbsp;|
                <a className="nav-links" href="#">Help</a>&nbsp;
            </nav>
            <section className="container mt-5" id="centre">
                <section className="row">
                    <section className="col-md-8 offset-md-2">
                        <section className="card">
                            <section className="card-header text-white">
                                <section className="d-flex justify-content-between align-items-center">
                                    <h2 className="mb-0">Welcome to Your Bank</h2>
                                    <a onClick={navigateToLogin} className="btn btn-secondary">Logout</a>
                                </section>
                            </section>
                            <section className="card-body">
                                <h4 className="card-title">Account Summary</h4>
                                <p className="card-text">Hello [Customer Name],</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Account Number: [Account Number]</li>
                                    <li className="list-group-item">Balance: \$[Balance]</li>
                                </ul>
                            </section>
                            <section className="card-footer d-flex justify-content-between">
                                <a onClick={navigateToTransactions} className="btn btn-primary flex-fill mr-2">View Transactions</a>
                                <a onClick={navigateToTransfer} className="btn btn-warning flex-fill mr-2">Transfer</a>
                                <a onClick={navigateToDeposits} className="btn btn-danger flex-fill mr-2">Deposit</a>
                                <a onClick={navigateToWithdraw} className="btn btn-info flex-fill">Withdraw</a>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <footer className="text-center mt-5">
                <p></p>
                <p>Contact us at: 0722923043. Find us at: Belfast 123 Street.</p>
                <p className="m-3">&copy; 2023 Your Bank. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CustomerHome;
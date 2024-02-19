import React from 'react';
import './BankManagerHome.css';
import { useNavigate } from 'react-router-dom';

function BankManagerHome() {
  let navigate = useNavigate();

  const navigateToTransactions = () => {
    navigate('/manager-transactions');
  }

  const navigateToLogin = () => {
    navigate('/manager-login');
  }


  return (

    <div className="app-container">
      <nav>
        <a className="nav-links" href="#">Home</a>&nbsp;{/**Not sure if we are creating these pages? little time */}
        <a className="nav-links" href="#">Contact Us</a>&nbsp;|
        <a className="nav-links" href="#">Help</a>&nbsp;
      </nav>
      <section className="container mt-5" id="centre">
        <section className="row">
          <section className="col-md-8 offset-md-2">
            <section className="card">
              <section className="card-header text-white welcome-text">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">Welcome to Your Account</h2>
                  <a onClick={navigateToLogin} className="btn btn-secondary">Logout</a>
                </div>
              </section>
              <section className="card-body">
                <a onClick={navigateToTransactions} className="btn btn-info flex-fill">Manage Transactions</a>
              </section>
            </section>
          </section>
        </section>
      </section>
      <footer className="text-center mt-5">
        <p>Contact us at: 0722923043. Find us at: Belfast 123 Street.</p>
        <p className="m-3">&copy; 2023 Your Bank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BankManagerHome;
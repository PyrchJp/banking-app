import React from "react";
import "./CreateCustomer.css";
import { useNavigate } from 'react-router-dom';

function CreateCustomer() {
  let navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate('/create-customer-success');
  }
  const navigateToHome = () => {
    navigate('/bank-manager-home');
  }

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-8 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Create Customer</h2>
            </section>
            <section className="card-body">
              <form>
                <section className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" id="dob" />
                </section>
                <section className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                  />
                </section>
                <section className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </section>
                <section className="d-flex justify-content-between">
                  <section className="d-flex align-items-center">
                    <a
                      onClick={navigateToHome}
                      className="btn btn-secondary"
                    >
                      Back
                    </a>
                  </section>
                  <section className="d-flex align-items-center">
                    <a
                      onClick={navigateToSuccess}
                      className="btn btn-primary"
                    >
                      Create Customer
                    </a>
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

export default CreateCustomer;

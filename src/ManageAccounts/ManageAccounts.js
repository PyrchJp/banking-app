import React from "react";
import "./ManageAccounts.css";
import { useNavigate } from 'react-router-dom';

function ManageAccounts() {

  let navigate = useNavigate();

  const navigateHome = () => {
    navigate('bank-manager-home');
  }

  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <section className="container mt-5">
      <section className="row">
        <section className="col-md-7 offset-md-2">
          <section className="card">
            <section className="card-header text-white">
              <h2 className="text-center mb-4">Customers</h2>
            </section>
            <section className="card-body">
              <br />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Account Number</th>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  //need to insert our backend data here
                  <tr>
                    <td>
                      <label>
                        <input type="radio" id="regular" name="optradio" />
                      </label>
                    </td>
                    <td>101</td>
                    <td>1</td>
                    <td>1200</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="card-footer text-left">
              <section className="d-flex justify-content-between">
                <section className="d-flex align-items-center">
                  <a onClick={navigateBack}
                    className="btn btn-secondary mt-3">
                    Back
                  </a>
                </section>
                <section className="d-flex align-items-center">
                  <a onClick={navigateHome}
                    className="btn btn-success mt-3">
                    Edit
                  </a>
                  &nbsp;
                  <a
                    onClick={navigateHome}
                    className="btn btn-danger mt-3"
                  >
                    Delete
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ManageAccounts;

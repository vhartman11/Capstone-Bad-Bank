import React from 'react'; 
import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import 'bootstrap';


export function NavBar() {
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>

  );
};
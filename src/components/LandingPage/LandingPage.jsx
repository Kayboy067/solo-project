import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import EstimateForm from '../EstimateForm/EstimateForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
        <p>
          Send money online for what matters most.
          We make international money transfers easier than ever. Choose how and when you send, with great exchange rates and low fees.
        </p>
        </div>
        <div className="grid-col grid-col_4">
        <EstimateForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login/Register
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

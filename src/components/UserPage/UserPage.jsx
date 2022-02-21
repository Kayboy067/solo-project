import React from 'react';
import EstimateForm from '../EstimateForm/EstimateForm';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
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
          <Link to="/preview"><button className='btn'>NEXT</button></Link>
        </center>
        </div>
        </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

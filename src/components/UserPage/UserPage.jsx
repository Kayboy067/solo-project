import React from 'react';
import EstimatePage from '../EstimatePage/EstimatePage';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <div className="grid">
      <div className="grid-col grid-col_8">
      <p>
          Send money online for what matters most.
          We make international money transfers easier than ever. Choose how and when you send, with great exchange rates and low fees.
      </p>
      </div>
      <div className="grid-col grid-col_4">
      <EstimatePage />

        {/* <center>
          <Link to="/PreviewPage"><button className='btn'>NEXT</button></Link>
          </center> */}
        </div>
        </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

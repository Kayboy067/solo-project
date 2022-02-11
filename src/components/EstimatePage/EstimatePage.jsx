import React from 'react';

import { Link } from 'react-router-dom';
import EstimateForm from '../EstimateForm/EstimateForm'



function EstimatePage() {
  


    return (
      <div>
        <EstimateForm />
  
        <center>
            <Link to="/preview"><button className='btn'>NEXT</button></Link>
        </center>       
      </div>
    );
  }
  
  export default EstimatePage;
  
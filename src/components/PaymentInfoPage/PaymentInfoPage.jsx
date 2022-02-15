import React from 'react';
import {useSelector} from 'react-redux';
import PaymentInfoForm from '../PaymentInfoForm/PaymentInfoForm';
import PaymentDetails from './PaymentDetails'
import { Link } from "react-router-dom";


function PaymentInfoPage() {



    
    return(
        <>
        <h1>Payment Information</h1>

        <PaymentInfoForm />
        <PaymentDetails />


        <center>
        <Link to="/info"><button className='btn'>continue</button></Link>
        </center>
        </>
    )
}

export default PaymentInfoPage;
import React from 'react';
import {useSelector} from 'react-redux';
import PreviewForm from '../PreviewForm/PreviewForm';
import { Link } from "react-router-dom";

function PreviewPage (){
    const user = useSelector((store) => store.user);
    return (
        <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Send money online for what matters most. </p>
        <p>We make international money transfers easier than ever. Choose how and when you send, with great exchange rates and low fees.</p>

        <PreviewForm />
        <center>
        <Link to="/receiver"><button className='btn'>continue</button></Link>
        </center>

        </div>
    )
}

export default PreviewPage
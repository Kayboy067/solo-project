import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import './Confirmation.css'



function Confirmation() {

    let history = useHistory();
    const dispatch = useDispatch()



    function returnHome() {
        dispatch({ type: 'CLEAR_RECEIVER_INFO' })
        dispatch({ type: 'CLEAR_USER_INFO' })
        dispatch({ type: 'CLEAR_TRANSACTION' })
        history.push('/')
    }

    return (

        <div>

            <Container className='white-container' maxWidth="xl">
                <h1 className='success'>Congrats!</h1>
                <img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" alt="success" width="200px" height="200px"/>
                <h1 className='complete'>Your Money Transfer Is <br /> Complete </h1>
                <h1>Reference Number: 0234599945443 </h1>

                <Button className='home-btn' onClick={() => returnHome()} 
                variant="contained">Return Home</Button>

            </Container>
        </div>
    )
}

export default Confirmation;
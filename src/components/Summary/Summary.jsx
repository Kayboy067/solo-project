import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import swal from 'sweetalert';
import axios from 'axios';
import './summary.css'


function Summary(props) {

    const dispatch = useDispatch()
    let history = useHistory();

    const receiver = useSelector(store=>store.receiverReducer[store.receiverReducer.length-1])
    const transaction = useSelector(store => store.transactionReducer)

    const transactionConfirmation = () => {

        axios.post('api/user/transaction', transaction).then(response => {
            
            history.push("/confirmation")
        }
        ).catch(err => console.log(err))

    }

    const handleDelete = () => {

        swal({
            title: "Are you sure?",
            text: "You will lose all progress",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch({ type: 'CLEAR_CURRENCY' })
                    dispatch({ type: 'CLEAR_RECEIVER_INFO' })
                    dispatch({ type: 'CLEAR_USER_INFO' })
                    dispatch({ type: 'CLEAR_TRANSACTION' })
                    swal("Deleted Successfully!", {
                        icon: "success",
                    });
                    history.push('/')
                } else {
                    swal("You can continue with the payment");
                }
            });
    }

    return (

        <div >

            <Container className='white-container-summary' maxWidth="xl">
                <center><p className='summary-text'>Summary</p></center>
                <h6 className='almost-done'>Please review the information below and complete your transfer.</h6>
                <h5 className='rates-fees'>Rate & Fees <span className='edit-btn'>
                    <button onClick={() => history.push('/')}>Edit</button></span> </h5>
                <p>{`${transaction.amount} USD = ${transaction.convertedAmount} NGN Exchange Rate: ${transaction.rate} USD `}</p>

                <Grid className='summary-boxes' container spacing={2}>
                    <Grid item xs={3} md={3} >
                        <h4 className='small-box-header'>Receiver Country</h4>
                        <p>{transaction.country}</p>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <h4 className='small-box-header'>Amount</h4>
                        <p >{`${transaction.convertedAmount} NGN`}</p>

                    </Grid>

                </Grid>
                <Grid className='summary-small-boxes' container spacing={2}>
                    <Grid item xs={3} md={3} >
                        <h4 className='small-box-header'>Fee</h4>
                        <p>{`${transaction.sendFee} USD`}</p>
                    </Grid>

                </Grid>

                <h5 className='rates-fees'>Receiver <span className='edit-btn'>
                    <button onClick={() => history.push('/receivers')}>Edit</button></span> </h5>
                <p className='conversion-rate'>Legal Name</p>
                <p>{`${receiver.first_name} ${receiver.last_name}`}</p>

                <h5 className='rates-fees'>COST SUMMARY <span className='edit-btn'>
                    <button onClick={() => history.push('/user')}>Edit</button></span> </h5>
                <Grid className='summary-small-boxes' container spacing={2}>
                    <Grid item xs={6} md={3} >
                        <h4 className='small-box-header'>Total Cost:</h4>
                        <p>{`${transaction.amount+transaction.sendFee} USD`}</p><br />
                        <h4 className='small-box-header'>Total Receive Amount:</h4>
                        <p>{`${transaction.convertedAmount} NGN`}</p>
                    </Grid>

                    <Grid item xs={6} md={4} >
                        <Button className='confirm-btn' variant="contained" onClick={handleDelete} >
                            Cancel
                        </Button>

                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Button className='confirm-btn' onClick={() => transactionConfirmation()} variant="contained">
                            Submit
                        </Button>

                    </Grid>

                </Grid>

            </Container>
        </div>

    )
}

export default Summary;

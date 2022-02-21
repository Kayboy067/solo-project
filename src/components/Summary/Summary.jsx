import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import swal from 'sweetalert';
import axios from 'axios';
import './summary.css'


function Summary() {

    const dispatch = useDispatch()
    let history = useHistory();

    const receiver = useSelector(store=>store.receiverReducer)
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
                    dispatch({ type: 'CLEAR_RECEIVER_INFO' })
                    dispatch({ type: 'CLEAR_USER_INFO' })
                    dispatch({ type: 'CLEAR_TRANSACTION' })
                    swal("Deleted Successfully!", {
                        icon: "confirmed",
                    });
                    history.push('/')
                } else {
                    swal("You can continue with the payment");
                }
            });
    }

    return (

        <Container style={{marginBottom:20}}>

            
                <center><h1>Summary</h1></center>
                <h5 className='transfer'>Review Transaction before completing transfer.</h5>
                <h5 className='rate-fee'>Rate & Fee </h5>
                <p className='values'>{`${transaction.amount} USD = ${transaction.convertedAmount} NGN Exchange Rate: ${transaction.rate} USD  Fee: ${transaction.sendFee} USD`}</p>
                

                <h5 className='rate-fee'>Receiver Name & Address <span className='edit-btn' >
                    <EditSharpIcon onClick={() => history.push('/receiver-edit')}>Edit</EditSharpIcon></span></h5>
                <p className='name'> Name: {`${receiver.first_name} ${receiver.last_name}`} Address: {`${receiver.address}`} Phone: {`${receiver.phone_no}`}</p>
                <p className='country-name'>Receiver Country: {transaction.country}</p>
                
                
                <p className='rate-fee'>{`Total Cost: ${transaction.amount+transaction.sendFee} USD`}</p>
                <p className='rate-fee'>{`Amount Received: ${transaction.convertedAmount} NGN`}</p>
                <Box
                    justify="space-between"
                    textAlign='center'>
                <Button className='confirm-btn' variant="contained" onClick={handleDelete} >
                    Cancel
                </Button>
                <Button className='confirm-btn' onClick={() => transactionConfirmation()} variant="contained">
                    Submit
                </Button>
                </Box>
    
        </Container>

    )
}

export default Summary;

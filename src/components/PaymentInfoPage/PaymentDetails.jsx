import React, { useEffect, useState } from 'react';
import { useHistory, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon, TextField, Typography } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './PaymentInfoPage.css'


function PaymentDetails() {

    const dispatch = useDispatch();
    const payment = useSelector(store => store.paymentReducer)
    console.log('this is the payment store', payment);

    useEffect(() => {
        dispatch({type: 'FETCH_PAYMENT'})
      }, [])
    

    return(
        <>
          <div className="container">
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, border: 2, borderColor: 'black' }}  aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Card Type</TableCell>
                <TableCell align="center">Card Name</TableCell>
                <TableCell align="center">Card Number</TableCell>
                <TableCell align="center">CVV</TableCell>
                <TableCell align="center">Billing Address</TableCell>
                <TableCell align="center">Expiration</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {payment.map((paymentReducer, index) => (
                <TableRow
                key={index}
                sx={ { border: 2, minWidth: 100 } }
                >
                <TableCell align="center">{paymentReducer.card_type}</TableCell>
                <TableCell align="center">{paymentReducer.card_name}</TableCell>
                <TableCell align="center">{paymentReducer.card_number}</TableCell>
                <TableCell align="center">{paymentReducer.cvv}</TableCell>
                <TableCell align="center">{paymentReducer.address}</TableCell>
                <TableCell align="center">{paymentReducer.expiration}</TableCell>
                {/* <TableCell align="center">
                    <Edit
                       
                    />
                </TableCell> */}
                {/* <TableCell align="center">
                    <Delete 
                       
                    />
                </TableCell> */}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
        </>
    )
}

export default PaymentDetails
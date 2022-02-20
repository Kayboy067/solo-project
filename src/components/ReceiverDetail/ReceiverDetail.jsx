import React, { useEffect, useState } from 'react';
import { useHistory, Link }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ReceiverDetail() {

    const dispatch = useDispatch();
    const receiver = useSelector(store => store.receiverReducer)
    console.log('this is the payment store', receiver);

    useEffect(() => {
        dispatch({type: 'FETCH_RECEIVER'})
      }, [])
    

    return(
        <>
          <div className="container">
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, border: 2, borderColor: 'black' }}  aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {receiver.map((receiverReducer, index) => (
                <TableRow
                key={index}
                sx={ { border: 2, minWidth: 100 } }
                >
                <TableCell align="center">{receiverReducer.first_name}</TableCell>
                <TableCell align="center">{receiverReducer.last_name}</TableCell>
                <TableCell align="center">{receiverReducer.address}</TableCell>
                <TableCell align="center">{receiverReducer.phone_no}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
        </>
    )
}

export default ReceiverDetail
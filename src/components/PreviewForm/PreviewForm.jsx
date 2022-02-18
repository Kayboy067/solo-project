import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";



function PreviewForm () {
 
const transaction = useSelector(store => store.transactionReducer)
console.log('this is the inputOutput store', transaction);
const dispatch = useDispatch();


const [payment, setPayment] = useState('credit card');
const [receiving, setReceiving] = useState('cash pickup');



const handleChange = (event) => {
    setPayment(event.target.value)
}
console.log('this is the payment', payment);

const submitChange = (event) =>{
    setReceiving(event.target.value)
};

const submitPayment = () => {

    dispatch  ({
        type: 'PAYMENT_RECEIVING_METHOD',
        payload: {
            payment: payment,
            receiving: receiving
        }
    })
}



console.log('this is the receiving', receiving);



   
    return(
        <div className="preview" className="formPanel">
            <h2> Payment Preview</h2>

            <p> To send: USD{transaction.amount}</p>
            <p> To receive: NGN{transaction.convertedAmount}</p>
            <p> Sending fee: USD{transaction.sendFee}</p>
            
            {/* <h4>Sending Fee: ${inputOutput.sendingFee}</h4> */}

            <div>
                <h4>Payment Method:</h4>
                <input onChange={handleChange} type="radio" value="credit card" name="payment" checked={payment === 'credit card'}/> CreditCard
                <input onChange={handleChange} type="radio" value="debit card" name="payment" checked={payment === 'debit card'}/> DebitCard
            </div>

            <div>
                <h4>Pickup Method:</h4>
                <input onChange={submitChange} type="radio" value="cash pickup" name="receiving" checked={receiving === 'cash pickup'}/> Cash Pickup
                <input onChange={submitChange} type="radio" value="bank remittance" name="receiving" checked={receiving === 'bank remittance'}/> Bank Remittance
            </div>

            <p>Money Available by: {transaction.date} </p>
          
        <center>
            <Link to="/receiver"><button className='btn' onClick={submitPayment} >continue</button></Link>
        </center>
        </div>
    )
}

export default PreviewForm
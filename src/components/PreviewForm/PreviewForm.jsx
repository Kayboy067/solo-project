import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



function PreviewForm () {
 
const inputOutput = useSelector(store => store.inputOutputReducer)
console.log('this is the inputOutput store', inputOutput);


const [payment, setPayment] = useState('credit card');
const [receiving, setReceiving] = useState('cash pickup');



const handleChange = (event) => {
    setPayment(event.target.value)
}
console.log('this is the payment', payment);

const submitChange = (event) =>{
    setReceiving(event.target.value)
};
console.log('this is the receiving', receiving);



   
    return(
        <div className="preview" className="formPanel">
            <h2> Payment Preview</h2>

            <h4> To send: ${inputOutput.input}</h4>
            <h4> To receive: N{inputOutput.output}</h4>
            <h4> Sending fee: ${inputOutput.sendFee}</h4>
            
            {/* <h4>Sending Fee: ${inputOutput.sendingFee}</h4> */}

            <div>
                <input onChange={handleChange} type="radio" value="credit card" name="payment" checked={payment === 'credit card'}/> CreditCard
                <input onChange={handleChange} type="radio" value="debit card" name="payment" checked={payment === 'debit card'}/> DebitCard
            </div>

            <div>
                <input onChange={submitChange} type="radio" value="cash pickup" name="receiving" checked={receiving === 'cash pickup'}/> Cash Pickup
                <input onChange={submitChange} type="radio" value="bank remittance" name="receiving" checked={receiving === 'bank remittance'}/> Bank Remittance
            </div>

            {/* <div onChange={setRadio.bind(this)}>
                <h3>Pickup Method:</h3>
                <input  type="radio" 
                        value="Cash Pickup" 
                        name="receiving" 
                        defaultChecked={radio ==="Cash"} 
                        /> Cash Pickup
                <input  type="radio" 
                        value="Bank Remittance" 
                        name="receiving" 
                        defaultChecked={radio ==="Bank"} 
                        /> Bank Remittance
            </div> */}
        </div>
    )
}

export default PreviewForm
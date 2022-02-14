import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

function PaymentInfoForm() {
    const dispatch = useDispatch();

    const [paymentInfo, setPaymentInfo] = useState({
        cardType: '',
        cardName: '',
        cardNumber: '',
        cvv: '',
        billingAddress: '',
        expiration: '',
    });

    const createPaymentInfo = (event) => {
        event.preventDefault();

        dispatch({
            type: 'CREATE_PAYMENT_INFO',
            payload: paymentInfo
        })
    }

    const handleChange = (evt, property) =>{
        setPaymentInfo ({...paymentInfo, [property]: evt.target.value})
    }
    
    return(
        <>
         <form onSubmit={createPaymentInfo} className="formPanel">
        <div>
        <label htmlFor='cardType'>
            Card Type:
        <input
            type="text"
            name="cardType"
            value={paymentInfo.cardType}
            required
            placeholder="Card Type"
            onChange={(evt) => handleChange(evt, "cardType")}
        />
        {/* <select defaultValue="cardType">
            <option value="cardType">Card Type</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
        </select> */}
        </label>
        </div>   
        <div>
        <label htmlFor='cardName'>
            Card Name:
        <input
            type="text"
            name="cardName"
            value={paymentInfo.cardName}
            required
            placeholder="Card Name"
            onChange={(evt) => handleChange(evt, "cardName")}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='cardNumber'>
            Card Number:
        <input
            type="password"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            required
            placeholder="Card Number"
            onChange={(evt) => handleChange(evt, "cardNumber")}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='cvv'>
            CVV:
        <input
            type="number"
            name="cvv"
            value={paymentInfo.cvv}
            required
            placeholder="cvv"
            onChange={(evt) => handleChange(evt, "cvv")}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='billingAddress'>
            Billing Address:
        <input
            type="text"
            name="billingAddress"
            value={paymentInfo.billingAddress}
            required
            placeholder="billingAddress"
            onChange={(evt) => handleChange(evt, "billingAddress")}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='expiration'>
            Expiration:
        <input
            type="text"
            name="expiration"
            value={paymentInfo.expiration}
            required
            placeholder="expiration"
            onChange={(evt) => handleChange(evt, "expiration")}
        />
        </label>
        </div> 
        <button>Update</button>
        </form>
        
        </>
    )
    
}
export default PaymentInfoForm;
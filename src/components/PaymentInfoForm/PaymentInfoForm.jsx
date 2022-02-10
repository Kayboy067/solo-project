import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

function PaymentInfoForm() {
    const dispatch = useDispatch();

    const [cardType, setCardType] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [expireDate, setExpireDate] = useState('');

    const createPaymentInfo = (event) => {
        event.preventDefault();

        dispatch({
            type: 'CREATE_PAYMENT_INFO',
            payload: {
                cardType: cardType,
                cardName: cardName,
                cardNumber: cardNumber,
                cvv: cvv,
                billingAddress: billingAddress,
                expireDate: expireDate,
                userId: user.id
            }
        })
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
            value={cardType}
            required
            placeholder="Card Type"
            onChange={(event) => setCardType(event.target.value)}
        />
        </label>
        </div>   
        <div>
        <label htmlFor='cardName'>
            Card Name:
        <input
            type="text"
            name="cardName"
            value={cardName}
            required
            placeholder="Card Name"
            onChange={(event) => setCardName(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='cardNumber'>
            Card Number:
        <input
            type="password"
            name="cardNumber"
            value={cardNumber}
            required
            placeholder="Card Number"
            onChange={(event) => setCardNumber(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='cvv'>
            CVV:
        <input
            type="number"
            name="cvv"
            value={cvv}
            required
            placeholder="cvv"
            onChange={(event) => setCvv(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='billingAddress'>
            Billing Address:
        <input
            type="text"
            name="billingAddress"
            value={billingAddress}
            required
            placeholder="billingAddress"
            onChange={(event) => setBillingAddress(event.target.value)}
        />
        </label>
        </div> 
        <div>
        <label htmlFor='expireDate'>
            Expiration Date:
        <input
            type="date"
            name="expireDate"
            value={expireDate}
            required
            placeholder="expireDate"
            onChange={(event) => setExpireDate(event.target.value)}
        />
        </label>
        </div> 
        <button>Update</button>
        </form>
        
        </>
    )
    
}
export default PaymentInfoForm;
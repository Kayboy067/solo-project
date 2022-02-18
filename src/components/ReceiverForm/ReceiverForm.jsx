import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';

function ReceiverForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    // this is the logged in user
    const user=useSelector(store => store.user)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const createReceiverInfo = (event) => {
        event.preventDefault();

        dispatch({
            type: 'CREATE_RECEIVER_INFO',
            payload: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber,
            userId: user.id
            }
        })
        history.push('/disclaimer')
        
    }

    console.log('firstName', firstName);
    return(
        <form onSubmit={createReceiverInfo}>
        <span>
        
        <label htmlFor='firstName'>
            First Name:
        <input
            type="text"
            name="firstName"
            value={firstName}
            required
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
        />
        </label>
        </span>
        <span>
        
        <label htmlFor='lastName'>
            Last Name:
        <input
            type="text"
            name="lastName"
            value={lastName}
            required
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
        />
        </label>
        </span>
        <span>
        <label htmlFor='address'>
            Address:
        <input
            type="text"
            name="address"
            value={address}
            required
            placeholder="Address"
            onChange={(event) => setAddress(event.target.value)}
        />
        </label>
        </span>
        <span>
        <label htmlFor='phoneNumber'>
            Phone Number:
        <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            required
            placeholder="123-456-789"
            onChange={(event) => setPhoneNumber(event.target.value)}
        />
        </label>
        </span>
        <span><button>Create</button></span>

        </form>

    )

}

export default ReceiverForm;
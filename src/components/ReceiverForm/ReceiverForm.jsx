import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

function ReceiverForm() {
    const dispatch = useDispatch();
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
    }

    console.log('firstName', firstName);
    return(
        <form onSubmit={createReceiverInfo}>
        <div>
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
        </div>
        {/* <div>
        <label htmlFor='middleName'>
            Middle Name (Optional):
        <input
            type="text"
            name="middleName"
            value={middleName}
            required
            placeholder="Middle Name"
            onChange={(event) => setMiddleName(event.target.value)}
        />
        </label>
        </div>  */}
        <div>
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
        </div> 
        <div>
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
        </div> 
        <div>
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
        <input type="submit" name="create" value="create" />
        </div> 
        </form>

    )

}

export default ReceiverForm;
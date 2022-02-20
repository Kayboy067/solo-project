import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function ReceiverEdit() {

const history = useHistory();

const receivers = useSelector(store=>store.receiverReducer)
const dispatch = useDispatch()

console.log('this is the receiver', receivers);

useEffect(() =>{
    dispatch({type: 'FETCH_RECEIVER'})

},[])

const saveEdit = (event) => {
    event.preventDefault();
    console.log('in saveEdit');

    dispatch({
    type: 'SAVE_RECEIVER_CHANGES',
    payload: receivers
    })

    history.push('/summary')
}
    
    return(
        <>
        <form onSubmit={saveEdit}>
        <span>
        
        <label htmlFor='firstName'>
            First Name:
        <input
            type="text"
            name="firstName"
            value={receivers.first_name}
            required
            placeholder="First Name"
            onChange={(event) => dispatch ({
                type: 'UPDATE_ACTIVE_RECEIVER',
                payload: {first_name: event.target.value}
            })}
        />
        </label>
        </span>
        <span>
        
        <label htmlFor='lastName'>
            Last Name:
        <input
            type="text"
            name="lastName"
            value={receivers.last_name}
            required
            placeholder="Last Name"
            onChange={(event) => dispatch ({
                type: 'UPDATE_ACTIVE_RECEIVER',
                payload: {last_name: event.target.value}
            })}
        />
        </label>
        </span>
        <span>
        <label htmlFor='address'>
            Address:
        <input
            type="text"
            name="address"
            value={receivers.address}
            required
            placeholder="Address"
            onChange={(event) => dispatch ({
                type: 'UPDATE_ACTIVE_RECEIVER',
                payload: {address: event.target.value}
            })}
        />
        </label>
        </span>
        <span>
        <label htmlFor='phoneNumber'>
            Phone Number:
        <input
            type="tel"
            name="phoneNumber"
            value={receivers.phone_no}
            required
            placeholder="123-456-789"
            onChange={(event) => dispatch ({
                type: 'UPDATE_ACTIVE_RECEIVER',
                payload: {phone_no: event.target.value}
            })}
        />
        </label>
        </span>
        <span><button>submit</button></span>

        </form>
       
        </>
    )
}

export default ReceiverEdit;
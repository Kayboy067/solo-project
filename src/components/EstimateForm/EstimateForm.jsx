import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import moment from 'moment'
//import { useHistory } from 'react-router-dom';

function EstimateForm(){
// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState('ngn');
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);
const [country, setCountry] = useState('Nigeria');
const [date, setDate] = useState('')
const dispatch = useDispatch();


// Calling the api whenever the dependency changes
useEffect(() => {
axios({
    method: 'GET',
    url: '/api/currency'
})
.then((res) => {
setInfo(res.data[from]);
console.log('nnnnnnnnnninfo', info);
})
}, [from]);

// Calling the convert function whenever
// a user switches the currency
// useEffect(() => {
// setOptions(Object.keys(info));
// convert();
// }, [info])

// setting the receiver country
// let country = Nigeria

// Function to convert the currency
function convert() {
let rate = info[to];
setOutput(Number(input) * rate);
console.log('this is output', output);






    dispatch({
        type: 'SAVE_TRANSACTION_DATA',
        payload: {
            amount: Number(input),
            convertedAmount: Number((input * rate).toFixed(2)),
            sendFee: sendFee,
            rate: Number(rate.toFixed(2)),
            country: country,
            date: date
        }
    })
}

    
        
    
// function to calculate the sending fee
// sending fee is pegged to $5
const sendingFee = () => {
if (input * 0.01 > 5) {
return 5
} else {
return input * 0.01
}
}

const sendFee = sendingFee()
// Function to switch between two currency
function flip() {
let temp = from;
setFrom(to);
setTo(temp);
}


console.log('this is the input', Number(input));
console.log('this is the output', output);
//console.log('ready to send amount',amount );
//console.log('ready to send conA', convertedAmount );
//console.log('ready to send sendFee',sendFee );
//console.log('ready to send rate', rate );


return (

<div className="formPanel">
<h2 className="estimate">Exchange Rate</h2>
<h3 className="amount">Amount</h3>
<input type="text"
placeholder="Enter the amount"
onChange={(e) => setInput(e.target.value)} />
<h3 className="amount">From</h3>
<Dropdown options={options}
onChange={(e) => { setFrom(e.target.value) }}
value={from} placeholder="From" />
<div className="switch">
<HiSwitchHorizontal size="20px"
onClick={() => { flip()}}/>
</div>

<h3 className="amount">To</h3>
<Dropdown options={options}
onChange={(e) => {setTo(e.target.value)}}
value={to} placeholder="To" />
<div className="result">
<label htmlFor="date">
    Date:
</label>
<input type="date" name="date" required value={date}
    onChange={(evt) => setDate(evt.target.value)} />
<button onClick={()=>{convert()}}>Continue</button>
<h3 className="amount">Converted Amount:</h3>
<p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
</div>
<h4>Sending Fee: ${sendingFee()}</h4>
<p>Money Available by: {date} </p>


</div>



);
}

export default EstimateForm;
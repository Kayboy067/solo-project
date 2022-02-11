import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
//import { useHistory } from 'react-router-dom';

function EstimateForm(){


// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState('ngn');
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);
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
useEffect(() => {
setOptions(Object.keys(info));
convert();
}, [info])

console.log('kdkdkdkdkdkdkdkdkdkdkdkdkkdkd', output);

// Function to convert the currency
function convert() {
let rate = info[to];
setOutput(input * rate);
console.log('this is output', output);

// dispatch({
//     type: 'SET_INPUT_OUTPUT', 
//     payload: {
//         info: info,
//         input: input, 
//         from: from,
//         to: to,
//         options: options,
//         output: output}
//     })
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
// Function to switch between two currency
function flip() {
let temp = from;
setFrom(to);
setTo(temp);
}

return (

<div className="Estimate" className="formPanel">
<h1>Exchange Rate</h1>
<div className="container">
<div className="left">
<h3>Amount</h3>
<input type="text"
placeholder="Enter the amount"
onChange={(e) => setInput(e.target.value)} />
</div>
<div className="middle">
<h3>From</h3>
<Dropdown options={options}
onChange={(e) => { setFrom(e.target.value) }}
value={from} placeholder="From" />
</div>
<div className="switch">
<HiSwitchHorizontal size="20px"
onClick={() => { flip()}}/>
</div>
<div className="right">
<h3>To</h3>
<Dropdown options={options}
onChange={(e) => {setTo(e.target.value)}}
value={to} placeholder="To" />
</div>
</div>
<div className="result">
<button onClick={()=>{convert()}}>Continue</button>
<h2>Converted Amount:</h2>
<p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
</div>
<h4>Sending Fee: ${sendingFee()}</h4>


</div>



);
}

export default EstimateForm;
import { Link } from "react-router-dom";
import ReceiverForm from '../ReceiverForm/ReceiverForm';
import ReceiverDetail from './ReceiverDetail'
import { useSelector, useDispatch } from 'react-redux';


function Receiver() {
    const dispatch = useDispatch();
   

 
    return(
    <>
        <h1>Enter Receiver Information</h1>
        <ReceiverForm />
       <ReceiverDetail />
       <center>
        <Link to="/disclaimer"><button className='btn' >continue</button></Link>
        </center>
    </>
    )
}

export default Receiver
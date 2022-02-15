import { Link } from "react-router-dom";
import ReceiverForm from '../ReceiverForm/ReceiverForm';
import ReceiverDetail from './ReceiverDetail'


function Receiver() {

    return(
    <>
        <h1>Enter Receiver Information</h1>
        <ReceiverForm />
       <ReceiverDetail />
       <center>
        <Link to="/payment"><button className='btn'>continue</button></Link>
        </center>
    </>
    )
}

export default Receiver
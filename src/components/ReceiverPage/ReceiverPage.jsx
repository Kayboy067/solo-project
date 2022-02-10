import { Link } from "react-router-dom";
import ReceiverForm from '../ReceiverForm/ReceiverForm'


function Receiver() {

    return(
    <>
        <h1>Enter Receiver Information</h1>
        <ReceiverForm />
        <Link to="/payment"><button className='btn'>continue</button></Link>
    </>
    )
}

export default Receiver
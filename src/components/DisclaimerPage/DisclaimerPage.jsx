import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import './DisclaimerPage.css';
import { useHistory} from 'react-router';

function DisclaimerPage(props) {

    let history = useHistory();

    function reviewAndSend() {
        history.push('/summary')
    }

    return (

        <div >
            
            <Container className='white-container-summary' maxWidth="xl">

                <p className='fraud-header'>Terms and Conditions</p>
                <h6 className='almost-done'>Consumer Fraud Alert About Your Money Transfer</h6>
                <p className='fraud-text'>PROTECT YOURSELF. BE CAREFUL WHEN A STRANGER ASKS YOU TO SEND MONEY, ESPECIALLY FROM UNSOLICITED E-MAILS, FOR INTERNET AUCTIONS, NEWSPAPER OR TELEPHONE OFFERS.</p>
                <h6 className='almost-done-header'>Notify us immediately if you believe your Worldwide Transfer username and password have been lost or stolen or if someone may use them without your permission.</h6>
                <p className='fraud-text'>We take security very seriously at Worldwide Transfer, and we work hard, using state-of-the-art security measures, to make sure that your information remains secure. <br/> 
                    The Worldwide Transfer Service is a safe and convenient way to send money to friends and family and to other people that you trust. <br/> 
                    However, we do advise you to consider very carefully before sending money to anyone that you do not know well. <br/>
                    In particular, you should be very cautious of deals or offers that seem too good to be true - they may be scams. <br/>
                    If you are aware of anyone or any entity that is using the Service inappropriately, please email us using our contact form. <br/>
                    Similarly, if you receive any emails, purporting to be from Worldwide Transfer, which you suspect may be "phishing" (fake) emails, please forward them to us using our contact form.<br/>
                </p>
                <h6 className='almost-done-header'>The security of personal information is of utmost importance to us. Anytime you enter sensitive information via our Site, we encrypt the transmission using secure socket layer (SSL) technology.</h6>
                <p className='fraud-text'>Never give your transaction reference number to anyone other than the person you intend to receive the money. Fraudulent transactions may result in the loss of your money with no recourse.</p>

                <div className='fraud-btn-container'>
                    <Button className='fraud-btn' onClick={() => reviewAndSend()} variant="contained">Review & Send</Button>
                </div>

            </Container>
        </div>

    )
}

export default DisclaimerPage;
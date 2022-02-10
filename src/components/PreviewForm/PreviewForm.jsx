import React, {useState} from 'react';

function PreviewForm () {
    const [radio, setRadio] = useState('');

    return(
        <div className="preview" className="formPanel">
            <h2> Payment Preview</h2>


            <div onChange={setRadio.bind(this)}>
                <h3>Payment Method:</h3>
                <input  type="radio" 
                        value="Credit Card" 
                        name="payment" 
                        defaultChecked={radio ==="Credit"} 
                        /> Credit Card
                <input  type="radio" 
                        value="Debit Card" 
                        name="payment" 
                        defaultChecked={radio ==="Debit"} 
                        /> Debit Card
            </div>

            <div onChange={setRadio.bind(this)}>
                <h3>Pickup Method:</h3>
                <input  type="radio" 
                        value="Cash Pickup" 
                        name="receiving" 
                        defaultChecked={radio ==="Cash"} 
                        /> Cash Pickup
                <input  type="radio" 
                        value="Bank Remittance" 
                        name="receiving" 
                        defaultChecked={radio ==="Bank"} 
                        /> Bank Remittance
            </div>
        </div>
    )
}

export default PreviewForm
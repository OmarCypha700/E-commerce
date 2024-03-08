import React, {useState} from 'react'
import { PaystackButton } from 'react-paystack'
import "./payment.css"

const Payment = ({cart, handleEmptyCart }) => {

const [email, setEmail] = useState("")
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [phonenumber, setPhonenumber] = useState("")

const publicKey = 'pk_test_8712871906c162dce0bb24827de0ffd3d264ee93'
const currency = 'GHS'


const componentProps = {
    email,
    amount: cart.subtotal.formatted * 100,
    currency,
    metadata:{
        firstname,
        lastname,
        phonenumber
    },
    publicKey,
    text:'Pay Now',
    onSuccess: () => handleEmptyCart()
    // onClose: () => handleEmptyCart()
}


    return (
        <div className="container">

            <div className="payment">
                <h1>Payment Checkout</h1>
            </div>

            <form id="paymentForm">

                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" onChange={(e)=>setFirstname(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email-address" onChange={(e)=> setEmail(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="numeric" id="amount" value={cart.subtotal.formatted} required />
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" onChange={(e)=> setPhonenumber(e.target.value)} required />
                </div>
                
            </form>
            <PaystackButton {...componentProps} />
            
        </div>
    )
}

export default Payment
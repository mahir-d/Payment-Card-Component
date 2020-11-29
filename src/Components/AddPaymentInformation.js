import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import './payment.css'
import 'react-credit-cards/es/styles-compiled.css';
import { TextField } from '@material-ui/core';
export default class PaymentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardError: false,
            cardNameError: false,
            cardExpiryError: false,
            cardCVCError: false
        }

        this.validateCardNumber = this.validateCardNumber.bind(this)
        this.validateCardName = this.validateCardName.bind(this)
        this.validateCardExpiry = this.validateCardExpiry.bind(this)
        this.validateCardCVC = this.validateCardCVC.bind(this)
        this.validate = this.validate.bind(this)
    }


    //CArd CVC number Validation
    validateCardCVC = (e) => {
        if (e.target.value.length != 3 || e.target.value < 0 || isNaN(e.target.value)) {
            this.setState({ cardCVCError: true })
        }
        else {
            this.setState({ cardCVCError: false })

        }
        this.props.handleInputChange(e)
    }

    //Card Expiry month Validation
    validateCardExpiry = (e) => {
        if (e.target.value.length != 4 || e.target.value < 0 || isNaN(e.target.value)) {
            this.setState({ cardExpiryError: true })
        }
        else {
            this.setState({ cardExpiryError: false })

        }
        this.props.handleInputChange(e)
    }

    //Card Number Validation
    validateCardNumber = (e) => {
        if (e.target.value.length != 16 || e.target.value < 0 || isNaN(e.target.value)) {
            this.setState({ cardError: true })
        }
        else {
            this.setState({ cardError: false })

        }
        this.props.handleInputChange(e)
    }

    //Card name regex function 
    validate(name) {
        var regex = /^[a-zA-Z ]{2,30}$/;
        return regex.test(name);
    }

    //Card Name Validation
    validateCardName = (e) => {
        if (e.target.value.length < 2 || e.target.value.length > 26 || typeof (e.target.value) != 'string' || !this.validate(e.target.value)) {
            this.setState({ cardNameError: true })
        }
        else {
            this.setState({ cardNameError: false })

        }
        this.props.handleInputChange(e)
    }

    render() {
        const { cardDetails, handleInputChange, handleInputFocus } = this.props
        return (
            <div className='App'>
                <Cards
                    cvc={cardDetails.cvc}
                    expiry={cardDetails.expiry}
                    focused={cardDetails.focus}
                    name={cardDetails.name}
                    number={cardDetails.number}
                />
                <form>

                    <TextField
                        error={this.state.cardError}
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        value={cardDetails.number}
                        onChange={this.validateCardNumber}
                        onFocus={handleInputFocus}
                        variant="outlined"
                        helperText="Card Number should be 16 digit containing valid numbers "
                    />
                    <TextField
                        error={this.state.cardNameError}
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={cardDetails.name}
                        onChange={this.validateCardName}
                        onFocus={handleInputFocus}
                        helperText="Card Name should only contain valid letters"
                    />
                    <TextField
                        error={this.state.cardExpiryError}
                        type='text'
                        name='expiry'
                        placeholder='MMYY Expiry'
                        value={cardDetails.expiry}
                        onChange={this.validateCardExpiry}
                        onFocus={handleInputFocus}
                    />
                    <TextField
                        error={this.state.cardCVCError}
                        type='tel'
                        name='cvc'
                        placeholder='CVC'
                        value={cardDetails.cvc}
                        onChange={this.validateCardCVC}
                        onFocus={handleInputFocus}
                    />
                </form>
            </div>
        );
    }
}
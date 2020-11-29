import { Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class ConfirmPayment extends Component {
    render() {
        const { cardDetails } = this.props
        return (
            <div>
                <Typography>Confirm Payment Details</Typography>
                <Typography>{cardDetails.cvc}</Typography>
                <Typography>{cardDetails.expiry}</Typography>
                <Typography>{cardDetails.focus}</Typography>
                <Typography>{cardDetails.name}</Typography>
                <Typography>{cardDetails.number}</Typography>
            </div>
        )
    }
}

export default ConfirmPayment

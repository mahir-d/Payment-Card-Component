import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import HorizontalLabelPositionBelowStepper from './Stepper'
import './CardC.css'
import AmountValueDetail from './AmountValueDetail';
import ConfirmPayment from './ConfirmPayment';
import PaymentForm from './AddPaymentInformation'

class DonateNowCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            StepCount: 0,
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            amount: ''


        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputFocus = this.handleInputFocus.bind(this);



    }

    /**
     * Handles Next button action
     */
    handleNext() {
        this.setState({ StepCount: this.state.StepCount + 1 });
    };
    /**
     * Handles back button action
     */
    handleBack() {
        this.setState({ StepCount: this.state.StepCount - 1 });
    };
    /**
    * Handles back reset action
    */
    handleReset() {
        this.setState({ StepCount: 0 });
    };

    // Handle Field change
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }


    render() {
        const { cvc,
            expiry,
            focus,
            name,
            number,
            amount } = this.state
        const cardDetails = {
            cvc: cvc,
            expiry: expiry,
            focus: focus,
            name: name,
            number: number,
            amount: amount
        }



        return (


            // Main Card Component
            <Card className="root" variant="outlined">

                <CardHeader title="Make A Donation"></CardHeader>
                {/* Card stepper */}
                <CardContent>
                    <HorizontalLabelPositionBelowStepper stepCount={this.state.StepCount}></HorizontalLabelPositionBelowStepper>
                    {/* {this.state.stepCount == 2 ? (<Typography>All steps completed</Typography>) : (<Typography >{getStepContent(this.state.StepCount)}</Typography>)} */}
                </CardContent>


                {/* Card dynamic Content */}
                <CardContent>
                    {this.state.StepCount == 0 &&
                        <AmountValueDetail stepCount={this.state.StepCount} handleNext={this.handleNext} cardDetails={cardDetails} handleInputChange={this.handleInputChange} handleInputFocus={this.handleInputFocus} />
                    }
                    {this.state.StepCount == 1 &&
                        <PaymentForm stepCount={this.state.StepCount} handleBack={this.handleBack} handleNext={this.handleNext} cardDetails={cardDetails} handleInputChange={this.handleInputChange} handleInputFocus={this.handleInputFocus} />
                    }
                    {this.state.StepCount == 2 &&
                        <ConfirmPayment stepCount={this.state.StepCount} handleBack={this.handleBack} cardDetails={cardDetails}></ConfirmPayment>
                    }
                </CardContent>


                {/* Stepper Buttons
                <CardActions>
                    <div>
                        {this.state.StepCount === 2 ? (
                            <div>
                                <Button onClick={this.handleReset}>Reset</Button>
                                <Button
                                    disabled={this.state.StepCount === 0}
                                    onClick={this.handleBack}>Back</Button>
                            </div>
                        ) : (
                                <div>
                                    <div>
                                        <Button
                                            disabled={this.state.StepCount === 0}
                                            onClick={this.handleBack}>Back</Button>
                                        <Button variant="contained" color="primary" onClick={this.handleNext}>
                                            {this.state.StepCount === 2 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </div>
                </CardActions> */}
            </Card >

        );
    }
}
export default DonateNowCard;





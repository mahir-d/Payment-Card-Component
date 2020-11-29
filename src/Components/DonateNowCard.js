import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { FormGroup, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HorizontalLabelPositionBelowStepper from './Stepper'
import './CardC.css'





function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select Amount To Donate';
        case 1:
            return 'Add Payment Information';
        case 2:
            return 'Confirm Payment';
        default:
            return 'Unknown stepIndex';
    }
}




class DonateNowCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            StepCount: 0,
            amount: 0
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this)
        // this.handleAmountChange = this.handleAmountChange.bind(this)

    }

    handleNext() {
        this.setState({ StepCount: this.state.StepCount + 1 });
    };

    handleBack() {
        this.setState({ StepCount: this.state.StepCount - 1 });
    };
    s
    handleReset() {
        this.setState({ StepCount: 0 });
    };
    // handleAmountChange(event) {
    //     this.setState({ amount: event.target.value.amount })
    // }



    render() {
        return (


            // Main Card Component
            <Card className="root" variant="outlined">

                <CardHeader title="Make A Donation"></CardHeader>
                {/* Card stepper */}
                <CardContent>
                    <HorizontalLabelPositionBelowStepper stepCount={this.state.StepCount}></HorizontalLabelPositionBelowStepper>
                    {/* {this.state.stepCount == 2 ? (<Typography>All steps completed</Typography>) : (<Typography >{getStepContent(this.state.StepCount)}</Typography>)} */}
                </CardContent>


                <CardContent>
                    {this.state.StepCount == 0 &&
                        <form>
                            <Typography variant="h5">I want to Donate to xyz corportation</Typography>
                            <FormControl>
                                <InputLabel htmlFor="amount">Amount</InputLabel>
                                <Input
                                    required
                                    id="amount"

                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            <Typography variant="h5">To support Campaign xyz</Typography>
                        </form>
                    }
                    {this.state.StepCount == 1 &&
                        <div> <Typography>Enter Payment Details</Typography>
                            <form>
                                <FormGroup>
                                    <FormControl>
                                        <InputLabel>Card Number</InputLabel>
                                        <Input placeHolder="Card Number"></Input>
                                    </FormControl>
                                </FormGroup>

                            </form>
                        </div>
                    }
                    {this.state.StepCount == 2 &&
                        <div>
                            <Typography>Are you sure you want to make the payment?</Typography>

                            <Button variant="default" color="success">Make Payment</Button>
                        </div>
                    }
                </CardContent>


                <CardActions>


                    <div>
                        {this.state.StepCount === 2 ? (
                            <div>
                                <Button onClick={this.handleReset}>Reset</Button>
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
                </CardActions>







            </Card >



        );
    }
}
export default DonateNowCard;





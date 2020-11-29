import React, { Component } from 'react'
import { Typography, Grid, Box, Container, CardActions, Button } from '@material-ui/core';
import { FormControl, InputLabel, FilledInput, InputAdornment } from '@material-ui/core'
import './CardC.css'
export class AmountValueDetail extends Component {


    constructor(props) {
        super(props);

        this.state = {
            cardError: false
        }

    }

    //Card Number Validation
    validateAmount = (e) => {
        if (e.target.value.length == 0 || isNaN(e.target.value) || e.target.value < 0) {
            this.setState({ cardError: true })
        }
        else {
            this.setState({ cardError: false })

        }
        this.props.handleInputChange(e)
    }

    render() {
        const { stepCount, handleNext } = this.props
        return (
            <div>
                <form>
                    <Container alignItems='center' >

                        <Grid container className='App-form'>
                            <Grid item xs={12}>
                                <Typography variant="h5"> I want to give ___</Typography>
                            </Grid>
                        </Grid>
                        <Grid container className='App-form'>
                            <Grid item xs={12}>
                                <FormControl >
                                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        error={this.state.cardError}
                                        type='tel'
                                        name='amount'
                                        placeholder='Donation Amount'
                                        value={this.props.cardDetails.amount}
                                        onChange={this.validateAmount}
                                        onFocus={this.props.handleInputFocus}
                                        variant="outlined"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container className='App-form'>
                            <Grid item xs={12}>
                                <Typography variant="h5"> To support ____</Typography>
                            </Grid>
                        </Grid>




                        {/* Next Stepper Button */}
                        <Grid container justify='center'>
                            <Grid item xs={2}>
                                <Button
                                    disabled={this.state.cardError}
                                    variant="contained" color="primary" onClick={handleNext}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>

                    </Container>
                </form>

            </div>

        )
    }
}


export default AmountValueDetail

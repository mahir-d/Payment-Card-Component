import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core';

export class ValidateOrganization extends Component {




    render() {

        return (
            <div>

                <Grid container alignItems="flex-start" justify='center' spacing={0}>
                    <Grid item padding='20' xs={6}>
                        <Typography >Organization Name: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography >XYZ Corporation</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography >Campaign Name:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography >xyz Campaign Name</Typography>
                    </Grid>


                </Grid>
            </div>

        )
    }
}


export default ValidateOrganization

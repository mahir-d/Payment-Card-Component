import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import DonateNowCard from './Components/DonateNowCard'
function App() {
    return (
        <div className="App">
            <Container>
                <Grid container >
                    <Grid item xs={12}>
                        <DonateNowCard></DonateNowCard>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default App;

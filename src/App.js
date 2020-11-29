import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import DonateNowCard from './Components/DonateNowCard'
function App() {
    return (
        <div className="App">
            <Container>
                <Grid Container xs={12}>
                    <br></br>
                    <DonateNowCard></DonateNowCard>
                </Grid>
            </Container>

        </div>
    );
}

export default App;

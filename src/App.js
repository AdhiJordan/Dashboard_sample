import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function App() {
    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>
                        <img
                            src="/assets/images/skrate_logo.png"
                            alt="Skrate_Logo"
                            className="skrate_logo text-align-left"
                        />
                    </div>{' '}
                    <br />
                    <div className="padding-30">
                        <p>Welcome Back to Skrate!!</p>
                        <Button variant="contained">Sign In With Google</Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img
                        src="/assets/images/login_design.svg"
                        alt="Skrate_Logo"
                        className="height-38"
                    />
                    <img
                        src="/assets/images/login_procedure.svg"
                        alt="Skrate_Logo"
                        className="height-38 loginProcedureImageCls"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

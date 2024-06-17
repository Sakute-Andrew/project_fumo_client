import { Grid } from '@mui/material';
import Navigation from '../Navigation/Navigation';


const MainPage = () => {
    return (
        <div className='main-wrapper'>
            <Navigation />
            <Grid container>
                <Grid item xs={12}>
                    <div className='flex justify-center items-center h-screen'>
                        <h1 className='text-4xl'>Main Page</h1>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainPage
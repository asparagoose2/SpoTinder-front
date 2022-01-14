import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import { Avatar, Container, Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';


export default function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
        
        <Box style={{
            position: "absolute",
            zIndex: "-1",
            height: "311px",
            width: "100%"
            }}>
            <svg width="100%" height="311" viewBox="0 0 500 80" preserveAspectRatio="none">
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%"  stop-color="rgba(170, 63, 236, 0.95)" />
                <stop offset="54%" stop-color="rgba(170, 63, 236, 0.741026)" />
                <stop offset="100%" stop-color=" rgba(170, 63, 236, 0.6)" />
                </linearGradient>
            </defs>
            <path d="M0,0 L0,70 Q250,80 500,70 L500,0 Z" fill="url('#myGradient')" />
            </svg>
        </Box>
        <Box style={{height: "311px",}}>
            <Box>
                <Typography variant="h5" gutterBottom component="div">
                    Profile
                </Typography>
            </Box>
            <Box 
            style={{ 
                justifyContent: "center", 
                display: "flex",
                
            }}
            
>
            <Avatar
                alt="Remy Sharp"
                src={user.image}
                sx={{ width: 190, height: 190 }}
            />
            </Box>
        </Box>
            <Container style={{ justifyContent: "space-between", display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <h3>Account Settings</h3>
                <Button>Edit</Button>
            </Container>
            <Container component="form" >
                <TextField fullWidth label="Name"  margin="normal" value={user.name} variant="outlined" />
                <TextField fullWidth label="Email" margin="normal" value={user.email} type="email" variant="outlined" />
                <TextField fullWidth label="Password" margin="normal" type="password" variant="outlined" />
            </Container>

        </div>
    )
}

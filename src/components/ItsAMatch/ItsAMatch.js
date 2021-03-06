import { styled } from '@mui/material/styles';
import { Typography, Avatar, Box,Stack, Button, Container } from '@mui/material';
import React from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import { usePotentialMatches } from '../../Contexts/PotentialMatchesProvider';
import { ConversationsProvider, useConversations } from '../../Contexts/ConversationsContext';


export default function ItsAMatch(props) {
    const theme = React.useContext(ThemeContext);
    const {user} = React.useContext(UserContext);
    const {setPage} = React.useContext(PageContext);
    const {selectedMatch} = usePotentialMatches();
    const {setChatWith, conversations} = useConversations();

    const FilledButton = styled(Button)({
        background:'linear-gradient(180deg, #BB34D2 0%, #E12CC2 100%)',
        color: "white",
        padding: "10px",
        borderRadius: "50px",
        fontSize: "1rem",
        width: "100%",
    });
    const OutlinedButton = styled(Button)({
        border: "3px solid",
        borderColor: theme.palePink,
        borderRadius: "50px",
        color: "white",
        padding: "10px",
        borderRadius: "50px",
        fontSize: "1rem",
        width: "100%",
    });

    const handleStartChatClick = () => {
        const matchIndex =conversations.findIndex(conversation => conversation.id === selectedMatch.id);
        if(matchIndex > -1) {
            setChatWith(matchIndex);
            setPage("chat");
        }
    }

    return (
        <div style={{
            background:  `linear-gradient(${theme.purple} 21.12%, ${theme.darkPurple} 100% )`,
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: "100",
            overflow: "hidden",
        }}>
            <Typography variant="h3" gutterBottom component="div" style={{
                color: "white",
                textAlign: "center",
                marginTop: "150px",
                fontFamily: "Dancing Script"
            }}>
                It's a match!
            </Typography>
            <Typography variant="h6" gutterBottom component="div" style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Roboto Thin",
            }}>
                {selectedMatch.otherUser.name.split(' ')[0]} likes you too
            </Typography>
            <Box mt={2} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginLeft: "20px",
            }}>
            <Avatar
                alt="Remy Sharp"
                src={user.image}
                sx={{ 
                    width: 150, 
                    height: 150,
                     }}
            />
            <Avatar
                alt="Remy Sharp"
                src={selectedMatch.otherUser.image}
                sx={{ 
                    width: 150, 
                    height: 150,
                    position: "relative",
                    left: "-40px",
                    border: `6px solid ${theme.purple}`,
                    clip: "rect(0px,60px,200px,0px)"
                }}
            />
            </Box>
            <Container>
                <Stack spacing={3} mt={8}>
                    <FilledButton onClick={()=>{handleStartChatClick()}}>send a message</FilledButton>
                    <OutlinedButton onClick={()=>setPage("home")} >keep scrolling</OutlinedButton>
                </Stack>
            </Container>
        </div>
    )
}

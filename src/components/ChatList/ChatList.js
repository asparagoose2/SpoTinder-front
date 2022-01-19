import React , { useEffect } from 'react'
import List from '@mui/material/List';
import { UserContext } from '../../Contexts/UserContext';
import { PageContext } from '../../Contexts/PageContext';
import ChatListItem from '../ChatListItem/ChatListItem';
import { useSocket } from '../../Contexts/SocketProvider';
import { ConversationsContext, useConversations } from '../../Contexts/ConversationsContext';
import { usePotentialMatches } from '../../Contexts/PotentialMatchesProvider'
import { Skeleton, ListItem, ListItemText } from '@mui/material';


 
export default function ChatList() {
    const {user} = React.useContext(UserContext)
    const {setPage} = React.useContext(PageContext)
    const {chatWith, setChatWith} = useConversations();
    const {potentialMatches} = usePotentialMatches();



    const handleClick = (match) => {
        setChatWith(match);
        setPage("chat");
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                potentialMatches.length > 0 ?
                potentialMatches.filter((m=>m.thisUserLiked && m.otherUserLiked)).map((match,index) => {
                return <ChatListItem key={index} onClick={()=>handleClick(match)} image={match.otherUser.image} name={match.otherUser.name} msg={match.messages.length > 0 ? match.messages[match.messages.length-1].message : ""} />;
                })
                :
                Array.apply(null, { length: 8 }).map((item, index) => {
                return (<ListItem key={index} alignItems="flex-start" >
                    <Skeleton variant="circular" width={61} height={61} />
                    <ListItemText
                    primary={<Skeleton
                                animation="wave"
                                height={12}
                                width="80%"
                                style={{ marginBottom: 6, marginTop: 8, marginLeft: 12 }}
                                />  }
                    secondary={
                        <React.Fragment >
                        <Skeleton
                            animation="wave"
                            height={12}
                            width="60%"
                            style={{ marginBottom: 6,marginLeft: 12 }}
                            />
                        </React.Fragment>}
                    />
                </ListItem>)
                })

            }
        </List>
    )
}

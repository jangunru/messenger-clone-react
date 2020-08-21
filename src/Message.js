import React, { forwardRef } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Message.css";

const Message = forwardRef(({user, message}, ref) => {
    const isUser = user === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_User'}`}>
            <Card className={isUser ? "messageCard_User" : "messageCard_Guest"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && `${message.username || "Uknown user"}: `} {message.text}
                    </Typography>
                </CardContent>
            </Card> 
        </div>
            
       
    )
})

export default Message


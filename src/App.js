import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("What´s your name"));
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })   
  }, [])

  console.log(input);
  console.log(messages);

  const sendMessage  = (event) => {
    // logic to send a message goes
    event.preventDefault();
    db.collection('messages').add({
      username: userName,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="App">
      <h1>Welcome {userName}</h1>

      <form className="app__form">
        <FormControl className="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message..." value= {input} onChange={event => setInput(event.target.value)}/>

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          
        </FormControl>

        
        
      </form>
      
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} user={userName} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;

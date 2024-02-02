// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';

export default function AuthForm() {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  function signUpHandler(e){
    e.preventDefault()
    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    createUser(username, email, password)
  }

  return (
    <Box
      sx={{ 
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >

      <form>
        <input type='text' ref={usernameRef} required/>
        <input type='email' ref={emailRef} required />
        <input type='password' id='email' ref={passwordRef} required/>

        <button type='submit' onSubmit={signUpHandler}>
          submit
        </button>
      </form>
    </Box>
  );
}

async function createUser(username, email, password) {
  const response = await fetch('/api/auth/createUser', {
    method: 'POST',
    body: JSON.stringify({username: username, email: email, password: password}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}
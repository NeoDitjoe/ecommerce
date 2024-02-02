import { useRef } from 'react';
import style from './authForm.module.css'
import GoogleButton from 'react-google-button';
import { signIn } from 'next-auth/react';

export default function AuthForm() {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  function signUpHandler(e) {
    e.preventDefault()
    const username = usernameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    createUser(username, email, password)
  }

  return (
    <div className={style.section}>
      <div className={style.formDiv}>
        <form className={style.form}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type='text' ref={usernameRef} placeholder='username' required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type='email' ref={emailRef} placeholder='email' required />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type='password' id='email' ref={passwordRef} placeholder='password' required />
          </div>

          <div>
            <button type='submit' onSubmit={signUpHandler}>
              submit
            </button>
          </div>

          <hr />

          <GoogleButton 
            onClick={() => signIn('google')}
          />
        </form>
      </div>

      <div className={style.background}>

      </div>
    </div>
  );
}

async function createUser(username, email, password) {
  const response = await fetch('/api/auth/createUser', {
    method: 'POST',
    body: JSON.stringify({ username: username, email: email, password: password }),
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
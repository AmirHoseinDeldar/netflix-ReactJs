import { useState } from 'react';
import './Register.scss';
import { useRef } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const clickHandler = () => {
    setEmail(emailRef.current.value);
  };
  const clickHandlerFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img className='logo' src='' alt='' />
          <button className='loginButton'>SignIn</button>
        </div>
      </div>
      <div className='container'>
        <h1>saaaaasd</h1>
        <h2>asasasasasasasasasd</h2>
        <p>Ready tto asasasasdasd</p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='email?' ref={emailRef} />
            <button className='registerButton' onClick={clickHandler}>
              get start
            </button>
          </div>
        ) : (
          <form className='input'>
            <input type='password' placeholder='password' ref={passwordRef} />
            <button className='registerButton' onClick={clickHandlerFinish}>
              start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

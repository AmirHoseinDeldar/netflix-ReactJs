import { Link } from 'react-router-dom';
import './login.scss';

export default function Login() {
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img className='logo' src='' alt='' />
          <button className='loginButton'>SignIn</button>
        </div>
      </div>

      <div className='container'>
        <form>
          <h1>Sign In </h1>
          <input type='email' placeholder='Email Or Phone Number' />
          <input type='password' placeholder='password' />
          <Link to='/' className='loginButton'>
            <button>Sign In</button>
          </Link>
          <span>
            new To Netflix?
            <Link to='/register'>
              <button className='signUp'>SignUp</button>
            </Link>
          </span>
          <small>
            This Page is protected By Google ReCAPTCHA to enSure tou're not a
            bot.
          </small>
        </form>
      </div>
    </div>
  );
}

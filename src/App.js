import './App.css';
import logo from './logo.svg';


function App() {
  return (

    <>
    
    <header className='bani'>
    <img src={logo} className="App-logo" alt="logo" />
    </header>
      <br/>
    <div className='form'>
      <h2>Log in to your account</h2>

      <p>Don’t have an account? &nbsp; &nbsp; <a href='createaccount.com'>Get Started</a> </p> 
      
      <br/>

      <label id='Email'>Email:</label>
      <br/>

      <input name='Email'  placeholder='Enter your email address'></input>
      <br/>
      <br/>
      <label id='password'>Password: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      <a href='forgotpassword.com'>Forgot Password</a></label>
      <br/>
      
      <input name='password' placeholder='Enter your password'></input>
      
      <br/>
      <br/>

      <button> <a className='buttonlink' href='https://glowing-gnome-fd582e.netlify.app/dashboard'>Login</a></button>

    </div>
    
  
    
    
    </>
    
  )
    
     
  
}

export default App;

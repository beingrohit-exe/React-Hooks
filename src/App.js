import './App.css'
import Field from './Field'

const App = () => {
  return (
      <div className='main-div'>
          <div className='login-div'>
              <span className='title'>Dummy</span>

              <Field label='Name' type='text' />
              <Field label='Email' type='text' />
              <Field label='Password' type='password' />
              <Field label='Confirm Password' type='password' />

              {/*<div>*/}
              {/*    <button>Reset</button>*/}
              {/*    <button>Submit</button>*/}
              {/*</div>*/}
          </div>
      </div>
  );
}

export default App
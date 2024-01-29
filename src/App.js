import './App.css'

const App = () => {
  return (
      <div className='main-div'>
          <div className='login-div'>
              <span className='title'>Dummy</span>

              <div>
                  <span>Name</span>
                  <input type="text"/>
              </div>

              <div>
                  <span>Email</span>
                  <input type="text"/>
              </div>

              <div>
                  <span>Contact</span>
                  <input type="tel"/>
              </div>

              <div>
                  <span>Password</span>
                  <input type="password"/>
              </div>

              <div>
                  <button>Reset</button>
                  <button>Submit</button>
              </div>
          </div>
      </div>
  );
}

export default App
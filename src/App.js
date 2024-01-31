import './App.css'
import Field from './Field'
import React, {useState} from "react";

const App = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    //
    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // }

    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (event, property) => {
        setIsError(false);
        setData(prevData => ({
            ...prevData, [property]: event.target.value
        }))
    }

    const handleReset = () => {
        setData({
            name: '',
            email: '',
            password: ''
        })
    }

    const handleSubmit = () => {
        if (data.name === '' || data.email === '' || data.password === '') {
            setIsError(true);
            return;
        }
        setIsSubmitted(true);
        setTimeout(()=> {
            setIsSubmitted(false);
        }, 2000)
    }

    return (
        <div className='main-div'>
            <div className='login-div'>
                <span className='title'>Dummy</span>

                <Field label='Name' type='text' value={data.name} onChange={(e)=> handleChange(e, 'name')}/>
                <Field label='Email' type='text' value={data.email} onChange={(e)=> handleChange(e, 'email')}/>
                <Field label='Password' type='password' value={data.password} onChange={(e)=> handleChange(e, 'password')}/>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px'
                }}>
                    <button className='buttons' onClick={handleReset}>Reset</button>
                    <button className='buttons' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            <div className='login-div'>
                <div className='user-data'>
                    <span>Name</span>
                    <span>{data.name}</span>
                </div>

                <div className='user-data'>
                    <span>Email</span>
                    <span>{data.email}</span>
                </div>

                <div className='user-data'>
                    <span>Password</span>
                    <span>{data.password}</span>
                </div>

                <span style={{
                    color: 'rgba(0, 255, 0, 0.8)',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 500
                }}>
                    {isSubmitted ? "Submitted" : ""}
                </span>

                <span style={{
                    color: 'rgba(255, 0, 0, 0.8)',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 500
                }}>
                    {isError ? "Error" : ""}
                </span>
            </div>
        </div>
    );
}

export default App
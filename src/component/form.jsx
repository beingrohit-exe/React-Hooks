import React, { useState } from 'react';
import logo from '../asset/logo192.png'

const Form = () => {

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e, property) => {
        setData(prevData => ({
            ...prevData, [property]: e.target.value
        }))
    }

    const handleReset = () => {
        setData({
            username: '',
            password: ''
        })
    }

    const handleSubmit = () => {
        window.alert("Username : " + data.username + "\nPassword : " + data.password);
        handleReset();
    }


    return (
        <main>
            <div className='main-card'>
                <div className='header'>
                    <div className='logo' >
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className='header-title'>
                        <h1>Heading</h1>
                        <h6>Welcome to application</h6>
                    </div>
                </div>

                <div className='content'>
                    <div className='field'>
                        <label htmlFor="text-field">Username</label>
                        <input type="text" onChange={(e)=> handleChange(e, 'username')} value={data.username} />
                    </div>

                    <div className='field'>
                        <label htmlFor="text-field">Password</label>
                        <input type="text" onChange={(e)=> handleChange(e, 'password')} value={data.password} />
                    </div>
                </div>

                <div className='button-group'>
                    <button className="button-reset" onClick={handleReset}>Reset</button>
                    <button className="button-submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </main>
    )
}

export default Form
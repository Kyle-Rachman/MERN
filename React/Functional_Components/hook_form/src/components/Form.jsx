import React, { useState } from 'react';
import "../App.css"

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
        return newUser;
    };

    return(
        <div className="container">
            <form onSubmit={ createUser } className='userForm'>
                <div className='formElement'>
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                <div className='formElement'>
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div className='formElement'>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className='formElement'>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div className='formElement'>
                    <label htmlFor="confirm" className="form-label">Confirm:</label>
                    <input type="password" className="form-control" id="confirm" value={confirm} onChange={ (e) => setConfirm(e.target.value) }/>
                </div>
                <button type="submit">Create User</button>
            </form>
            <h2>Your Form Data:</h2>
            <div className="form-info">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm: {confirm}</p>
            </div>
        </div>
    );
};

export default Form;
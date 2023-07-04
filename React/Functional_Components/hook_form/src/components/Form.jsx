import React, { useEffect, useState } from 'react';
import "../App.css"

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameErrors, setFirstNameErrors] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameErrors, setLastNameErrors] = useState("");
    const [email, setEmail] = useState("");
    const [emailErrors, setEmailErrors] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmErrors, setConfirmErrors] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 3) {
            setFirstNameErrors("First name must be at least three characters!")
        }
        else {
            setFirstNameErrors("")
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3) {
            setLastNameErrors("Last name must be at least three characters!")
        }
        else {
            setLastNameErrors("")
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailErrors("Email must be at least five characters!")
        }
        else {
            setEmailErrors("")
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordErrors("Password must be at least eight characters!")
        }
        else {
            setPasswordErrors("")
        }
    };

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (password != e.target.value) {
            setConfirmErrors("Passwords do not match!")
        }
        else {
            setConfirmErrors("")
        }
    };

    return(
        <div className="container">
            <h1>Create a User!</h1>
            <form onSubmit={ createUser } className='userForm'>
                <div className='formElement'>
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={ handleFirstName }/>
                    <div className="errors">
                        {
                            firstNameErrors ?
                            <p>{firstNameErrors}</p> :
                            ""
                        }
                    </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={ handleLastName }/>
                    <div className="errors">
                        {
                            lastNameErrors ?
                            <p>{lastNameErrors}</p> :
                            ""
                        }
                    </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={ handleEmail }/>
                    <div className="errors">
                        {
                            emailErrors ?
                            <p>{emailErrors}</p> :
                            ""
                        }
                    </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={ handlePassword }/>
                    <div className="errors">
                        {
                            passwordErrors ?
                            <p>{passwordErrors}</p> :
                            ""
                        }
                    </div>
                </div>
                <div className='formElement'>
                    <label htmlFor="confirm" className="form-label">Confirm:</label>
                    <input type="password" className="form-control" id="confirm" value={confirm} onChange={ handleConfirm }/>
                    <div className="errors">
                        {
                            confirmErrors ?
                            <p>{confirmErrors}</p> :
                            ""
                        }
                    </div>
                </div>
                {
                    // Checks to see if any errors are present and if all fields are filled in
                    (firstNameErrors || lastNameErrors || emailErrors || passwordErrors || confirmErrors) || !(firstName && lastName && email && password && confirm) ?
                    <button type="submit" disabled>Create User</button> :
                    <button type="submit">Create User</button>
                }
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
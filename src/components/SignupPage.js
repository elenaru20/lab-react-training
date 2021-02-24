import React from 'react';
//import { v4 as uuid } from 'uuid';
//npm install uuidv4 ==> create unique IDs

class SignupPage extends React.Component {

    state = {
        email: '',
        password: '',
        nationality: ''
    }

    handleChange = event => {
        // const name = event.target.name;
        // const value = event.target.value;
        const {name, value} = event.target;
        this.setState({
            //e.g. email: event.target.value
            //name = 'email', value is entered text by the user
            //this is not working > event.target.name: event.target.value therefore we need to write:
            [name]: value 
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password, nationality } = this.state;
        this.setState({
            email: this.state.email,
            password: this.state.password,
            nationality: this.state.nationality
        });
    }

    render() {

        let greeting = 'Hello!';
        switch(this.state.nationality) {
            case 'en':
                greeting = 'Hello!';
                break;
            case 'de':
                greeting = 'Hallo!';
                break;
            case 'fr':
                greeting = 'Bonjour!';
                break;
        }

        const email = this.state.email !== '' ? `Your email address is: ${this.state.email}` : false;

        const messageMail = this.state.email !== '' && this.state.email.includes('@') ? "Your email address is correct" : "Please enter a valid email adress"

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input 
                    type='text'
                    name='email'  
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    value={this.state.password} 
                    onChange={this.handleChange}
                    />
                    <label>Nationality</label>
                    <select name='nationality' value={this.state.nationality} onChange={this.handleChange}>
                        <option value='en'>English</option>
                        <option value='de'>German</option>
                        <option value='fr'>French</option>
                    </select>
                    <button type='submit'>Sign up</button>
                </form>

                <h1>{greeting !== '' ? greeting : false}</h1>
                <p>{email}</p>
                <p>{messageMail}</p>
            </div>
        );
    }
}

export default SignupPage;
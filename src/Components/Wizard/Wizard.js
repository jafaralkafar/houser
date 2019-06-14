import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleInput = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <p>Name:</p>
                <input 
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInput}/>
                <p>Address:</p>
                <input 
                    type='text'
                    name='address'
                    value={this.state.address}
                    onChange={this.handleInput}/>
                <p>City:</p>
                <input 
                    type='text'
                    name='city'
                    value={this.state.city}
                    onChange={this.handleInput}/>
                <p>State:</p>
                <input 
                    type='text'
                    name='state'
                    value={this.state.state}
                    onChange={this.handleInput}/>
                <p>Zip Code:</p>
                <input 
                    type='text'
                    name='zipcode'
                    value={this.state.zipcode}
                    onChange={this.handleInput}/>
                <br />
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}
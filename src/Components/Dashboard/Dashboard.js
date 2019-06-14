import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses').then(res=> {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log('error getting', err))
    }

    render() {
        let { houses } = this.state
        return (
            <div>
                <Link to='/wizard'><button>Add New Property</button></Link>
                {houses.map(house => {
                    return (
                        <div key={house.id}>
                            <House 
                                house={house}
                                houses={houses}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
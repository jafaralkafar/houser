import React from 'react'


export default function House(props) {
    let { name, address, city, state, zip } = props.house
    return (
        <div>
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip Code: {zip}</p>
            <button>Delete</button>
        </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

const Room = ({ item }) => {

    return (
        <div key={item.id} className="room">
            <div className="room-img-cnt">
                <img src={item.images[0]} alt={`${item.name}`}></img>
            </div>
            <div className="room-overlay">
                <Link className="btn-primary" to={`/rooms/${item.id}`} >Show details</Link>
                <p>Price: {item.price}$</p>
            </div>
        </div>
    )
}

export default Room

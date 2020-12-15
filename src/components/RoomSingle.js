import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoomsGlobalContext } from '../context/RoomsGlobalContext'

const RoomSingle = (props) => {

    const { getRoom } = useContext(RoomsGlobalContext)

    const [state, setState] = useState(props.match.params.id)

    const room = getRoom(state)

    if (!room) {
        return (
            <div className="room-single-error">
                <h2> no such room was found</h2 >
                <Link className="room-single-error-btn" to="/rooms">Go back to Rooms</Link>
            </div>
        )

    }

    else {

        const {
            name,
            guests,
            price,
            description,
            pets,
            free_internet,
            featured,
            images } = room

        return (
            <div className="roomsingle-cnt">
                <div className="roomsingle">
                    <h2>Welcome to {name}</h2>
                    <div className="roomsingle-images-cnt">
                        <div className="roomsingle-image">
                            <img src={images[0]} alt={`${name}1`}></img>
                        </div>
                        <div className="roomsingle-image">
                            <img src={images[1]} alt={`${name}2`}></img>
                        </div>
                        <div className="roomsingle-image">
                            <img src={images[2]} alt={`${name}3`}></img>
                        </div>
                    </div>
                    <div className="roomsingle-text-cnt">
                        <h2 className="roomsingle-specs"><strong>Number of Guests: </strong>{guests}</h2>
                        <h2 className="roomsingle-specs"><strong>Price: </strong>{price}$</h2>
                        <h2 className="roomsingle-specs"><strong>Description: </strong>{description}</h2>
                        <h2 className="roomsingle-specs"><strong>Pets: </strong> {pets ? 'Pets are allowed' : 'Pets are not allowed'}</h2>
                        <h2 className="roomsingle-specs"><strong>Free internet connection: </strong>{free_internet ? 'We have an free internet access ready for you!' : 'Unfortunately we do not have an internet access gor you in this place.'}</h2>
                        <h2 className="roomsingle-specs"><strong>Featured: </strong>{featured ? 'This room is featured in premium rooms!' : "This room is a standard one and is not featured in premium Rooms."}</h2>
                    </div>
                </div>
            </div>
        )
    }


}

export default RoomSingle

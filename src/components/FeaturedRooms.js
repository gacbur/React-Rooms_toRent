import React, { useContext } from 'react'
import { RoomsGlobalContext } from '../context/RoomsGlobalContext'

const FeaturedRooms = () => {

    const { featuredRooms } = useContext(RoomsGlobalContext)

    return (
        <>
            <h2 style={{ textAlign: 'center', padding: '3em 0em' }}>Check our featured rooms! </h2>
            <div className="featured-rooms">
                <div className="featured-rooms-wrap">
                    {featuredRooms.map(item => (
                        <div key={item.id} className="featured-room">
                            <div className="featured-room-img-cnt">
                                <img src={item.images[0]} alt={`${item.name}`}></img>
                            </div>
                            <div className="featured-room-overlay">
                                <button>Go to Room</button>
                                <p>Price: {item.price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FeaturedRooms



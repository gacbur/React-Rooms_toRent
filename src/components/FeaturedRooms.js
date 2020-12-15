import React, { useContext } from 'react'
import { RoomsGlobalContext } from '../context/RoomsGlobalContext'

import Room from './Room'

const FeaturedRooms = () => {

    const { featuredRooms } = useContext(RoomsGlobalContext)

    return (
        <>
            <h2 style={{ textAlign: 'center', padding: '3em 0em' }}>Check our featured rooms! </h2>
            <div className="featured-rooms">
                <div className="featured-rooms-wrap">
                    {featuredRooms.map(item => (
                        <Room key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default FeaturedRooms



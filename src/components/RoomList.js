import React, { useContext } from 'react'

import { RoomsGlobalContext } from '../context/RoomsGlobalContext'

import Room from './Room'

const RoomList = () => {

    const { sortedRooms } = useContext(RoomsGlobalContext)

    if (sortedRooms.length === 0) {
        return (
            <div className="search-error">
                <h2>Unfortunately we have no matches for your search parameters</h2>
            </div>
        )
    }
    else {
        return (
            <section className="roomlist">
                <div className="roomlist-center">
                    {sortedRooms.map(item => (
                        <Room key={item.id} item={item} />
                    ))}
                </div>
            </section>
        )
    }
}

export default RoomList

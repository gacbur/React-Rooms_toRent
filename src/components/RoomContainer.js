import React from 'react'

import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

import { useContext } from 'react'

const RoomContainer = () => {

    return (
        <>
            Hello From Rooms container
            <RoomFilter />
            <RoomList />
        </>
    )
}

export default RoomContainer

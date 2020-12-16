import React, { createContext, useEffect, useState, useReducer } from 'react'

import uuid from 'react-uuid'

import { roomsReducer } from '../reducers/roomsReducer'

const initialState = {
    rooms: [
        {
            id: uuid(),
            name: 'Room for one Person',
            type: 'premium',
            capacity: 1,
            price: 300,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: true,
            images: ['https://a0.muscache.com/im/pictures/9d552713-2578-437a-a638-656e82ff5474.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/cf44a9a9-822a-49c2-aa26-11209284b990.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/93f839a2-4fe4-45d4-af1f-0f6f2467aac2.jpg?im_w=1200']
        },
        {
            id: uuid(),
            name: 'Room for two People',
            type: 'basic',
            capacity: 2,
            price: 200,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: false,
            images: ['https://a0.muscache.com/im/pictures/103105049/2822e5cc_original.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/103105159/4f475527_original.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/103104932/8125b461_original.jpg?im_w=720']
        },
        {
            id: uuid(),
            name: 'Room for three People',
            type: 'premium',
            capacity: 3,
            price: 400,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: true,
            images: ['https://a0.muscache.com/im/pictures/dc445282-b833-4053-9785-20814b4ec9c2.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/9720b951-67c9-4caa-91d2-122ad73d76bf.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/83df708f-6d2a-4788-80cd-93b76e14739c.jpg?im_w=1200']
        },
        {
            id: uuid(),
            name: 'Room for two People',
            type: 'basic',
            capacity: 2,
            price: 150,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: false,
            images: ['https://www.airbnb.pl/rooms/46533497/photos/1097646411?source_impression_id=p3_1607968329_zGtakE93JdNMlY0g', 'https://a0.muscache.com/im/pictures/1199bbac-ca73-443e-ba18-14bf5439b65c.jpg?im_w=1200', 'https://www.airbnb.pl/rooms/46533497/photos/1097646422?source_impression_id=p3_1607968329_zGtakE93JdNMlY0g']
        },
        {
            id: uuid(),
            name: 'Room for one Person',
            type: 'premium',
            capacity: 1,
            price: 400,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: false,
            featured: false,
            images: ['https://a0.muscache.com/im/pictures/18e12acc-ae07-4ba3-8a95-e1fc796384b0.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/6a1937f6-9f8c-42f8-977d-ed6f949e61fa.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/13f58cdc-1b20-47bb-a98e-9d8d647ee37f.jpg?im_w=720']
        },
        {
            id: uuid(),
            name: 'Room for one Person',
            type: 'basic',
            capacity: 1,
            price: 100,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: false,
            featured: false,
            images: ['https://a0.muscache.com/im/pictures/517e5302-018f-465f-94e6-0cd99f17e070.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/d839d21f-090a-4210-8a74-db023fbede52.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/0e54f8a7-e0e7-42c7-b8a5-e2199fa785bf.jpg?im_w=1200']
        },
        {
            id: uuid(),
            name: 'Room for two People',
            type: 'presidential',
            capacity: 2,
            price: 500,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: true,
            images: ['https://a0.muscache.com/im/pictures/c740e13e-d734-44dd-b6f8-36399a8a79e2.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/e94e330f-b478-453c-81ca-27dc86499286.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/f6c24b6a-8c35-4843-b72c-d5115adbf088.jpg?im_w=1200']
        },
        {
            id: uuid(),
            name: 'Room for four People',
            type: 'basic',
            capacity: 4,
            price: 350,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: true,
            free_internet: false,
            featured: false,
            images: ['https://a0.muscache.com/im/pictures/79edff8e-568d-41fc-94dc-3869c2e29719.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/0d4392c8-8646-43e0-a930-71b6895be044.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/521dc31a-d7c7-4cae-8fb4-797792114760.jpg?im_w=1200']
        },
        {
            id: uuid(),
            name: 'Room for two People',
            type: 'presidential',
            capacity: 2,
            price: 600,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, dolorem asperiores? Libero voluptatum quidem quaerat aut in. Est dolores eaque laborum cum, atque aut, esse eum distinctio, sit cupiditate non quasi. Porro nulla nostrum minus eaque, eveniet eum iure id veritatis numquam animi beatae soluta dolorum fuga aperiam autem in?',
            pets: false,
            free_internet: true,
            featured: false,
            images: ['https://a0.muscache.com/im/pictures/c68215d6-715e-49e6-b26c-4b81c88c8550.jpg?im_w=960', 'https://a0.muscache.com/im/pictures/af165b5e-d433-4c1d-8094-98c0c0181478.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/bfa45672-fe45-4f01-88a1-6a3cdeac6315.jpg?im_w=1200']
        }
    ],
    featuredRooms: [],
    sortedRooms: [],
    type: "all",
    capacity: 1,
    price: 600,
    minPrice: 0,
    maxPrice: 0,
    free_internet: false,
    pets: false
}

export const RoomsGlobalContext = createContext()

export const RoomsGlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(roomsReducer, initialState)

    const [handleInputDone, setHandleInputDone] = useState(false)

    const getFeatured = () => { dispatch({ type: 'addToFeatured' }) }
    const getSortedRooms = () => { dispatch({ type: 'addToSorted' }) }

    const setSortingValues = () => {
        let maxPrice = Math.max(...state.rooms.map(item => item.price))
        dispatch({ type: 'setSortingValues', payload: maxPrice })
    }

    useEffect(() => {
        getFeatured()
        getSortedRooms()
        setSortingValues()
    }, [])

    const getRoom = (id) => {
        let tempRooms = [...state.rooms]
        const room = tempRooms.find(item => item.id === id)
        return room
    }

    const handleChange = e => {
        const target = e.target
        const name = e.target.name
        const value = target.type === 'checkbox' ?
            target.checked : target.value

        console.log("wywołuje")

        dispatch({
            type: 'updateFilters', payload: {
                name,
                value
            }
        })

        setHandleInputDone(prevState => !prevState)
    }

    const filterRooms = () => {

        let {
            rooms, type, capacity, price, minPrice, maxPrice, pets, free_internet
        } = state

        let tempRooms = [...rooms];

        capacity = parseInt(capacity)
        price = parseInt(price)

        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price)

        if (free_internet) {
            tempRooms = tempRooms.filter(room => room.free_internet === true)
        }

        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        dispatch({
            type: 'updateSortedRooms', payload: tempRooms
        })
    }

    useEffect(() => {
        filterRooms()
    }, [handleInputDone])


    return (
        <RoomsGlobalContext.Provider value={{
            rooms: state.rooms,
            featuredRooms: state.featuredRooms,
            sortedRooms: state.sortedRooms,
            getRoom,
            handleChange,
            minPrice: state.minPrice,
            maxPrice: state.maxPrice,
            price: state.price,
            type: state.type,
            free_internet: state.free_internet,
            pets: state.pets

        }}>
            {props.children}
        </RoomsGlobalContext.Provider >
    )
}
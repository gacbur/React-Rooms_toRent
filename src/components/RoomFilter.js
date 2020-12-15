import React, { useContext } from 'react'

import { RoomsGlobalContext } from '../context/RoomsGlobalContext'

const RoomFilter = () => {

    const {
        rooms,
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        free_internet,
        pets
    } = useContext(RoomsGlobalContext)

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
    };

    let types = getUnique(rooms, "type");

    types = ["all", ...types];

    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));


    return (
        <section className="filter-container">
            <h2 style={{ textAlign: "center" }}>Search Rooms</h2>
            <form className="filter-form">
                <label htmlFor="type">room type</label>
                <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    className="form-control"
                    value={type}
                >
                    {types}
                </select>
            </form>
        </section>
    )
}

export default RoomFilter

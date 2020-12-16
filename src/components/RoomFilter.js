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

    let guests = getUnique(rooms, 'capacity');
    guests = guests.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <h2 style={{ textAlign: "center" }}>Search Rooms</h2>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleChange}
                        className="form-control"
                        value={type}
                    >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {guests}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label><br />
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets"> Pets Allowed</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="free_internet" id="free_internet" checked={free_internet} onChange={handleChange} />
                        <label htmlFor="free_internet"> Free internet</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter

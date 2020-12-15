import React from 'react'

import { Link } from 'react-router-dom'

const Baner = () => {
    return (
        <div className="baner-cnt">
            <div className="baner-img">
                <img src="https://a0.muscache.com/im/pictures/dc445282-b833-4053-9785-20814b4ec9c2.jpg?im_w=1200" alt="dasda">
                </img>
                <div className="baner-img-overlay">
                    <h2>See our offer!</h2>
                    <Link className="btn-primary" to="/rooms">Show available Rooms</Link>
                </div>
            </div>
        </div >
    )
}

export default Baner

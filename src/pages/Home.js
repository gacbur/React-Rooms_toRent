import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Baner from '../components/Baner'
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        <>
            <Baner />
            <div className="main-descrpition">
                <div className="description-cnt">
                    <div className="description-item">
                        <span className="description-icon"><FontAwesomeIcon className="" icon={faUser} /></span>
                        <p>We offer rooms for one person, we guarantee that you will be glad you stayed in our Room!</p>
                    </div>
                    <div className="description-item">
                        <span className="description-icon"><FontAwesomeIcon className="" icon={faUsers} /></span>
                        <p>We offer rooms for multiple people, two and even three! we guarantee that you and your friends or loved ones will be glad you stayed in our Room!</p>
                    </div>
                    <div className="description-item">
                        <span className="description-icon"><FontAwesomeIcon className="" icon={faThumbsUp} /></span>
                        <p>We guarantee full satisfaction of renting our room, you will be glad you stayed here like other our clients, we have 96% of 5 stars ratings!</p>
                    </div>
                </div>
            </div>
            <FeaturedRooms />
        </>
    )
}

export default Home

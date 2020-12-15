import React from 'react'

import Home from '../pages/Home'
import Rooms from '../pages/Rooms'
import RoomSingle from '../components/RoomSingle'


import { Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms" component={Rooms} />
                <Route exact path="/rooms/:id" component={RoomSingle}></Route>
            </Switch>
        </main>
    )
}

export default Main

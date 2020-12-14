import React from 'react'

import Home from '../pages/Home'
import Rooms from '../pages/Rooms'

import { Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms" component={Rooms} />
            </Switch>
        </main>
    )
}

export default Main

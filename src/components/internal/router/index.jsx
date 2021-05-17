import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HOME } from '../../../routes'

// Components
import Landing from '../../../pages/landing'
import Nav from '../../ui/nav'
import Footer from '../../ui/footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path={HOME}>
                    <Landing />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Router

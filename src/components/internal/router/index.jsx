import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HOME, SEARCH_PAGE, USER_PAGE } from '../../../routes'

// Components
import Landing from '../../../pages/landing'
import SearchPage from '../../../pages/search'
import UserPage from '../../../pages/user'
import Nav from '../../ui/nav'
import Footer from '../../ui/footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path={`${USER_PAGE}/:username`}>
                    <UserPage location={window.location.pathname} />
                </Route>
                <Route path={SEARCH_PAGE}>
                    <SearchPage />
                </Route>
                <Route path={`${HOME}:topic`}>
                    <Landing />
                </Route>
                <Route path={HOME}>
                    <Landing />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Router

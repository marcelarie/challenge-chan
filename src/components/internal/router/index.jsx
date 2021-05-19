import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HOME, SEARCH_PAGE } from '../../../routes'

// Components
import Landing from '../../../pages/landing'
import SearchPage from '../../../pages/search'
import Nav from '../../ui/nav'
import Footer from '../../ui/footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path={SEARCH_PAGE}>
                    <SearchPage />
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

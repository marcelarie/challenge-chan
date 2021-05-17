import Router from './components/internal/router'
import Theme from './components/internal/theme-provider'
import useOnAuthStateChanged from './custom-hooks/onAuthState'

import './styles/reset.scss'
import './styles/fonts.scss'

const App = () => {
    useOnAuthStateChanged()
    return (
        <Theme>
            <Router />
        </Theme>
    )
}

export default App

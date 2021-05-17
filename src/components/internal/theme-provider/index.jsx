import { useSelector } from 'react-redux'
import { ThemeTypes } from '../../../redux/types/theme'
import { ThemeProvider as Provider } from 'styled-components'
import GlobalStyles from '../../../styles/global'
import { dark, light } from '../../../styles/theme'

const ThemeProvider = ({ children }) => {
    const { theme } = useSelector(({ themePicker }) => themePicker)

    const themeCondition = theme === ThemeTypes.DARK ? dark : light

    return (
        <Provider theme={themeCondition}>
            <GlobalStyles>{children}</GlobalStyles>
        </Provider>
    )
}

export default ThemeProvider

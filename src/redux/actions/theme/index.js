import { ThemeTypes } from '../../types/theme'

export const changeTheme = (payload) => {
    return {
        type: ThemeTypes.CHANGE_THEME,
        payload,
    }
}

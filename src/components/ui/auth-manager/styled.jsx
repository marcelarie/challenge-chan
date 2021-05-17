import styled from 'styled-components'

export default styled.div`
    form {
        border: 2px solid ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.background};
    }
`

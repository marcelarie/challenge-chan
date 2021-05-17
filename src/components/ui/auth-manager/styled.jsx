import styled from 'styled-components'

export default styled.div`
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.text};
`

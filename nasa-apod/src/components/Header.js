import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
    font-family: 'Train One', cursive;
    min-height: 10vh;
    padding: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    background: radial-gradient(rgba(43, 55, 56,.85), rgba(65, 78, 79,.6) 90%);
    @media(max-width: 700px) {
        font-size: 1rem;
        padding: .95rem;
    }
`

const Header = (props) => {
    return (
        <HeaderStyle>
            <span>Title</span>
            <h2>{props.title}</h2>
            <span>Date</span>
            <h2>{props.date}</h2>
        </HeaderStyle>
    )
}

export default Header
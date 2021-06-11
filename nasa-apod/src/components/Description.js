import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VidPlyr = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Poppins', sans-serif;
        width: 75%;
        padding: .5rem 0;
    }
    h4 {
        margin: 1rem 0 0;
        text-decoration: underline;
    }
    iframe {
        border: 1px solid green;
        border-left: none;
        border-right: none;
    }
    @media(max-width:700px){
        align-items: start;
        justify-content: start;
        div:first-child{
            display:flex;
            justify-content:center;
        }
        iframe{
            width: auto;
            height: 30vh;
        }
    }
`
const ImgWrp = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
    background: linear-gradient( rgba(65, 78, 79,.6), rgba(43, 55, 56) );
    border-bottom: .5px solid rgba(0,0,0,1);
    min-height: 90vh;
    img {
        border: .5px solid rgba(0,0,0, .85);
        border-radius: .5rem;
        box-shadow: 0 .15rem 1rem .25rem;
        margin: .5rem auto auto 1rem;
        width: 45%;
    }
    section {
        display: flex;
        flex-flow: column;
        width: 50%;
    }
    p {
        width: 85%;
        padding: .5rem 0;
    }
    h4 {
        margin: 1rem 0 0;
        text-decoration: underline;
    }
    @media(max-width: 700px) {
        flex-flow: column;
        align-items: center;
        section {
            width: 100%;
        }
        h4 {
            text-align: center;
        }
        p {
            text-align: left;
            width: 95%;
            padding: .5rem 0;
            margin-left: .5rem;
        }
        img {
            width: 95%;
            height: auto;
        }
    }
`

const Description = (props) => {
   if(props.mediaType === "video") {
    return (
        <VidPlyr>
            <ReactPlayer url={props.url} playing={0} controls={true} height={"720px"} width={"100%"}/>
            <h4>Explanation</h4>
            <p>{props.expl}</p>
        </VidPlyr>
     )
   }else if(props.mediaType === "image"){
       return (
           <ImgWrp>
            <img src={props.hdurl} alt="apod"/>
            <section>
                <h4>Explanation</h4>
                <p>{props.expl}</p>
            </section>
           </ImgWrp>
       )
   }else {
       return (
           <>
           </>
       )
   }
}

export default Description
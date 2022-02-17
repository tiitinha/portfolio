import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import GithubImg from '../images/GitHub-Mark/PNG/GitHub-Mark-32px.png';
import LinkedInImg from '../images/LinkedIn-Logos/LI-In-Bug.png';

const ContactDetails = styled.div`
    height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgDiv = styled.div`
    padding: 10px;
`

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage = () => {

    const githubLink = 'https://github.com/tiitinha';
    const LinkedinLink = 'https://linkedin.com/harritiitinen';

    return (
        <main style={pageStyles}>
            <ContactDetails>
                <ImgDiv>
                    <Link to={githubLink}>
                        <img src={GithubImg} className='githubIcon' />
                    </Link>
                </ImgDiv>
                <ImgDiv>
                    <Link to={LinkedinLink}>
                        <img width='32' src={LinkedInImg} className='liIcon' />
                    </Link>
                </ImgDiv>
            </ContactDetails>
            <title>Harri Tiitinen</title>
            <h1>Harri Tiitinen</h1>
            <h2>CV</h2>
        </main>
    )
}

export default IndexPage

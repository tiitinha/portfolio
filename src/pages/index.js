import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

import Footer from '../components/Footer';

const ContactDetails = styled.div`
    height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgDiv = styled.div`
    padding: 2px;
`;

const Header = styled.h1`
    justify-content: center;
    text-align: center;
`;

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage = () => {

    const githubLink = 'https://github.com/tiitinha';
    const LinkedinLink = 'https://linkedin.com/harritiitinen';
    const StackLink = 'https://stackoverflow.com/users/13194980/tiitinha';

    return (
        <main style={pageStyles}>
            <ContactDetails>
                <ImgDiv>
                    <Link to={githubLink}>
                        <FaLinkedin size={32}/>
                    </Link>
                </ImgDiv>
                <ImgDiv>
                    <Link to={LinkedinLink}>
                        <FaGithub size={32} />
                    </Link>
                </ImgDiv>
                <ImgDiv>
                    <Link to={StackLink}>
                        <FaStackOverflow size={32} />
                    </Link>
                </ImgDiv>
            </ContactDetails>
            <title>Harri Tiitinen</title>
            <Header>Harri Tiitinen</Header>
            <Footer />
        </main>
    )
}

export default IndexPage

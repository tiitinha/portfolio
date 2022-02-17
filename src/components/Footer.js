import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  font-size: 10px;
  `;

const Footer = () => {
    return (
        <FooterContainer>
            © 2022 Footer boilerplate
        </FooterContainer>
    );
}

export default Footer;
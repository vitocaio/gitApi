import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../static/logo.png';

const Icon = styled(FontAwesomeIcon)`
`;
const Nav = styled.nav`
width: 100%;
background: ${props => props.theme.colorWhite};
`;
const Title = styled.h5`
float: right;
margin: 13px;
`;
const Link = styled.a`
text-decoration: none;
color: ${props => props.theme.colorGray02};
&:hover {
  color: ${props => props.theme.colorRed};
}
`;

export default ({
  title, children,
}) => (

  <header className="page-header">
    <Nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <Icon icon="bars" />
      </button>
      <Link className="navbar-brand" href="./list">
        <img width="60px" className="img-logo-vr-sm-white" alt="Logo VR" src={logo} />
        <Title>{title}</Title>
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
        </ul>
        <Link className="nav-link" href="./about"> About Me </Link>
        {children}
      </div>
    </Nav>
  </header>
);

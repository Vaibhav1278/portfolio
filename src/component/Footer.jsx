
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import {Bio} from '../data/constants';
// import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

// const FooterContainer = styled.footer`
//   background-color: ${({ theme }) => theme.footer_bg};
//   padding: 20px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FooterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 1200px;
//   width: 100%;
//   padding: 0 20px;
// `;

// const Logo = styled.div`
//   font-size: 28px;
//   font-weight: bold;
//   color: ${({ theme }) => theme.text_primary};
//   margin-bottom: 20px;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 15px;
//   margin-bottom: 20px;
// `;

// const StyledNavLink = styled(NavLink)`
//   color: ${({ theme }) => theme.text_secondary};
//   text-decoration: none;
//   font-size: 16px;
//   &:hover {
//     color: ${({ theme }) => theme.text_primary};
//   }
//   cursor: pointer;
// `;

// const SocialMediaIcon = styled.div`
//   display: flex;
//   gap: 15px;
// `;

// const SocialMedia = styled.a`
//   color: ${({ theme }) => theme.text_secondary};
//   font-size: 24px;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
//   cursor: pointer;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         <Logo>Vansh Jian</Logo>
//         <Nav>
//           <StyledNavLink to="#about">About</StyledNavLink>
//           <StyledNavLink to="#projects">Projects</StyledNavLink>
//           <StyledNavLink to="#contact">Contact</StyledNavLink>
//           <StyledNavLink to="#education">Resume</StyledNavLink>
//           <StyledNavLink to="#skills">Skills</StyledNavLink>
//         </Nav>
//         <SocialMediaIcon>
//           <SocialMedia href={Bio?.facebook} target="_blank">
//             <FacebookRounded />
//           </SocialMedia>
//           <SocialMedia href={Bio?.twitter} target="_blank">
//             <Twitter />
//           </SocialMedia>
//           <SocialMedia href={Bio?.insta} target="_blank">
//             <Instagram />
//           </SocialMedia>
//           <SocialMedia href={Bio?.linkedin} target="_blank" > 
//             <LinkedIn  />
//           </SocialMedia>
//         </SocialMediaIcon>
//       </FooterWrapper>
//     </FooterContainer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Bio } from '../data/constants';
import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const FooterContainer = styled.footer`
  ${'' /* background-color: ${({ theme }) => theme.footer_bg}; */}
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const Nav = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
  cursor: pointer;
`;

const SocialMediaIcon = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialMedia = styled.a`
display:inline-block;
transition: all 0.3s ease; 
  color: ${({ theme }) => theme.text_secondary};
  font-size: 24px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  cursor: pointer;
`;

const Footer = () => {
    console.log(Bio)
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Vansh Jain</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#education">Resume</NavLink>
          <NavLink href="#skills">Skills</NavLink>
        </Nav>
        <SocialMediaIcon>
          {Bio?.facebook && (
            <SocialMedia href={Bio.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookRounded />
            </SocialMedia>
          )}
          {Bio?.twitter && (
            <SocialMedia href={Bio.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </SocialMedia>
          )}
          {Bio?.insta && (
            <SocialMedia href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <Instagram />
            </SocialMedia>
          )}
          {Bio?.linkedin && (
            <SocialMedia href={Bio.linkedin} target="display" rel="noopener noreferrer">
              <LinkedIn />
            </SocialMedia>
          )}
        </SocialMediaIcon>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

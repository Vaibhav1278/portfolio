import React from 'react'
import styled from 'styled-components'
import {Link, } from 'react-router-dom'
import {Bio} from '../../src/data/constants' //Bio from '../../src/data/constants'
import {CiMenuBurger} from 'react-icons/ci'


const Nav = styled.div`
background-color:${({theme}) => theme.bg};
hight:80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
color:white;
font-size:1.1rem;
top:0;
z-index:10;



`
const MobileIcon = styled.div`
display:flex;
hieght:100%;
align-items:center;
display:none;
${'' /* @media screen and (max-width: 768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color:${({theme}) => theme.primary}; */}

`

const NavbarContainer = styled.div`
background-color:${({theme}) => theme.bg};
hight:80px;
display:flex;
justify-content:center;
align-items:center;
max-width:1200px;
width:100%;
padding: 0 26px;
margin-top:30px;

font-size:1.1rem;
`
const NavLogo = styled(Link)`
padding: 0, 6px;
text-decoration:none;
color:inherit;
margin-right: 40px;
width:30%;
font-weight:700;
font-size:30px;

`
const NavItems = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding: 0 6px;
list-style:none;
gap:33px;
margin-left:50px;


`
const NavLink = styled.a`
color: ${({theme}) => theme.text_primary};
text-decoration:none;
cursor:pointer;
background-color:${({theme}) => theme.bg};
font-weight:500;
transition:0.3s ease-in-out;

&:hover{
    color:${({theme}) => theme.primary};
}


`

const ButtonContainer = styled.div`
padding: 0 6px;
width:80%;
display:flex;
justify-content:end;
background-color:${({theme}) => theme.bg};
align-items:center;
hight:100%;
@media screen and (max-width: 768px) {
    display:none;
}
`
   const GithubButton = styled.a`
   border : 1px solid ${({theme}) => theme.primary};
   border:none;
   display:flex;
   justify-content:center;
   align-items:center;
   gap:8px;
   border-radius:16px;
   cursor:pointer;
   padding: 14px 20px;
   color:${({theme}) => theme.primary};
   padding: 4px 16px; 
   font-size:1.1rem;
   font-weight: 500;

   transition:0.5s ease-in-out;

   &:hover{
    background-color:${({theme}) => theme.primary};
    color:${({theme}) => theme.text_primary};
   }


   `
   const MobileMenu = styled.ul`
display:flex;
align-items:start;
justify-content:center;
width:100%;
padding: 12px 40px 24px 40px;
list-style:none;
flex-direction:column;
gap:32px;
top:80px;
background-color:${({theme}) => theme.card_light +99};
right:0;
position:absolute;
font-size:1.1rem;
font-weight:500;
transition:0.3s ease-in-out;
transform:${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20px 20px ;
opacity: ${({open}) => open ? '100%' : '0'};
z-index:100;


`
const Navbar = () => {
    const[open,setOpen] = React.useState(false)
  return (
    <Nav>
<NavbarContainer>
<NavLogo to='/'>
Portfolio
</NavLogo>
<MobileIcon onClick={() => setOpen(!open)}>
<CiMenuBurger />
</MobileIcon>
<NavItems>
    <NavLink href='#about' >About</NavLink>
    <NavLink href='#skills' >Skills</NavLink>
    <NavLink href='#experience' >Experience</NavLink>
    <NavLink href='#projects' >Projects</NavLink>
    <NavLink href='#education' >Education</NavLink>

</NavItems>
{
    open && (
        <MobileMenu>
    <NavLink hrefLang='#about' >About</NavLink>
    <NavLink hrefLang='#skills' >Skills</NavLink>
    <NavLink hrefLang='#experience' >Experience</NavLink>
    <NavLink hrefLang='#projects' >Projects</NavLink>
    <NavLink hrefLang='#education' >Education</NavLink>
    {/* <GithubButton href = {Bio.github}>
        Github Profile
    </GithubButton> */}
    </MobileMenu>
    )
}
<ButtonContainer>
    <GithubButton href= {Bio?.github} target ="_blank">
        Github Profile
    </GithubButton>
</ButtonContainer>
</NavbarContainer>
    </Nav>

  )
}

export default Navbar


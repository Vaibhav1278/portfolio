import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../data/constants';
import ProjectCard from './ProjectCard';
import EarthCanvas from './Earth';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  max-width: 1200px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 968px) {
    font-size: 24px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const TogglebuttonGroup = styled.div`
display: flex;
border:1.5px solid ${({ theme }) => theme.primary};
font-size: 18px;
border-radius: 10px;
margin: 20px 0;
`
const ToggleButton = styled.div`
padding: 10px 20px;
cursor: pointer;
border-radius: 10px;
&:hover{
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.text_primary};
}
@media screen and (max-width: 768px) {
padding: 5px 10px;
border-radius: 5px;
}

${({ active,theme }) =>
  active &&
  `
background-color: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.text_primary};
`};
`
const Divider = styled.div`
height: 30px;
width: 1.6px;
background-color: ${({ theme }) => theme.primary};
`
const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 29px;
`
const Project = () => {
    const[toggle,settoggle] = useState('all')
  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc> i have Worked on Wide range op Projects. From Strach .Here are some of my Projects </Desc>
<TogglebuttonGroup>
    <ToggleButton onClick={() => settoggle("all")} active={toggle === "all" }>All</ToggleButton>
    <Divider/>
    <ToggleButton onClick={() => settoggle("web app")} active={toggle === "web app" }>Web App</ToggleButton>
    <Divider/>
    <ToggleButton onClick={() => settoggle("golang project")} active={toggle === "golang project" }>Golang Project</ToggleButton>
    

</TogglebuttonGroup>
<CardContainer>
    {toggle === "all" && projects.map((item)=><ProjectCard project={item}/> )} 
    {projects.filter((item)=>item.category === toggle).map((item)=><ProjectCard project={item}/> )}
</CardContainer>
      </Wrapper>
      <EarthCanvas />
    </Container>
  )
}

export default Project
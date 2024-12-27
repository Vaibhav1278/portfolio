import React from 'react'

import styled from 'styled-components'
import { skills } from '../data/constants'

import Tilt from 'react-parallax-tilt'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1;
position: relative;

align-items: center;

`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
flex-direction: column;
gap:12px;
max-width: 1200px;
${'' /* @media screen and (max-width: 960px) {
    flex-direction: column;
} */}
`

const Title = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 20px;
color:${({theme}) => theme.text_primary};
@media screen and (max-width: 968px) {
    font-size: 24px;
}`

const Desc = styled.div`
font-size: 18px;
font-weight: 600;
text-align: center;
color:${({theme}) => theme.text_secondary};

`

const SkillsContainer = styled.div`
margin-top: 20px;
width: 100%;
display:flex;
flex-wrap: wrap;
justify-content: center;
gap: 50px;
margin-top: 20px;




`

const Skil = styled.div`
width: 100%;
max-width: 500px;
background-color:rgba(17,25,40,0.83);
box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
border-radius: 16px;
padding: 18px 36px;

`

const SkilTitle = styled.div`
font-size: 22px;
font-weight: 600;
margin-bottom:20px;
text-align: center;
color:${({theme}) => theme.text_secondary};


`

const SkilList = styled.div`
display: flex;
justify-content: center;
gap: 12px;
margin-bottom: 20px;
flex-wrap: wrap;`


const SkilItem = styled.div`
font-size: 14px;
color:${({theme}) => theme.text_primary +80};
border: 1px solid ${({theme}) => theme.text_primary +80};
border-radius: 12px;
padding: 12px 16px;
display: flex;
align-items: center;
gap: 8px;



`

const SkillImage = styled.img`
width: 26px;
height: 26px;
`

const Skills = () => {
  return (
    <Container id="skills">
        <Wrapper>
            <Title>Skills</Title>
            <Desc>
                Here are some of my skills on which I have been working. past 3 years
            </Desc>
            <SkillsContainer>
                {
                    skills.map((skill,index) => (
                        <Tilt>
                        <Skil key={index}>
                            <SkilTitle>
{skill.title}
                            </SkilTitle>
                            <SkilList>
{skill.skills.map((item,index) => (
    <SkilItem key={`skill-x-${index}`}>
        {/* <SkillImage  src={item?.image} alt={item?.name}/> */}
            {item.name}
        
    </SkilItem>
    
                    ))}
                            </SkilList>
                        </Skil>
                        </Tilt>
               )) }
            </SkillsContainer>
        </Wrapper>
    </Container>
  )
}

export default Skills
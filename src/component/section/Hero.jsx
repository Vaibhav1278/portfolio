import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import download from '../../assets/download.jpeg'
import Typewriter from 'typewriter-effect'
import HeroBgAnimation from '../../HeroBgAnimation'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { headContainerAnimation, headContentAnimation, headTextAnimation} from '../../utils/motion'
// import StarCanvas from '../Star' 
const HeroContainer = styled.div`
display: flex;
justify-content: center;
position: relative;
padding:80px 30px;
z-index: 1;
@media screen and (max-width: 960px) {
    padding:66px 16px;

}
@media screen and (max-width: 640px) {
    padding:32px 16px;
}
clip-path: polygon(0 0, 100% 0, 100% 100%,70% 95%, 0 100%);
`

const HeroInner = styled.div`
position: relative;
width: 100%;
max-width: 1200px;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
gap: 32px;

@media  (max-width: 960px) {
    flex-direction: column;
}
`
const HeroLeft = styled.div`
width: 100%;
order:1;
gap: 6px;

@media  (max-width: 960px) {
    order:2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

`
const HerRight = styled.div`
width: 70%;
order:2;
display: flex;
justify-content: end;

margin-left: 32px;

@media  (max-width: 960px) {
    order:1;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom:80px;

}
@media  (max-width: 640px) {
    margin-bottom: 32px;
}

`
const Title = styled.div`
font-weight: 700;
font-size: 48px;
line-height: 68px;
color: ${({theme}) => theme.text_primary};
@media  (max-width: 960px) {
    text-align: center;
    
}

`
const Span = styled.div`
font-weight: 700;
cursor: pointer;
font-size: 36px;
line-height: 68px;
color: blue;
`
const TextLoop = styled.div`
font-weight: 600;
font-size: 38px;
display: flex;
gap:12px;

line-height: 68px;
color: ${({theme}) => theme.text_primary};

`

const SubTitle = styled.div`
font-weight: 400;
font-size: 18px;
line-hieght: 32px; 
margin-bottom: 42px;                                                                                             
gap:12px;

color: ${({theme}) => theme.text_primary + 95};
`
const ResumeButton = styled.a`
-webkit-appearance:button;
-moz-appearance:button;
appearance:button;
text-decoration: none;
text-align: center;
font-weight: 600;
font-size: 18px;
width: 35%;
max-width: 300px;
line-height: 32px;
padding: 10px 0px;
border: 1px solid ${({theme}) => theme.text_primary};
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
)
box-shadow:20px 20px 60px #1f2634, -20px, -20px, 60px #1f2634;
border-radius: 38px;
`

const Img = styled.img`
border-radius: 50%;
width: 430px;
height: 430px;
object-fit: cover;

${'' /* max-width: 400px;
max-height: 400px; */}
border:2px solid ${({theme}) => theme.text_primary + 95};

`
const HeroBg = styled.div`
position: absolute;
max-width: 1200px;
justify-content: end;
display: flex;
top: 50%;
right: 0;
bottom: 0;
left: 50%;
width: 100%;
height: 100%;

-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

background:{{theme}) => theme.text_primary + 95};
`
const Hero = () => {
  return (
    <div id='about'>
    <HeroContainer>
    <HeroBg>
    {/* <StarCanvas/> */}
        <HeroBgAnimation/>
    </HeroBg>
    <motion.div {...headContainerAnimation} >
    <HeroInner>
        <HeroLeft>
        <motion.div {...headTextAnimation} >
            <Title>
            Hi ,I am <br/> {Bio.name}    
            </Title>
       
            <TextLoop>
                I'm 
                <Span>
        

                    <Typewriter options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,


                    }}

                    />
                </Span>
            </TextLoop>
            </motion.div>
            <motion.div {...headContentAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
            </motion.div>
            <ResumeButton href={Bio.resume} > Check Resume</ResumeButton>
        </HeroLeft>
            <HerRight>
            <motion.div {...headContentAnimation} >
            <Tilt>
                <Img src='https://media.licdn.com/dms/image/D4D16AQHtKgmi4__TmA/profile-displaybackgroundimage-shrink_350_1400/0/1688255009117?e=1725494400&v=beta&t=UMeAMD3NrstC1rokZ7XlzzZGQ8MungncYFZ3HfspnAA' alt=""/>
            </Tilt>
            </motion.div>
                
            </HerRight>

        </HeroInner>
    </motion.div>

    
        
    </HeroContainer>
    
    </div>
  )
}

export default Hero
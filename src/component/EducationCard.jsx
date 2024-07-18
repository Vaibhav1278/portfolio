// import React from 'react'

// import { VerticalTimeLineElement } from 'react-vertical-timeline-component'
// const ExperiencCard = ({education}) => {
//   return (
//      <VerticalTimeLineElement 
//     //  iconStyle = {
//     //     <img width='100%' height='100%' alt = {education.school} 
//     //     style ={{borderRadius: '50%', objectFit: 'cover'}}
//     //     src = {education.img}
//     //     />
//      >
   
// contentStyle = {{
// display: 'flex',
// flexDirection: 'column',
// alignItems: 'center',
// justifyContent: 'center',
// background:'#1d11836',
// color: 'white',
// gap: '12px',
// boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px ",
// backgroundColor: 'rgba(255,255,2555,0.125)',
// border: '1px solid rgba(255,255,2555,0.125)',
// borderRadius: '5px',

// }}
//     contentArrowStyle = {{
// borderRight: '7px solid  rgb(255,255,255,0.125)',
// }}
// date = {education.date}

//     </VerticalTimeLineElement>
//   )
// }

// export default ExperiencCard


import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
const Degree = styled.div`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary +99};
`
const Date = styled.div`
font-size: 12px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary +80};

`
const School = styled.div`
font-size: 18px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary +99};
`
const Image = styled.img`

height: 50px;
border-radius: 10px;
margin-top:4px

`
const Body = styled.div`
display: flex;
width: 100%;
flex-direction: column;

`
const Top = styled.div`
display: flex;
gap: 10px;
width: 100%;
max-width:100%;

`
const Grade = styled.div`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary +99};
`
const Description = styled.div`
font-size: 18px;
`
const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      iconStyle={{
      backgroundImage: `url(${education.img})`,
      backgroundSize: 'cover',
      backgroundColor: 'rgba(23,92,230,0.15)',
      
        color: '#fff',
      }}
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1d11836',
        color: 'white',
        gap: '12px',
        boxShadow: 'rgba(23,92,230,0.15) 0px 4px 24px',
        backgroundColor: 'rgba(255,255,255,0.125)',
        border: '1px solid rgba(255,255,255,0.125)',
        borderRadius: '5px',
        // backgroundImage:education?.img,
      }}
      contentArrowStyle={{
        borderRight: '7px solid rgb(255,255,255,0.125)',
      }}
      date={education?.date}
    >
    <Top>
        <Image src = {education.img} alt = {education.school} />
        <Body>
            <School>
              {education.school}
            </School>
            <Degree>
              {education.degree}
            </Degree>
            <Date>{education?.date}</Date>
        </Body>
    </Top>
    <Grade>
        <b>Grade:</b>
        {education.grade}
    </Grade>
    <Description>
        {education.desc && <span>{education.desc}</span>}
    </Description>
    <h3>{education?.school}</h3>
      <h4>{education?.degree}</h4>
      <p>{education?.date}</p>
    </VerticalTimelineElement>
  );
};

export default EducationCard;

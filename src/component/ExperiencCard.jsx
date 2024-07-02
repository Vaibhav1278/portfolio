// import React from 'react'

// import { VerticalTimeLineElement } from 'react-vertical-timeline-component'
// const ExperiencCard = ({experience}) => {
//   return (
//      <VerticalTimeLineElement 
//     //  iconStyle = {
//     //     <img width='100%' height='100%' alt = {experience.school} 
//     //     style ={{borderRadius: '50%', objectFit: 'cover'}}
//     //     src = {experience.img}
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
// date = {experience.date}

//     </VerticalTimeLineElement>
//   )
// }

// export default ExperiencCard


import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperiencCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      iconStyle={{
        background: 'rgb(33, 150, 243)',
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
      }}
      contentArrowStyle={{
        borderRight: '7px solid rgb(255,255,255,0.125)',
      }}
      date={experience?.date}
    >
      <h3>{experience?.role}</h3>
      <h4>{experience?.company}</h4>
      <p>{experience?.description}</p>
    </VerticalTimelineElement>
  );
};

export default ExperiencCard;

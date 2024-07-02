// import React from 'react'
// import styled from 'styled-components'
// import { experiences } from '../data/constants'
// import ExperiencCard from './ExperiencCard'
// import { VerticalTimeline} from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// z-index: 1;
// position: relative;

// align-items: center;

// `

// const Wrapper = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
// width: 100%;
// flex-direction: column;
// gap:12px;
// max-width: 1200px;
// ${'' /* @media screen and (max-width: 960px) {
//     flex-direction: column;
// } */}
// `

// const Title = styled.div`
// font-size: 42px;
// font-weight: 600;
// text-align: center;
// margin-top: 20px;
// color:${({theme}) => theme.text_primary};
// @media screen and (max-width: 968px) {
//     font-size: 24px;
// }`

// const Desc = styled.div`
// font-size: 18px;
// font-weight: 600;
// text-align: center;
// color:${({theme}) => theme.text_secondary};

// `

// const Experience = () => {
//   return (
//     <Container>
// <Wrapper>
// <Title>
//    Experience
// </Title>
//  <Desc>My Work Experience as A Software Engineer and Frontend Developer Companies and projects</Desc>
//  <VerticalTimeline>
//     {experiences.map((experience,index) => (
//         <ExperiencCard experience={experience} key={index} />
        
        
        
        
//         ))}
//  </VerticalTimeline>
// </Wrapper>

//     </Container>
//   )
// }

// export default Experience


import React from 'react';
import styled from 'styled-components';
import { experiences } from '../data/constants';
import ExperiencCard from './ExperiencCard';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

const Experience = () => {
  return (
    <Container id='experience'>
      <Wrapper>
        <Title>Experience</Title>
        <Desc>My Work Experience as A Software Engineer and Frontend Developer Companies and projects</Desc>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperiencCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;

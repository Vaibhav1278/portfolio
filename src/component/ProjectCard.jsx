

// import React from 'react';
// import styled from 'styled-components';

// const Card = styled.div`
//   width: 330px;
//   height: 490px;
//   cursor: pointer;
//   background-color: ${({ theme }) => theme.card};
//   border-radius: 10px;
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 17px;
//   transition: all 0.5s ease-in-out;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// // const Video = styled.video`
// //   width: 100%;
// //   height: 200px;
// //   background-color: ${({ theme }) => theme.white};
// //   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.6);
// //   controls: true;
// // `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   align-items: center;
//   margin-top: 4px;
// `;
// const Image = styled.img`
//  width:100%;
//  hieght:200px;
//  background-color:${({theme}) => theme.white};
//  box-shadow: 0 0 16px 2px rgba(0,0,0,0.6);
// `;
// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_secondary}80;
//   font-weight: 400;
//   @media screen and (max-width: 480px) {
//     font-size: 12px;
//   }
// `;

// const Description = styled.div`
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
//   color: ${({ theme }) => theme.text_secondary}99;
//   max-width: 100%;
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 14px;
//   text-align: center;
// `;

// const Tag = styled.div`
//   color: ${({ theme }) => theme.primary};
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 14px;
//   background-color: ${({ theme }) => theme.card};
//   padding: 5px 10px;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const ProjectCard = ({ project }) => {
//     console.log('Video URL:', project?.video);
//   return (
//     <Card>
//       <video width={500} height={500} controls >
//         <source src={project.video} type="video/mp4" alt="video"   />
//         Your browser does not support the video tag.
//       </video>
//       {/* <Image src={project?.image}/> */}
//       <Tags>
//         {project?.tags.map((tag, index) => (
//           <Tag key={index}>{tag}</Tag>
//         ))}
//       </Tags>
//       <Details>
//         <Title>{project?.title}</Title>
//         <Date>{project?.date}</Date>
//         <Description>{project?.description}</Description>
//       {/* <p> livelink:- {project.webapp}</p>  */}
//       </Details>
//       <Button href={project?.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;


import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 530px;
  height: 630px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.6);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary}80;
  font-weight: 400;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary}99;
  max-width: 100%;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
`;

const Tag = styled.div`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  background-color: ${({ theme }) => theme.card};
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProjectCard = ({ project }) => {
  console.log('Video URL:', project?.video);

  return (
    <Card>
      {/* <video width="100%" height="200" controls>
        <source src={project?.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe style={{ width: '100%', height: '400px' }}
        src={project?.video}
        width="340"
        height="580"
        // allow="autoplay"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title="Video"

    
      ></iframe>
      {/* <Image src={project?.image}/> */}
      <Tags>
        {project?.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project?.title}</Title>
        <Date>{project?.date}</Date>
        <Description>{project?.description}</Description>
      </Details>
      <Button href={project?.github} target="_blank">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;


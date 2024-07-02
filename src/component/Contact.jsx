// // import React from 'react';
// // import styled from 'styled-components';
// // import { education, experiences } from '../data/constants';
// // import ExperiencCard from './ExperiencCard';
// // import { VerticalTimeline } from 'react-vertical-timeline-component';
// // import 'react-vertical-timeline-component/style.min.css';
// // import EducationCard from './EducationCard';

// // const Container = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   z-index: 1;
// //   position: relative;
// //   margin-top: 40px;
// // `;

// // const Wrapper = styled.div`
// //   position: relative;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   width: 100%;
// //   flex-direction: column;
// //   gap: 12px;
// //   max-width: 1200px;
// // `;

// // const Title = styled.div`
// //   font-size: 42px;
// //   font-weight: 600;
// //   text-align: center;
// //   margin-top: 20px;
// //   color: ${({ theme }) => theme.text_primary};
// //   @media screen and (max-width: 968px) {
// //     font-size: 24px;
// //   }
// // `;

// // const Desc = styled.div`
// //   font-size: 18px;
// //   font-weight: 600;
// //   text-align: center;
// //   color: ${({ theme }) => theme.text_secondary};
// // `;
// // const ContactForm = styled.div`
// // display: flex;
// // flex-direction: column;
// // background-color:rgba(17,25,40,0.83);
// // border:1px solid rgba(255,255,255,0.1);
// // border-radius: 12px;
// // box-shadow:rgba(23,92,230,0.2) 0px 7px 29px;
// // margin-top: 20px;
// // gap: 12px;



// // `

// // const ContactTitle = styled.div`
// // font-size:28px;
// // font-weight: 600;
// // color: ${({ theme }) => theme.text_primary};
// // margin-bottom: 12px;
// // `

// // const ContactInput = styled.input`
// //   flex:1;
// //   background-color: transparent;
// //   border: 1px solid ${({ theme }) => theme.text_primary};
// //   border-radius: 12px;
// //   padding: 10 18px;
// //   font-size: 16px;
// //   outline:none;
// //   color: ${({ theme }) => theme.text_primary};
// //   &:focus{
// //     border: 1px solid ${({ theme }) => theme.primary};
// //   }
  
// // `

// // const ContactButton = styled.input`
// // width: 100%;
// // text-decoration:none;
// // background: hsla(271,100%,50%,1)
// // padding: 10px 18px;
// // border-radius: 12px;
// // color: #fff;
// // border:none;
// // font-size: 16px;
// // font-weight: 600;
// // `
// // const ContactInputMeasage = styled.textarea`
// //   width:100%;
// //   text-decoration:none;
// //   background: hsla(271,100%,50%,1)
// //   padding: 10px 18px;
// //   border-radius: 12px;
// //   color: ${({ theme }) => theme.text_primary};
// //   border:none;
// //   font-size: 16px;
// //   font-weight: 600;
// //   &:focus{
// //     border: 1px solid ${({ theme }) => theme.primary};
// //   }
  
  
// // `


// // const Contact = () => {
// //   return (
// //     <Container>
// //     <Wrapper>
// //       <Title>Contact</Title>
// //       <Desc> Feel free to contact me. </Desc>
// //       <ContactForm>
// //         <ContactTitle>Email me </ContactTitle>
// //         <ContactInput placeholder="Your email" name="email" />
// //         <ContactInput placeholder="Your name" name="name" />
// //         <ContactInputMeasage placeholder="Your message" name="message" />
// //         <ContactInput placeholder="Subject" name="subject" />   
// //         <ContactButton value="Send" type="submit"></ContactButton>
// //       </ContactForm>
// //     </Wrapper>
// //   </Container>
// //   )
// // }

// // export default Contact



// import React from 'react';
// import styled from 'styled-components';
// import emailjs from '@emailjs/browser';
// import { useRef } from 'react';
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   z-index: 1;
//   position: relative;
//   margin-top: 40px;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   flex-direction: column;
//   gap: 12px;
//   max-width: 1200px;
// `;

// const Title = styled.div`
//   font-size: 42px;
//   font-weight: 600;
//   text-align: center;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media screen and (max-width: 968px) {
//     font-size: 24px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   font-weight: 600;
//   text-align: center;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// const ContactForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 12px;
//   box-shadow: rgba(23, 92, 230, 0.2) 0px 7px 29px;
//   margin-top: 20px;
//   gap: 12px;
//   padding: 20px;
//   width:40%;
//   margin-bottom: 150px;
// `;

// const ContactTitle = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   margin-bottom: 12px;
// `;

// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 10px 18px;
//   font-size: 16px;
//   outline: none;
//   color: ${({ theme }) => theme.text_primary};
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;

// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   background: hsla(271, 100%, 50%, 1);
//   padding: 10px 18px;
//   border-radius: 12px;
//   color: #fff;
//   border: none;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
// `;

// const ContactInputMessage = styled.textarea`
//   width: 100%;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 10px 18px;
//   font-size: 16px;
//   outline: none;
//   color: ${({ theme }) => theme.text_primary};
//   min-height: 100px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;

// const Contact = () => {
//     const form = useRef()
//     const handlesubmit = (e) => {
// e.preventDefault()
// emailjs.sendForm('service_b3pqibe', 'template_dg3jzfa', form.current, 'jf56wdRYgXgY1ZNDd').then
// ((result)=>{
// alert('message sent')
// console.log(result.text)
// form.current.result()
// },
// (error)=>{
// alert(error.text)
// })
//     }
//   return (
//     <Container id ="contact">
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc>Feel free to contact me.</Desc>
//         <ContactForm onSubmit={handlesubmit} ref={form}>
//           <ContactTitle>Email me</ContactTitle>
//           <ContactInput placeholder="Your email" name="from_email" />
//           <ContactInput placeholder="Your name" name="from_name" />
//           <ContactInputMessage placeholder="Your message" name="message" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactButton value="Send" type="submit" />
//         </ContactForm>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Contact;


import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.2) 0px 7px 29px;
  margin-top: 20px;
  gap: 12px;
  padding: 20px;
  width: 40%;
  margin-bottom: 150px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 16px;
  outline: none;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  background: hsla(271, 100%, 50%, 1);
  padding: 10px 18px;
  border-radius: 12px;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 16px;
  outline: none;
  color: ${({ theme }) => theme.text_primary};
  min-height: 100px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  const form = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    emailjs
      .sendForm(
        'service_b3pqibe', // Your service ID
        'template_dg3jzfa', // Your template ID
        form.current,
        'jf56wdRYgXgY1ZNDd' // Your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to contact me.</Desc>
        <ContactForm onSubmit={handlesubmit} ref={form}>
          <ContactTitle>Email me</ContactTitle>
          <ContactInput placeholder="Your email" name="from_email" />
          <ContactInput placeholder="Your name" name="from_name" />
          <ContactInputMessage placeholder="Your message" name="message" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactButton value="Send" type="submit" />
        </ContactForm>
      </Wrapper>
      <Toaster/>
    </Container>
  );
};

export default Contact;


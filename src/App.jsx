// import React from 'react'
// import styled, { ThemeProvider } from 'styled-components'
// import { darkTheme } from './utils/Themes'
// import Navbar from './component/Navbar'
// import {BrowserRouter} from 'react-router-dom'
// import Hero from './component/section/Hero'
// import Skills from './component/Skills'
// import Experience from './component/Experience'
// import Education from './component/Education'
// import StarsCanvas from './component/Star'
// import Project from './component/Projects'
// import Contact from './component/Contact'
// import Footer from './component/Footer'
// import { Toaster } from 'react-hot-toast'
// const Body = styled.div`
//     background-color: ${({ theme }) => theme.bg};
//     color: ${({ theme }) => theme.text_primary};
//     width: 100%;
//     overflow-x: hidden;
//     position: relative;
    
// `

// const Wrapper = styled.div`
// padding-bottom: 100px;
// background: linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0,) 50%, rgba(0,70,209,0.15) 100%);
// width: 100%;
// clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);



// `

// const App = () => {
//   return (
//     <ThemeProvider theme={darkTheme}>
//     <BrowserRouter>
//     <Navbar/>
//     <Body>
//     <div>
// <StarsCanvas/>
// <Hero/>
// <Wrapper>
// <Skills/>
// <Experience/>
// <Education/>
// <Project/>
// <Contact/>
// </Wrapper>
// <Footer/>

// </div>
//     </Body>
//     </BrowserRouter>
//     <Toaster/>
//     </ThemeProvider>
//   )
// }

// export default App

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './component/Navbar';
import { Router } from 'react-router-dom';
import Hero from './component/section/Hero';
import Skills from './component/Skills';
import Experience from './component/Experience';
import Education from './component/Education';
// import StarsCanvas from './component/Star';
import Project from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0,) 50%, rgba(0,70,209,0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <div>
            {/* <StarsCanvas /> */}
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
              <Education />
              <Project />
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;


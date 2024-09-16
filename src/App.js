import './App.css';
import './BodyContents.css';
import formalpic from './bg/formalpicblack.jpg';
import facebookicon from './icons/1.png';
import gmailicon from './icons/2.png';
import linkedin from './icons/3.png';
import 'animate.css';
//import BodyComponent from './components/body';

function App() {
  return (
    <body className='body'>
      <div className="App">
      <header className="App-header animate__animated animate__fadeInLeft">
        <div className="Container" >
          <div className='For-icon'>
            <img src={formalpic} alt="Ruzle Tayao" className='Formalpic'/>
          </div>

          <div className='For-content'>
            <h1>RUZLE TAYAO</h1>
            <p style={{ color: 'white', fontWeight:'lighter', fontSize:'1.2rem' }}>WEB DEVELOPER • QA ENGINEER</p>
          </div>

          <div className='For-socialbuttons'>
            <a href='https://www.facebook.com/ruzle.tayao/' target='_blank' rel='noopener noreferrer'> 
              <img src={facebookicon} alt="Facebook" className='Socmedicons'/> 
            </a>

            <a href='mailto:ruzletayaoinwork@gmail.com'> 
              <img src={gmailicon} alt="Gmail" className='Socmedicons'/> 
            </a>
            
            <a href='https://www.linkedin.com/in/tayaoruzlejhonl' target='_blank' rel='noopener noreferrer'> 
              <img src={linkedin} alt="LinkedIn" className='Socmedicons'/> 
            </a>
          </div>

          {/* <div className='divider'></div> */}

          <div>
            <a href="/resume.pdf" 
              download="Tayao_RuzleJhon_Resume.pdf" 
              style={{cursor: 'pointer'}}> 
              <button className='downloadCV'> 
                Download CV 
              </button> 
            </a>
          </div>
        </div>
      </header>

      <div className='contentsContainer'>
        <div className='headerCard animate__animated animate__fadeInDown'>
          <h1>Hi! I'am Ruzle Tayao</h1>
          <p>
            I’m a versatile software engineer specializing in web development and a software QA. Through hands-on experience and project work, I’ve developed a unique blend of coding and testing expertise, allowing me to deliver robust, high-quality solutions.        
          </p>

          <h3 className='educationalBg'>EDUCATIONAL BACKGROUND</h3>
        </div>

        <div className='navBar animate__animated animate__fadeInUp'>
          ABOUT ME TECH STACK PROJECT
        </div>

        <div className='technicalCard animate__animated animate__fadeInRight'>
          <h1>MY TECHNICAL STACKS</h1>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>  

        <div className='projectCard animate__animated animate__fadeInRight'>
          <h1>PROJECTS</h1>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>  
      </div>
    </div>
    </body>
  );
}

export default App;

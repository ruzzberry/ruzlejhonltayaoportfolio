import './App.css';
import './BodyContents.css';
import formalpic from './bg/formalpicblack.jpg';
import facebookicon from './icons/1.png';
import gmailicon from './icons/2.png';
import linkedin from './icons/3.png';
//import BodyComponent from './components/body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
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

      <div className='contentsContainer'>Ruzle</div>
    </div>
  );
}

export default App;

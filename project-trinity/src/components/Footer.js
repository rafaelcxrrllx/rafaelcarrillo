// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import linkedin from '../assets/icons/linkedIn.svg';



function Footer() {

  return (

    <footer>
      <div className='footer-container'>
     

          <div>
              <a href='https://www.linkedin.com/in/rafaelcxrrllx/'><img src={linkedin} alt="instagram logo"/></a>
          </div>
          <div>
              <p className='logo'>
              2024 © RAFAEL CARRILLO
              </p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;

// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Footer.css'

// Assets
import instagram from '../assets/icons/instagram.svg';



function Footer() {

  return (

    <footer>
      <div className='footer-container'>
          <div>
              <a href='https://www.instagram.com/rafaelcxrrllx/'><img src={instagram} alt="instagram logo"/></a>
          </div>
          <div>
              <p>
              © 2024 TRINITY
              </p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;

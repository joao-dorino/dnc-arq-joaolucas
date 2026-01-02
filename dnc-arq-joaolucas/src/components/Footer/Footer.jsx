/*Linkando com outra pagina*/
import { useContext } from 'react'
import { Link } from 'react-router-dom'

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo-react.svg'
import BrazilIcon from '../../assets/brasil.svg'
import UsaIcon from '../../assets/estados-unid.svg'
import FacebookIcon from '../../assets/facebook.svg'
import LinkdinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'
import TwiterIcon from '../../assets/twiter.svg'

//CONTEXT
import Button from '../Button/Button'
import { AppContext } from '../../contexts/AppContext'


function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    };

    return (
        <footer>
            <div className="container">
                <div className='d-flex js-space-between mobile-fd-column '>
                    <div className='footer-logo-col'>
                        <img src={Logo} className='footer-logo' />
                        <p className='.gray-1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href="https://www.facebook.com/?locale=pt_BR" target='_blank'>
                                <img src={FacebookIcon} />
                            </a>

                            <a href="https://x.com/?lang=pt" target='_blank'>
                                <img src={TwiterIcon} />
                            </a>

                            <a href="https://www.linkedin.com/home?originalSubdomain=br" target='_blank'>
                                <img src={LinkdinIcon} />
                            </a>

                            <a href="https://www.instagram.com/" target='_blank'>
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>

                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/"> {appContext.languages[appContext.language].menu.home} </Link></li>
                                <li><Link to="/about"> {appContext.languages[appContext.language].menu.about} </Link></li>
                                <li><Link to="/projects"> {appContext.languages[appContext.language].menu.projects} </Link></li>
                                <li><Link to="/contact"> {appContext.languages[appContext.language].menu.contact} </Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br </p>
                            <p className='grey-1-color'>(19) 99187-4342 </p>

                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>

                        <Button buttonStyle="unstyled" onClick={() =>
                            changeLanguage('br')}>
                            <img src={BrazilIcon} height='29px' alt="Bandeira do Brasil" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() =>
                            changeLanguage('en')}>
                            <img src={UsaIcon} height='29px' background-color='white' alt="Bandeira dos EUA" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
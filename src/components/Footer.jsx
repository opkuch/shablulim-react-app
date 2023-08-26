import footerLogo from '../assets/images/footer-logo.jpg'
import facebookLogo from '../assets/images/svg/facebook.svg'
import instagramLogo from '../assets/images/svg/instagram.svg'
export const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} alt=""/>
            <div className='flex align-center'>
                <img src={facebookLogo} alt="facebook" className='social-link'/>
                <img src={instagramLogo} alt="instagram" className='social-link'/>
            </div>
        </footer>
    )
}
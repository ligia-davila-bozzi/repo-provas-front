import { FooterComponent } from '../styles/footerStyle';
import { 
    FaFacebookF,
    FaYoutube, 
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';

function Footer() {
    return (
        <FooterComponent>
            <ul>
                <li>
                    <a href='https://fb.me' target='_blank' rel='noreferrer'>
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href='https://youtu.be' target='_blank' rel='noreferrer'>
                        <FaYoutube />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                        <FaTwitter />
                    </a>
                </li>
            </ul>
            {`© ${new Date().getFullYear()} REPOPROVAS`}
        </FooterComponent>
    );
}

export default Footer;


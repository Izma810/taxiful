import UkraineHeart from '../public/icons/ukraine_heart.svg';
import Image from 'next/image';

function Footer(){
    return(
        <footer>
            <div className='footer__text'>
                Made with  
                <span className='footer__image'>
                    <Image  src={UkraineHeart} alt='putin' />
                </span>
                By Izma
            </div>
        </footer>
    )
}

export default Footer;
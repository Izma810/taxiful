import Logo from '../public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const navLinks = [
    {
        title:'Home', path:'/'
    },
    {
        title:'About', path:'/about'
    },
    {
        title:'Target', path:'/target'
    },
    {
        title:'Services', path:'/services'
    }

]

function Navbar(){

    const router = useRouter();

    return(
        <nav className='nav-bar'>
            {
                navLinks.map((link) => (
                    <div className='nav__links' key={link.title}>
                        <Link href={link.path} passHref>
                            <a className={router.asPath == link.path ? 'active' : ' '}>
                                {link.title}
                            </a>
                        </Link>
                    </div>
                ))
            }
            <div className='nav__logo'>
                <Image 
                  src={Logo} 
                  alt='hello' 
                  onClick={() => router.replace('/')} 
                />
            </div>
        </nav>
    )
}

export default Navbar;
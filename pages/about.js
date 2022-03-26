import Image from 'next/image';
import AboutImg from '../public/images/sectionHeadings/about.svg';
import NotWorking from '../public/gif/aNotWorkingGif.gif';

function About(){
    return(
        <section className='about-section'>
            <div className='about__text'>
                <Image 
                  src={AboutImg} 
                  alt='imgimg' 
                  className='about__heading'
                />
                <div className='about__paragraph-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className='about__paragraph-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <div className='about__gif'>
                <Image 
                  src={NotWorking} 
                  alt='thisisapparentlyagifyeah'
                />
            </div>
        </section>
    )
}

export default About;
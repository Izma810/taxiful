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
                    Introducing Taxiful, a web application made to make the cabs safer and build trust among the users and drivers. The website is very easy to use and even non-tech savvy people can use it. 
                </div>
                <div className='about__paragraph-2'>
                    The Aim: Begin by using this website in countries that fall on the red list such as India, USA, Australia and Mexico 
                    Target audience will be women, children and elderly 
                    Protect people from sudden cab rape {'&'} money theft
                    An initiave to help the physically disabled - free cab ride
                </div>
                <div className='about__paragraph-3'>
                    Steps: <br/>
                    1) Choose the service from the services page <br/>
                    2) Input location, final destination and approximate distance <br/>
                    3) A tracker starts tracking your distance. <br/>
                    4) Pause the tracker when the taxi stops <br/>
                    5) In case the tracker stays puased for 15 minutes, it sends a confirmation message . <br/>
                    6) If a confirmation response is not recieved, the nearest police station is called 
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
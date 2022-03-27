import Image from 'next/image';
import Landing from '../public/images/landing.svg';
import Github from '../public/icons/github.svg';
import Linkedin from '../public/icons/linkedin.svg';
import Gmail from '../public/icons/gmail.svg'

function Home() {
  return (
    <section className='landing-section'>
      <div className='landing__text'>
        <div className='text__heading'>
          Welcome,
        </div>
        <div className='text__paragraph'>
          Taxiful, a web application made to make the cabs safer and build trust among the users and drivers. The website is very easy to use and even non-tech savvy people can use it.
          When the tagline says {"'"}Safety Comes First{"'"}, then this application actually means it :).
        </div>
        <div className='text__icons'>
          <div className='icons__bg'>
            <a href='https://github.com/Izma810' target='blank'>
              <Image src={Github} alt='github' />
            </a>
          </div>
          <div className='icons__bg'>
            <a href='https://www.linkedin.com/in/izma-khan-02739621a/' target='blank'>
              <Image src={Linkedin} alt='linkedin' />
            </a>
          </div>
          <div className='icons__bg'>
            <a href='mailto:izmahilalkhan08@gmail.com' target='blank'>
              <Image src={Gmail} alt='gmail' />
            </a>
          </div>
        </div>
      </div>
      <div className="landing__image">
        <Image src={Landing} alt='hi'/>
      </div>
    </section>
  )
}

export default Home;

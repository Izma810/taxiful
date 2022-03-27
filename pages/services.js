import serviceCard from '../data/serviceCard.json';
import serviceHeading from '../public/images/sectionHeadings/services.svg';
import Image from 'next/image';
import {useRouter} from 'next/router';
import goToArrow from '../public/icons/servicePage/goToArrow.svg';

function Services(){

    const route = useRouter();

    return(
        <section className='services-section'>
            <div className='services__heading'>
                <Image 
                  src={serviceHeading}
                  alt='hwalloviewer'
                />
            </div>
            <div className='services__cards'>
                {
                    serviceCard.map((i) => {
                        return(
                            <div className='services__card' key={i.key} > 
                                    <div className='contentbox__content'>
                                        <div className='contentbox__text'>
                                            <span className='card__heading'>
                                                {i.title}
                                            </span>
                                            <div className='card__para'>
                                                {i.desc}
                                            </div>
                                        </div>
                                            <Image 
                                                src={i.icon} 
                                                className='card__icon' 
                                                alt='hwai' 
                                                width={90} 
                                                height={90}
                                            />
                                    </div>
                                    <div className='contentbox__arrow'>
                                        <Image 
                                          src={goToArrow} 
                                          alt='hwailo' 
                                          width={60} 
                                          onClick={() => route.replace(`/servicesSubPages/${i.id}`)}
                                        />
                                     </div>
                                </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services;
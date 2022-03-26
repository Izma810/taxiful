import Image from 'next/image';
import TargetImg from '../public/images/sectionHeadings/target.svg';
import rapeCases from '../data/rapeCases.json';
import subHeading from '../public/images/sectionHeadings/sectionSubHeadings/targetSub.svg';

function Target(){
    return(
        <section className='target-section'>
            <div className='target__heading'>
                <Image 
                  src={TargetImg}
                  alt='imgimg'
                />
            </div>
            <div className='target__paragraph'>
                <div className='paragraph__1'>
                    Travelling through taxi has become a routine for most 
                    people across the world. In fact, it isn{`'`}t surprising 
                    to know that more than 18 million people use taxis on a 
                    daily basis. On surveying the safety of these taxis, the people
                    (the actual users) rated them 5.7 out of 10. 
                </div>
                <div className='paragraph__2'>
                    The following countries witness steady increase in 
                    cab rape cases and money thefts. Common people are generally
                    fooled through incorrect taxi fares estimated by cab drivers
                    whereas females and especially children{`'`}s safety is 
                    questioned when taxis are booked during night time.
                </div>
                <div className='paragraph__3'>
                    The main aim of this web application is to remove fear
                    from people and help cabs become safer. This will help
                    in building trust between customers and cab drivers while also
                    reducing the occurence of crimes. 
                </div>
            </div>
            <div className='target__sub-heading'>
                <Image 
                  src={subHeading}
                  alt='yope'
                />
            </div>
            <div className='target__countries'>
                {
                    rapeCases.map((i) => {
                        return (
                                <div className='countries__card' key={i.key}>
                                    <div className='card__heading'>
                                        {i.country}
                                    </div>
                                    <div className='card__overlap'>
                                        <Image 
                                          src={i.countryImage} 
                                          alt='hi' 
                                          width={400} 
                                          height={400}
                                          className='overlap__image'
                                        />
                                        <div className='overlap__text'>
                                            <span className='text__yearly'>
                                                Yearly Cases: {i.yearlyCases}
                                            </span>
                                            <span className='text__daily'>
                                                Daily Cases: {i.casesPerDay}
                                            </span>
                                        </div>
                                     </div>
                                </div>
                            )
                        })
                }
            </div>
        </section>
    )
}

export default Target;
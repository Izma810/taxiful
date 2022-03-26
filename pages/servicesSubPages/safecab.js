import Image from 'next/image';
import safeCabHeading from '../../public/images/sectionHeadings/safecabhead.svg';
import { useState, useEffect } from 'react';
import states from '../../data/states';
import cabdata from '../../data/safeCabData';
import Button from '@mui/material/Button';
import goToArrow from '../../public/icons/servicePage/goToArrow.svg';

const buttonStyles = {
    'display':'flex',
    'textTransform':'none',
    'background':'rgba(255, 197, 172, 1)',
    'boxShadow':'none',
    'color':'black',
    'fontWeight':'500',
    'fontFamily':'Inter',
    'fontSize':'1.2rem',
    'width':'250px',
    'padding':'10px',
    'borderRadius':'100px',
    'transition':'0.2s ease-in-out',
    ':hover': {
    'backgroundColor': 'rgba(255, 197, 172, 0.85)',
    'boxShadow':'none',
  },
}

function SafeCab(){

    const [state, setState] = useState(states[0]);

    const [city, setCity] = useState();

    const [distance, setDistance] = useState();

    const [finalCity, setFinalCity] = useState();

    function updateState(e){
        setState(e.currentTarget.value);
    }

    function updateDistance(e){
        setDistance(e.currentTarget.value);
    }

    function updateCity(e){
        setCity(e.currentTarget.value);
    }

    function updateFinalCity(e){
        setFinalCity(e.currentTarget.value);
    }

    console.log(Object.keys(cabdata));

    console.log(state);

    return(
        <section className='safecab-section'>
            <div className='safecab__subsection'>
                <Image src={safeCabHeading} alt='yo'/>
                <div className='subsection__form'>
                    <div className='form__state-selection'>
                        <label htmlFor="state">
                            State 
                            <div className='state-selection__select'>
                                <select 
                                    value={state}
                                    onChange={updateState}
                                    onBlur={updateState}
                                >
                                    {
                                        states.map((state) => (
                                            <option 
                                                value={state}
                                                key={state}
                                            >      
                                            {state}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    {state && <div className='form__current-city-selection'>
                        <label htmlFor='currentcity'>
                            Current Location
                            <div className='current-city-selection__select'>
                                <select 
                                    value={city}
                                    key={city}
                                    onChange={updateCity}
                                    onBlur={updateCity}
                                >
                                    {
                                        cabdata[state].map((city)=> (
                                            <option 
                                                value={city}
                                                key={city}
                                            >
                                                {city}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                  }
                  {
                    state && <div className='form__final-city-selection'>
                        <label htmlFor='finalCity'>
                            Final Destination
                            <div className='final-city-selection__select'>
                                <select 
                                    value={finalCity}
                                    key={finalCity}
                                    onChange={updateFinalCity}
                                    onBlur={updateFinalCity}

                                >
                                    {
                                        cabdata[state].map((finalCity)=> (
                                            <option 
                                                value={finalCity}
                                                key={finalCity}
                                            >
                                                {finalCity}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                  }
                  {
                    state && <div className='form__distance-entry'>
                        <label htmlFor="distance">
                            Distance (in km)
                            <div className='distance-entry__input'>
                            <input 
                                value={distance} 
                                onChange={updateDistance}
                            />
                            </div>
                        </label>
                    </div>
                  }
                </div>
               {state && <div className='safecab__button'>
                        <Button 
                            sx={{...buttonStyles}} 
                            variant="contained"
                        > 
                            Go  {' '}
                            <Image 
                                src={goToArrow} 
                                alt='hi' 
                                width={30} 
                                height={30} 
                            />
                        </Button>
                    </div>
                }       
            </div>
        </section>
    )
}

export default SafeCab;
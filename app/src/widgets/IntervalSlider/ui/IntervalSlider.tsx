
import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'


import Arrow from '@static/images/arrow.svg'
import '../styles/interval-slider.scss'


import { data, IntervalSliders } from '@shared/data/history-dates';
import { Spinner } from '@features/Spinner';
import { getWindowDimensions } from '@shared/model';

interface IntervalSliderProps {
    
}
 
const IntervalSlider: React.FunctionComponent<IntervalSliderProps> = () => {

    /*
    *   States
    */
    const [intervalSliders, setIntervalSlider] = React.useState<IntervalSliders>(data)

    const [intervalIndex, setIntervalIndex] = React.useState(0)
    const [intervalStart, setIntervalStart] = React.useState(intervalSliders[intervalIndex].interval.start)
    const [intervalEnd, setIntervalEnd] = React.useState(intervalSliders[intervalIndex].interval.end)

    const [slides, setSlides] = React.useState(intervalSliders[intervalIndex].slides)
    const [sliderInAnim, setSliderInAnim] = React.useState(false)
    const [sliderTitle, setSliderTitle] = React.useState(intervalSliders[intervalIndex].name)

    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());


    /*
    *   Interval update logic
    */
    const updateIntervalIndex = (value: number) => {
        if (value < 0 && intervalIndex === 0 || value > 0 && intervalIndex + 1 === intervalSliders.length) return

        setIntervalIndex(intervalIndex + value)
    }


    React.useEffect(() => {
        let start = intervalSliders[intervalIndex].interval.start
        let end = intervalSliders[intervalIndex].interval.end

        let prev_start = intervalStart
        let prev_end = intervalEnd

        let delayStart = 50 - 1000 * (Math.abs(1 - prev_start / start))
        let delayEnd = 50 - 1000 * (Math.abs(1 - prev_end / end))


        const intervalIdStart = setInterval(() => {
            if (prev_start === start) return clearInterval(intervalIdStart)

            if (prev_start < start) {
                setIntervalStart(++prev_start)
            }
            if (prev_start > start) {
                setIntervalStart(--prev_start)
            }
        }, delayStart)

        const intervalIdEnd = setInterval(() => {
            if (prev_end === end) return clearInterval(intervalIdEnd)

            if (prev_end < end) {
                setIntervalEnd(++prev_end)
            }
            if (prev_end > end) {
                setIntervalEnd(--prev_end)
            }
        }, delayEnd)

        const timer = setTimeout(() => {
            setSlides(intervalSliders[intervalIndex].slides)
            setSliderTitle(intervalSliders[intervalIndex].name)

            clearTimeout(timer)
        }, 100)
    }, [intervalIndex])



    /*
    *   Local components
    */
    const slider = (
        <div className={`interval-slider_slider ${sliderInAnim ? '--hide' : ''}`}>
            {windowDimensions.width <= 768 && <div className={`interval-slider_slider--title`}>{sliderTitle}</div>}
            <div className="interval-slider_slider__container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={80}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}

                    grabCursor={windowDimensions.width <= 768 ? false : true}
                    freeMode={windowDimensions.width <= 768 ? true : false}


                    navigation={{
                        prevEl: '.interval-slider_slider__arrow.--prev',
                        nextEl: '.interval-slider_slider__arrow.--next',
                    }}

                    pagination={{
                        el: '.interval-slider_pagination',
                        type: 'bullets',
                        clickable: true,
                    }}

                    modules={[Navigation, Pagination]}
                >
                    {
                        slides.map((slide, index) => (
                            <SwiperSlide className='interval-slider_slider__slide' key={`in-sl-${index}`}>
                                <div className="interval-slider_slider__slide--title">{slide.name}</div>
                                <div className="interval-slider_slider__slide--text">{slide.description}</div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="interval-slider_slider__arrow --prev">
                    <Arrow />
                </div>
                <div className="interval-slider_slider__arrow --next">
                    <Arrow />
                </div>
            </div>
        </div>
    )


    /*
    *   Component useEffect
    */
    React.useEffect(() => {
        window.addEventListener('resize', () => setWindowDimensions(getWindowDimensions()))

        // Clean
        return () => window.removeEventListener('resize', () => setWindowDimensions(getWindowDimensions()))
    }, [])
    return (<>
        <div className="interval-slider">
            <div className="interval-slider__content">
                <div className="interval-slider__title">
                    <div className="interval-slider__title--text">
                        Исторические<br />даты
                    </div>
                </div>

                <div className="interval-slider_wrapper">
                    <Spinner
                        sliders={intervalSliders}
                        setIntervalIndex={setIntervalIndex}
                        intervalIndex={intervalIndex}
                        setSliderInAnim={setSliderInAnim}

                        intervalStart={intervalStart}
                        intervalEnd={intervalEnd}
                    />

                    {windowDimensions.width <= 768 && slider}
                </div>



                <div className="interval-slider_navigation">
                    <div className="interval-slider_navigation__wrapper">
                        <div className="interval-slider_navigation__progress">{("0" + (intervalIndex + 1)).slice(-2)}/{("0" + intervalSliders.length)}</div>
                        <div className="interval-slider_navigation__controls">
                            <div
                                className={
                                    `interval-slider_navigation__controls--arrow --prev ${intervalIndex === 0 ? '--disable' : ''}`
                                } 
                                onClick={() => updateIntervalIndex(-1)}>
                                <Arrow />
                            </div>
                            <div className={`interval-slider_navigation__controls--arrow --next ${intervalIndex === intervalSliders.length - 1 ? '--disable' : ''}`} onClick={() => updateIntervalIndex(1)}>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                    <div className="interval-slider_pagination">

                    </div>
                </div>

                {windowDimensions.width > 768 && slider}
            </div>
        </div>
    </>);
}
 
export default IntervalSlider;
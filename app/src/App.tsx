import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import '@styles/index.scss'


const App = () => {
    return (<>

        <div className="interval-slider">
            <div className="interval-slider__title">Исторические даты</div>

            <div className="interval-slider_slider">
                <Swiper
                >
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                    <SwiperSlide>4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>);
}

export default App;

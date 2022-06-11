import React from 'react'
import { useRef, useState } from "react";
import { useContext } from 'react'
import { Context } from '../../context'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AOS from 'aos';

import "./Staff.scss"

export default function App() {

  const {staff} = useContext(Context)

  AOS.init({
    duration: 3000,
  })  

  console.log(staff)
  return (
    <>

      <div className='swiper--title'>
        Наши Сотрудники
      </div>
      <Swiper id='staff' slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
          {staff.map( el =>{
            
            return ( 
              <SwiperSlide>
                <div className="main--staff--div  ">
                  <div>
                    <img className="main--staff--div--img" 
                    src={el.img} alt="" />
                </div>
                <div className="">
                  <div className="d-flex">
                    <h2>{el.name} </h2>
                    <h2>{el.surname}</h2>
                  </div>
                  <div>
                    <div className="d-flex">
                      <h5 className="main--staff--div--title"> <span className="staff-span">Образование:</span> {el.education}</h5>
                    </div>
                    <div>
                      <p className="main--staff--div--sub--title">
                      {el.info}
                      {el.project}
                      </p>
                    </div>
                    <div className="d-flex">
                      <h5><span className="staff-span">Опыт работы:</span> </h5>
                      <h5>{el.experience}</h5>
                    </div>
                </div>
                </div>
              </div>
            </SwiperSlide>
           )
        } )}
      </Swiper>
    </>
  );

}

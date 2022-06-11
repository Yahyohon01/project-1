import React from 'react';
import "./Work.scss"
import AOS from "aos";

const Work = () => {
    AOS.init({
        duration: 3000,
    })
    return(
        <section>
            <div className="container">
                <div className='work--section'>
                    <div data-aos="zoom-in-up" className='work--section--content'>   
                        <div className='work--section--content--title'>
                            <img className='img-fluid' src="./img/podpisanie-dogovora-150x150.jpg" alt="" />
                            <div>
                                <h3>Подписание договора</h3>
                                <p>Заключаем с Вами официальный договор. В договоре прописан состав работ, сроки проведения работ, стоимость дизайн-проекта и др.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="5000" className='work--section--content2'>   
                        <div className='work--section--content--title'>
                            <img className='img-fluid' src="./img/31-150x150.jpg" alt="" />
                            <div>
                            <h3>Визуализация интерьера</h3>
                                <p>Подготавливаем визуализацию, которая поможет наглядно познакомиться с будущим интерьером, как на фотографии. Мы разрабатываем высококачественные фотореалистичные визуализации с реальными материалами, мебелью, светильниками и т.д.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="6000"  className='work--section--content3'>   
                        <div className='work--section--content--title'>
                            <img className='img-fluid' src="./img/komplekt-chertezhey-150x150.jpg" alt="" />
                            <div>
                                <h3>Подготовка комплекта чертежей</h3>
                                <p>Разработка чертежей, необходимых для полноценной и правильной реализации дизайна. В состав проекта входит подробная ведомость отделочных материалов с артикулами.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in-up"  data-aos-duration="7000" className='work--section--content4'>   
                        <div className='work--section--content--title'>
                            <img className='img-fluid' src="./img/priem-raboty-1-150x150.jpg" alt="" />
                            <div>
                                <h3>Сдаем работу</h3>
                                <p>Сдаем Вам работу, подписываем акты.</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
};

export default Work;

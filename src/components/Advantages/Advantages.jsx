import React from 'react';
import "./Advantages.scss"
import AOS from 'aos';

const Advantages = () => {

  AOS.init({
    duration: 3000,
  })

  return (
    <section id='advantages' className='advantages--section'>
      <div className="container">
          <h3 className='text-left advantages--section--title'>Наши <strong className='advantages--section--strong'>Преимущества</strong> </h3>

        <div className='advantages--section--content'>

          <div data-aos={"fade-right"} className='advantages--section--content--leftSide'>
            <div className='advantages--section--content--leftSide--title'>
              <div className='advantages--section--content--leftSide--img1'>
                <img className='advantages--section--content--leftSide--icon1' src="https://img.icons8.com/material-rounded/24/ffffff/star--v1.png"/>
              </div>
              <div className='advantages--section--content--leftSide--text'>
                <h5 className=' advantages--section--content--leftSide__title text-left'>Предоставим Вам весь спектр услуг</h5>
                <p className='text-left'>Перепланировка, дизайн интерьера, подбор всех материалов и мебели, ремонтно-отделочные работы. Организация переезда в чистый дом.</p>
              </div>
            </div>

            <div className='advantages--section--content--leftSide--title'>
              <div className='advantages--section--content--leftSide--img2'>
                  {/* <img className='advantages--section--content--leftSide--icon' src="https://img.icons8.com/ios-glyphs/30/ffffff/group.png"/> */}
                <img className='advantages--section--content--leftSide--icon2' src="https://img.icons8.com/windows/32/ffffff/group-foreground-selected.png"/>
              </div>
              <div className='advantages--section--content--leftSide--text'>
                <h5 className='advantages--section--content--leftSide__title text-left'>Команда специалистов</h5>
                <p className='text-left'>Наша команда состоит из высококвалифицированных дизайнеров с опытом работ более 6 лет и технических специалистов в области строительства и монтажа с опытом более 12 лет.</p>
              </div>
            </div>

            <div className='advantages--section--content--leftSide--title'>
              <div className='advantages--section--content--leftSide--img3'>
                <img className='advantages--section--content--leftSide--icon3' src="https://img.icons8.com/material-sharp/24/ffffff/visible.png"/>
              </div>
              <div className='advantages--section--content--leftSide--text'>
                <h5 className='advantages--section--content--leftSide__title text-left'>Сопровождение объекта</h5>
                <p className='text-left'>Обеспечим полный авторский надзор и контроль по ремонтно-отделочным работам на Вашем объекте. Предоставим квалифицированных монтажников с опытом работ не менее 8 лет.</p>
              </div>
            </div>

          </div>

          <div data-aos={"fade-left"} className='advantages--section--content--rightSide'>

            <div className='advantages--section--content--rightSide--title'>
              <div className='advantages--section--content--rightSide--img4'>
                <img className='advantages--section--content--rightSide--icon4' src="https://img.icons8.com/material-outlined/24/ffffff/gift--v1.png"/>
                    {/* <img src="https://img.icons8.com/material-outlined/24/ffffff/ruble.png"/> */}
              </div>
              <div className='advantages--section--content--rightSide--text'>
                <h5 className='advantages--section--content--leftSide__title text-left'>Скидки от партнеров</h5>
                <p className='text-left'>Подберем для Вашего проекта по дизайн интерьеру финишные и черновые материалы, оборудование из перечня наших поставщиков — партнеров, которые гарантированно предоставят Вам скидку до 30%.</p>
              </div>
            </div>

            <div className='advantages--section--content--rightSide--title'>
              <div className='advantages--section--content--rightSide--img5'>
                <img className='advantages--section--content--rightSide--icon5' src="https://img.icons8.com/material-outlined/24/ffffff/ruble.png"/>
                  {/* <img src="https://img.icons8.com/material-rounded/24/ffffff/thumb-up.png"/> */}
              </div>
              <div className='advantages--section--content--rightSide--text'>
                <h5 className='advantages--section--content--leftSide__title text-left'>В рамках Вашего бюджета</h5>
                <p className='text-left'>Не выйдем за рамки запланированного Вами бюджета. В предварительный расчет внесем не только стоимость проекта по дизайну интерьера, но и полный комплекс услуг и материалов.</p>
              </div>
            </div>

            <div className='advantages--section--content--rightSide--title'>
              <div className='advantages--section--content--rightSide--img6'>
                <img className='advantages--section--content--rightSide--icon6' src="https://img.icons8.com/material-rounded/24/ffffff/thumb-up.png"/>
              </div>
              <div className='advantages--section--content--rightSide--text'>
                <h5 className='advantages--section--content--leftSide__title text-left'>Удобство и индивидуальность</h5>
                <p className='text-left'>Спланируем и спроектируем проект по дизайн интерьеру, который будет отвечать Вашим требованиям и личным предпочтениям: удобство, практичность, модные тенденции, индивидуальность.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
};

export default Advantages;

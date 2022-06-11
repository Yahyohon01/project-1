import React from "react";
import "./Services.scss"
import AOS from "aos";
import {motion} from "framer-motion"

// class Services extends React.Component {
//     render(){
//       return 
//     }
//   }

class Services extends React.Component {
    render()
    {
      AOS.init({
        duration: 3000,
      })
      return(
    <div id="services" className="container">
        <div className="tabs">
            <Tabs>

                <Tab label=  <div className='row--content'>
                    <div className='row--content--box'>
                        <img className='row--content--img--icon1' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-present-commerce-dreamstale-lineal-dreamstale.png"/>
                    </div>
                    <div className="row--content--info">
                        <h5>Дизайн-проект интерьера</h5>
                    </div>
                    </div> >

                    <div  data-aos="flip-left" className="row--content--subtitle">
                        <h3>Дизайн-проект включает в себя:</h3>
                        <ul>
                          <li>Планировочное решение.</li>
                          <li>Трехмерные визуализации, выполненные в компьютxzерной программе 3D&nbsp;Max.</li>
                          <li>Полный комплект рабочих чертежей.</li>
                          <li>Коммерческое предложение на все материалы/мебель/оборудование, используемые в проекте, с указанием стоимости и контактов поставщиков.</li>
                        </ul>
                        <h3>В процессе создания дизайн-проекта интерьера мы осуществляем:</h3>
                        <ul>
                          <li>Выезд дизайнера и технического специалиста (по надобности) на объект. Замеры помещения.</li>
                          <li>Разработку концепции дизайн интерьера, определение стиля, реализацию Ваших желаний при планировании внутреннего пространства.</li>
                          <li>Проектирование с использованием материалов, доступных в Санкт-Петербурге.</li>
                          <li>Консультации и посещения с дизайнером салонов/магазинов для подбора материалов, оборудования и мебели.</li>
                          <li>Передача готового дизайн-проекта на бумажном носителе и в электронном виде.</li>
                          <li>В разработке&nbsp;онлайн приложение, чтобы самому создавать дизайн проект квартиры.</li>
                        </ul>
                        <h4> <span>Стоимость услуги от 790 руб./м<sup>2</sup></span> </h4>
                    </div>

                </Tab>

                <Tab data-aos="flip-right" label= <div className='row--content'>
                    <div className='row--content--box'>
                        <img className='row--content--img--icon2' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-wallet-accessories-dreamstale-lineal-dreamstale.png"/>   
                    </div>
                    <div className="row--content--info">
                        <h5>Планирование бюджета</h5>
                    </div>
                    </div> >

                    <div data-aos="flip-right" className="row--content--subtitle">
                        <h3>Планирования бюджета на реализацию дизайн-проекта под ключ</h3>
                        <p>Сделав дизайн-проект интерьера часто возникает вопросы: сколько понадобиться денег чтобы реализовать Вашу мечту? Будет ли это выглядеть в точности как на картинках, которая разработала дизайн студия?</p>
                        <p>В большинстве случаев дизайнер, закладывая идею в Ваш проект, отталкивается от оригинальности и не задумывается о стоимости. Конечно же в дизайн-проекте присутствует ведомость материалов, а так же информация где это можно приобрести. В редких случаях прилагают стоимость материалов. Но даже после этого, возникает вопрос не только сколько денег понадобиться на покупку финишных материалов, но и сколько будут стоить услуги на ремонтные работы.</p>
                        <p>Для того, чтобы приступить к реализации дизайн-проекта, наша команда готова сформировать бюджет на будущий Ваш проект.</p>
                        <p>Дизайн студия <strong>LOOKINGFORM</strong> предлагает Вам дополнительные услуги такие как:</p>
                        <ul>
                            <li>Просчёт сметы на ремонтные работы, исходя из вашего проекта.</li>
                            <li>Подбор, формирование и просчёт черновых, финишных материалов и предметов декора с учётом скидки от наших контрагентов.</li>
                            <li>Подбор, формирование и просчёт заказа аналогами. В целях экономии на финишных материалов, предметов декора с учётом скидки от наших контрагентов, которые предоставляются дизайн студии.</li>
                            <li>Надзор и строгое соблюдение сформированного бюджета.</li>
                            <li>При надобности, формирование бюджета мебели корпусной и мягкой.</li>
                        </ul>
                        <p>Заказав в LOOKINGFORM дизайн-проект или ремонтно-отделочные работы, данный вид услуги будет бесплатным.</p>
                        <h4><span>Стоимость услуги от 4 900 руб.</span></h4>
                    </div>
                </Tab>

                <Tab label=  <div className='row--content'>
                    <div className='row--content--box'>
                        <img className='row--content--img--icon3' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-home-interface-dreamstale-lineal-dreamstale.png"/>
                    </div>
                    <div className="row--content--info">
                        <h5>Ремонт квартир, коттеджей</h5>
                    </div>
                    </div> >

                     <div className="row--content--subtitle">
                        <ul>
                            <li>Составление детальной сметы на ремонтно-монтажные работы.</li>
                            <li>Составление детальной сметы на черновые(общестроительные) материалы.</li>
                            <li>Подписание договора на ремонтно — монтажные работы.</li>
                            <li>Оплата по этапам выполненных работ по средствам акта — приемки.</li>
                            <li>Авторский и технический контроль инженером технологом и дизайнером проектировщиком.</li>
                        </ul>
                        <h4><span>Стоимость ремонтно отделочных работ: от 7 900 руб. за м<sup>2</sup></span></h4>
                    </div>
                </Tab>

                <Tab label=  <div className='row--content'>
                <div className='row--content--box'>
                  <img className='row--content--img--icon4' src="https://img.icons8.com/ios/50/000000/happy--v1.png"/>
                </div>
                <div className="row--content--info">
                    <h5>Ремонт квартир, коттеджей</h5>
                </div>
                </div> >

                <div className="row--content--subtitle">
                    <ul>
                        <li>Контроль по выполнению и выдачи проекта.</li>
                        <li>Выезд на объект и консультация.</li>
                        <li>Корректировки чертежей проекта (если понадобится).</li>
                        <li>Присутствие при подборе финишных материалов, мебели, элементов интерьера.</li>
                    </ul>
                    <h4><span>Сопровождение авторского надзора: от 390 руб. за м<sup>2</sup></span></h4>
                </div>
                </Tab>

                

            </Tabs>

        </div>
          
    </div>
      )
    }
  }

  
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className="tab-buttons">
      {buttons.map(button =>{
         return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
      })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }

  export default Services
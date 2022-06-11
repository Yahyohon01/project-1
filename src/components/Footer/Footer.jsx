import React from 'react';
import "./Footer.scss"

const Footer = () => {
  return (
      <footer>
          <div className="container">
              <div className="row footer--content">
                  <div className="col-lg-4 col-sm-12 footer--content--title">
                      <h3>Дом вашей мечты – станьте творцом своего счастья!</h3>
                      <p>Каждый человек вправе мечтать о прекрасном замке, где царят роскошь, уют и комфорт. А чтобы мечты не разбились о суровые камни реальности, следует продумать<strong>стили интерьера</strong>для каждой из его комнат, включая хозяйственные и рабочие. Если у вас уже есть собственные идеи – расскажите о них нашему специалисту, чтобы он смог направить поток своих креативных мыслей в нужное русло и создать именно то, о чем вы так долго мечтали.</p>
                  </div>
                  <div className="col-lg-4 col-sm-12 footer--content--title">
                      <h3>Дизайн интерьеров</h3>
                      <p>С чего начинается комфортная жизнь? Конечно, с умения человека окружить себя красотой и уютом.<strong>Дизайн-проект дома</strong>или квартиры может стать отличным началом для воплощения любой мечты в реальность. Красивый, функциональный дом, безупречная планировка и возможность получать удовольствие от пребывания в любой комнате, даже если это рабочий кабинет или кухня – заслуга настоящего профессионала.</p>
                  </div>
                  <div className="col-lg-4 col-sm-12 footer--content--title">
                        <div className='footer--content--title--icons'>
                            <div className='footer--content--title--icons--inst'>
                              <a  href="https://www.instagram.com/makhamadjlilov.01/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" class="share-instagram" data-original-title="Instagram"><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/></a>
                            </div>
                            <div className='footer--content--title--icons--inst'>
                              <a href="https://www.google.com/" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" class="share-instagram" data-original-title="Instagram"><img src="https://img.icons8.com/ios-glyphs/30/000000/google-logo--v1.png"/></a>
                            </div>
                            <div className='footer--content--title--icons--inst'>
                              <a href="https://t.me/RezvYahyo" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" class="share-instagram" data-original-title="Instagram"><img src="https://img.icons8.com/windows/32/000000/telegram-app.png"/></a>
                            </div>
                        </div>
                        <div className='footer--content--title--contact'>
                            <h3>Контакты</h3>
                            <div className='footer--content--title--contact--marker'>
                            <img src="https://img.icons8.com/material-outlined/24/000000/marker-a.png"/>
                            <p>Адрес: Чиланзар 9-кв 44-дом 18-квартира</p>
                            </div>
                            <div className='footer--content--title--contact--phone'>
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-phone-phone-dreamstale-lineal-dreamstale-2.png"/>
                            <p>Телефон: +998998124306 +998998124306</p>
                            </div>
                            <div className='footer--content--title--contact--envelope'>
                            <img src="https://img.icons8.com/windows/32/000000/circled-envelope.png"/>
                            <p>Email: yakhyokhon-makhmadjalilov01@mail.ru</p>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </footer>
  )
};

export default Footer;

import React, { useContext } from 'react';
import "./ServicePackages.scss"
import { styled, Box } from '@mui/system';
import { Context } from '../../context';
import ModalUnstyled from '@mui/base/ModalUnstyled';

// import AOS from 'aos';

const ServicePackages = () => {

  // AOS.init({
  //   duration: 3000,
  // })
  // data-aos="fade-up" 

  const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 540,
  height: 380,
  color: "white",
  background: "white",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

const {services, setServices} = useContext(Context)

//    MODAL
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
//    MODAL

  return (
    <section className='section--content' id='servicePackages'>
      {/* MODAL */}
      <StyledModal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={open}onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <div className='main--modal'>
            <div className='title text-center'>
              Заполните форму
            </div>
            <div className='sub--title text-center'>
              Мы с вами свяжемся в течение часа
            </div>
            <div className='text-center'>
              <input className='modal--input' type="text" placeholder='Введите ваше имя' />
            </div>
            <div className='text-center'>
              <input className='input--modal' type="text" name="" id="" placeholder='Введите ваш номер' />
            </div>
            <div className=''>
              <button className='btn modal--btn'>Оставить данные</button>
            </div>
          </div>
        </Box>
      </StyledModal>
      {/* MODAL */}

      {/* MAP */}
      <div className='section--info'>
        Стоимость наших работ
      </div>
      <div className="grid">
      {services.map( el =>{
        return(
          <div>
            <div className="card--sketch">
              <div className="main--card">
                <div>
                  <img src={el.img} alt="" />
                  {/* <img src="./img/Mask_Group_16.webp" alt="img" /> */}
                </div>
                <div className='card--sketch--content'>
                  <div className='card--sketch--content--price'>
                    Пакет услуг
                  </div>
                  <div className='card--sketch--content--text'>
                    {el.category}
                  </div>
                  <div className='card--sketch--content--cost'>
                    {el.price}
                  </div>
                  <div className='card--sketch--content--list'>
                    {el.title}
                  </div>
                  <div className='card--sketch--content--button'>     <button onClick={handleOpen} className='btn card--sketch--content--button--btn'>Заказать</button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        )
      } )}
      </div> 
      {/* MAP */}
    </section>
  )
};

export default ServicePackages;

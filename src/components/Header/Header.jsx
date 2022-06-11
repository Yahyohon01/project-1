import React from 'react'
import "./Header.scss"
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
// import AOS from 'aos';

const Header = () => {

  // AOS.init({
  //   duration: 3000,
  // })

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

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <header>
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
      <div className="container">
        <div className='header--content'>
          <div className='header--title'>
            Создадим <strong className='header--strong'>интерьер,</strong> который будет вас радовать
          </div>
          <div className='header--sub--title'>
            Сделаем дизайн-проект <strong className='header--strong'>под ваш бюджет</strong> <br /> и отпразднуем его реализацию в кратчайшие сроки
          </div>
          <div className='header--button text-center'>
            <button onClick={handleOpen} className='header--btn btn'>Хочу получить замер</button>
          </div>
          <div className='header--info'>
          Оставьте заявку и получите выезд <br /> мастера на ваш объект <strong className='header--strong'>бесплатно</strong>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
import React, { useContext, useState } from 'react';
import MainContent from '../MainContent/MainContent';
import { Context } from '../../context';
import "./Main.scss"
import { Link } from 'react-router-dom';
// import Modal from '../Modal/Modal';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const Main = () => {
    const { tourism, info, setInfo, portfolio} = useContext(Context)
    // const[ modalInfo, setModalInfo ] = useState("")
    console.log(info)
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
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-tap-highlight-color: transparent;
    `;

    const style = {
      width: 1200,
      height: 600,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      p: 2,
      px: 2,
      pb: 2,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = (el) => {
      setInfo(el)
      setOpen(true)
    };
    const handleClose = () => setOpen(false);

  return (
    <div className='divv' id='project'>
      <section className='main--section'>
        <div className="container">
          <div>
              <h2 className='main--section--author'>Наши <span className='main--content--span'>Дизайн проекты</span> </h2>
          </div>
          <div className='grid'>
            {portfolio.map(el => {
              return( 
                <div>

                {/* MODAL */}
                <StyledModal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={open}onClose={handleClose} BackdropComponent={Backdrop}>
                  <Box sx={style}>
                    <img className='modalImg' id="unstyled-modal-title" src={info.image} alt="" />
                  </Box>
                </StyledModal>
                {/*  */}
                    
                  <div className="card">
                    <div className='card--icon'>
                      <img  className='card--icon--img' src="https://img.icons8.com/ios/50/000000/plus--v1.png"/>
                    </div>
                    <div className='card--img'>
                      <img onClick={() => handleOpen(el)} className='card--img-cont' src={el.img} alt="" />
                    </div>
                    <div class="card--title">
                      <h3>Квартира  42м2</h3>
                      <div class="card--subtitle">
                        <p className='card-subtitle--text'>Интерьеры квартиры</p>
                      </div>
                    </div>
                  </div>
                </div>
                )
              }
              )
            }
          </div>
      
          <div class="text-box">
              <Link class="btnn btnn-white btnn-animate" to="/portfolio">Посмотреть все проекты</Link>
          </div>
        </div>
      </section>
   
    </div>
)
};

export default Main;



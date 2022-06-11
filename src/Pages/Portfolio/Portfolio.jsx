import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import "./Portfolio.scss"

const Portfolio = () => {

  const {portfolio, info, setInfo} = useContext(Context)

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
      width: 1200,
      height: 600,
      bgcolor: 'background.paper',
      border: '2px solid #fff',
      p: 2,
      px: 2,
      pb: 2,
    };
    const styles = {
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
    const handleOpen = (el) => {
      setInfo(el)
      setOpen(true)
    };
    const handleClose = () => setOpen(false);

  return (
    <section className='portfolio--section'>
      {/* MODAL */}
      <StyledModal aria-labelledby="unstyled-modal-title" aria-describedby="unstyled-modal-description" open={open}onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <img className='modalImg' id="unstyled-modal-title" src={info.img} alt="" />
          {/* <img ></img> */}
        </Box>
      </StyledModal>
      {/*  */}
      <div className="container">
        <div className='portfolio--section--content'>
          <h5> <Link class="" to="/">Главная</Link> / Проекты </h5>
        </div>
        <div className='portfolio--section--title'>
          <h1>Проекты</h1>
        </div>
          {portfolio.map( el =>{
            
            return ( 
                <div className="row align-items-center row--content">
                  <div className="col-lg-7 col-sm-12 col-md-12">
                    <img onClick={() => handleOpen(el)} className='img-fluid row--img' src={el.img} alt="" />
                  </div>
                  <div className="col-lg-5 col-sm-12 col-md-12 text-white row--title py-4">
                    <p>{el.info}</p>
                  </div>
                </div>
           )
        } )}
      </div>

      
    </section>
  )
};

export default Portfolio;

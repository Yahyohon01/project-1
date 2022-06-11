import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import "./Modal.scss"

const Modal = ({el}) => {

  const { getModal, setGetModal}  = useContext(Context)

  return (
    <div>
      {/* // <div className={`modal ${!getModal ? "onFloor" : ""} `} style={ {overflow: "hidden"} }>

//   <div className='stop-modal'>
//     <img onClick={ () =>(!getModal ? setGetModal(true) : setGetModal(false) ) } className="modal-img" src="./img/2.png" alt="" />
//   </div>
//   <div>

//     <img className='modal-content-img' src={el.image} alt="" />

//     <div>
//      
//     </div>
//   </div>

// </div> */}
    </div>


  )
};

export default Modal;

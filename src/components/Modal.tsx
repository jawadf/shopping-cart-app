import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import { Link } from 'react-router-dom';


const Modal = (props) => {

  const style={
    fontSize: '1.2rem'
  } 

  return ReactDOM.createPortal(
    (
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      {/* <div onClick={(e) => e.stopPropagation()} style={style} className="ui my-modal standard modal visible active"> 
        <div className="header">{props.title}</div>
        <div className="content" >{props.content}</div>
        <div className="actions" >
          {props.actions}
        </div>
      </div> */}


      <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
      <Link to="/" className="close icon" ><i className="close icon" >&nbsp;</i></Link> 
        
        <div className="header">
          {props.header}
        </div>
        <div className="image content">
          {props.content}
        </div>
        <div className="actions" >
          {props.actions}
        </div>
        </div>

    </div>
    ),
    document.querySelector<any>('#modal')
  );
};

export default Modal;
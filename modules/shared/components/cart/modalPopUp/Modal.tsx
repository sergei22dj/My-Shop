import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  onBackdropClick: () => void;
}

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) =>
  ReactDOM.createPortal(
    <Overlay onClick={onBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.getElementById('modal-root')!
  );

export default Modal;

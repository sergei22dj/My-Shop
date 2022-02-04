import React from 'react';
import Modal from './Modal';
import { DesktopModalContainer, HeaderModal } from './views';

interface ModalWrapperProps {
  onBackdropClick: () => void;
  modalVsion: boolean;
}
const ModalWrapper: React.FC<ModalWrapperProps> = ({ onBackdropClick, modalVsion }) => {
  if (!modalVsion) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        <HeaderModal>Modal Title here</HeaderModal>
      </DesktopModalContainer>
    </Modal>
  );
};

export default ModalWrapper;

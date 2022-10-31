import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import ModalContainer from './ModalContainer';

interface Props {
  closeModal: () => void;
  modalOpen: boolean;
}
const SignIn = ({ modalOpen, closeModal }: Props) => {
  const someFunction = async () => {
    try {
      closeModal();
    } catch (e) {}
  };

  return (
    <ModalContainer modalOpen={modalOpen} closeModal={closeModal}>
      <div className="w-full md:max-w-[400px] mx-auto h-screen md:h-auto md:min-h-[500px] py-12 md:py-0">
        <span
          onClick={() => {
            closeModal();
          }}
          className="flex justify-end pb-3 cursor-pointer"
        >
          <Icon icon="iconoir:cancel" width={33} />
        </span>
        <h1 className="text-xl font-bold">An example modal</h1>
      </div>
    </ModalContainer>
  );
};

export default SignIn;

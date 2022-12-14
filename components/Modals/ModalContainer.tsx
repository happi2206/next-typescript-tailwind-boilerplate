import React from 'react';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  modalOpen: boolean;
}
const ModalContainer = ({ children, closeModal, modalOpen }: Props) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed font-sans transition-all duration-300 ease-in-out left-0 sm:-left-2 z-[999] top-0">
          <div
            className="fixed top-0 left-0 z-20 w-screen h-screen overflow-hidden transition-opacity bg-black bg-opacity-40"
            onClick={() => {
              closeModal();
            }}
          ></div>
          <div className="flex items-center content-center w-screen h-screen sm:justify-center">
            <div
              className={`relative p-8 z-50 w-full md:w-7/12 xl:w-2/6  bg-white rounded  overflow-x-hidden `}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;

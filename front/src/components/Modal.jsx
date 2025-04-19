import { useContext, useEffect } from 'react';
import { ModalContext } from '../App';
const Modal = ({ children }) => {
  const { isOpen, closeModal } = useContext(ModalContext);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onclose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0  w-full min-h-[100vh] bg-[#2222229e] flex justify-center items-center z-50 "
      onClick={handleOverlayClick}
    >
      <div className="content w-[90%] sm:w-[50%] max-h-[80vh] sm:max-h-[90vh] bg-[#efeded] rounded-lg overflow-y-auto ">
        {children}
      </div>
    </div>
  );
};

export default Modal;

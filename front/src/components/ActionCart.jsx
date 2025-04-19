import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartShopContaxt } from '../App';
import Modal from './Modal';
import VisaImage from '../images/payment_method/visa.png';
import PayPalImage from '../images/payment_method/paypal.png';

import { ModalContext } from '../App';
const ActionCart = () => {
  const navigate = useNavigate();

  const { cleanCartShop } = useContext(CartShopContaxt);
  const { isOpen, openModal, closeModal } = useContext(ModalContext);

  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('visa');
  return (
    <div className="mb-20">
      <div className="container mx-auto">
        <div className="content my-5 flex justify-between items-center">
          <button
            onClick={openModal}
            className="outline-none bg-[#1769ff] text-white rounded-md cursor-pointer py-2 px-4"
          >
            Proceed To CheckOut
          </button>
          <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
            <h2 className="text-center mb-5 border-b p-5 font-bold text-xl">
              Select Your Payment Method
            </h2>
            <div className="p-5 flex justify-center gap-10 items-center">
              <img
                className="w-[120px] cursor-pointer"
                onClick={() => setCurrentPaymentMethod('visa')}
                src={VisaImage}
                alt=""
              />
              <img
                className="w-[120px] cursor-pointer "
                onClick={() => setCurrentPaymentMethod('payPal')}
                src={PayPalImage}
                alt=""
              />
            </div>
            <div className="payment-content p-5">
              {currentPaymentMethod === 'visa' ? (
                <div className="visa">
                  <h4 className="mb-5 text-center text-2xl font-medium text-[#555]">
                    Credit Card
                  </h4>
                  <form className="flex flex-col">
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="text"
                      placeholder="CardHolder Name"
                    />
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="number"
                      placeholder="Card Number"
                    />
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="date"
                    />
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="number"
                      placeholder="CVV"
                    />
                  </form>
                </div>
              ) : (
                <div className="payPal">
                  <h4 className="mb-5 text-center text-2xl font-medium text-[#555]">
                    Paypal Account Info
                  </h4>
                  <form className="flex flex-col">
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md mb-5"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      className="border bg-white border-primary-color py-2 px-4 rounded-md"
                      type="text"
                      placeholder="Extra Info"
                    />
                  </form>
                </div>
              )}
            </div>
            <div className="mb-5 p-5 pt-0">
              <div className=" flex justify-between mb-5">
                <button
                  onClick={() => {
                    window.alert('Proceed Done');
                    closeModal();
                    navigate('/');
                  }}
                  className="cursor-pointer bg-primary-color text-white py-2 px-4 rounded-md"
                >
                  Add To Cart
                </button>
                <button
                  onClick={closeModal}
                  className="cursor-pointer bg-primary-color text-white py-2 px-4 rounded-md"
                >
                  Close Payment
                </button>
              </div>
              <p className="text-center font-medium text-[#333] tracking-wide leading-6 px-5">
                <em>Payment Disclaimer</em>: In No Event Shall Payment Or
                Partical Payment By Owner Material Or Services
              </p>
            </div>
          </Modal>
          <button
            onClick={cleanCartShop}
            className="bg-[#dd4b39] text-white rounded-md cursor-pointer py-2 px-4"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCart;

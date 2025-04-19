import { useContext } from 'react';
import { CartShopContaxt } from '../App';
const MoreActionCart = () => {
  const { totalPrice } = useContext(CartShopContaxt);
  return (
    <div className="mb-10">
      <div className="container mx-auto">
        <div className="content flex justify-between gap-5">
          <div className="w-[400px]">
            <h2 className="text-2xl font-bold mb-7">Calculate Shipping</h2>
            <form>
              <div className="mb-5">
                <select className="block w-full border py-1 px-2 border-gray-color text-sm">
                  <option value="egypt">Egypt</option>
                  <option value="united-kingdom-(UK)">
                    United kingdom (UK)
                  </option>
                  <option value="germany">Germany</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div>
                <select className="block w-full border py-1 px-2 border-gray-color text-sm">
                  <option value="cairo">Cairo</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                  <option value="new-delhi">New Delhi</option>
                </select>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-7">Cart Totals</h2>
            <ul>
              <li className="flex justify-between p-4 border rounded-md mb-5">
                <strong className="text-gray-color">Cart Subtotal</strong>
                <span className="text-primary-color font-bold">
                  ${totalPrice}
                </span>
              </li>
              <li className="flex gap-4 justify-between p-4 border rounded-md mb-5">
                <strong className="text-gray-color">
                  Shipping and Handing
                </strong>
                <span className="text-primary-color font-bold">
                  Free Shipping
                </span>
              </li>
              <li className="flex justify-between p-4 border rounded-md mb-5">
                <strong className="text-gray-color">Order Total</strong>
                <span className="text-primary-color font-bold">
                  ${totalPrice}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreActionCart;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartShopContaxt } from '../App';

import ActionCart from './ActionCart';
import MoreActionCart from './MoreActionCart';

const CartShopTable = () => {
  const { cartShop, increaseTotal, decreaseTotal, deleteCart } =
    useContext(CartShopContaxt);
  return (
    <div>
      <div className="container mx-auto">
        <div className="content">
          <div className="overflow-y-auto custom-scroll">
            {cartShop.length > 0 ? (
              <div>
                <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden mb-10">
                  <thead className="bg-primary-color text-white-color">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium ">
                        Product
                      </th>
                      <th className="text-left px-6 py-3 text-sm font-medium ">
                        Price
                      </th>
                      <th className="text-left px-6 py-3 text-sm font-medium ">
                        Quantity
                      </th>
                      <th className="text-left px-6 py-3 text-sm font-medium">
                        Total
                      </th>
                      <th className="text-left px-6 py-3 text-sm font-medium">
                        Remove
                      </th>
                    </tr>
                  </thead>

                  {cartShop.map((product) => (
                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      key={product.id}
                    >
                      <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-color">
                          <img
                            className="w-[70px] pr-5"
                            src={product.photo.url}
                            alt={product.brandName}
                          />
                          <p>{product.brandName}</p>
                        </td>
                        <td className="px-6 py-4  text-primary-color font-bold">
                          ${product.price}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 border rounded w-fit px-2 py-1">
                            <button
                              onClick={() => increaseTotal(product.id)}
                              className="px-2 text-lg font-bold  cursor-pointer"
                            >
                              +
                            </button>
                            <span className="bg-primary-color text-white-color p-1 rounded-lg font-bold">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => decreaseTotal(product.id)}
                              className="px-2 text-lg font-bold  cursor-pointer"
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-primary-color font-bold">
                          ${product.total}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteCart(product.id)}
                            className="text-red-600 hover:text-red-800 transition cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faTrash} size="lg" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
                <ActionCart />
                <MoreActionCart />
              </div>
            ) : (
              <h3 className="mb-10 text-3xl font-bold text-center">
                Your Cart Is Empty
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartShopTable;

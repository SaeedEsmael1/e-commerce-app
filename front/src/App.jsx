import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Layout,
  Home,
  Shop,
  CartShop,
  Blog,
  About,
  Contact,
  ShopSlug,
  BlogSlug,
  NotFoundPage,
} from './pages';
import { createContext, useState } from 'react';

export const CartShopContaxt = createContext();
export const ModalContext = createContext();

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/shop/:slug',
        element: <ShopSlug />,
      },
      {
        path: '/cart-shop',
        element: <CartShop />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:slug',
        element: <BlogSlug />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const queryClient = new QueryClient();
const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartShop, setCartShop] = useState([]);

  const addCartShopProduct = (productData) => {
    setTotalPrice((prev) => Number((prev + productData.price).toFixed(1)));
    setCartShop((prev) => [
      ...prev,
      {
        ...productData,
        quantity: 1,
        total: Number(productData.price.toFixed(1)),
      },
    ]);
  };

  const checkCartFound = (productData) => {
    let isFound = [];
    if (cartShop.length === 0) {
      addCartShopProduct(productData);
      window.alert('Product Added');
    } else {
      isFound = cartShop.filter((cart) => cart.id == productData.id);
      if (isFound.length > 0) {
        window.alert('Product Was Added');
      } else {
        addCartShopProduct(productData);
        window.alert('Product Added');
      }
    }
  };

  const increaseTotal = (productID) => {
    const updatedCarts = cartShop.map((cart) => {
      if (productID === cart.id) {
        setTotalPrice((prev) => Number((prev + cart.price).toFixed(1)));
        return {
          ...cart,
          total: Number((cart.total + cart.price).toFixed(1)),
          quantity: cart.quantity + 1,
        };
      } else {
        return cart;
      }
    });
    setCartShop(updatedCarts);
  };

  const decreaseTotal = (productID) => {
    const updatedCarts = cartShop.map((cart) => {
      if (productID === cart.id) {
        const validTotal =
          Number((cart.total - cart.price).toFixed(1)) > cart.price
            ? Number((cart.total - cart.price).toFixed(1))
            : cart.price;
        return {
          ...cart,
          quantity: cart.quantity > 1 ? cart.quantity - 1 : 1,
          total: validTotal,
        };
      } else {
        return cart;
      }
    });
    setCartShop(updatedCarts);
    const total = updatedCarts.reduce((acc, item) => acc + item.total, 0);
    setTotalPrice(Number(total.toFixed(1)));
  };

  const deleteCart = (productID) => {
    const updatedCarts = cartShop.filter((cart) => cart.id !== productID);
    setCartShop(updatedCarts);
    const total = updatedCarts.reduce((acc, item) => acc + item.total, 0);
    setTotalPrice(Number(total.toFixed(1)));
  };
  const cleanCartShop = () => {
    setTotalPrice(0);
    setCartShop([]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <CartShopContaxt.Provider
        value={{
          cartShop,
          checkCartFound,
          increaseTotal,
          decreaseTotal,
          deleteCart,
          cleanCartShop,
          totalPrice,
        }}
      >
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
          <RouterProvider router={route} />
        </ModalContext.Provider>
      </CartShopContaxt.Provider>
    </QueryClientProvider>
  );
};

export default App;

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="content min-h-[calc(100vh-(492px+80px))] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

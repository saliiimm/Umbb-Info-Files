import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;

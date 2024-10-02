import BlueShape from '../../assets/graph.png';
import YellowShape from '../../assets/graph-yellow.png';
import './WelcomeSection.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPhp, FaPython } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2>
        Welcome to UMBB CS Files
        <img src={BlueShape} alt="blue shape" className="blue" />
        <img src={YellowShape} alt="yellow shape" className="yellow" />
      </h2>
      <h3>Where you find all the sources you need to success!</h3>
      <FaHtml5 className="floating-icon html-icon" />
      <FaCss3Alt className="floating-icon css-icon" />
      <FaJsSquare className="floating-icon js-icon" />
      <FaJava className="floating-icon java-icon" />
      <FaPhp className="floating-icon php-icon" />
      <FaPython className="floating-icon python-icon" />
      <SiC className="floating-icon c-icon" />
      <SiCplusplus className="floating-icon cpp-icon" />
      <TbSql className="floating-icon sql-icon" />
    </section>
  );
};

export default WelcomeSection;

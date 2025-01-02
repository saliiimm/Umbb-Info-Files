import './NavBar.css';
import { Button } from 'antd';
import { MdNoteAdd } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollWithOffset = (el: any) => {
    const yOffset = -70;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <HashLink to="/#home" scroll={scrollWithOffset}>
        <h1>UMBB Info Files</h1>
      </HashLink>

      <div className="hamburger" onClick={toggleMenu}>
        <FaBars size={30} />
      </div>

      <ul className={isMenuOpen ? 'active' : ''}>
        <li>
          <HashLink to="/#1st-year" scroll={scrollWithOffset}>
            1st Year
          </HashLink>
        </li>

        <li>
          <HashLink to="/#2nd-year" scroll={scrollWithOffset}>
            2nd Year
          </HashLink>
        </li>

        <li>
          <HashLink to="/#3rd-year" scroll={scrollWithOffset}>
            3rd Year
          </HashLink>
        </li>

        <li>
          <HashLink to="/#4th-year" scroll={scrollWithOffset}>
            4th Year
          </HashLink>
        </li>

        <li>
          <HashLink to="/#5th-year" scroll={scrollWithOffset}>
            5th Year
          </HashLink>
        </li>
        {isMenuOpen && (
          <Button
            type="primary"
            icon={<MdNoteAdd size={18} />}
            disabled
            title="soon available"
          >
            Contribute
          </Button>
        )}
      </ul>

      <Button
        type="primary"
        icon={<MdNoteAdd size={18} />}
        disabled
        title="soon available"
        className="nav-button"
      >
        Contribute
      </Button>
    </nav>
  );
};

export default NavBar;

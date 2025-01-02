import './NavBar.css';
import { Button } from 'antd';
import { MdNoteAdd } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollWithOffset = (el: any) => {
    const yOffset = -70;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <nav>
      <HashLink to="/#home" scroll={scrollWithOffset}>
        <h1>UMBB Info Files</h1>
      </HashLink>
      <ul>
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
      </ul>
      <Button
        type="primary"
        icon={<MdNoteAdd size={18} />}
        disabled
        title="soon available"
      >
        Contribute
      </Button>
    </nav>
  );
};

export default NavBar;

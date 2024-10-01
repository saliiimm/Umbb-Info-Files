import './NavBar.css';
import { Button } from 'antd';
import { MdNoteAdd } from 'react-icons/md';
import { Dropdown, MenuProps, Space } from 'antd';

// Dropdown menu items for each year
const firstYearItems: MenuProps['items'] = [
  { key: '1', label: <a href="#">1st Semester</a> },
  { key: '2', label: <a href="#">2nd Semester</a> },
];

const secondYearItems: MenuProps['items'] = [
  { key: '1', label: <a href="#">3rd Semester</a> },
  { key: '2', label: <a href="#">4th Semester</a> },
];

const thirdYearItems: MenuProps['items'] = [
  { key: '1', label: <a href="#">5th Semester</a> },
  { key: '2', label: <a href="#">6th Semester</a> },
  { key: '3', label: <a href="#">PFE</a> }, // Project for the end of studies (PFE)
];

const m1Items: MenuProps['items'] = [
  { key: '1', label: <a href="#">1st Semester</a> },
  { key: '2', label: <a href="#">2nd Semester</a> },
];

const m2Items: MenuProps['items'] = [
  { key: '1', label: <a href="#">3rd Semester</a> },
  { key: '2', label: <a href="#">PFE</a> },
];

const NavBar = () => {
  return (
    <nav>
      <h1>UMBB Info Files</h1>
      <ul>
        <li>
          <Dropdown menu={{ items: firstYearItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>1st Year</Space>
            </a>
          </Dropdown>
        </li>

        <li>
          <Dropdown menu={{ items: secondYearItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>2nd Year</Space>
            </a>
          </Dropdown>
        </li>

        <li>
          <Dropdown menu={{ items: thirdYearItems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>3rd Year</Space>
            </a>
          </Dropdown>
        </li>

        <li>
          <Dropdown menu={{ items: m1Items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>M1</Space>
            </a>
          </Dropdown>
        </li>

        <li>
          <Dropdown menu={{ items: m2Items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>M2</Space>
            </a>
          </Dropdown>
        </li>
      </ul>

      <Button type="primary" icon={<MdNoteAdd size={18} />}>
        Contribute
      </Button>
    </nav>
  );
};

export default NavBar;

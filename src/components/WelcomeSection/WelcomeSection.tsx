import IconCloud from '../ui/icon-cloud';
import './WelcomeSection.css';

const slugs = [
  'c',
  'python',
  'php',
  'mysql',
  'sql',
  'typescript',
  'javascript',
  'java',
  'android',
  'html5',
  'css3',
  'postgresql',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'figma',
];
const WelcomeSection = () => {
  return (
    <section className="welcome-section" id="home">
      <div>
        <h2>Welcome to UMBB CS Files</h2>
        <h3>Where you find all the sources you need to success!</h3>
      </div>
      <IconCloud iconSlugs={slugs} />
    </section>
  );
};

export default WelcomeSection;

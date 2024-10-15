import SemesterSection from '../../components/SemesterSection/SemesterSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import subjectsData from "../../utils/data_models/subjectsData.json";
const HomePage = () => {
  const years = subjectsData.years; 
  return (
    <div>
      <WelcomeSection />
      {years.map((year) => (
        <SemesterSection key={year.year} year={year} />
      ))}
    </div>
  );
};

export default HomePage;

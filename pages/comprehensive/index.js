import MainLayout from "../../src/layouts/MainLayout";
import ComprehensiveContainer from "../../src/containers/Comprehensive";

const ComprehensivePage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ComprehensiveContainer />
    </MainLayout>
  );
};

export default ComprehensivePage;

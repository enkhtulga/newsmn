import MainLayout from "../../src/layouts/MainLayout";
import CornerContainer from "../../src/containers/Corner";

const CornerPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <CornerContainer />
    </MainLayout>
  );
};

export default CornerPage;

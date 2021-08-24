import MainLayout from "../../src/layouts/MainLayout";
import DevelopedByContainer from "../../src/containers/DevelopedBy";

const DevelopedByPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <DevelopedByContainer />
    </MainLayout>
  );
};

export default DevelopedByPage;

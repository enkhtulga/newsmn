import MainLayout from "../../src/layouts/MainLayout";
import RealEstateContainer from "../../src/containers/RealEstate";

const RealEstatePage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <RealEstateContainer />
    </MainLayout>
  );
};

export default RealEstatePage;

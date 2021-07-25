import MainLayout from "../../src/layouts/MainLayout";
import TripContainer from "../../src/containers/Trip";

const TripPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <TripContainer />
    </MainLayout>
  );
};

export default TripPage;

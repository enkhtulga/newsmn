import MainLayout from "../../src/layouts/MainLayout";
import EntertainmentContainer from "../../src/containers/Entertainment";

const EntertainmentPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <EntertainmentContainer />
    </MainLayout>
  );
};

export default EntertainmentPage;

import MainLayout from "../../src/layouts/MainLayout";
import EntertaimentContainer from "../../src/containers/Entertaiment";

const EntertaimentPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <EntertaimentContainer />
    </MainLayout>
  );
};

export default EntertaimentPage;

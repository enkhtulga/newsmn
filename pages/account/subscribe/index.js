import MainLayout from "../../../src/layouts/MainLayout";
import SubscribeContainer from "../../../src/containers/Account/Subscribe";

const SubscribePage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <SubscribeContainer />
    </MainLayout>
  );
};

export default SubscribePage;

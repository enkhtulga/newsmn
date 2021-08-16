import MainLayout from "../../../src/layouts/MainLayout";
import MyCartContainer from "../../../src/containers/Account/MyCart";

const MyCartPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <MyCartContainer />
    </MainLayout>
  );
};

export default MyCartPage;

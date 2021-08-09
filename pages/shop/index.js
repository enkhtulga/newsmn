import MainLayout from "../../src/layouts/MainLayout";
import ShopContainer from "../../src/containers/Shop";

const ShopPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ShopContainer />
    </MainLayout>
  );
};

export default ShopPage;

import MainLayout from "../../src/layouts/MainLayout";
import ShopEbookContainer from "../../src/containers/ShopEbook";

const ShopEbookPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ShopEbookContainer />
    </MainLayout>
  );
};

export default ShopEbookPage;

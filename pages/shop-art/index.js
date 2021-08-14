import MainLayout from "../../src/layouts/MainLayout";
import ShopArtContainer from "../../src/containers/ShopArt";

const ShopArtPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ShopArtContainer />
    </MainLayout>
  );
};

export default ShopArtPage;

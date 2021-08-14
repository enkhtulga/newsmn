import MainLayout from "../../src/layouts/MainLayout";
import ShopAudioBookContainer from "../../src/containers/ShopAudioBook";

const ShopAudioBookPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ShopAudioBookContainer />
    </MainLayout>
  );
};

export default ShopAudioBookPage;

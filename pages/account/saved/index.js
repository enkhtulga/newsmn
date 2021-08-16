import MainLayout from "../../../src/layouts/MainLayout";
import SavedGoodsContainer from "../../../src/containers/Account/SavedGoods";

const SavedGoodsPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <SavedGoodsContainer />
    </MainLayout>
  );
};

export default SavedGoodsPage;

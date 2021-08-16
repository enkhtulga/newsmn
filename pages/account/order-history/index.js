import MainLayout from "../../../src/layouts/MainLayout";
import OrderHistoryContainer from "../../../src/containers/Account/OrderHistory";

const OrderHistoryPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <OrderHistoryContainer />
    </MainLayout>
  );
};

export default OrderHistoryPage;

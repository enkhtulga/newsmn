import MainLayout from "../../../src/layouts/MainLayout";
import NotificationContainer from "../../../src/containers/Account/Notification";

const NotificationPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <NotificationContainer />
    </MainLayout>
  );
};

export default NotificationPage;

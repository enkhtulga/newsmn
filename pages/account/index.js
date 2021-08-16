import MainLayout from "../../src/layouts/MainLayout";
import AccountContainer from "../../src/containers/Account";

const AccountPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <AccountContainer />
    </MainLayout>
  );
};

export default AccountPage;

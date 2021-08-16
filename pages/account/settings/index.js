import MainLayout from "../../../src/layouts/MainLayout";
import SettingsContainer from "../../../src/containers/Account/Settings";

const SettingsPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <SettingsContainer />
    </MainLayout>
  );
};

export default SettingsPage;

import MainLayout from "../../../src/layouts/MainLayout";
import FollowingContainer from "../../../src/containers/Account/Following";

const FollowingPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <FollowingContainer />
    </MainLayout>
  );
};

export default FollowingPage;

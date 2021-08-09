import MainLayout from "../../src/layouts/MainLayout";
import PodcastContainer from "../../src/containers/Podcast";

const PodcastPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <PodcastContainer />
    </MainLayout>
  );
};

export default PodcastPage;

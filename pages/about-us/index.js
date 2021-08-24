import MainLayout from "../../src/layouts/MainLayout";
import AboutUsContainer from "../../src/containers/AboutUs";

const AboutUsPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <AboutUsContainer />
    </MainLayout>
  );
};

export default AboutUsPage;

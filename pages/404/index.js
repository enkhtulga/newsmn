import MainLayout from "../../src/layouts/MainLayout";
import Custom404Container from "../../src/containers/Custom404";

const Custom404Page = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <Custom404Container />
    </MainLayout>
  );
};

export default Custom404Page;

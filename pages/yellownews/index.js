import MainLayout from "../../src/layouts/MainLayout";
import YellowNewsContainer from "../../src/containers/YellowNews";

const YellowNewsPage = () => {
  const headerProps = {
    yellow: true,
  };
  return (
    <MainLayout headerProps={headerProps}>
      <YellowNewsContainer />
    </MainLayout>
  );
};

export default YellowNewsPage;

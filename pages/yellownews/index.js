import MainLayout from "../../src/layouts/MainLayout";
import YellowNewsContainer from "../../src/containers/YellowNews";

const YellowNewsPage = () => {
  return (
    <MainLayout yellow>
      <YellowNewsContainer />
    </MainLayout>
  );
};

export default YellowNewsPage;

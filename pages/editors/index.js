import MainLayout from "../../src/layouts/MainLayout";
import EditorsContainer from "../../src/containers/Editor";

const EditorsPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <EditorsContainer />
    </MainLayout>
  );
};

export default EditorsPage;

import MainLayout from "../../src/layouts/MainLayout";
import ArchiveContainer from "../../src/containers/Archive";

const ArchivePage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ArchiveContainer />
    </MainLayout>
  );
};

export default ArchivePage;

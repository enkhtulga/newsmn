import MainLayout from "../../src/layouts/MainLayout";
import SearchContainer from "../../src/containers/Search";

const SearchPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <SearchContainer />
    </MainLayout>
  );
};

export default SearchPage;

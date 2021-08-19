import MainLayout from "../../src/layouts/MainLayout";
import BookmarkContainer from "../../src/containers/Bookmark";

const BookmarkPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <BookmarkContainer />
    </MainLayout>
  );
};

export default BookmarkPage;

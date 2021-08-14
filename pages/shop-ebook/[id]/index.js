import MainLayout from "../../../src/layouts/MainLayout";
import ShopEbookDetailContainer from "../../../src/containers/ShopEbook/Detail";
import { useRouter } from "next/router";

const ShopEbookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <ShopEbookDetailContainer ebookId={id} />
    </MainLayout>
  );
};

export default ShopEbookDetailPage;

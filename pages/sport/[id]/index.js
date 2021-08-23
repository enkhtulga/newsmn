import MainLayout from "../../../src/layouts/MainLayout";
import SportDetailContainer from "../../../src/containers/Sport/Detail";
import { useRouter } from "next/router";

const SportDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SportDetailContainer postId={id} />;
};

SportDetailPage.Layout = MainLayout;

export default SportDetailPage;

import MainLayout from "../../../src/layouts/MainLayout";
import PodcastDetailContainer from "../../../src/containers/Podcast/Detail";
import { useRouter } from "next/router";

const PodcastDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PodcastDetailContainer podcastId={id} />;
};

PodcastDetailPage.Layout = MainLayout;

export default PodcastDetailPage;

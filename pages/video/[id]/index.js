import VideoLayout from "../../../src/layouts/VideoLayout";
import VideoDetailContainer from "../../../src/containers/Video/Detail";
import { useRouter } from "next/router";

const VideoDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <VideoLayout>
      <VideoDetailContainer videoPostId={id} />
    </VideoLayout>
  );
};

export default VideoDetailPage;

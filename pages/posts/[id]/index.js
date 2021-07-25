import MainLayout from "../../../src/layouts/MainLayout";
import PostDetailContainer from "../../../src/containers/PostDetail";
import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PostDetailContainer postId={id} />;
};

PostDetailPage.Layout = MainLayout;

export default PostDetailPage;

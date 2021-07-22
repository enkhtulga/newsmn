import MainLayout from "../../../src/layouts/MainLayout";
import PostSingleContainer from "../../../src/containers/PostSingle";
import { useRouter } from "next/router";

const PostSinglePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PostSingleContainer postId={id} />;
};

PostSinglePage.Layout = MainLayout;

export default PostSinglePage;

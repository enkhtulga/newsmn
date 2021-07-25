import MainLayout from "../../../src/layouts/MainLayout";
import EditorDetailContainer from "../../../src/containers/Editor/Detail";
import { useRouter } from "next/router";

const EditorDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <EditorDetailContainer editorDetailId={id} />
    </MainLayout>
  );
};

export default EditorDetailPage;

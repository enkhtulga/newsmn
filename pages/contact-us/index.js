import MainLayout from "../../src/layouts/MainLayout";
import ContactUsContainer from "../../src/containers/ContactUs";

const ContactUsPage = () => {
  const headerProps = {
    hasBanner: false,
  };

  return (
    <MainLayout headerProps={headerProps}>
      <ContactUsContainer />
    </MainLayout>
  );
};

export default ContactUsPage;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <div className="text-right">
        <Breadcrumb
          pageName="תלמיד"
          description="מידע לתלמיד"
        />
        <div className="flex items-center justify-center">
          <img src="/images/children.jpeg" alt="children" />
        </div>

        <AboutSectionOne />
      </div>
    </>
  );
};

export default AboutPage;

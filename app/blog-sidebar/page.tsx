import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const BlogSidebarPage = () => {
  return (
    <>

      <div className="text-center">
        <Breadcrumb
          pageName="משחקים"
          description="תיאור למורה"
          
        />
        <div className="flex items-center justify-center">
          <img src="/images/games.png" alt="children" />
        </div>
      </div>
    </>
  );
};

export default BlogSidebarPage;

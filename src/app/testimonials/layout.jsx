import SubNav from "@/components/SubNav";
import Subscribe from "@/components/Subscribe";

export async function generateMetadata() {
  // SEO Data Fetch
  return {
    title: "Testimonials",
    description: "Testimonials for Agency Website",
    keywords: "agency, web",
  };
}

const Layout = ({ children }) => {
  return (
    <div className="bg-[whitesmoke]">
      <SubNav />
      {children}
      <Subscribe />
    </div>
  );
};

export default Layout;

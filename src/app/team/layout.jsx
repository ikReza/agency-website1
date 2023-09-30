import SubNav from "@/components/SubNav";
import Subscribe from "@/components/Subscribe";


export async function generateMetadata() {
  // SEO Data Fetch
  return {
    title: "Team",
    description: "Team for Agency Website",
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

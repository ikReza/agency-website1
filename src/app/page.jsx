import FeaturedProject from "@/components/FeaturedProject";
import HeroList from "@/components/HeroList/HeroList";
import StatList from "@/components/StatList/StatList";
import WorkList from "@/components/WorkList";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="flex flex-col bg-green-100">
      <HeroList />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
    </main>
  );
}

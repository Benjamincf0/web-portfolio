import Grid from "@/components/Grid";
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

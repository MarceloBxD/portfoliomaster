import Feedbacks from "@/components/Feedbacks";
import FeaturedWorks from "@/sections/FeaturedWorks";
import Header from "@/sections/Header";
import Presentation from "@/sections/Presentation";

export default function Home() {
  return (
    <main className="pt-6 pb-6 py-32">
      <Header />
      <Presentation />
      <FeaturedWorks />
      <Feedbacks />
    </main>
  );
}

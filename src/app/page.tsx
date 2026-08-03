import Navbar from "@/components/Navbar";
import Chapter1_Hero from "@/components/Chapter1_Hero";
import Chapter2_Problem from "@/components/Chapter2_Problem";
import Chapter4_Introduce from "@/components/Chapter4_Introduce";
import Chapter4_PlanMissions from "@/components/Chapter4_PlanMissions";
import Chapter5_CoordinateMissions from "@/components/Chapter5_CoordinateMissions";
import Chapter6_LaunchMissions from "@/components/Chapter6_LaunchMissions";
import Chapter7_Enterprise from "@/components/Chapter7_Enterprise";
import Chapter8_FAQ from "@/components/Chapter8_FAQ";
import Chapter8_Closing from "@/components/Chapter8_Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-white">
      <div className="w-full relative flex flex-col">
        <Navbar />
        <Chapter1_Hero />
        <Chapter2_Problem />
        <Chapter4_Introduce />
        <Chapter4_PlanMissions />
        <Chapter5_CoordinateMissions />
        <Chapter6_LaunchMissions />
        <Chapter7_Enterprise />
        <Chapter8_FAQ />

        <Chapter8_Closing />
        <Footer />
      </div>
    </main>
  );
}

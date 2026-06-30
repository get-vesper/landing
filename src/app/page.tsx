import Navbar from "@/components/Navbar";
import Chapter1_Hero from "@/components/Chapter1_Hero";
import Chapter2_Problem from "@/components/Chapter2_Problem";
import Chapter4_Introduce from "@/components/Chapter4_Introduce";
import Chapter5_Product from "@/components/Chapter5_Product";
import Chapter6_Ecosystem from "@/components/Chapter6_Ecosystem";
import Chapter8_Closing from "@/components/Chapter8_Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none ghost-grid z-[-1]" />
      
      <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden">
        <Navbar />
        <div className="w-full">
          <Chapter1_Hero />
          <Chapter2_Problem />
          <Chapter4_Introduce />
          <Chapter5_Product />
          <Chapter6_Ecosystem />
          <Chapter8_Closing />
          <Footer />
        </div>
      </main>
    </>
  );
}

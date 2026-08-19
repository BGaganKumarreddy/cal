import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MeetSection from './components/MeetSection'
import SelfHostSection from './components/SelfHostSection'
import UseCasesSection from './components/UseCasesSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      {/* ── First screen: Navbar + Hero ─────────────── */}
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <Hero />
      </div>

      {/* ── Remaining sections ─────────────────────── */}
      <MeetSection />
      <SelfHostSection />
      <UseCasesSection />
      <Footer />
    </div>
  )
}

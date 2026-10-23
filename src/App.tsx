import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
} from "lucide-react";

export default function App() {
  const [activePill, setActivePill] = useState<string>("Artistic Gallery");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [processingState, setProcessingState] = useState<"idle" | "running" | "complete">("idle");
  const [notification, setNotification] = useState<string | null>(null);

  const pills = ["Artistic Gallery", "AI Generation", "3D Structures"];

  const showNotification = (text: string) => {
    setNotification(text);
    setTimeout(() => {
      setNotification((prev) => (prev === text ? null : prev));
    }, 3000);
  };

  const handlePillClick = (pill: string) => {
    setActivePill(pill);
    showNotification(`Selected space: ${pill}`);
  };

  const triggerProcessing = () => {
    if (processingState === "idle") {
      setProcessingState("running");
      showNotification("Synthesizing plant seed configurations...");
      setTimeout(() => {
        setProcessingState("complete");
        showNotification("Ecosystem simulation active: 12 floral seeds live.");
      }, 2500);
    } else {
      setProcessingState("idle");
      showNotification("Simulation reset.");
    }
  };

  return (
    <div
      id="bloom-app"
      className="relative min-h-screen w-full bg-black text-white overflow-x-hidden font-sans select-none"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      {/* Main Grid Layout - Two-Panel Split */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row p-4 lg:p-6 gap-6">
        
        {/* Left Panel */}
        <motion.div
          id="left-panel"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full lg:w-[52%] flex-1 flex flex-col justify-between min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] rounded-3xl liquid-glass-strong p-6 lg:p-10"
        >
          {/* Navigation Bar */}
          <div id="nav-bar" className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img
                id="bloom-logo-nav"
                src="/logo.png"
                alt="bloom logo"
                className="w-8 h-8 object-contain hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold text-2xl tracking-tighter text-white">
                bloom
              </span>
            </div>
            
            <button
              id="menu-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="liquid-glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-white/90 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <span>Menu</span>
              <Menu size={16} className="text-white" />
            </button>
          </div>

          {/* Menu Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="menu-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 right-6 lg:right-10 w-48 rounded-2xl liquid-glass p-3 z-50 flex flex-col gap-1 shadow-lg"
              >
                {["Overview", "Ecosystem", "Simulations", "About Us"].map((item) => (
                  <button
                    key={item}
                    id={`menu-item-${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => {
                      showNotification(`Navigating to ${item}...`);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Center Section */}
          <div id="hero-center" className="flex-1 flex flex-col items-center justify-center text-center py-10 lg:py-16">
            <motion.img
              id="bloom-logo-center"
              src="/logo.png"
              alt="bloom logo large"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-20 h-20 object-contain mb-8 select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />

            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-[-0.05em] text-white leading-[1.1] max-w-xl">
              Innovating the <br />
              <span className="font-serif italic text-white/80">spirit of bloom AI</span>
            </h1>

            <button
              id="cta-explore-btn"
              onClick={() => showNotification("Accessing design canvas...")}
              className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full text-white font-medium liquid-glass-strong hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <span>Explore Now</span>
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <Download size={14} className="text-white" />
              </div>
            </button>

            {/* Three Pills */}
            <div id="hero-pills" className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {pills.map((pill) => (
                <button
                  key={pill}
                  id={`pill-${pill.toLowerCase().replace(" ", "-")}`}
                  onClick={() => handlePillClick(pill)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    activePill === pill
                      ? "bg-white/15 text-white scale-105"
                      : "liquid-glass text-white/80 hover:scale-105 hover:bg-white/5"
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Quote section */}
          <div id="bottom-quote" className="w-full mt-auto pt-6 border-t border-white/5">
            <span className="text-[10px] tracking-widest uppercase text-white/50 block mb-2 font-medium">
              VISIONARY DESIGN
            </span>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              "We imagined a <span className="font-serif italic text-white/80">realm</span> with <span className="font-serif italic text-white/80">no ending</span>."
            </p>
            
            {/* Author Line */}
            <div id="quote-author" className="flex items-center gap-3 mt-4 text-[10px] tracking-widest text-white/40 uppercase">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span>MARCUS AURELIO</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel (Desktop Only) */}
        <motion.div
          id="right-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="hidden lg:flex lg:w-[48%] flex-col justify-between h-[calc(100vh-3rem)] p-2"
        >
          {/* Top Bar */}
          <div id="right-top-bar" className="flex items-center justify-between w-full">
            {/* Social Icons Pill */}
            <div className="flex items-center gap-3.5 px-4 py-2.5 rounded-full liquid-glass">
              <div className="flex items-center gap-3.5">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors hover:scale-105"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors hover:scale-105"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors hover:scale-105"
                >
                  <Instagram size={15} />
                </a>
              </div>
              <div className="w-[1px] h-3.5 bg-white/15"></div>
              <ArrowRight size={14} className="text-white/70" />
            </div>

            {/* Account & Sparkles Button Group */}
            <div className="flex items-center gap-2">
              <button
                id="account-btn"
                onClick={() => showNotification("Accessing system node dashboard...")}
                className="liquid-glass rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Account
              </button>
              <button
                id="sparkles-btn"
                onClick={() => showNotification("Optimizing design workspace matrix...")}
                className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <Sparkles size={15} />
              </button>
            </div>
          </div>

          {/* Community Card */}
          <div id="community-card-container" className="mt-8 self-start">
            <div id="community-card" className="liquid-glass rounded-2xl p-4 w-56 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/95">
                Enter our ecosystem
              </h3>
              <p className="text-[11px] text-white/60 leading-relaxed mt-2">
                Join a curated group of visual artists, horticulturists, and machine learning researchers rewriting nature's design code.
              </p>
            </div>
          </div>

          {/* Bottom Feature Section */}
          <div id="bottom-feature-section" className="mt-auto">
            <div id="bottom-feature-container" className="liquid-glass rounded-[2.5rem] p-5 w-full flex flex-col gap-4">
              
              {/* Two Side-by-Side Cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Processing Card */}
                <div
                  id="card-processing"
                  onClick={triggerProcessing}
                  className="liquid-glass rounded-3xl p-4 flex flex-col justify-between h-32 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="text-[9px] tracking-wider text-white/40 uppercase font-medium">SEED SIMULATION</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <Wand2 size={14} className={`text-white/90 ${processingState === "running" ? "animate-spin" : ""}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/95">Processing</h4>
                    <p className="text-[11px] text-white/50 mt-1">
                      {processingState === "idle" && "Tap to synthesize"}
                      {processingState === "running" && "Calculating nodes..."}
                      {processingState === "complete" && "12 active seeds live"}
                    </p>
                  </div>
                </div>

                {/* Growth Archive Card */}
                <div
                  id="card-growth-archive"
                  onClick={() => showNotification("Opening archive ledger...")}
                  className="liquid-glass rounded-3xl p-4 flex flex-col justify-between h-32 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="text-[9px] tracking-wider text-white/40 uppercase font-medium">RESOURCES</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <BookOpen size={14} className="text-white/90" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/95">Growth Archive</h4>
                    <p className="text-[11px] text-white/50 mt-1">v1.2 library open</p>
                  </div>
                </div>
              </div>

              {/* Bottom Card */}
              <div
                id="card-advanced-sculpting"
                onClick={() => showNotification("Initiating advanced plant sculpting matrix...")}
                className="liquid-glass rounded-3xl p-3.5 flex items-center justify-between gap-4 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  {/* Image Thumbnail */}
                  <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                    <img
                      src="/assets/hero-flowers.png"
                      alt="Advanced Plant Sculpting Preview"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/95">
                      Advanced Plant Sculpting
                    </h4>
                    <p className="text-xs text-white/50 mt-1 leading-snug">
                      Interactive 3D structural model generation engine
                    </p>
                  </div>
                </div>

                {/* + Button Container */}
                <button
                  id="sculpting-add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNotification("Added new seed sculpting template.");
                  }}
                  className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white font-medium hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                  +
                </button>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating Action Notifications */}
      <AnimatePresence>
        {notification && (
          <motion.div
            id="toast-notification"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-5 py-2.5 rounded-full liquid-glass-strong text-xs text-white/90 tracking-wide shadow-2xl flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

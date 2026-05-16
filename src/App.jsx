export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <h1 className="text-2xl font-black tracking-[0.25em] text-cyan-400">
          ⚛ CORE REACTOR
        </h1>

        <div className="flex gap-4 text-sm">
          <div className="bg-white/5 border border-cyan-500/20 px-4 py-2 rounded-2xl">
            ⚡ 12,440 CORE
          </div>

          <div className="bg-white/5 border border-purple-500/20 px-4 py-2 rounded-2xl">
            ☢ 42 PLASMA
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24">

        {/* Reactor */}
        <div className="mb-10">
          <div className="w-64 h-64 rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_100px_rgba(0,255,255,0.4)] animate-pulse">

            <div className="w-40 h-40 rounded-full bg-cyan-300 shadow-[0_0_60px_rgba(0,255,255,1)]" />

          </div>
        </div>

        {/* Title */}
        <h2 className="text-6xl font-black tracking-[0.2em] mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
          CORE REACTOR
        </h2>

        <p className="text-white/60 max-w-xl text-lg mb-10">
          Futuristic AI powered spin engine for rare drops,
          jackpots, and reactor rewards.
        </p>

        {/* Spin Button */}
        <button className="px-10 py-5 rounded-3xl bg-cyan-400 text-black font-black tracking-widest text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.8)]">
          ⚛ SPIN REACTOR
        </button>
      </section>

      {/* Stats */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-24 max-w-6xl mx-auto pb-24">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-cyan-400 text-sm tracking-[0.25em] mb-3">
            TOTAL SPINS
          </h3>

          <p className="text-5xl font-black">
            281
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-purple-400 text-sm tracking-[0.25em] mb-3">
            JACKPOTS
          </h3>

          <p className="text-5xl font-black">
            12
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
          <h3 className="text-yellow-400 text-sm tracking-[0.25em] mb-3">
            GLOBAL RANK
          </h3>

          <p className="text-5xl font-black">
            #14
          </p>
        </div>

      </section>
    </div>
  );
}

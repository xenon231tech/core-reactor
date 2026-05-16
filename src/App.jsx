import { motion } from "framer-motion"; import { useState } from "react";

export default function App() { const [reward, setReward] = useState(null);

const rewards = [ "🟣 Neon Cube", "☢ Plasma Core", "⚡ Quantum Chip", "🟡 Reactor Key", "🔵 Void Disk", ];

const spinReactor = () => { const random = rewards[Math.floor(Math.random() * rewards.length)]; setReward(random); };

return ( <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans"> {/* Animated Background */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse" /> <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl bottom-[-150px] right-[-100px] animate-pulse" />

{Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="absolute bg-cyan-400 rounded-full opacity-40"
        style={{
          width: Math.random() * 4 + "px",
          height: Math.random() * 4 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
        }}
      />
    ))}
  </div>

  {/* Navbar */}
  <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5 backdrop-blur-xl">
    <h1 className="text-2xl font-black tracking-[0.25em] text-cyan-400">
      ⚛ CORE REACTOR
    </h1>

    <div className="hidden md:flex gap-4 text-sm">
      <div className="bg-white/5 border border-cyan-500/20 px-4 py-2 rounded-2xl">
        ⚡ 12,440 CORE
      </div>

      <div className="bg-white/5 border border-purple-500/20 px-4 py-2 rounded-2xl">
        ☢ 42 PLASMA
      </div>
    </div>
  </nav>

  {/* Hero */}
  <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">

    {/* Reactor */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="mb-10"
    >
      <div className="w-72 h-72 rounded-full border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_120px_rgba(0,255,255,0.5)]">

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-44 h-44 rounded-full bg-cyan-300 shadow-[0_0_80px_rgba(0,255,255,1)]"
        />
      </div>
    </motion.div>

    {/* Title */}
    <h2 className="text-5xl md:text-7xl font-black tracking-[0.2em] mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text">
      CORE REACTOR
    </h2>

    <p className="text-white/60 max-w-2xl text-lg mb-10 leading-relaxed">
      Futuristic AI powered spin engine for rare drops, jackpots,
      plasma rewards, and leaderboard domination.
    </p>

    {/* Spin Button */}
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={spinReactor}
      className="px-12 py-5 rounded-3xl bg-cyan-400 text-black font-black tracking-widest text-lg hover:shadow-[0_0_50px_rgba(0,255,255,1)] transition-all duration-300"
    >
      ⚛ SPIN REACTOR
    </motion.button>

    {/* Reward Popup */}
    {reward && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-8 max-w-md"
      >
        <p className="text-cyan-400 tracking-[0.25em] text-sm mb-4">
          ☢ REACTOR OUTPUT
        </p>

        <h3 className="text-3xl font-black mb-3">
          {reward}
        </h3>

        <p className="text-white/60">
          +420 CORE added to your balance.
        </p>
      </motion.div>
    )}
  </section>

  {/* Stats */}
  <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto pb-20">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300">
      <h3 className="text-cyan-400 text-sm tracking-[0.25em] mb-3">
        TOTAL SPINS
      </h3>

      <p className="text-5xl font-black">281</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300">
      <h3 className="text-purple-400 text-sm tracking-[0.25em] mb-3">
        JACKPOTS
      </h3>

      <p className="text-5xl font-black">12</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-yellow-400/40 transition-all duration-300">
      <h3 className="text-yellow-400 text-sm tracking-[0.25em] mb-3">
        GLOBAL RANK
      </h3>

      <p className="text-5xl font-black">#14</p>
    </div>
  </section>

  {/* Inventory */}
  <section className="relative z-10 max-w-6xl mx-auto px-6 pb-40">
    <h2 className="text-3xl font-black mb-10 tracking-[0.15em] text-cyan-400">
      INVENTORY
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        "Neon Cube",
        "Plasma Core",
        "Void Disk",
        "Quantum Chip",
        "Reactor Key",
        "Astra Module",
      ].map((item, i) => (
        <motion.div
          whileHover={{ scale: 1.04 }}
          key={i}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 mb-4 shadow-[0_0_40px_rgba(0,255,255,0.5)]" />

          <h3 className="text-2xl font-bold mb-2">
            {item}
          </h3>

          <p className="text-white/50 text-sm">
            Rare reactor artifact.
          </p>
        </motion.div>
      ))}
    </div>
  </section>

  {/* Leaderboard */}
  <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
    <h2 className="text-3xl font-black mb-10 tracking-[0.15em] text-purple-400">
      LEADERBOARD
    </h2>

    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
      {[
        ["xannrz", "52,440 CORE"],
        ["voidzero", "44,200 CORE"],
        ["neonash", "39,100 CORE"],
        ["quantumx", "28,300 CORE"],
      ].map((user, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-6 py-5 border-b border-white/5 hover:bg-cyan-400/5 transition"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400/20 flex items-center justify-center font-black text-cyan-400">
              #{i + 1}
            </div>

            <div>
              <p className="font-bold text-lg">{user[0]}</p>
              <p className="text-white/40 text-sm">Reactor Hunter</p>
            </div>
          </div>

          <p className="font-black text-cyan-400">
            {user[1]}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* Profile */}
  <section className="relative z-10 max-w-6xl mx-auto px-6 pb-40">
    <h2 className="text-3xl font-black mb-10 tracking-[0.15em] text-yellow-400">
      PROFILE
    </h2>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-3xl bg-cyan-400/20 border border-cyan-400/30 shadow-[0_0_50px_rgba(0,255,255,0.4)]" />

          <div>
            <h3 className="text-4xl font-black mb-2">xannrz</h3>
            <p className="text-white/50">CORE MASTER</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="bg-black/30 rounded-2xl px-6 py-4 border border-white/10">
            <p className="text-white/40 text-sm mb-1">CORE</p>
            <h4 className="text-2xl font-black text-cyan-400">12,440</h4>
          </div>

          <div className="bg-black/30 rounded-2xl px-6 py-4 border border-white/10">
            <p className="text-white/40 text-sm mb-1">PLASMA</p>
            <h4 className="text-2xl font-black text-purple-400">42</h4>
          </div>

          <div className="bg-black/30 rounded-2xl px-6 py-4 border border-white/10">
            <p className="text-white/40 text-sm mb-1">SPINS</p>
            <h4 className="text-2xl font-black">281</h4>
          </div>

          <div className="bg-black/30 rounded-2xl px-6 py-4 border border-white/10">
            <p className="text-white/40 text-sm mb-1">RANK</p>
            <h4 className="text-2xl font-black text-yellow-400">#14</h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Mobile Bottom Nav */}}
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl flex justify-around py-4 text-sm md:hidden">
    <button className="text-cyan-400 font-bold">⚛ Reactor</button>
    <button className="text-white/60 hover:text-cyan-400 transition">🎁 Rewards</button>
    <button className="text-white/60 hover:text-cyan-400 transition">🏆 Rank</button>
    <button className="text-white/60 hover:text-cyan-400 transition">👤 Profile</button>
  </div>
</div>

); }

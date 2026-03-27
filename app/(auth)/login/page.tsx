"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } }
};

const inputStyle = {
  background: "rgba(255,255,255,0.7)",
  border: "1.5px solid rgba(0,0,0,0.07)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(0,0,0,0.03)",
  backdropFilter: "blur(8px)",
};

const inputFocusStyle = {
  background: "rgba(255,255,255,0.95)",
  border: "1.5px solid rgba(230,160,32,0.4)",
  boxShadow: "0 4px 20px rgba(230,160,32,0.12), inset 0 1px 2px rgba(0,0,0,0.02)",
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login dengan:", { email, password });
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="enter"
      className="flex flex-col w-full max-w-xl mx-auto px-6 md:px-14 py-10 md:py-20"
    >
      {/* Header */}
      <motion.div variants={item} className="mb-10">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#e6a020]/60 mb-2">Selamat Datang</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Masuk</h2>
        <p className="text-gray-400 mt-2 text-sm font-medium">
          Yuk, kelola UMKM kamu lagi.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <motion.div variants={item} className="group">
          <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider group-focus-within:text-[#e6a020] transition-colors">
            Alamat Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@gmail.com"
            className="w-full rounded-2xl px-5 py-3.5 text-sm text-gray-800 outline-none transition-all"
            style={inputStyle}
            onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={e => Object.assign(e.target.style, inputStyle)}
            required
          />
        </motion.div>

        {/* Password */}
        <motion.div variants={item} className="group">
          <div className="flex justify-between mb-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#e6a020] transition-colors">
              Kata Sandi
            </label>
            <Link href="#" className="text-xs font-bold text-[#e6a020] hover:text-[#cf8f18]">
              Lupa Sandi?
            </Link>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-2xl px-5 py-3.5 text-sm text-gray-800 outline-none transition-all"
            style={inputStyle}
            onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={e => Object.assign(e.target.style, inputStyle)}
            required
          />
        </motion.div>

        {/* Submit */}
        <motion.button
          variants={item}
          type="submit"
          whileHover={{ scale: 1.01, boxShadow: "0 16px 40px -8px rgba(230,160,32,0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full text-white py-4 rounded-2xl font-bold text-base mt-2 transition-all"
          style={{
            background: "linear-gradient(135deg, #e6a020 0%, #f0b830 50%, #e6a020 100%)",
            boxShadow: "0 10px 30px -6px rgba(230,160,32,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          Masuk Sekarang
        </motion.button>

        {/* Divider */}
        <motion.div variants={item} className="relative flex items-center py-2">
          <div className="flex-1 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }} />
          <span className="px-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Atau</span>
          <div className="flex-1 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }} />
        </motion.div>

        {/* Google */}
        <motion.button
          variants={item}
          type="button"
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-semibold text-gray-700 text-sm transition-all"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1.5px solid rgba(0,0,0,0.07)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path d="M44.5 20H24v8.5h11.8C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107"/>
            <path d="M6.3 14.7l7.1 5.2C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z" fill="#FF3D00"/>
            <path d="M24 46c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.6C29.8 37 27 38 24 38c-5.7 0-10.6-3.9-12.3-9.1l-7 5.4C8.1 41.8 15.5 46 24 46z" fill="#4CAF50"/>
            <path d="M44.5 20H24v8.5h11.8c-1 2.8-2.9 5.1-5.3 6.7l6.6 5.6C41.3 37.2 45 31 45 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2"/>
          </svg>
          Lanjut dengan Google
        </motion.button>
      </form>

      {/* Footer */}
      <motion.p variants={item} className="mt-8 text-center text-gray-400 text-sm font-medium">
        Belum punya akun?{" "}
        <Link href="/register" className="text-[#e6a020] font-extrabold hover:underline">
          Daftar UMKM
        </Link>
      </motion.p>
    </motion.div>
  );
} 
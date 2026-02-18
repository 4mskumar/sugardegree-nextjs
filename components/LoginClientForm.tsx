"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const route = useRouter();

  console.log("JWT_SECRET:", process.env.JWT_SECRET);


  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      route.push("/admin");
    } catch (error: any) {
      alert("Invalid credentials");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-gray-800">🔐 Admin Login</h1>
            <p className="text-sm text-gray-500">
              Sign in to manage bakery gallery
            </p>
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <Input
              className="pl-9"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <Input
              type="password"
              className="pl-9"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl"
          >
            {loading ? "Signing in..." : "Login"}
          </Button>

          <div className="text-xs text-center text-gray-400">
            © Bakery Admin Panel
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

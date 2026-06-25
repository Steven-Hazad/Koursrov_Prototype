import { useState, useContext } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Github, Chrome } from "lucide-react";
import { LangContext } from "../App";

export function LoginScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isKhmer = lang === "km";
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScreen("home");
    }, 1000);
  };

  const translations = {
    en: {
      title: "Welcome back",
      subtitle: "Sign in to your account",
      email: "Email address",
      password: "Password",
      forgotPassword: "Forgot password?",
      signIn: "Sign in",
      noAccount: "Don't have an account?",
      signUp: "Sign up",
      or: "Or continue with",
      rememberMe: "Remember me",
    },
    km: {
      title: "ស្វាគមន៍ត្រឡប់មក",
      subtitle: "ចូលប្រើគណនីរបស់អ្នក",
      email: "អាសយដ្ឋានអ៊ីមែល",
      password: "ពាក្យឆ្លងលេខ",
      forgotPassword: "ភ្លេចលេខសម្ងាត់?",
      signIn: "ចូលប្រើ",
      noAccount: "មិនមានគណនីឯណា?",
      signUp: "ចុះឈ្មោះ",
      or: "ឬបន្តដោយប្រើ",
      rememberMe: "ចងចាំខ្ញុំ",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-border">
        <button onClick={() => setScreen("splash")} className="p-1">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h2 className="text-lg font-semibold text-foreground">{t.title}</h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-md mx-auto w-full">
        <div className="w-full">
          <p className="text-sm text-muted-foreground text-center mb-8" style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "DM Sans" }}>
            {t.subtitle}
          </p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
              {t.email}
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
              {t.password}
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border border-border" />
              {t.rememberMe}
            </label>
            <button onClick={() => setScreen("forgot-password")} className="text-xs font-semibold text-primary hover:underline">
              {t.forgotPassword}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "..." : t.signIn}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">{t.or}</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <button className="w-full py-2.5 bg-card border border-border rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
              <Github size={16} />
              GitHub
            </button>
            <button className="w-full py-2.5 bg-card border border-border rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
              <Chrome size={16} />
              Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t.noAccount}{" "}
            <button onClick={() => setScreen("register")} className="font-semibold text-primary hover:underline">
              {t.signUp}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

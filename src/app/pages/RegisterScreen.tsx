import { useState, useContext } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import { LangContext } from "../App";

export function RegisterScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isKhmer = lang === "km";

  const translations = {
    en: {
      title: "Create account",
      subtitle: "Join our learning community",
      fullName: "Full name",
      email: "Email address",
      password: "Password",
      confirmPassword: "Confirm password",
      role: "I am a...",
      student: "Student",
      instructor: "Instructor",
      agreeTerms: "I agree to the Terms of Service",
      next: "Next",
      createAccount: "Create account",
      haveAccount: "Already have an account?",
      signIn: "Sign in",
      step1: "Basic info",
      step2: "Security",
      passwordStrength: "Password strength:",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      success: "Account created!",
      successDesc: "Welcome to Koursrov. Your account is ready.",
      getStarted: "Get Started",
    },
    km: {
      title: "បង្កើតគណនី",
      subtitle: "ចូលរួមក្នុងសហគមន៍រៀននៃយើងខ្ញុំ",
      fullName: "ឈ្មោះពេញលេញ",
      email: "អាសយដ្ឋានអ៊ីមែល",
      password: "ពាក្យឆ្លងលេខ",
      confirmPassword: "ផ្ទៀងផ្ទាត់ពាក្យឆ្លងលេខ",
      role: "ខ្ញុំគឺ...",
      student: "សិស្ស",
      instructor: "អ្នកបង្រៀន",
      agreeTerms: "ខ្ញុំយល់ព្រម លក្ខខណ្ឌសេវា",
      next: "បន្ទាប់",
      createAccount: "បង្កើតគណនី",
      haveAccount: "មានគណនីរួចហើយ?",
      signIn: "ចូលប្រើ",
      step1: "ព័ត៌មានលម្អិត",
      step2: "សន្តិសុខ",
      passwordStrength: "កម្លាំងពាក្យឆ្លងលេខ:",
      weak: "ខ្សោយ",
      medium: "មធ្យម",
      strong: "ខ្លាំង",
      success: "គណនីបានបង្កើត!",
      successDesc: "សូមស្វាគមន៍ទៅ Koursrov។ គណនីរបស់អ្នកគឺរស់ហើយ។",
      getStarted: "ចាប់ផ្តើម",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length < 6) return "weak";
    if (pwd.length < 10 || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd)) return "medium";
    return "strong";
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthColors = {
    weak: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    strong: "bg-emerald-100 text-emerald-700",
  };

  const handleNext = () => {
    if (step === 1 && formData.fullName && formData.email) {
      setStep(2);
    }
  };

  const handleCreateAccount = () => {
    if (
      formData.password &&
      formData.confirmPassword === formData.password &&
      formData.agreeTerms
    ) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1000);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "Outfit" }}>
          {t.success}
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm" style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "DM Sans" }}>
          {t.successDesc}
        </p>
        <button
          onClick={() => setScreen("home")}
          className="px-8 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          {t.getStarted}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-border">
        <button
          onClick={() => (step === 1 ? setScreen("splash") : setStep(step - 1))}
          className="p-1"
        >
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">{t.title}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {step === 1 ? t.step1 : t.step2}
          </p>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">{step}/2</span>
      </div>

      {/* Progress */}
      <div className="flex gap-1 px-6 py-4">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full transition-colors ${
              s <= step ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-md mx-auto w-full">
        {step === 1 ? (
          <div className="w-full space-y-4">
            <p className="text-sm text-muted-foreground text-center mb-6">{t.subtitle}</p>

            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                {t.fullName}
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                {t.email}
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                {t.role}
              </label>
              <div className="flex gap-2">
                {["student", "instructor"].map((role) => (
                  <button
                    key={role}
                    onClick={() => setFormData({ ...formData, role })}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      formData.role === role
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground"
                    }`}
                  >
                    {role === "student" ? t.student : t.instructor}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!formData.fullName || !formData.email}
              className="w-full mt-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {t.next}
            </button>
          </div>
        ) : (
          <div className="w-full space-y-4">
            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                {t.password}
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {formData.password && (
                <div className={`mt-1.5 px-3 py-1.5 rounded text-xs font-semibold ${strengthColors[passwordStrength]}`}>
                  {t.passwordStrength} {t[passwordStrength as keyof typeof t]}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
                {t.confirmPassword}
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer mt-4">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
                className="w-4 h-4 rounded border border-border mt-0.5"
              />
              <span>{t.agreeTerms}</span>
            </label>

            <button
              onClick={handleCreateAccount}
              disabled={
                loading ||
                !formData.password ||
                formData.password !== formData.confirmPassword ||
                !formData.agreeTerms
              }
              className="w-full mt-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "..." : t.createAccount}
            </button>
          </div>
        )}

        {/* Sign In Link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          {t.haveAccount}{" "}
          <button
            onClick={() => setScreen("login")}
            className="font-semibold text-primary hover:underline"
          >
            {t.signIn}
          </button>
        </p>
      </div>
    </div>
  );
}

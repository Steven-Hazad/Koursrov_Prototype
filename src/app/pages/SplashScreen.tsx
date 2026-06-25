import { useContext } from "react";
import { ArrowRight, BookOpen, Users, Zap, Globe } from "lucide-react";
import { LangContext } from "../App";

export function SplashScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);

  const isKhmer = lang === "km";
  const title = isKhmer ? "ស្វាគមន៍ ទៅ Koursrov" : "Welcome to Koursrov";
  const subtitle = isKhmer
    ? "រៀនជាមួយអ្នកបង្រៀនល្អបំផុតពិភពលោក"
    : "Learn from the world's best teachers";
  const ctaText = isKhmer ? "ចាប់ផ្តើម" : "Get Started";
  const loginText = isKhmer ? "ចូលប្រើ" : "Sign In";

  const features = [
    {
      icon: BookOpen,
      title: isKhmer ? "វគ្គសិក្សាលម្អិត" : "Comprehensive Courses",
      desc: isKhmer ? "ពីកម្មវិធីដែលលម្អិតលម្អិត" : "From expert instructors",
    },
    {
      icon: Users,
      title: isKhmer ? "សហគមន៍សកម្ម" : "Active Community",
      desc: isKhmer ? "ស្វាគមន៍អ្នករៀន" : "Supportive learners",
    },
    {
      icon: Zap,
      title: isKhmer ? "រៀនលឿន" : "Learn Fast",
      desc: isKhmer ? "ក្នុងល្បឿនរបស់អ្នក" : "At your own pace",
    },
    {
      icon: Globe,
      title: isKhmer ? "ទូលំទូលាយ" : "Global Access",
      desc: isKhmer ? "ពីគ្រប់ទីកន្លែង" : "Learn from anywhere",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-bold text-primary" style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "Outfit" }}>
          Koursrov
        </span>
        <button
          onClick={() => setScreen("login")}
          className="px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors"
        >
          {loginText}
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
          <BookOpen size={48} className="text-primary" />
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "Outfit" }}
        >
          {title}
        </h1>

        <p
          className="text-lg text-muted-foreground mb-8 max-w-md"
          style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "DM Sans" }}
        >
          {subtitle}
        </p>

        <button
          onClick={() => setScreen("register")}
          className="mb-6 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          {ctaText} <ArrowRight size={18} />
        </button>

        {/* Features Grid */}
        <div className="w-full max-w-2xl grid grid-cols-2 gap-4 mt-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <Icon size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground" style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "DM Sans" }}>
                  {feature.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-border text-center text-xs text-muted-foreground">
        <p>© 2026 Koursrov. All rights reserved.</p>
      </div>
    </div>
  );
}

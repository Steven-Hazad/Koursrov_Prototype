import { useState, useContext } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { LangContext } from "../App";

export function ForgotPasswordScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const isKhmer = lang === "km";

  const translations = {
    en: {
      title: "Forgot password?",
      subtitle: "Enter your email to reset your password",
      email: "Email address",
      sendReset: "Send reset link",
      sentDescription:
        "We've sent a password reset link to your email. Check your inbox and follow the instructions.",
      backToLogin: "Back to login",
      resend: "Resend",
      didntReceive: "Didn't receive the email?",
    },
    km: {
      title: "ភ្លេចពាក្យឆ្លងលេខ?",
      subtitle: "បញ្ចូលអ៊ីមែលរបស់អ្នកដើម្បីកំណត់ថ្មីលេខសម្ងាត់",
      email: "អាសយដ្ឋានអ៊ីមែល",
      sendReset: "ផ្ញើលិงក៍កំណត់ឡើងវិញ",
      sentDescription:
        "យើងបានផ្ញើលិងក៍កំណត់ថ្មីលេខសម្ងាត់ទៅអ៊ីមែលរបស់អ្នក។ ពិនិត្យក្នុង Inbox របស់អ្នក ហើយធ្វើតាមការណែនាំ។",
      backToLogin: "ត្រឡប់ទៅការចូលប្រើ",
      resend: "ផ្ញើឡើងវិញ",
      didntReceive: "មិនបានទទួលអ៊ីមែល?",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  const handleSendReset = () => {
    if (email) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-border">
        <button onClick={() => setScreen("login")} className="p-1">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h2 className="text-lg font-semibold text-foreground">{t.title}</h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-md mx-auto w-full">
        {step === 1 ? (
          <>
            <p className="text-sm text-muted-foreground text-center mb-8">{t.subtitle}</p>

            <div className="w-full mb-6">
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

            <button
              onClick={handleSendReset}
              disabled={loading || !email}
              className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "..." : t.sendReset}
            </button>

            <button
              onClick={() => setScreen("login")}
              className="mt-4 text-sm font-semibold text-primary hover:underline"
            >
              {t.backToLogin}
            </button>
          </>
        ) : (
          <>
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-emerald-600" />
            </div>

            <p className="text-center text-sm text-muted-foreground mb-8">
              {t.sentDescription}
            </p>

            <div className="w-full space-y-3">
              <button
                onClick={() => setScreen("login")}
                className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                {t.backToLogin}
              </button>

              <button
                onClick={handleSendReset}
                className="w-full py-2.5 bg-card border border-border text-foreground rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
              >
                {t.resend}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                {t.didntReceive} <span className="font-semibold text-primary">{email}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

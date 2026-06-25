import { useState, useContext } from "react";
import { User, BookOpen, Award, Camera, ArrowLeft, Check } from "lucide-react";
import { LangContext } from "../App";

export function OnboardingScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bio: "",
    interests: [] as string[],
    goals: [] as string[],
  });

  const isKhmer = lang === "km";

  const translations = {
    en: {
      title: "Complete your profile",
      subtitle: "Help us personalize your experience",
      step1: "About you",
      step2: "Interests",
      step3: "Goals",
      bio: "Tell us about yourself",
      bioPlaceholder: "I am passionate about...",
      selectInterests: "What are you interested in?",
      selectGoals: "What are your learning goals?",
      interests: [
        "Technology",
        "Business",
        "Design",
        "Marketing",
        "Science",
        "Art",
        "Language",
        "Health",
      ],
      goals: [
        "Career advancement",
        "Personal growth",
        "Skill development",
        "Hobby learning",
        "Certification",
        "Job transition",
      ],
      next: "Next",
      finish: "Finish",
      skip: "Skip",
      completed: "Profile setup complete!",
      readyToLearn: "You're all set. Ready to start learning?",
      goToDashboard: "Go to Dashboard",
    },
    km: {
      title: "បញ្ចប់ប្រវត្តិរូបរបស់អ្នក",
      subtitle: "ជួយឱ្យយើងកែលម្អវិទ្យាសាលផ្ទាល់ខ្លួនរបស់អ្នក",
      step1: "ព័ត៌មានលម្អិត",
      step2: "ចំណាប់អារម្មណ៍",
      step3: "គោលដៅ",
      bio: "ប្រាប់មកយើងពីខ្លួនអ្នក",
      bioPlaceholder: "ខ្ញុំចាប់អារម្មណ៍ក្នុង...",
      selectInterests: "តើលោកអ្នកចាប់អារម្មណ៍ក្នុងបញ្ហាអ្វី?",
      selectGoals: "តើគោលដៅរៀនរបស់អ្នកជាអ្វី?",
      interests: [
        "បច្ចេកវិទ្យា",
        "អាជីវកម្ម",
        "ការរចនា",
        "ផ្នែកទីផ្សារ",
        "វិទ្យាសាស្ត្រ",
        "សិល្បៈ",
        "ភាសា",
        "សុខភាព",
      ],
      goals: [
        "ឈានទៅមុខក្នុងការងារ",
        "ការលូតលាស់ផ្ទាល់ខ្លួន",
        "ការអភិវឌ្ឍជំនាញ",
        "ការរៀនសូត្របាទ",
        "សច័ង្ក្រត",
        "ផ្លាស់ប្តូរការងារ",
      ],
      next: "បន្ទាប់",
      finish: "បញ្ចប់",
      skip: "រំដោះ",
      completed: "ការកំណត់ប្រវត្តិរូបបានបញ្ចប់!",
      readyToLearn: "អ្នកបានត្រៀមខ្លួនរួចហើយ។ ត្រៀមខ្លួនមករៀនទេ?",
      goToDashboard: "ទៅផ្ទាក់ដីឌាច",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleFinish = () => {
    setStep(4);
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <Check size={40} className="text-emerald-600" />
        </div>
        <h2
          className="text-2xl font-bold text-foreground mb-2"
          style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "Outfit" }}
        >
          {t.completed}
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm">{t.readyToLearn}</p>
        <button
          onClick={() => setScreen("home")}
          className="px-8 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          {t.goToDashboard}
        </button>
      </div>
    );
  }

  const titles = [t.step1, t.step2, t.step3];
  const stepDescriptions = [t.bio, t.selectInterests, t.selectGoals];

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
          <h2 className="text-lg font-semibold text-foreground">{titles[step - 1]}</h2>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">{step}/3</span>
      </div>

      {/* Progress */}
      <div className="flex gap-1 px-6 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full transition-colors ${
              s <= step ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 py-8 max-w-md mx-auto w-full">
        <p className="text-sm text-muted-foreground mb-6">{stepDescriptions[step - 1]}</p>

        {step === 1 && (
          <>
            <textarea
              placeholder={t.bioPlaceholder}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32 mb-4"
            />
            <p className="text-xs text-muted-foreground text-right">
              {formData.bio.length}/200
            </p>
          </>
        )}

        {step === 2 && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {t.interests.map((interest) => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`py-3 rounded-xl text-sm font-semibold border transition-all ${
                  formData.interests.includes(interest)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-foreground hover:bg-secondary"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-2 mb-6">
            {t.goals.map((goal) => (
              <button
                key={goal}
                onClick={() => toggleGoal(goal)}
                className={`w-full p-3 rounded-xl text-sm font-semibold border text-left transition-all flex items-center justify-between ${
                  formData.goals.includes(goal)
                    ? "bg-primary/10 border-primary text-foreground"
                    : "bg-card border-border text-foreground hover:bg-secondary"
                }`}
              >
                <span>{goal}</span>
                {formData.goals.includes(goal) && (
                  <Check size={16} className="text-primary" />
                )}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          <button
            onClick={() => setScreen("home")}
            className="flex-1 py-2.5 bg-card border border-border text-foreground rounded-xl text-sm font-semibold hover:bg-secondary transition-colors"
          >
            {t.skip}
          </button>
          <button
            onClick={step === 3 ? handleFinish : handleNext}
            className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            {step === 3 ? t.finish : t.next}
          </button>
        </div>
      </div>
    </div>
  );
}

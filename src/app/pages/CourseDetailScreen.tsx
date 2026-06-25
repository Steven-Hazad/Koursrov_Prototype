import { useState, useContext } from "react";
import {
  ArrowLeft,
  Play,
  Clock,
  Users,
  Star,
  Share2,
  Bookmark,
  CheckCircle,
  Lock,
} from "lucide-react";
import { LangContext } from "../App";

export function CourseDetailScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const isKhmer = lang === "km";

  const translations = {
    en: {
      courseTitle: "JavaScript Mastery: From Basics to Advanced",
      instructor: "John Smith",
      price: "$49.99",
      free: "Free",
      enrolled: "Enrolled",
      students: "12,345 students",
      rating: "4.8 (2,341 reviews)",
      description:
        "Master JavaScript from fundamentals to advanced concepts. Learn ES6+, async programming, and modern frameworks.",
      lessons: "Lessons",
      resources: "Resources",
      reviews: "Reviews",
      startLearning: "Start Learning",
      continueLearning: "Continue Learning",
      chapters: "Course Chapters",
      totalHours: "24 hours",
      certificate: "Certificate included",
      overview: "Overview",
      curriculum: "Curriculum",
      reviews_tab: "Reviews",
    },
    km: {
      courseTitle: "ជំនាញលេខ: ពីមូលដ្ឋានទៅកម្រិតខ្ពស់",
      instructor: "ចន Smith",
      price: "$49.99",
      free: "ឥតគិតថ្លៃ",
      enrolled: "ចូលរៀនហើយ",
      students: "១២,៣៤៥ សិស្ស",
      rating: "4.8 (2,341 មតិយោបល់)",
      description:
        "ជំនាញលេខចាប់ពីមូលដ្ឋានដល់វិធីសាស្រ្តកម្រិតខ្ពស់។ រៀននូវ ES6+ និងលក្ខណៈសម្បត្តិមានលក្ខណៈបច្ចុប្បន្ន។",
      lessons: "មេរៀន",
      resources: "ធនធាន",
      reviews: "មតិយោបល់",
      startLearning: "ចាប់ផ្តើមរៀន",
      continueLearning: "បន្តរៀន",
      chapters: "វគ្គសិក្សា",
      totalHours: "២៤ ម៉ោង",
      certificate: "វិក័យប័ត្ររួមបញ្ចូល",
      overview: "ឌិផ្សារ",
      curriculum: "នាមវិន័យ",
      reviews_tab: "មតិយោបល់",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  const chapters = [
    {
      id: 1,
      title: isKhmer ? "អរូបខ័ណ្ឌលេខ" : "Chapter 1: Fundamentals",
      lessons: 8,
      duration: "2h 30m",
      completed: true,
    },
    {
      id: 2,
      title: isKhmer ? "អថេរ និងប្រភេទទិន្នន័យ" : "Chapter 2: Variables & Types",
      lessons: 10,
      duration: "3h 15m",
      completed: true,
    },
    {
      id: 3,
      title: isKhmer ? "មុខងារ" : "Chapter 3: Functions",
      lessons: 12,
      duration: "4h",
      completed: false,
    },
    {
      id: 4,
      title: isKhmer ? "ស្ថាប័នពិឈិដ្ឋ" : "Chapter 4: Objects & Arrays",
      lessons: 9,
      duration: "3h 45m",
      completed: false,
    },
    {
      id: 5,
      title: isKhmer ? "កម្មវិធីលើកម្មវិធីសំខាន់" : "Chapter 5: Async Programming",
      lessons: 11,
      duration: "4h 20m",
      completed: false,
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "Alex Johnson",
      rating: 5,
      text: "Excellent course! Very clear explanations and great examples.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      author: "Maria Garcia",
      rating: 4,
      text: "Great content but could use more real-world projects.",
      date: "1 month ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-border">
        <button onClick={() => setScreen("home")} className="p-1">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h2 className="text-sm font-semibold text-foreground flex-1">Course</h2>
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`p-1 transition-colors ${
            bookmarked ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Bookmark size={20} fill={bookmarked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative flex items-center justify-center">
        <button className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <Play size={24} className="text-white fill-white ml-1" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
        {/* Course Title & Meta */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-foreground mb-2">{t.courseTitle}</h1>
          <p className="text-sm text-muted-foreground mb-3">{t.instructor}</p>

          <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-accent text-accent" />
              {t.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} />
              {t.students}
            </span>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
              {t.continueLearning}
            </button>
            <button className="px-3 py-2.5 bg-card border border-border rounded-xl hover:bg-secondary transition-colors">
              <Share2 size={16} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border mb-4">
          {["overview", "curriculum", "reviews_tab"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t[tab as keyof typeof t]}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">{t.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-card border border-border rounded-xl p-3 text-center">
                <Clock size={20} className="text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.totalHours}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 text-center">
                <Users size={20} className="text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{chapters.length} {t.chapters}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 text-center">
                <CheckCircle size={20} className="text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.certificate}</p>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === "curriculum" && (
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-card border border-border rounded-xl p-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="pt-1 flex-shrink-0">
                    {chapter.completed ? (
                      <CheckCircle size={20} className="text-emerald-600" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {chapter.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {chapter.lessons} lessons · {chapter.duration}
                    </p>
                  </div>
                  {!chapter.completed && (
                    <Lock size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews_tab" && (
          <div className="space-y-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-xl p-3"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    {review.author}
                  </h4>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

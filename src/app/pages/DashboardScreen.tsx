import { useState, useContext } from "react";
import { Search, Bell, Settings, Star, Clock, Users, ArrowRight } from "lucide-react";
import { LangContext } from "../App";

export function DashboardScreen({ setScreen }: { setScreen: (s: string) => void }) {
  const { lang } = useContext(LangContext);

  const isKhmer = lang === "km";

  const translations = {
    en: {
      greeting: "Welcome back!",
      continueReading: "Continue your learning",
      exploreCoursesButton: "Explore Courses",
      recentCourses: "Your Courses",
      recommendedForYou: "Recommended For You",
      viewAll: "View All →",
      instructor: "Instructor",
      students: "students",
      hours: "hours",
      startCourse: "Start Course",
      resumeCourse: "Resume",
      searchPlaceholder: "Search courses...",
    },
    km: {
      greeting: "ស្វាគមន៍ត្រឡប់មក!",
      continueReading: "បន្តការរៀនរបស់អ្នក",
      exploreCoursesButton: "រកមើលវគ្គសិក្សា",
      recentCourses: "វគ្គសិក្សារបស់អ្នក",
      recommendedForYou: "សូលម្អាចសម្រាប់អ្នក",
      viewAll: "មើលទាំងអស់ →",
      instructor: "អ្នកបង្រៀន",
      students: "សិស្ស",
      hours: "ម៉ោង",
      startCourse: "ចាប់ផ្តើមវគ្គ",
      resumeCourse: "បន្ត",
      searchPlaceholder: "ស្វែងរកវគ្គ...",
    },
  };

  const t = isKhmer ? translations.km : translations.en;

  const courses = [
    {
      id: 1,
      title: isKhmer ? "ការណែនាំគ្រឹះលេខ" : "JavaScript Basics",
      instructor: "John Smith",
      image: "bg-blue-500",
      progress: 65,
      students: 1200,
      rating: 4.8,
    },
    {
      id: 2,
      title: isKhmer ? "ឌីលាញ ដូរស្គ ហោ" : "UX Design Fundamentals",
      instructor: "Sarah Chen",
      image: "bg-purple-500",
      progress: 0,
      students: 850,
      rating: 4.9,
    },
    {
      id: 3,
      title: isKhmer ? "ដូលឌា ឯង" : "React Advanced",
      instructor: "Mike Johnson",
      image: "bg-green-500",
      progress: 30,
      students: 650,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Search */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent px-6 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: isKhmer ? "'Noto Sans Khmer'" : "Outfit" }}
          >
            {t.greeting}
          </h1>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
              <Bell size={18} className="text-foreground" />
            </button>
            <button className="w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
              <Settings size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full bg-card border border-border rounded-xl pl-10 pr-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6 space-y-8 pb-20">
        {/* Continue Learning */}
        <div>
          <div className="mb-3">
            <h2 className="text-lg font-bold text-foreground">{t.continueReading}</h2>
          </div>
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm opacity-80 mb-1">JavaScript Basics</p>
                <h3 className="text-xl font-bold">Chapter 5: Advanced Functions</h3>
              </div>
              <Clock size={24} className="opacity-60" />
            </div>

            <div className="mb-4">
              <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-primary-foreground rounded-full" style={{ width: "65%" }} />
              </div>
              <p className="text-xs opacity-70">65% complete · 2 hours remaining</p>
            </div>

            <button className="w-full py-2.5 bg-primary-foreground text-primary rounded-xl text-sm font-semibold hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2">
              {t.resumeCourse} <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Your Courses */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">{t.recentCourses}</h2>
            <button className="text-xs font-semibold text-primary hover:underline">
              {t.viewAll}
            </button>
          </div>

          <div className="space-y-3">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setScreen("course-detail")}
                className="w-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow text-left"
              >
                <div className="flex gap-3 p-3">
                  <div
                    className={`w-20 h-20 rounded-lg flex-shrink-0 ${course.image}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">{course.instructor}</p>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1.5">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Users size={12} /> {course.students}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={12} className="fill-accent text-accent" /> {course.rating}
                      </span>
                    </div>
                    {course.progress > 0 && (
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">
              {t.recommendedForYou}
            </h2>
            <button className="text-xs font-semibold text-primary hover:underline">
              {t.viewAll}
            </button>
          </div>

          <div className="space-y-3">
            {courses.slice(1).map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-xl p-3 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3 mb-3">
                  <div className={`w-16 h-16 rounded-lg flex-shrink-0 ${course.image}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{course.instructor}</p>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                      {course.title}
                    </h3>
                  </div>
                </div>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:bg-primary/90 transition-colors">
                  {t.startCourse}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

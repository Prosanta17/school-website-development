import {
  User,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Award,
  TrendingUp,
  Bell,
} from "lucide-react";
import type { Page } from "../App";

interface StudentPortalProps {
  setCurrentPage: (page: Page) => void;
}

export function StudentPortal({ setCurrentPage }: StudentPortalProps) {
  const quickActions = [
    {
      icon: BookOpen,
      title: "My Courses",
      description: "View enrolled courses and progress",
      action: () => setCurrentPage("courses"),
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Check class schedule and events",
      action: () => setCurrentPage("events"),
    },
    {
      icon: FileText,
      title: "Assignments",
      description: "Submit and track assignments",
      action: () => {},
    },
    {
      icon: Award,
      title: "Grades",
      description: "View grades and transcripts",
      action: () => {},
    },
  ];

  const resources = [
    {
      icon: MessageSquare,
      title: "Academic Advising",
      description: "Schedule meetings with academic advisors",
      available: true,
    },
    {
      icon: TrendingUp,
      title: "Tutoring Services",
      description: "Access peer tutoring and academic support",
      available: true,
    },
    {
      icon: Bell,
      title: "Announcements",
      description: "Latest school news and updates",
      available: true,
    },
    {
      icon: User,
      title: "Student Services",
      description: "Health, counseling, and support services",
      available: true,
    },
  ];

  const announcements = [
    {
      title: "Spring Break Schedule",
      date: "March 15, 2026",
      content: "Spring break begins March 20th. Classes resume April 1st.",
      urgent: false,
    },
    {
      title: "Library Hours Extended",
      date: "March 10, 2026",
      content: "Library will remain open until midnight during finals week.",
      urgent: false,
    },
    {
      title: "New Online Learning Platform",
      date: "March 8, 2026",
      content: "EduLearn platform now available for all students.",
      urgent: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwaW4lMjBsaWJyYXJ5fGVufDF8fHx8MTc2OTEwODEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your central hub for academic resources, schedules, and campus
              services. Access everything you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Access your most frequently used tools and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  onClick={action.action}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all cursor-pointer hover:bg-blue-50"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Resources
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services available to all students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${resource.available ? "bg-green-500" : "bg-gray-400"}`}
                        ></div>
                        <span className="text-sm text-gray-500">
                          {resource.available ? "Available" : "Coming Soon"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Announcements
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with important updates and news
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-l-4 ${
                  announcement.urgent
                    ? "bg-red-50 border-red-500"
                    : "bg-blue-50 border-blue-500"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {announcement.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <p className="text-gray-700">{announcement.content}</p>
                {announcement.urgent && (
                  <div className="mt-3">
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                      Urgent
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our student support team is here to help you succeed. Contact us for
            assistance with academic advising, technical support, or any other
            student services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Visit Campus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

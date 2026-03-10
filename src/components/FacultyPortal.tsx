import {
  Users,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Award,
  Bell,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import type { Page } from "../App";

interface FacultyPortalProps {
  setCurrentPage: (page: Page) => void;
}

export function FacultyPortal({ setCurrentPage }: FacultyPortalProps) {
  const quickActions = [
    {
      icon: Users,
      title: "My Classes",
      description: "Manage enrolled students and attendance",
      action: () => {},
    },
    {
      icon: FileText,
      title: "Gradebook",
      description: "Enter and manage student grades",
      action: () => {},
    },
    {
      icon: ClipboardList,
      title: "Assignments",
      description: "Create and manage assignments",
      action: () => {},
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "View class performance analytics",
      action: () => {},
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Curriculum Resources",
      description: "Access teaching materials and lesson plans",
      available: true,
    },
    {
      icon: MessageSquare,
      title: "Professional Development",
      description: "Workshops, training, and certification programs",
      available: true,
    },
    {
      icon: Calendar,
      title: "Faculty Calendar",
      description: "Important dates, meetings, and events",
      available: true,
    },
    {
      icon: Award,
      title: "Research Support",
      description: "Grants, publications, and research assistance",
      available: true,
    },
  ];

  const announcements = [
    {
      title: "New Curriculum Standards",
      date: "March 12, 2026",
      content:
        "Updated curriculum guidelines for the 2026-2027 academic year are now available.",
      urgent: true,
    },
    {
      title: "Professional Development Workshop",
      date: "March 18, 2026",
      content:
        "Digital Learning Tools workshop scheduled for March 25th in Room 201.",
      urgent: false,
    },
    {
      title: "Staff Meeting",
      date: "March 15, 2026",
      content: "Monthly faculty meeting at 3:00 PM in the auditorium.",
      urgent: false,
    },
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Conferences",
      date: "March 20-22, 2026",
      time: "4:00 PM - 7:00 PM",
    },
    {
      title: "Curriculum Review Meeting",
      date: "March 25, 2026",
      time: "2:00 PM - 4:00 PM",
    },
    {
      title: "Professional Development Day",
      date: "April 5, 2026",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Faculty meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Faculty Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your comprehensive platform for teaching resources, student
              management, and professional development. Everything you need to
              excel in education.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Teaching Tools
            </h2>
            <p className="text-lg text-gray-600">
              Essential tools for managing your classes and students
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
              Faculty Resources
            </h2>
            <p className="text-lg text-gray-600">
              Professional development and teaching support services
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

      {/* Upcoming Events & Announcements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Faculty Events */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bell className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Faculty Announcements
              </h2>
              <div className="space-y-6">
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
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faculty Support
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Need assistance with teaching resources, technical support, or
            professional development? Our faculty support team is here to help
            you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => setCurrentPage("faculty")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Faculty Directory
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

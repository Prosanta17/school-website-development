import {
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Calendar,
  AlertCircle,
  BarChart3,
} from "lucide-react";
import type { Page } from "../../App";
import { AdminSidebar } from "./AdminSidebar";

interface AdminDashboardProps {
  setCurrentPage: (page: Page) => void;
}

export function AdminDashboard({ setCurrentPage }: AdminDashboardProps) {
  const stats = [
    {
      icon: Users,
      label: "Total Students",
      value: "2,543",
      change: "+12%",
      trend: "up",
      color: "blue",
    },
    {
      icon: GraduationCap,
      label: "Faculty Members",
      value: "156",
      change: "+3%",
      trend: "up",
      color: "purple",
    },
    {
      icon: BookOpen,
      label: "Active Courses",
      value: "52",
      change: "+8",
      trend: "up",
      color: "green",
    },
    {
      icon: TrendingUp,
      label: "Avg. Attendance",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      color: "orange",
    },
  ];

  const recentActivities = [
    {
      type: "enrollment",
      message: "15 new students enrolled for Spring 2026",
      time: "2 hours ago",
      icon: Users,
    },
    {
      type: "course",
      message: "Advanced Physics course capacity increased",
      time: "4 hours ago",
      icon: BookOpen,
    },
    {
      type: "event",
      message: "Science Fair scheduled for March 1, 2026",
      time: "1 day ago",
      icon: Calendar,
    },
    {
      type: "alert",
      message: "System maintenance scheduled for this weekend",
      time: "2 days ago",
      icon: AlertCircle,
    },
  ];

  const upcomingEvents = [
    { date: "Jan 28", title: "Faculty Meeting", time: "2:00 PM" },
    { date: "Feb 1", title: "Semester Exams Begin", time: "All Day" },
    { date: "Feb 15", title: "Open House Event", time: "10:00 AM" },
    { date: "Mar 1", title: "Science Fair", time: "9:00 AM" },
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar
        currentPage="admin-dashboard"
        setCurrentPage={setCurrentPage}
      />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome back! Here's what's happening today.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`${colorClasses[stat.color as keyof typeof colorClasses]} p-3 rounded-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                        >
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">
                              {activity.message}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Stats Chart Placeholder */}
              <div className="bg-white rounded-xl shadow-sm mt-6">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Enrollment Trends
                  </h2>
                </div>
                <div className="p-6">
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                      <p>Chart Visualization</p>
                      <p className="text-sm">(Recharts integration)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Upcoming Events
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-blue-100 text-blue-600 font-bold text-xs px-3 py-2 rounded-lg text-center min-w-[60px]">
                          {event.date}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Quick Actions
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  <button
                    onClick={() => setCurrentPage("admin-students")}
                    className="w-full px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors text-left"
                  >
                    Manage Students
                  </button>
                  <button
                    onClick={() => setCurrentPage("admin-courses")}
                    className="w-full px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg font-medium transition-colors text-left"
                  >
                    Manage Courses
                  </button>
                  <button
                    onClick={() => setCurrentPage("admin-staff")}
                    className="w-full px-4 py-3 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg font-medium transition-colors text-left"
                  >
                    Manage Staff
                  </button>
                  <button className="w-full px-4 py-3 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-lg font-medium transition-colors text-left">
                    View Reports
                  </button>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    System Status
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Server Status</span>
                    <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Online
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">API Services</span>
                    <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Running
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import {
  BookOpen,
  Search,
  Clock,
  Users,
  Computer,
  Wifi,
  Coffee,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";
import type { Page } from "../App";

interface LibraryProps {
  setCurrentPage: (page: Page) => void;
}

export function Library({ setCurrentPage }: LibraryProps) {
  const services = [
    {
      icon: BookOpen,
      title: "Book Collection",
      description:
        "Access our extensive collection of textbooks, reference materials, and fiction",
      stats: "50,000+ volumes",
    },
    {
      icon: Computer,
      title: "Computer Lab",
      description:
        "Modern computers with internet access and productivity software",
      stats: "24 workstations",
    },
    {
      icon: Search,
      title: "Online Databases",
      description:
        "Research databases, academic journals, and digital archives",
      stats: "100+ databases",
    },
    {
      icon: Users,
      title: "Study Rooms",
      description: "Private and group study rooms available for reservation",
      stats: "12 rooms",
    },
  ];

  const resources = [
    {
      title: "Academic Journals",
      description: "Latest research papers and scholarly articles",
      type: "Digital",
    },
    {
      title: "Reference Materials",
      description: "Dictionaries, encyclopedias, and research guides",
      type: "Physical",
    },
    {
      title: "Multimedia Resources",
      description: "DVDs, CDs, and educational videos",
      type: "Multimedia",
    },
    {
      title: "Archives",
      description: "School history, yearbooks, and special collections",
      type: "Special",
    },
  ];

  const hours = [
    { day: "Monday - Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const upcomingEvents = [
    {
      title: "Research Skills Workshop",
      date: "March 18, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Library Conference Room",
    },
    {
      title: "Author Talk: Digital Learning",
      date: "March 25, 2026",
      time: "6:00 PM - 7:30 PM",
      location: "Main Reading Room",
    },
    {
      title: "Library Orientation for New Students",
      date: "April 1, 2026",
      time: "10:00 AM - 11:00 AM",
      location: "Library Entrance",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5fGVufDF8fHx8MTc2OTE3NjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern library"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              EduPrime Library
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your gateway to knowledge and research. Discover resources, find
              quiet study spaces, and access cutting-edge technology for
              academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Search Catalog
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Reserve Study Room
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Library Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive resources and facilities to support your academic
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="text-blue-600 font-semibold text-sm">
                    {service.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Resources
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse collection of materials and digital resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {resource.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      resource.type === "Digital"
                        ? "bg-green-100 text-green-800"
                        : resource.type === "Physical"
                          ? "bg-blue-100 text-blue-800"
                          : resource.type === "Multimedia"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Library Hours
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-900">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-800">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">
                      Extended Hours During Finals
                    </span>
                  </div>
                  <p className="text-blue-700 text-sm mt-1">
                    Open until midnight during finals week
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Location & Contact
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Education Street, Building A, Floor 2
                      </p>
                      <p className="text-gray-600">Knowledge City, ED 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">library@eduprime.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Library Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for workshops, talks, and special programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Library Amenities
            </h2>
            <p className="text-lg text-gray-600">
              Comfortable spaces designed for learning and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Free Wi-Fi
              </h3>
              <p className="text-gray-600">
                High-speed internet access throughout the library
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Refreshment Area
              </h3>
              <p className="text-gray-600">
                Coffee, tea, and snacks available for extended study sessions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Group Study Areas
              </h3>
              <p className="text-gray-600">
                Collaborative spaces for group projects and discussions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit the Library
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you're researching a paper, studying for exams, or just need
            a quiet place to read, the EduPrime Library is your academic home
            away from home.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Directions
          </button>
        </div>
      </section>
    </div>
  );
}

import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  ArrowRight,
  Target,
  FileText,
  Search,
} from "lucide-react";
import type { Page } from "../App";

interface CareerServicesProps {
  setCurrentPage: (page: Page) => void;
}

export function CareerServices({ setCurrentPage }: CareerServicesProps) {
  const services = [
    {
      icon: Search,
      title: "Career Counseling",
      description:
        "One-on-one guidance to explore career options and develop professional goals",
      available: true,
    },
    {
      icon: FileText,
      title: "Resume & Cover Letter",
      description:
        "Professional assistance with resume writing and job application materials",
      available: true,
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description:
        "Practice interviews with feedback to build confidence and skills",
      available: true,
    },
    {
      icon: Briefcase,
      title: "Job Search Support",
      description:
        "Access to job listings, career fairs, and networking opportunities",
      available: true,
    },
  ];

  const workshops = [
    {
      title: "Resume Writing Workshop",
      date: "March 20, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Career Center Conference Room",
      spots: "15 available",
    },
    {
      title: "Interview Skills Training",
      date: "March 25, 2026",
      time: "10:00 AM - 12:00 PM",
      location: "Auditorium A",
      spots: "8 available",
    },
    {
      title: "Networking Essentials",
      date: "April 2, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Career Center",
      spots: "12 available",
    },
  ];

  const careerPaths = [
    {
      field: "Technology",
      opportunities: [
        "Software Developer",
        "Data Analyst",
        "UX Designer",
        "IT Specialist",
      ],
      growth: "High Demand",
    },
    {
      field: "Healthcare",
      opportunities: [
        "Registered Nurse",
        "Physical Therapist",
        "Healthcare Admin",
        "Medical Assistant",
      ],
      growth: "Growing Field",
    },
    {
      field: "Business",
      opportunities: [
        "Marketing Manager",
        "Financial Analyst",
        "Operations Manager",
        "Entrepreneur",
      ],
      growth: "Stable Demand",
    },
    {
      field: "Education",
      opportunities: [
        "Teacher",
        "School Counselor",
        "Education Admin",
        "Curriculum Developer",
      ],
      growth: "Stable Growth",
    },
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at TechCorp",
      quote:
        "The career counseling and interview prep at EduPrime helped me land my dream job. The mock interviews were invaluable.",
      year: "Class of 2024",
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Manager at Global Brands",
      quote:
        "The resume workshop completely transformed my job applications. I went from no responses to multiple offers.",
      year: "Class of 2023",
    },
    {
      name: "Emily Johnson",
      role: "Registered Nurse at City Hospital",
      quote:
        "Career Services connected me with healthcare professionals and helped me navigate the certification process.",
      year: "Class of 2025",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBmYWlyfGVufDF8fHx8MTc2OTE3NjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Career fair"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Career Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Launch your professional journey with confidence. Our
              comprehensive career services provide the tools, guidance, and
              connections you need to succeed in today's competitive job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Job Listings
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support throughout your career development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${service.available ? "bg-green-500" : "bg-gray-400"}`}
                        ></div>
                        <span className="text-sm text-gray-500">
                          {service.available ? "Available" : "Coming Soon"}
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

      {/* Career Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Exploration
            </h2>
            <p className="text-lg text-gray-600">
              Discover promising career paths and industry opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {path.field}
                </h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 text-sm mb-2">
                    Career Options:
                  </h4>
                  <ul className="space-y-1">
                    {path.opportunities.map((opportunity, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <Target className="w-3 h-3 text-blue-500" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    {path.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-gray-600">
              Free workshops to build your career skills and knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {workshop.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-green-600 font-medium">
                    {workshop.spots}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from graduates who launched successful careers with our help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Award
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4">
                    "{story.quote}"
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {story.name}
                  </div>
                  <div className="text-blue-600 text-sm font-medium">
                    {story.role}
                  </div>
                  <div className="text-gray-500 text-xs">{story.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600">
              Real results from our career services programs
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                94%
              </div>
              <div className="text-gray-600">Employment Rate</div>
              <div className="text-sm text-gray-500">
                Within 6 months of graduation
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                85%
              </div>
              <div className="text-gray-600">Salary Increase</div>
              <div className="text-sm text-gray-500">Average for first job</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                250+
              </div>
              <div className="text-gray-600">Partner Companies</div>
              <div className="text-sm text-gray-500">Hiring our graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Workshops Annually</div>
              <div className="text-sm text-gray-500">
                Career development events
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Career Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't wait to plan your future. Schedule a career consultation today
            and take the first step toward a successful and fulfilling
            professional life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => setCurrentPage("events")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Career Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

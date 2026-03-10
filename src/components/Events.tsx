import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Star,
  Award,
} from "lucide-react";
import type { Page } from "../App";

interface EventsProps {
  setCurrentPage: (page: Page) => void;
}

export function Events({ setCurrentPage }: EventsProps) {
  const upcomingEvents = [
    {
      id: 1,
      title: "Open House 2026",
      date: "February 15, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus",
      type: "Public Event",
      description:
        "Tour our campus, meet faculty, and learn about our programs. Perfect for prospective students and families.",
      attendees: 200,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwaG91c2UlMjBzY2hvb2x8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Science Fair & Innovation Expo",
      date: "March 1, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Science Center",
      type: "Academic Event",
      description:
        "Annual showcase of student research projects, experiments, and technological innovations.",
      attendees: 300,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmFpcnxlbnwxfHx8fDE3NjkxNzY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Spring Arts Festival",
      date: "March 20, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Auditorium & Gallery",
      type: "Cultural Event",
      description:
        "Celebrate creativity with performances, exhibitions, and interactive art installations by our students.",
      attendees: 150,
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Inter-School Sports Tournament",
      date: "April 5-7, 2026",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      type: "Sports Event",
      description:
        "Competitive sports events featuring basketball, soccer, volleyball, and track & field.",
      attendees: 500,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0b3VybmFtZW50fGVufDF8fHx8MTc2OTE3NjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Career Day & College Fair",
      date: "April 15, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Main Hall & Gymnasium",
      type: "Career Event",
      description:
        "Connect with professionals, explore career paths, and meet representatives from top universities.",
      attendees: 400,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBmYWlyfGVufDF8fHx8MTc2OTE3NjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Graduation Ceremony 2026",
      date: "May 25, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium",
      type: "Ceremony",
      description:
        "Celebrate the achievements of our graduating class with family, friends, and faculty.",
      attendees: 600,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjkxNzY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Concert",
      date: "December 20, 2025",
      description:
        "Annual holiday concert featuring choir, orchestra, and band performances.",
      highlights: [
        "Sold-out performance",
        "Featured guest artist",
        "Holiday classics and originals",
      ],
    },
    {
      title: "Mathematics Olympiad",
      date: "November 15, 2025",
      description:
        "Regional mathematics competition with participants from 20 schools.",
      highlights: ["3 gold medals", "5 silver medals", "Team championship"],
    },
    {
      title: "Community Service Day",
      date: "October 10, 2025",
      description:
        "School-wide volunteer day serving local community organizations.",
      highlights: [
        "200+ volunteers",
        "5 community partners",
        "$2,500 raised for charity",
      ],
    },
  ];

  const eventTypes = [
    { type: "Academic", count: 12, color: "bg-blue-100 text-blue-800" },
    { type: "Sports", count: 8, color: "bg-green-100 text-green-800" },
    { type: "Cultural", count: 15, color: "bg-purple-100 text-purple-800" },
    { type: "Community", count: 6, color: "bg-orange-100 text-orange-800" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBldmVudHN8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="School events"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              School Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Experience the vibrant community life at EduPrime. From academic
              competitions to cultural celebrations, there's always something
              happening.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-gray-600">
              Diverse events that enrich our school community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-2 ${type.color}`}
                >
                  {type.type}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {type.count}
                </div>
                <div className="text-gray-600 text-sm">Events this year</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendars for these exciting events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        event.type === "Public Event"
                          ? "bg-green-100 text-green-800"
                          : event.type === "Academic Event"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "Cultural Event"
                              ? "bg-purple-100 text-purple-800"
                              : event.type === "Sports Event"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
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
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4">
                    {event.description}
                  </p>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Celebrating our community's achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-600 text-sm mb-3">{event.date}</p>
                <p className="text-gray-700 text-sm mb-4">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Plan Your Event
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our campus facilities are available for community events,
                corporate functions, and special celebrations. We offer
                comprehensive event planning services.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    State-of-the-art auditorium seating 800
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Modern gymnasium and sports facilities
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Professional catering and AV services
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Dedicated event planning team
                  </span>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage("contact")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Book Facilities
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBldmVudHN8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event planning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming
            events, school news, and community activities.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

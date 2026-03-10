import {
  Mail,
  Phone,
  Award,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import type { Page } from "../App";

interface FacultyProps {
  setCurrentPage: (page: Page) => void;
}

export function Faculty({ setCurrentPage }: FacultyProps) {
  const departments = [
    {
      name: "Science & Technology",
      count: 12,
      description: "Physics, Chemistry, Biology, Computer Science",
      icon: BookOpen,
    },
    {
      name: "Humanities",
      count: 8,
      description: "English, History, Social Studies, Languages",
      icon: Users,
    },
    {
      name: "Mathematics",
      count: 6,
      description: "Algebra, Geometry, Calculus, Statistics",
      icon: GraduationCap,
    },
    {
      name: "Arts & Physical Education",
      count: 7,
      description: "Visual Arts, Music, Drama, Sports",
      icon: Award,
    },
  ];

  const faculty = [
    {
      name: "Dr. Elizabeth Thompson",
      role: "Principal",
      department: "Administration",
      qualifications: "Ed.D. Educational Leadership, 25 years experience",
      email: "principal@eduprime.edu",
      phone: "+1 (555) 123-4567",
      image:
        "https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: [
        "Educational Leadership",
        "Curriculum Development",
        "Student Success",
      ],
    },
    {
      name: "Prof. James Martinez",
      role: "Vice Principal",
      department: "Administration",
      qualifications: "M.Ed. Curriculum Development, 18 years experience",
      email: "vice.principal@eduprime.edu",
      phone: "+1 (555) 123-4568",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbWFufGVufDF8fHx8MTc2OTE3NjY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: [
        "Mathematics Education",
        "Assessment Design",
        "Teacher Training",
      ],
    },
    {
      name: "Dr. Robert Johnson",
      role: "Physics Teacher",
      department: "Science & Technology",
      qualifications: "Ph.D. Physics, 15 years teaching experience",
      email: "r.johnson@eduprime.edu",
      phone: "+1 (555) 123-4569",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBtYW58ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: ["Quantum Physics", "Mechanics", "Research Methodology"],
    },
    {
      name: "Prof. Sarah Williams",
      role: "Chemistry Teacher",
      department: "Science & Technology",
      qualifications: "M.Sc. Chemistry, 12 years experience",
      email: "s.williams@eduprime.edu",
      phone: "+1 (555) 123-4570",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwd29tYW58ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: [
        "Organic Chemistry",
        "Laboratory Techniques",
        "Environmental Science",
      ],
    },
    {
      name: "Mr. David Chen",
      role: "Computer Science Teacher",
      department: "Science & Technology",
      qualifications: "B.Sc. Computer Science, 10 years industry & teaching",
      email: "d.chen@eduprime.edu",
      phone: "+1 (555) 123-4571",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwYXNpYW4lMjBtYW58ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: ["Programming", "Web Development", "AI & Machine Learning"],
    },
    {
      name: "Ms. Emily Thompson",
      role: "English Literature Teacher",
      department: "Humanities",
      qualifications: "M.A. English Literature, 14 years experience",
      email: "e.thompson@eduprime.edu",
      phone: "+1 (555) 123-4572",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwd29tYW4lMjB5b3VuZ3xlbnwxfHx8fDE3NjkxNzY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialties: [
        "American Literature",
        "Creative Writing",
        "Literary Analysis",
      ],
    },
  ];

  const stats = [
    { number: "150", label: "Expert Faculty Members" },
    { number: "95%", label: "PhD/Master Qualified" },
    { number: "12", label: "Average Years Experience" },
    { number: "25", label: "Awards & Recognitions" },
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
              Our Expert Faculty
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Meet the dedicated educators who inspire, guide, and mentor our
              students towards academic excellence and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our faculty is organized into specialized departments, each led by
              experienced educators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {dept.description}
                  </p>
                  <div className="text-blue-600 font-semibold">
                    {dept.count} Faculty
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.department}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    {member.qualifications}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900 text-sm">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commitment to Excellence
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our faculty participates in ongoing professional development to
                stay current with the latest educational methodologies and
                technologies.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular workshops and training sessions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Advanced degrees and certifications
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Research and publication opportunities
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    International conferences and collaborations
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVycyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional development"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Faculty
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We're always looking for passionate educators to join our team.
            Explore career opportunities at EduPrime.
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact HR Department
          </button>
        </div>
      </section>
    </div>
  );
}

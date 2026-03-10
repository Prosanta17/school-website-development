import { BookOpen, Clock, Users, Award, Search } from "lucide-react";
import { useState } from "react";
import type { Page } from "../App";

interface CoursesProps {
  setCurrentPage: (page: Page) => void;
}

export function Courses({ setCurrentPage }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "science", label: "Science & Technology" },
    { id: "humanities", label: "Humanities" },
    { id: "mathematics", label: "Mathematics" },
    { id: "arts", label: "Arts & Music" },
    { id: "languages", label: "Languages" },
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced Physics",
      category: "science",
      level: "Advanced",
      duration: "1 Year",
      students: 45,
      description:
        "Explore mechanics, electromagnetism, thermodynamics, and quantum physics.",
      instructor: "Dr. Robert Johnson",
    },
    {
      id: 2,
      title: "Organic Chemistry",
      category: "science",
      level: "Intermediate",
      duration: "1 Year",
      students: 38,
      description:
        "Study of carbon compounds, reactions, and molecular structures.",
      instructor: "Prof. Sarah Williams",
    },
    {
      id: 3,
      title: "Computer Science",
      category: "science",
      level: "All Levels",
      duration: "1 Year",
      students: 52,
      description:
        "Programming, algorithms, data structures, and software development.",
      instructor: "Mr. David Chen",
    },
    {
      id: 4,
      title: "World Literature",
      category: "humanities",
      level: "Intermediate",
      duration: "1 Year",
      students: 42,
      description:
        "Explore classic and contemporary literature from around the globe.",
      instructor: "Ms. Emily Thompson",
    },
    {
      id: 5,
      title: "Modern History",
      category: "humanities",
      level: "All Levels",
      duration: "1 Year",
      students: 48,
      description:
        "20th-century world events, political movements, and social changes.",
      instructor: "Dr. Michael Brown",
    },
    {
      id: 6,
      title: "Calculus",
      category: "mathematics",
      level: "Advanced",
      duration: "1 Year",
      students: 35,
      description:
        "Differential and integral calculus with real-world applications.",
      instructor: "Prof. Lisa Anderson",
    },
    {
      id: 7,
      title: "Statistics & Probability",
      category: "mathematics",
      level: "Intermediate",
      duration: "1 Year",
      students: 40,
      description:
        "Data analysis, statistical inference, and probability theory.",
      instructor: "Mr. James Wilson",
    },
    {
      id: 8,
      title: "Visual Arts",
      category: "arts",
      level: "All Levels",
      duration: "1 Year",
      students: 30,
      description: "Drawing, painting, sculpture, and digital art techniques.",
      instructor: "Ms. Maria Garcia",
    },
    {
      id: 9,
      title: "Music Theory & Performance",
      category: "arts",
      level: "All Levels",
      duration: "1 Year",
      students: 28,
      description:
        "Learn music fundamentals, composition, and instrumental performance.",
      instructor: "Mr. Thomas Martinez",
    },
    {
      id: 10,
      title: "Spanish Language",
      category: "languages",
      level: "Beginner",
      duration: "1 Year",
      students: 45,
      description: "Comprehensive Spanish language and culture course.",
      instructor: "Señora Rodriguez",
    },
    {
      id: 11,
      title: "French Language",
      category: "languages",
      level: "Intermediate",
      duration: "1 Year",
      students: 32,
      description: "Advanced French language skills and Francophone culture.",
      instructor: "Madame Dubois",
    },
    {
      id: 12,
      title: "Biology",
      category: "science",
      level: "All Levels",
      duration: "1 Year",
      students: 50,
      description: "Cell biology, genetics, ecology, and human anatomy.",
      instructor: "Dr. Jennifer Lee",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-blue-100">
              Discover comprehensive programs designed to inspire, challenge,
              and prepare students for future success.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Courses Available</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                2,500+
              </div>
              <div className="text-sm text-gray-600">Enrolled Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-600">Expert Instructors</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length}{" "}
              {selectedCategory === "all"
                ? "Courses"
                : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No courses found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-80" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900">
                        {course.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{course.instructor}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentPage("signup")}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-gray-600">
              Experience education that prepares you for tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Expert Instruction
              </h3>
              <p className="text-gray-600">
                Learn from qualified educators with years of experience and
                proven teaching methods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600">
                Carefully designed programs that meet national standards and
                exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                Small Class Sizes
              </h3>
              <p className="text-gray-600">
                Personalized attention with a maximum of 25 students per class
                for optimal learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of students who are already achieving their academic
            goals with EduPrime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("signup")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Request Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

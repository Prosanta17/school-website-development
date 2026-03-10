import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../../App';
import { AdminSidebar } from './AdminSidebar';

interface AdminCoursesProps {
  setCurrentPage: (page: Page) => void;
}

export function AdminCourses({ setCurrentPage }: AdminCoursesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const courses = [
    {
      id: 1,
      name: 'Advanced Physics',
      code: 'PHY-401',
      instructor: 'Dr. Robert Johnson',
      category: 'Science',
      students: 45,
      capacity: 50,
      status: 'Active',
      schedule: 'Mon, Wed, Fri - 9:00 AM'
    },
    {
      id: 2,
      name: 'Organic Chemistry',
      code: 'CHM-301',
      instructor: 'Prof. Sarah Williams',
      category: 'Science',
      students: 38,
      capacity: 40,
      status: 'Active',
      schedule: 'Tue, Thu - 10:30 AM'
    },
    {
      id: 3,
      name: 'Computer Science',
      code: 'CSC-201',
      instructor: 'Mr. David Chen',
      category: 'Technology',
      students: 50,
      capacity: 50,
      status: 'Full',
      schedule: 'Mon, Wed - 2:00 PM'
    },
    {
      id: 4,
      name: 'World Literature',
      code: 'ENG-302',
      instructor: 'Ms. Emily Thompson',
      category: 'Humanities',
      students: 42,
      capacity: 45,
      status: 'Active',
      schedule: 'Tue, Thu - 1:00 PM'
    },
    {
      id: 5,
      name: 'Calculus',
      code: 'MTH-401',
      instructor: 'Prof. Lisa Anderson',
      category: 'Mathematics',
      students: 35,
      capacity: 40,
      status: 'Active',
      schedule: 'Mon, Wed, Fri - 11:00 AM'
    },
    {
      id: 6,
      name: 'Visual Arts',
      code: 'ART-101',
      instructor: 'Ms. Maria Garcia',
      category: 'Arts',
      students: 30,
      capacity: 35,
      status: 'Active',
      schedule: 'Tue, Thu - 3:00 PM'
    },
    {
      id: 7,
      name: 'Spanish Language',
      code: 'SPN-201',
      instructor: 'Señora Rodriguez',
      category: 'Languages',
      students: 45,
      capacity: 45,
      status: 'Full',
      schedule: 'Mon, Wed, Fri - 10:00 AM'
    },
    {
      id: 8,
      name: 'Biology',
      code: 'BIO-201',
      instructor: 'Dr. Jennifer Lee',
      category: 'Science',
      students: 48,
      capacity: 50,
      status: 'Active',
      schedule: 'Tue, Thu - 9:00 AM'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Science', 'Technology', 'Humanities', 'Mathematics', 'Arts', 'Languages'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar currentPage="admin-courses" setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
                <p className="text-gray-600 mt-1">Manage all courses and programs</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Course
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses by name, code, or instructor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Total Courses</p>
              <p className="text-3xl font-bold text-gray-900">{courses.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Active Courses</p>
              <p className="text-3xl font-bold text-green-600">
                {courses.filter(c => c.status === 'Active').length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Full Courses</p>
              <p className="text-3xl font-bold text-orange-600">
                {courses.filter(c => c.status === 'Full').length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Total Enrollment</p>
              <p className="text-3xl font-bold text-blue-600">
                {courses.reduce((sum, c) => sum + c.students, 0)}
              </p>
            </div>
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Enrollment
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Schedule
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">{course.name}</p>
                          <p className="text-sm text-gray-500">{course.code}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{course.instructor}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-900 font-medium">
                            {course.students}/{course.capacity}
                          </p>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                course.status === 'Full' ? 'bg-orange-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(course.students / course.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{course.schedule}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          course.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit Course"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Course"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Search, Plus, Edit, Trash2, Eye, Filter, Download } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../../App';
import { AdminSidebar } from './AdminSidebar';

interface AdminStudentsProps {
  setCurrentPage: (page: Page) => void;
}

export function AdminStudents({ setCurrentPage }: AdminStudentsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Emma Wilson',
      studentId: 'STU-2024-001',
      email: 'emma.wilson@student.eduprime.edu',
      grade: '12',
      gpa: 3.9,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 6
    },
    {
      id: 2,
      name: 'Michael Chen',
      studentId: 'STU-2024-002',
      email: 'michael.chen@student.eduprime.edu',
      grade: '11',
      gpa: 3.7,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 7
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      studentId: 'STU-2024-003',
      email: 'sarah.johnson@student.eduprime.edu',
      grade: '12',
      gpa: 4.0,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 6
    },
    {
      id: 4,
      name: 'David Martinez',
      studentId: 'STU-2024-004',
      email: 'david.martinez@student.eduprime.edu',
      grade: '10',
      gpa: 3.5,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 6
    },
    {
      id: 5,
      name: 'Jessica Brown',
      studentId: 'STU-2024-005',
      email: 'jessica.brown@student.eduprime.edu',
      grade: '11',
      gpa: 3.8,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 7
    },
    {
      id: 6,
      name: 'Ryan Taylor',
      studentId: 'STU-2024-006',
      email: 'ryan.taylor@student.eduprime.edu',
      grade: '9',
      gpa: 3.6,
      status: 'Active',
      enrollmentDate: '2024-09-01',
      courses: 6
    },
    {
      id: 7,
      name: 'Ashley Garcia',
      studentId: 'STU-2024-007',
      email: 'ashley.garcia@student.eduprime.edu',
      grade: '12',
      gpa: 3.95,
      status: 'Active',
      enrollmentDate: '2023-09-01',
      courses: 5
    },
    {
      id: 8,
      name: 'Christopher Lee',
      studentId: 'STU-2024-008',
      email: 'christopher.lee@student.eduprime.edu',
      grade: '10',
      gpa: 3.4,
      status: 'Probation',
      enrollmentDate: '2023-09-01',
      courses: 6
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = filterGrade === 'all' || student.grade === filterGrade;
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesGrade && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar currentPage="admin-students" setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
                <p className="text-gray-600 mt-1">Manage all student records and enrollments</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students by name, ID, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Grades</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Probation">Probation</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">{students.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Active Students</p>
              <p className="text-3xl font-bold text-green-600">
                {students.filter(s => s.status === 'Active').length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Average GPA</p>
              <p className="text-3xl font-bold text-blue-600">
                {(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">New This Year</p>
              <p className="text-3xl font-bold text-purple-600">
                {students.filter(s => s.enrollmentDate.startsWith('2024')).length}
              </p>
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      GPA
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Courses
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
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900 font-mono">{student.studentId}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          Grade {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-gray-900">{student.gpa.toFixed(2)}</p>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-blue-500"
                              style={{ width: `${(student.gpa / 4.0) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{student.courses} courses</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          student.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : student.status === 'Probation'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Profile"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit Student"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Student"
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

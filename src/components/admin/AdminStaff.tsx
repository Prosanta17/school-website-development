import { Search, Plus, Edit, Trash2, Eye, Filter, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import type { Page } from '../../App';
import { AdminSidebar } from './AdminSidebar';

interface AdminStaffProps {
  setCurrentPage: (page: Page) => void;
}

export function AdminStaff({ setCurrentPage }: AdminStaffProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterRole, setFilterRole] = useState('all');

  const staff = [
    {
      id: 1,
      name: 'Dr. Robert Johnson',
      role: 'Professor',
      department: 'Science',
      email: 'robert.johnson@eduprime.edu',
      phone: '+1 (555) 123-1001',
      courses: 3,
      students: 125,
      joinDate: '2015-08-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Prof. Sarah Williams',
      role: 'Professor',
      department: 'Science',
      email: 'sarah.williams@eduprime.edu',
      phone: '+1 (555) 123-1002',
      courses: 2,
      students: 78,
      joinDate: '2017-09-01',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mr. David Chen',
      role: 'Instructor',
      department: 'Technology',
      email: 'david.chen@eduprime.edu',
      phone: '+1 (555) 123-1003',
      courses: 4,
      students: 152,
      joinDate: '2019-01-15',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Ms. Emily Thompson',
      role: 'Professor',
      department: 'Humanities',
      email: 'emily.thompson@eduprime.edu',
      phone: '+1 (555) 123-1004',
      courses: 3,
      students: 96,
      joinDate: '2016-08-20',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Dr. Michael Brown',
      role: 'Professor',
      department: 'Humanities',
      email: 'michael.brown@eduprime.edu',
      phone: '+1 (555) 123-1005',
      courses: 2,
      students: 84,
      joinDate: '2014-07-01',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Prof. Lisa Anderson',
      role: 'Department Head',
      department: 'Mathematics',
      email: 'lisa.anderson@eduprime.edu',
      phone: '+1 (555) 123-1006',
      courses: 2,
      students: 70,
      joinDate: '2013-08-15',
      status: 'Active'
    },
    {
      id: 7,
      name: 'Mr. James Wilson',
      role: 'Instructor',
      department: 'Mathematics',
      email: 'james.wilson@eduprime.edu',
      phone: '+1 (555) 123-1007',
      courses: 3,
      students: 92,
      joinDate: '2020-01-10',
      status: 'Active'
    },
    {
      id: 8,
      name: 'Ms. Maria Garcia',
      role: 'Instructor',
      department: 'Arts',
      email: 'maria.garcia@eduprime.edu',
      phone: '+1 (555) 123-1008',
      courses: 4,
      students: 88,
      joinDate: '2018-09-01',
      status: 'Active'
    }
  ];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || member.department === filterDepartment;
    const matchesRole = filterRole === 'all' || member.role === filterRole;
    return matchesSearch && matchesDepartment && matchesRole;
  });

  const departments = ['all', 'Science', 'Technology', 'Humanities', 'Mathematics', 'Arts'];
  const roles = ['all', 'Professor', 'Instructor', 'Department Head'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar currentPage="admin-staff" setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
                <p className="text-gray-600 mt-1">Manage faculty and staff members</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Staff Member
              </button>
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
                  placeholder="Search staff by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>
                      {role === 'all' ? 'All Roles' : role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Total Staff</p>
              <p className="text-3xl font-bold text-gray-900">{staff.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Professors</p>
              <p className="text-3xl font-bold text-blue-600">
                {staff.filter(s => s.role === 'Professor' || s.role === 'Department Head').length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Instructors</p>
              <p className="text-3xl font-bold text-green-600">
                {staff.filter(s => s.role === 'Instructor').length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-600 mb-1">Departments</p>
              <p className="text-3xl font-bold text-purple-600">
                {new Set(staff.map(s => s.department)).size}
              </p>
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>
                <div className="p-6 -mt-12">
                  <div className="bg-white w-20 h-20 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department} Department</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Courses</p>
                      <p className="text-lg font-bold text-gray-900">{member.courses}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Students</p>
                      <p className="text-lg font-bold text-gray-900">{member.students}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium flex items-center justify-center gap-1">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

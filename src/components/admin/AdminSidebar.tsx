import { LayoutDashboard, Users, BookOpen, GraduationCap, Settings, LogOut, Home } from 'lucide-react';
import type { Page } from '../../App';

interface AdminSidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export function AdminSidebar({ currentPage, setCurrentPage }: AdminSidebarProps) {
  const menuItems = [
    { id: 'admin-dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'admin-students' as Page, label: 'Students', icon: Users },
    { id: 'admin-courses' as Page, label: 'Courses', icon: BookOpen },
    { id: 'admin-staff' as Page, label: 'Staff', icon: GraduationCap },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white fixed inset-y-0 left-0 z-50">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-gray-800">
          <h1 className="text-xl font-bold">EduPrime Admin</h1>
          <p className="text-xs text-gray-400 mt-1">Management Portal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="px-4 py-6 border-t border-gray-800 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <button 
            onClick={() => setCurrentPage('home')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Site</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

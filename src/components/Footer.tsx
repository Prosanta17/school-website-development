import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">EduPrime</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Excellence in Education since 1985. Empowering students to achieve
              their dreams through quality education and holistic development.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("courses")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("admissions")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Admissions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("events")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button className="hover:text-blue-400 transition-colors">
                  Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage("student-portal")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Student Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("faculty-portal")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Faculty Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("library")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("career-services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Career Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("privacy")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Education Street, Knowledge City, ED 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@eduprime.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EduPrime School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

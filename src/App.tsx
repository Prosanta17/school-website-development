import { useState } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Admissions } from "./components/Admissions";
import { Faculty } from "./components/Faculty";
import { Events } from "./components/Events";
import { StudentPortal } from "./components/StudentPortal";
import { FacultyPortal } from "./components/FacultyPortal";
import { Library } from "./components/Library";
import { CareerServices } from "./components/CareerServices";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminCourses } from "./components/admin/AdminCourses";
import { AdminStudents } from "./components/admin/AdminStudents";
import { AdminStaff } from "./components/admin/AdminStaff";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export type Page =
  | "home"
  | "about"
  | "courses"
  | "contact"
  | "login"
  | "signup"
  | "privacy"
  | "admissions"
  | "faculty"
  | "events"
  | "student-portal"
  | "faculty-portal"
  | "library"
  | "career-services"
  | "admin-dashboard"
  | "admin-courses"
  | "admin-students"
  | "admin-staff";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Mock login logic - ready for backend API integration
    if (email && password) {
      setIsAuthenticated(true);
      // Check if admin (mock logic)
      if (email.includes("admin")) {
        setIsAdmin(true);
        setCurrentPage("admin-dashboard");
      } else {
        setCurrentPage("home");
      }
      return true;
    }
    return false;
  };

  const handleSignup = (_data: any) => {
    // Mock signup logic - ready for backend API integration
    setIsAuthenticated(true);
    setCurrentPage("home");
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "courses":
        return <Courses setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact />;
      case "login":
        return <Login onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case "signup":
        return (
          <Signup onSignup={handleSignup} setCurrentPage={setCurrentPage} />
        );
      case "privacy":
        return <PrivacyPolicy />;
      case "admissions":
        return <Admissions setCurrentPage={setCurrentPage} />;
      case "faculty":
        return <Faculty setCurrentPage={setCurrentPage} />;
      case "events":
        return <Events setCurrentPage={setCurrentPage} />;
      case "student-portal":
        return <StudentPortal setCurrentPage={setCurrentPage} />;
      case "faculty-portal":
        return <FacultyPortal setCurrentPage={setCurrentPage} />;
      case "library":
        return <Library setCurrentPage={setCurrentPage} />;
      case "career-services":
        return <CareerServices setCurrentPage={setCurrentPage} />;
      case "admin-dashboard":
        return isAdmin ? (
          <AdminDashboard setCurrentPage={setCurrentPage} />
        ) : (
          <Home setCurrentPage={setCurrentPage} />
        );
      case "admin-courses":
        return isAdmin ? (
          <AdminCourses setCurrentPage={setCurrentPage} />
        ) : (
          <Home setCurrentPage={setCurrentPage} />
        );
      case "admin-students":
        return isAdmin ? (
          <AdminStudents setCurrentPage={setCurrentPage} />
        ) : (
          <Home setCurrentPage={setCurrentPage} />
        );
      case "admin-staff":
        return isAdmin ? (
          <AdminStaff setCurrentPage={setCurrentPage} />
        ) : (
          <Home setCurrentPage={setCurrentPage} />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  const isAdminPage = currentPage.startsWith("admin-");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!isAdminPage && (
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          onLogout={handleLogout}
        />
      )}
      <main className="flex-grow">{renderPage()}</main>
      {!isAdminPage && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
}

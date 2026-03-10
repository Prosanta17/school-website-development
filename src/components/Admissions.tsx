import {
  Calendar,
  FileText,
  Users,
  ArrowRight,
  Award,
  BookOpen,
} from "lucide-react";
import type { Page } from "../App";

interface AdmissionsProps {
  setCurrentPage: (page: Page) => void;
}

export function Admissions({ setCurrentPage }: AdmissionsProps) {
  const requirements = [
    {
      icon: FileText,
      title: "Application Form",
      description:
        "Complete online application with personal and academic information.",
    },
    {
      icon: Award,
      title: "Academic Records",
      description:
        "Submit transcripts, report cards, and standardized test scores.",
    },
    {
      icon: Users,
      title: "Recommendation Letters",
      description: "Two letters of recommendation from teachers or counselors.",
    },
    {
      icon: BookOpen,
      title: "Entrance Assessment",
      description: "Complete our entrance examination and interview process.",
    },
  ];

  const deadlines = [
    {
      period: "Early Decision",
      date: "December 15",
      description: "Priority consideration for admission",
    },
    {
      period: "Regular Decision",
      date: "February 28",
      description: "Standard application deadline",
    },
    {
      period: "Rolling Admission",
      date: "March 15 - May 31",
      description: "Applications reviewed on a rolling basis",
    },
    {
      period: "Late Admission",
      date: "June 15",
      description: "Final deadline for remaining spots",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Submit Application",
      description:
        "Complete the online application form and pay the application fee.",
    },
    {
      step: "2",
      title: "Document Review",
      description:
        "Our admissions team reviews your application and supporting documents.",
    },
    {
      step: "3",
      title: "Entrance Assessment",
      description:
        "Take our entrance examination and participate in an interview.",
    },
    {
      step: "4",
      title: "Decision & Enrollment",
      description:
        "Receive admission decision and complete enrollment process.",
    },
  ];

  const faqs = [
    {
      question: "What is the application fee?",
      answer:
        "The application fee is $50, which is non-refundable and covers the cost of processing your application.",
    },
    {
      question: "Do you offer financial aid?",
      answer:
        "Yes, we offer need-based financial aid. Applications for financial aid are reviewed separately from admission decisions.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Yes, we welcome international students. Additional requirements may apply for visa and language proficiency.",
    },
    {
      question: "What is the acceptance rate?",
      answer:
        "Our acceptance rate varies by grade level, typically ranging from 65-75% depending on available spots and applicant qualifications.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGluJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTEwODEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join EduPrime School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Begin your journey towards academic excellence and personal
              growth. We're excited to welcome you to our community.
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To join our community, applicants must meet the following
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {req.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{req.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Four simple steps to join our school
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Deadlines
            </h2>
            <p className="text-lg text-gray-600">
              Don't miss these key dates for the upcoming academic year
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {deadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {deadline.period}
                      </h3>
                      <p className="text-gray-600">{deadline.description}</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {deadline.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our admissions process
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step towards joining our community. Contact us to
            begin your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Application
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

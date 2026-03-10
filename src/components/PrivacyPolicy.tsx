import { Shield, FileText, Lock, Eye, Database, Bell } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      
      • Personal identification information (name, email address, phone number, date of birth)
      • Academic records and enrollment information
      • Parent/guardian contact information
      • Payment and billing information
      • Communication preferences
      • Usage data and technical information when you use our website`
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our educational services
      • Process enrollment applications and manage student records
      • Communicate with students, parents, and guardians
      • Send important updates, newsletters, and announcements
      • Respond to inquiries and provide customer support
      • Analyze and improve our website and services
      • Comply with legal obligations and protect our rights`
    },
    {
      icon: Database,
      title: 'Information Sharing',
      content: `We do not sell your personal information. We may share your information only in the following circumstances:
      
      • With your consent or at your direction
      • With service providers who perform services on our behalf
      • With educational partners and accreditation bodies as required
      • To comply with legal obligations or valid legal processes
      • To protect the rights, property, or safety of our school, students, or others
      • In connection with a merger, sale, or transfer of assets`
    },
    {
      icon: Eye,
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication procedures
      • Employee training on data protection
      • Secure backup and disaster recovery systems
      
      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      icon: Bell,
      title: 'Your Rights and Choices',
      content: `You have certain rights regarding your personal information:
      
      • Access: Request access to your personal information
      • Correction: Request correction of inaccurate information
      • Deletion: Request deletion of your information (subject to legal requirements)
      • Opt-out: Unsubscribe from marketing communications
      • Portability: Request a copy of your data in a portable format
      
      To exercise these rights, please contact our Privacy Office at privacy@eduprime.edu`
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="mt-4 text-sm text-blue-200">
              Last Updated: January 23, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              EduPrime School ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, enroll in our programs, or interact with our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Children's Privacy (COPPA Compliance)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to protecting the privacy of children under 13 years of age. We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13 without verifiable parental consent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Parents and guardians have the right to review, request deletion of, and refuse further collection of their child's personal information. For more information or to exercise these rights, please contact us at privacy@eduprime.edu.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 text-sm">Required for the website to function properly and cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 text-sm">Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                <p className="text-gray-700 text-sm">Remember your settings and preferences for a better experience.</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Third-Party Services We Use:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Analytics services (Google Analytics)</li>
                <li>• Cloud storage providers</li>
                <li>• Email service providers</li>
                <li>• Payment processors</li>
                <li>• Learning management systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The retention period depends on:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• The nature of the information collected</li>
              <li>• Legal and regulatory requirements</li>
              <li>• Our legitimate business interests</li>
              <li>• The purpose for which the information was collected</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Student academic records are retained in accordance with educational regulations and accreditation requirements, typically for a minimum of 7 years after graduation or withdrawal.
            </p>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside the United States and choose to provide information to us, we transfer your data to the United States and process it there. By submitting your information, you consent to this transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-4">
              <li>• Posting the new Privacy Policy on this page</li>
              <li>• Updating the "Last Updated" date at the top of this policy</li>
              <li>• Sending an email notification for significant changes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4 text-left">
              <div>
                <p className="font-semibold mb-1">Privacy Office</p>
                <p className="text-blue-100">EduPrime School</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:privacy@eduprime.edu" className="text-blue-100 hover:text-white">
                  privacy@eduprime.edu
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-blue-100">123 Education Street, Knowledge City, ED 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

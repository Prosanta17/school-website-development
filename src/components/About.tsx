import { Target, Eye, Heart, Users, Award, BookOpen, Briefcase, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards in education and student achievement.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through honesty, respect, and ethical conduct.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a supportive and inclusive environment for all.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to thrive in an interconnected world.'
    }
  ];

  const milestones = [
    { year: '1985', event: 'EduPrime School founded with 50 students' },
    { year: '1995', event: 'Expanded to include high school program' },
    { year: '2005', event: 'New science and technology center opened' },
    { year: '2015', event: 'Achieved national accreditation and recognition' },
    { year: '2020', event: 'Launched hybrid learning program' },
    { year: '2026', event: 'Celebrating 41 years of educational excellence' }
  ];

  const leadership = [
    {
      name: 'Dr. Elizabeth Thompson',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Ed.D. in Educational Leadership, 25 years of experience'
    },
    {
      name: 'Prof. James Martinez',
      role: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'M.Ed. in Curriculum Development, 18 years of experience'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Academic Director',
      image: 'https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY5MTc2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Ph.D. in Educational Psychology, 15 years of experience'
    }
  ];

  const departments = [
    {
      icon: BookOpen,
      name: 'Humanities',
      description: 'Literature, History, Languages, Social Studies'
    },
    {
      icon: Briefcase,
      name: 'Sciences',
      description: 'Biology, Chemistry, Physics, Environmental Science'
    },
    {
      icon: Award,
      name: 'Mathematics',
      description: 'Algebra, Geometry, Calculus, Statistics'
    },
    {
      icon: Globe,
      name: 'Technology',
      description: 'Computer Science, Robotics, Digital Media'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduPrime School</h1>
            <p className="text-xl text-blue-100">
              Building tomorrow's leaders through excellence, innovation, and compassion since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a nurturing and challenging educational environment that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens who make positive contributions to society.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading educational institution recognized for innovation, excellence in teaching, and producing well-rounded graduates who are equipped to thrive in an ever-evolving global landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Four decades of educational excellence</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg whitespace-nowrap">
                      {milestone.year}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 bg-blue-200 flex-1 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600">Meet the dedicated team guiding our institution</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Departments</h2>
            <p className="text-lg text-gray-600">Comprehensive programs across diverse fields</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors">
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600">State-of-the-art infrastructure for optimal learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1721552023489-6c2ec21d297f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc2OTA4NTQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Library" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Modern Library</h3>
                <p className="text-gray-600 text-sm">
                  Over 50,000 books, digital resources, and quiet study spaces
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2OTEyMTQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Science Lab" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Science Laboratories</h3>
                <p className="text-gray-600 text-sm">
                  Fully equipped labs for physics, chemistry, and biology
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1547817651-7fb0cc360536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2FtcHVzfGVufDF8fHx8MTc2OTEwODEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Sports Complex</h3>
                <p className="text-gray-600 text-sm">
                  Olympic-size pool, basketball courts, and athletic tracks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Accreditations & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-gray-50 px-8 py-6 rounded-lg">
              <p className="font-semibold text-gray-900">National Education Board</p>
              <p className="text-sm text-gray-600">Accredited Since 2015</p>
            </div>
            <div className="bg-gray-50 px-8 py-6 rounded-lg">
              <p className="font-semibold text-gray-900">International Schools Association</p>
              <p className="text-sm text-gray-600">Member Institution</p>
            </div>
            <div className="bg-gray-50 px-8 py-6 rounded-lg">
              <p className="font-semibold text-gray-900">Quality Education Award</p>
              <p className="text-sm text-gray-600">2024 Winner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

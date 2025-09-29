import { CheckCircle, Award, Users, Target, Zap, Shield, Clock, Star } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      title: "Expert Design and Engineering Team",
      description: "Our highly skilled engineers and designers bring years of experience in electrical panel design and industrial automation.",
      icon: Users
    },
    {
      title: "Modern Manufacturing Setup in Pune", 
      description: "State-of-the-art manufacturing facility equipped with latest technology and equipment for precision manufacturing.",
      icon: Zap
    },
    {
      title: "Commitment to Quality and Safety Standards",
      description: "We adhere to international quality standards and safety protocols in all our products and services.",
      icon: Shield
    },
    {
      title: "On-time Delivery and Reliable After-sales Service",
      description: "We pride ourselves on meeting deadlines and providing comprehensive after-sales support to our clients.",
      icon: Clock
    },
    {
      title: "Proven Track Record with Multiple Successful Projects",
      description: "Successfully completed 500+ projects across various industries with 100% client satisfaction.",
      icon: Star
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Bhagirathi Electricals was established with a vision to provide quality electrical solutions." },
    { year: "2015", title: "100 Projects Milestone", description: "Successfully completed our 100th project, establishing trust in the market." },
    { year: "2018", title: "Manufacturing Expansion", description: "Expanded our manufacturing facility to meet growing demand." },
    { year: "2020", title: "Digital Transformation", description: "Implemented modern manufacturing processes and digital quality control." },
    { year: "2023", title: "500+ Projects Completed", description: "Achieved the milestone of 500+ successful projects across multiple industries." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bhagirathi Electricals</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A trusted name in industrial electrical solutions since 2010, specializing in control panels, 
              automation systems, and custom electrical engineering solutions for diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, Bhagirathi Electricals began with a simple mission: to provide reliable, 
                  high-quality electrical control panel solutions to industries across India. What started 
                  as a small electrical services company has grown into a leading manufacturer of industrial 
                  control panels and automation systems.
                </p>
                <p>
                  Over the years, we have built our reputation on the foundation of technical excellence, 
                  innovative design, and unwavering commitment to customer satisfaction. Our team of expert 
                  engineers and technicians works tirelessly to deliver solutions that not only meet but 
                  exceed industry standards.
                </p>
                <p>
                  Today, with over 13 years of experience and 500+ successful projects, we continue to be 
                  the preferred choice for businesses seeking reliable electrical infrastructure solutions. 
                  Our modern manufacturing facility in Pune is equipped with state-of-the-art technology 
                  to ensure precision, quality, and timely delivery.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">13+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Service Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide innovative, reliable, and cost-effective electrical control panel solutions 
                that empower industries to achieve optimal performance, safety, and efficiency in their 
                operations while maintaining the highest standards of quality and customer service.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading provider of industrial electrical solutions in India, recognized for 
                our technical expertise, innovation, and commitment to sustainable industrial growth, 
                while expanding our reach to serve clients globally with world-class products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths / Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strengths and competitive advantages that make us the preferred choice for industrial electrical solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600">We maintain the highest standards of quality and safety</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ISO 9001:2015 Certified",
              "CE Marking Compliance", 
              "BIS Standards Compliance",
              "CPRI Testing Certified"
            ].map((cert, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Experience the difference that comes with working with a trusted, experienced, and committed electrical solutions provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get In Touch
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

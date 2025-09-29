import { useState } from 'react';
import { Calendar, MapPin, IndianRupee, Building, Filter, X } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Manufacturing', 'Healthcare', 'Infrastructure', 'Commercial', 'Power & Energy'];

  const projects = [
    {
      id: 1,
      title: 'Automotive Manufacturing Plant - Power Infrastructure',
      category: 'Manufacturing',
      description: 'Complete electrical panel installation for automotive manufacturing facility including MCC, DCC, and APFC panels with advanced automation systems.',
      image: '/assets/photos/project1.jpg',
      year: '2023',
      client: 'ABC Automotive Ltd.',
      location: 'Chennai, Tamil Nadu',
      value: '₹85 Lakhs',
      duration: '6 months',
      panels: ['MCC Panels', 'DCC Panels', 'APFC Panels', 'Synchronization'],
      scope: [
        'Design and manufacturing of 15 MCC panels',
        'Installation of APFC system for power factor improvement', 
        'Integration with existing SCADA system',
        'Complete testing and commissioning',
        'Training for operational staff'
      ]
    },
    {
      id: 2,
      title: 'Multi-Specialty Hospital Emergency Power System',
      category: 'Healthcare',
      description: 'Critical power backup system with AMF panels and synchronization for 500-bed hospital ensuring uninterrupted medical operations.',
      image: '/assets/photos/project2.jpg',
      year: '2023',
      client: 'City General Hospital',
      location: 'Mumbai, Maharashtra',
      value: '₹65 Lakhs',
      duration: '4 months',
      panels: ['AMF Panels', 'Synchronization Panels', 'Power Distribution'],
      scope: [
        'Automatic Mains Failure (AMF) system installation',
        'Generator synchronization panels for 3 DG sets',
        'Critical load power distribution panels',
        'Emergency lighting control systems',
        '24/7 monitoring and maintenance support'
      ]
    },
    {
      id: 3,
      title: 'Municipal Water Treatment Plant Automation',
      category: 'Infrastructure',
      description: 'Complete automation solution with PLC/Drive panels for municipal water treatment facility serving 2 lakh population.',
      image: '/assets/photos/project3.jpg',
      year: '2022',
      client: 'Municipal Corporation',
      location: 'Pune, Maharashtra',
      value: '₹1.2 Crores',
      duration: '8 months',
      panels: ['PLC Panels', 'Drive Panels', 'MCC Panels', 'SCADA System'],
      scope: [
        'Complete process automation with PLC control',
        'Variable frequency drive panels for pumps',
        'SCADA system for remote monitoring',
        'Water quality monitoring instrumentation',
        'Operator training and documentation'
      ]
    },
    {
      id: 4,
      title: 'Textile Manufacturing Complex',
      category: 'Manufacturing',
      description: 'Comprehensive electrical infrastructure for large textile manufacturing complex with energy optimization systems.',
      image: '/assets/photos/project4.jpg',
      year: '2022',
      client: 'Textile Industries Group',
      location: 'Coimbatore, Tamil Nadu',
      value: '₹95 Lakhs',
      duration: '10 months',
      panels: ['MCC Panels', 'APFC Panels', 'DCC Panels', 'Power Distribution'],
      scope: [
        'Main distribution and sub-distribution panels',
        'Motor control centers for textile machinery',
        'Power factor correction for energy savings',
        'Load monitoring and energy management',
        'Preventive maintenance program'
      ]
    },
    {
      id: 5,
      title: 'Shopping Mall Power Distribution',
      category: 'Commercial',
      description: 'Modern power distribution system for large shopping mall with advanced energy management and safety features.',
      image: '/assets/photos/project5.jpg',
      year: '2022',
      client: 'Metro Mall Developers',
      location: 'Bangalore, Karnataka',
      value: '₹75 Lakhs',
      duration: '5 months',
      panels: ['Power Distribution', 'APFC Panels', 'Emergency Systems'],
      scope: [
        'Main and sub-distribution panel installation',
        'Emergency power backup systems',
        'Energy monitoring and management',
        'Fire safety integration',
        'Retail space electrical infrastructure'
      ]
    },
    {
      id: 6,
      title: 'Solar Power Plant Control Systems',
      category: 'Power & Energy',
      description: '50MW solar power plant control and monitoring systems with grid synchronization capabilities.',
      image: '/assets/photos/project6.jpg',
      year: '2021',
      client: 'Green Energy Solutions',
      location: 'Rajasthan',
      value: '₹2.5 Crores',
      duration: '12 months',
      panels: ['Grid Synchronization', 'Control Systems', 'Protection Panels'],
      scope: [
        'Grid synchronization panels design',
        'Solar inverter control systems',
        'SCADA and remote monitoring setup',
        'Protection and safety systems',
        'Performance monitoring and analytics'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects & Gallery</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Showcasing our expertise through successful implementations across diverse industries. 
              Explore our portfolio of completed electrical control panel projects.
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Project Portfolio</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Building className="h-16 w-16 text-blue-600" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <span className="text-white font-semibold">Project Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-2" />
                      {project.value}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex flex-wrap gap-2">
                      {project.panels.slice(0, 2).map((panel, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {panel}
                        </span>
                      ))}
                      {project.panels.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{project.panels.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Our expertise spans across multiple industry verticals</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Manufacturing',
              'Healthcare',
              'Infrastructure',
              'Power & Energy',
              'Commercial',
              'Automotive',
              'Textile',
              'Water Treatment',
              'IT & Data Centers',
              'Food Processing',
              'Chemical',
              'Pharmaceutical'
            ].map((industry, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let us help you implement reliable 
            electrical solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
                Discuss Your Project
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                View Our Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-6">
                    <Building className="h-20 w-20 text-blue-600" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Client:</span>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Year:</span>
                      <p className="text-gray-600">{selectedProject.year}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Location:</span>
                      <p className="text-gray-600">{selectedProject.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Value:</span>
                      <p className="text-gray-600">{selectedProject.value}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Category:</span>
                      <p className="text-gray-600">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Panels & Systems</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.panels.map((panel, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {panel}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Scope</h3>
                  <ul className="space-y-2">
                    {selectedProject.scope.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import * as Icons from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Services() {
  const services = [
    {
      id: 'power-distribution',
      title: 'Power Distribution Panels',
      description: 'Safe, efficient energy distribution for industries.',
      icon: 'Zap',
      detailedDescription: 'Our power distribution panels are engineered to provide reliable and safe electrical power distribution for industrial facilities. Designed with advanced protection systems and monitoring capabilities.',
      features: [
        'High-quality switchgear components',
        'Advanced protection systems',
        'Remote monitoring capabilities',
        'Energy-efficient design',
        'Customizable configurations',
        'Compliance with international standards'
      ],
      applications: [
        'Manufacturing facilities',
        'Commercial buildings',
        'Infrastructure projects',
        'Data centers',
        'Hospitals and healthcare',
        'Educational institutions'
      ],
      specifications: {
        voltage: '415V - 33kV',
        current: 'Up to 6300A',
        frequency: '50/60 Hz',
        protection: 'IP54/IP65',
        standards: 'IEC, IS, ANSI'
      }
    },
    {
      id: 'mcc-dcc',
      title: 'Motor & Drive Control Centers (MCC & DCC)',
      description: 'Reliable motor and drive automation.',
      icon: 'Settings',
      detailedDescription: 'Comprehensive motor control solutions featuring intelligent protection, monitoring, and automation capabilities for optimal motor performance and energy efficiency.',
      features: [
        'Intelligent motor protection',
        'Variable frequency drives integration',
        'Real-time monitoring and diagnostics',
        'Energy optimization features',
        'Modular and scalable design',
        'Remote control capabilities'
      ],
      applications: [
        'Process industries',
        'Water treatment plants',
        'HVAC systems',
        'Conveyor systems',
        'Pumping stations',
        'Industrial automation'
      ],
      specifications: {
        voltage: '415V - 11kV',
        motorRange: '0.5HP - 2000HP',
        protection: 'Overload, short circuit, phase failure',
        communication: 'Modbus, Profibus, Ethernet',
        enclosure: 'IP54/IP65'
      }
    },
    {
      id: 'apfc-instrumentation',
      title: 'APFC & Instrumentation Panels',
      description: 'Automatic Power Factor Correction and process monitoring.',
      icon: 'TrendingUp',
      detailedDescription: 'Advanced power factor correction systems with comprehensive instrumentation for improved energy efficiency and reduced electricity costs.',
      features: [
        'Automatic power factor correction',
        'Real-time power quality monitoring',
        'Energy consumption analysis',
        'Harmonic filtering capabilities',
        'Cost savings optimization',
        'Detailed reporting and analytics'
      ],
      applications: [
        'Industrial plants',
        'Commercial complexes',
        'Healthcare facilities',
        'Educational institutions',
        'Manufacturing units',
        'IT and data centers'
      ],
      specifications: {
        powerFactor: '0.99 leading to lagging',
        capacity: '25 KVAR - 2000 KVAR',
        steps: '6-12 steps automatic switching',
        controller: 'Microprocessor based',
        accuracy: '±1% for measurements'
      }
    },
    {
      id: 'amf-synchronization',
      title: 'AMF & Synchronization Panels',
      description: 'Ensuring seamless power backup and generator synchronization.',
      icon: 'Power',
      detailedDescription: 'Automatic mains failure and synchronization panels ensuring uninterrupted power supply with seamless switching between grid and backup generators.',
      features: [
        'Automatic mains failure detection',
        'Generator auto start/stop',
        'Load transfer switching',
        'Synchronization with grid',
        'Load management and shedding',
        'Remote monitoring and control'
      ],
      applications: [
        'Hospitals and clinics',
        'Data centers',
        'Manufacturing facilities',
        'Commercial buildings',
        'Telecommunications',
        'Critical infrastructure'
      ],
      specifications: {
        voltage: '415V - 11kV',
        transferTime: '< 10 seconds',
        generators: 'Up to 16 units parallel',
        protection: 'Over/under voltage and frequency',
        communication: 'GSM, Ethernet, SCADA'
      }
    },
    {
      id: 'plc-control',
      title: 'PLC, Drive & Control Desk Panels',
      description: 'Smart automation and process control systems.',
      icon: 'Cpu',
      detailedDescription: 'Intelligent automation panels with PLC control and variable frequency drives for comprehensive process optimization and control.',
      features: [
        'Advanced PLC programming',
        'HMI touch screen interfaces',
        'Variable frequency drives',
        'Process automation',
        'Data logging and SCADA integration',
        'Custom control algorithms'
      ],
      applications: [
        'Process industries',
        'Water treatment',
        'Manufacturing automation',
        'Building management systems',
        'Material handling',
        'Quality control systems'
      ],
      specifications: {
        plc: 'Siemens, Allen Bradley, Schneider',
        drives: 'ABB, Siemens, Schneider Electric',
        communication: 'Profibus, Ethernet/IP, Modbus',
        hmi: '7" to 21" touch screen displays',
        programming: 'Ladder, FBD, SCL, SFC'
      }
    },
    {
      id: 'custom-solutions',
      title: 'Custom Electrical Engineering Solutions',
      description: 'Tailored solutions designed for specific industrial requirements.',
      icon: 'Wrench',
      detailedDescription: 'Bespoke electrical engineering solutions designed to meet unique industrial challenges and specific operational requirements.',
      features: [
        'Custom design and engineering',
        'Application-specific solutions',
        'Integration with existing systems',
        'Comprehensive testing and commissioning',
        'Documentation and training',
        'Ongoing technical support'
      ],
      applications: [
        'Specialized manufacturing',
        'Research and development',
        'Unique process requirements',
        'Legacy system integration',
        'Custom automation',
        'Pilot projects'
      ],
      specifications: {
        design: 'CAD/CAE based engineering',
        testing: 'Factory acceptance testing',
        documentation: 'Complete technical manuals',
        support: '24/7 technical assistance',
        warranty: 'Extended warranty options'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive electrical control panel solutions designed to power your industrial operations 
              with reliability, efficiency, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Electrical Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to commissioning, we provide end-to-end electrical control panel solutions 
              that meet the highest industry standards and your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon] || Icons.Settings;
              
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-700 mb-6">{service.detailedDescription}</p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.slice(0, 3).map((app, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Preview */}
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        {Object.entries(service.specifications).slice(0, 2).map(([key, value], index) => (
                          <div key={index} className="flex justify-between">
                            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence and customer satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Icons.Shield,
                title: "Quality Assured",
                description: "All products undergo rigorous testing and quality control processes"
              },
              {
                icon: Icons.Clock,
                title: "Timely Delivery",
                description: "Committed to meeting project deadlines without compromising quality"
              },
              {
                icon: Icons.Users,
                title: "Expert Support",
                description: "24/7 technical support from experienced engineers and technicians"
              },
              {
                icon: Icons.Award,
                title: "Proven Experience",
                description: "Over 13 years of experience with 500+ successful projects"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">From consultation to commissioning - our systematic approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Design",
                description: "Understanding your requirements and designing optimal solutions"
              },
              {
                step: "02", 
                title: "Manufacturing",
                description: "Precision manufacturing using latest technology and quality components"
              },
              {
                step: "03",
                title: "Testing & Quality Control", 
                description: "Comprehensive testing to ensure performance and safety standards"
              },
              {
                step: "04",
                title: "Installation & Commissioning",
                description: "Professional installation and system commissioning with training"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and implement the perfect electrical 
            control panel solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
                Get Free Consultation
              </Button>
            </a>
            <a href="tel:+918379837623">
              <Button variant="outline" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
                Call Now: +91 83798 37623
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

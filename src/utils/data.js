// Company Information
export const companyInfo = {
  name: 'Bhagirathi Electricals',
  tagline: 'Powering Industries with Precision Control Panels',
  description: 'Leading manufacturer of industrial control panels specializing in Power Distribution, MCC, DCC, APFC, AMF, Synchronization, and PLC/Drive panels.',
  founded: '2010',
  experience: '13+ Years',
  projectsCompleted: '500+',
  clientsServed: '200+',
  contact: {
    phone: '+91-83798-37623',
    email: 'bhagirathielect@gmail.com',
    address: 'Shivane, Pune – 411023'
  },
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM'
};

// Services Data
export const services = [
  {
    id: 'power-distribution',
    title: 'Power Distribution Panels',
    description: 'Efficient power distribution solutions for industrial applications with high reliability and custom configurations.',
    icon: 'Zap',
    features: ['High reliability systems', 'Custom configurations', 'Safety compliance certified', 'Energy efficient design'],
    applications: ['Manufacturing plants', 'Infrastructure projects', 'Commercial buildings', 'Industrial complexes'],
    specifications: {
      voltage: '415V - 11kV',
      current: 'Up to 6300A',
      frequency: '50/60 Hz',
      protection: 'IP54/IP65'
    }
  },
  {
    id: 'mcc-panels',
    title: 'Motor Control Centers (MCC)',
    description: 'Advanced motor control solutions with intelligent protection and monitoring capabilities.',
    icon: 'Settings',
    features: ['Intelligent motor protection', 'Remote monitoring', 'Modular design', 'Easy maintenance'],
    applications: ['Process industries', 'Water treatment plants', 'Mining operations', 'Manufacturing units'],
    specifications: {
      voltage: '415V - 11kV',
      motorRange: '0.5HP - 2000HP',
      protection: 'Overload, Short circuit, Phase failure',
      enclosure: 'IP54/IP65'
    }
  },
  {
    id: 'dcc-panels',
    title: 'Distribution Control Centers (DCC)',
    description: 'Comprehensive distribution control with advanced protection and monitoring systems.',
    icon: 'Grid3X3',
    features: ['Centralized control', 'Advanced protection', 'Real-time monitoring', 'Fault diagnosis'],
    applications: ['Power distribution networks', 'Industrial facilities', 'Commercial complexes', 'Infrastructure projects'],
    specifications: {
      voltage: '11kV - 33kV',
      current: 'Up to 4000A',
      busbar: 'Copper/Aluminum',
      protection: 'Numerical relays'
    }
  },
  {
    id: 'apfc-panels',
    title: 'APFC Panels (Power Factor Correction)',
    description: 'Automatic power factor correction systems for improved energy efficiency and reduced electricity costs.',
    icon: 'TrendingUp',
    features: ['Automatic switching', 'Energy cost reduction', 'Improved power quality', 'Reduced penalties'],
    applications: ['Industrial plants', 'Commercial buildings', 'Healthcare facilities', 'Educational institutions'],
    specifications: {
      powerFactor: '0.99 leading to lagging',
      capacity: '25 KVAR - 2000 KVAR',
      steps: '6-12 steps',
      controller: 'Microprocessor based'
    }
  },
  {
    id: 'amf-panels',
    title: 'AMF Panels (Auto Mains Failure)',
    description: 'Automatic mains failure panels ensuring uninterrupted power supply with seamless generator switching.',
    icon: 'Power',
    features: ['Automatic switching', 'Generator protection', 'Load management', 'Remote monitoring'],
    applications: ['Hospitals', 'Data centers', 'Manufacturing units', 'Commercial buildings'],
    specifications: {
      voltage: '415V - 11kV',
      transferTime: '< 10 seconds',
      generator: 'Auto start/stop',
      protection: 'Over/Under voltage, frequency'
    }
  },
  {
    id: 'synchronization-panels',
    title: 'Synchronization Panels',
    description: 'Advanced synchronization systems for parallel operation of generators and grid connection.',
    icon: 'Repeat',
    features: ['Precise synchronization', 'Load sharing', 'Protection systems', 'Automatic operation'],
    applications: ['Power plants', 'Co-generation facilities', 'Industrial captive power', 'Grid-tie systems'],
    specifications: {
      accuracy: '±0.1Hz, ±1V, ±5°',
      generators: 'Up to 32 units',
      communication: 'MODBUS/Ethernet',
      protection: 'Reverse power, frequency'
    }
  },
  {
    id: 'plc-drive-panels',
    title: 'PLC/Drive Panels',
    description: 'Intelligent automation panels with PLC control and variable frequency drives for process optimization.',
    icon: 'Cpu',
    features: ['Process automation', 'Energy optimization', 'Remote control', 'Data logging'],
    applications: ['Process industries', 'Water treatment', 'HVAC systems', 'Manufacturing automation'],
    specifications: {
      plc: 'Siemens/Allen Bradley/Schneider',
      drives: 'ABB/Siemens/Schneider',
      communication: 'Profibus/Ethernet/Modbus',
      hmi: 'Touch screen interface'
    }
  }
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: 'Automotive Manufacturing Plant - Phase 1',
    description: 'Complete electrical panel installation for automotive manufacturing facility including MCC, DCC, and APFC panels.',
    image: '/images/projects/automotive-plant.jpg',
    category: 'Manufacturing',
    year: '2023',
    client: 'ABC Automotive Ltd.',
    panels: ['MCC', 'DCC', 'APFC'],
    value: '₹85 Lakhs',
    location: 'Chennai, Tamil Nadu',
    duration: '6 months'
  },
  {
    id: 2,
    title: 'Hospital Emergency Power System',
    description: 'Critical power backup system with AMF panels and synchronization for 500-bed hospital.',
    image: '/images/projects/hospital-power.jpg',
    category: 'Healthcare',
    year: '2023',
    client: 'City General Hospital',
    panels: ['AMF', 'Synchronization', 'Power Distribution'],
    value: '₹65 Lakhs',
    location: 'Mumbai, Maharashtra',
    duration: '4 months'
  },
  {
    id: 3,
    title: 'Water Treatment Plant Automation',
    description: 'Complete automation solution with PLC/Drive panels for municipal water treatment facility.',
    image: '/images/projects/water-treatment.jpg',
    category: 'Infrastructure',
    year: '2022',
    client: 'Municipal Corporation',
    panels: ['PLC/Drive', 'MCC', 'Power Distribution'],
    value: '₹1.2 Crores',
    location: 'Pune, Maharashtra',
    duration: '8 months'
  },
  {
    id: 4,
    title: 'Textile Manufacturing Complex',
    description: 'Comprehensive electrical infrastructure for large textile manufacturing complex with energy optimization.',
    image: '/images/projects/textile-complex.jpg',
    category: 'Manufacturing',
    year: '2022',
    client: 'Textile Industries Group',
    panels: ['MCC', 'APFC', 'DCC', 'Power Distribution'],
    value: '₹95 Lakhs',
    location: 'Coimbatore, Tamil Nadu',
    duration: '10 months'
  }
];

// Navigation Data
export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' }
];

// Company Statistics
export const stats = [
  { label: 'Years of Experience', value: '13+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Service Locations', value: '15+' }
];

// Certifications
export const certifications = [
  'ISO 9001:2015 Certified',
  'CE Marking Compliance',
  'BIS Standards Compliance',
  'CPRI Testing Certified'
];

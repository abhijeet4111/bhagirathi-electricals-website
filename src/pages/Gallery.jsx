import { useState } from 'react';
import { X, ZoomIn, Calendar, MapPin, Building } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Manufacturing', 'Healthcare', 'Infrastructure', 'Commercial', 'Power & Energy'];

  const galleryImages = [
    {
      id: 1,
      src: '/images/projects/20160422_150737.jpg',
      title: 'Automotive Manufacturing Plant - Power Infrastructure',
      category: 'Manufacturing',
      location: 'Chennai, Tamil Nadu',
      year: '2023',
      description: 'Complete electrical panel installation for automotive manufacturing facility including MCC, DCC, and APFC panels.'
    },
    {
      id: 2,
      src: '/images/projects/DSC01453.JPG',
      title: 'Multi-Specialty Hospital Emergency Power System',
      category: 'Healthcare',
      location: 'Mumbai, Maharashtra',
      year: '2023',
      description: 'Critical power backup system with AMF panels and synchronization for 500-bed hospital.'
    },
    {
      id: 3,
      src: '/images/projects/IMG_4007 - Copy.JPG',
      title: 'Municipal Water Treatment Plant Automation',
      category: 'Infrastructure',
      location: 'Pune, Maharashtra',
      year: '2022',
      description: 'Complete automation solution with PLC/Drive panels for municipal water treatment facility.'
    },
    {
      id: 4,
      src: '/images/projects/20140522_130355 - Copy.jpg',
      title: 'Textile Manufacturing Complex',
      category: 'Manufacturing',
      location: 'Coimbatore, Tamil Nadu',
      year: '2022',
      description: 'Comprehensive electrical infrastructure for large textile manufacturing complex.'
    },
    {
      id: 5,
      src: '/images/projects/IMG_4112 - Copy.JPG',
      title: 'Shopping Mall Power Distribution',
      category: 'Commercial',
      location: 'Bangalore, Karnataka',
      year: '2022',
      description: 'Modern power distribution system for large shopping mall with advanced energy management.'
    },
    {
      id: 6,
      src: '/images/projects/20140524_173009 - Copy.jpg',
      title: 'Solar Power Plant Control Systems',
      category: 'Power & Energy',
      location: 'Rajasthan',
      year: '2021',
      description: '50MW solar power plant control and monitoring systems with grid synchronization.'
    },
    {
      id: 7,
      src: '/images/projects/20140526_093929 - Copy.jpg',
      title: 'Industrial Control Panel Installation',
      category: 'Manufacturing',
      location: 'Nashik, Maharashtra',
      year: '2021',
      description: 'Advanced control panel systems for industrial manufacturing processes.'
    },
    {
      id: 8,
      src: '/images/projects/IMG_0938 - Copy.JPG',
      title: 'Power Distribution Center',
      category: 'Infrastructure',
      location: 'Aurangabad, Maharashtra',
      year: '2021',
      description: 'High-capacity power distribution center for industrial estate.'
    },
    {
      id: 9,
      src: '/images/projects/IMG_2027 - Copy.jpg',
      title: 'Commercial Building Electrical Setup',
      category: 'Commercial',
      location: 'Hyderabad, Telangana',
      year: '2020',
      description: 'Complete electrical infrastructure for multi-story commercial building.'
    },
    {
      id: 10,
      src: '/images/projects/20012011111 - Copy.jpg',
      title: 'Manufacturing Plant Control Room',
      category: 'Manufacturing',
      location: 'Kolhapur, Maharashtra',
      year: '2020',
      description: 'Centralized control room setup with advanced monitoring systems.'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our extensive portfolio of electrical control panel installations across various industries. 
              Each image tells a story of precision, quality, and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Work Gallery</h2>
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
            <p className="text-gray-600">
              Click on any image to view in full size with project details
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 items-center justify-center">
                    <Building className="h-16 w-16 text-blue-600" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                    <span className="text-gray-500 text-xs">{image.year}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{image.title}</h3>
                  <p className="text-gray-600 text-xs flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Our electrical solutions power diverse industries across India</p>
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
                <h3 className="font-semibold text-gray-900 text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden">
            <div className="relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedImage.year}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

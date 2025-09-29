import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { companyInfo, certifications } from '../../utils/data';

export default function CompanyIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Industrial Control Panel Manufacturer Since {companyInfo.founded}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over {companyInfo.experience} of excellence in the electrical industry, {companyInfo.name} has 
              established itself as a trusted partner for businesses across various sectors. We specialize in 
              manufacturing high-quality industrial control panels that power critical operations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has enabled us to successfully 
              complete {companyInfo.projectsCompleted} projects and serve {companyInfo.clientsServed} clients 
              across multiple industries.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">Custom Engineering Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">24/7 Technical Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">On-Time Project Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">Comprehensive Testing</span>
              </div>
            </div>

            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Certifications & Stats */}
          <div className="space-y-6">
            {/* Certifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Power Distribution Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Motor Control Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Automation & PLC Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Power Factor Correction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

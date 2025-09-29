import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { companyInfo } from '../../utils/data';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {companyInfo.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/services">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">Certified Quality</h3>
                  <p className="text-sm text-blue-200">ISO 9001:2015</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">{companyInfo.experience}</h3>
                  <p className="text-sm text-blue-200">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">{companyInfo.clientsServed}</h3>
                  <p className="text-sm text-blue-200">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600/50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold">{companyInfo.projectsCompleted}</h4>
                  <p className="text-sm text-blue-200">Projects Completed</p>
                </div>
                <div className="bg-blue-600/50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold">{companyInfo.clientsServed}</h4>
                  <p className="text-sm text-blue-200">Satisfied Clients</p>
                </div>
                <div className="bg-blue-600/50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold">24/7</h4>
                  <p className="text-sm text-blue-200">Support Available</p>
                </div>
                <div className="bg-blue-600/50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold">100%</h4>
                  <p className="text-sm text-blue-200">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

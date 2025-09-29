import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button } from '../ui/button';
import { services } from '../../utils/data';

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Industrial Control Panel Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive control panel solutions for various industrial applications, 
            ensuring reliability, efficiency, and safety in your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = Icons[service.icon] || Icons.Settings;
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.slice(0, 2).map((app, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Services & Specifications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../utils/data';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Success Icon */}
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
          Your message has been sent successfully
        </h2>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We appreciate you reaching out to <strong>Bhagirathi Electricals</strong>. 
            Our team has received your inquiry and will review your requirements carefully.
          </p>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <p className="text-gray-600">Our technical team will review your project requirements</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <p className="text-gray-600">We'll contact you within 24 hours to discuss your needs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <p className="text-gray-600">Receive a detailed quote and project timeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Need immediate assistance?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Phone className="h-4 w-4" />
              <span>{companyInfo.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Mail className="h-4 w-4" />
              <span>{companyInfo.contact.email}</span>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
              View Our Services
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            For urgent inquiries, please call us directly at {companyInfo.contact.phone}
          </p>
          <p className="mt-2">
            Business Hours: {companyInfo.workingHours}
          </p>
        </div>
      </div>
    </div>
  );
}

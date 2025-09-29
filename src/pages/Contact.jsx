import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team for your industrial control panel requirements. 
            We're here to provide you with the best electrical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              {/* Proven Track Record */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Proven Track Record</h3>
                </div>
                <p className="text-gray-700">
                  With multiple successful projects across various industries, we have established 
                  ourselves as a trusted partner for industrial control panel solutions.
                </p>
              </div>

              {/* Key People & Contact */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key People & Contact</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Swapnil Melkunde</p>
                    <a href="tel:+918379837623" className="text-blue-600 hover:text-blue-700">
                      +91 83798 37623
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Basavaraj Melkunde</p>
                    <a href="tel:+919822973785" className="text-blue-600 hover:text-blue-700">
                      +91 98229 73785
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:bhagirathielect@gmail.com" className="text-blue-600 hover:text-blue-700">
                    bhagirathielect@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">Shivane, Pune – 411023</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form 
                name="contact" 
                method="POST" 
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
                onSubmit={(e) => {
                  // In development, redirect to thank you page
                  if (window.location.hostname === 'localhost') {
                    e.preventDefault();
                    window.location.href = '/thank-you';
                  }
                }}
              >
                {/* Hidden fields for Netlify form handling */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a service</option>
                    <option value="power-distribution">Power Distribution Panels</option>
                    <option value="mcc-dcc">Motor & Drive Control Centers</option>
                    <option value="apfc">APFC & Instrumentation Panels</option>
                    <option value="amf">AMF & Synchronization Panels</option>
                    <option value="plc-control">PLC, Drive & Control Desk Panels</option>
                    <option value="custom">Custom Electrical Solutions</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please describe your project requirements, specifications, timeline, and any other relevant details..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Whether you need a single control panel or a complete electrical infrastructure solution, 
            our team is ready to help you achieve your industrial automation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918379837623">
              <Button variant="outline" className="bg-white text-blue-900 hover:bg-gray-100">
                Call Us Now
              </Button>
            </a>
            <a href="mailto:bhagirathielect@gmail.com">
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

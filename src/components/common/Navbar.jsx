import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { companyInfo, navigationItems } from '../../utils/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePage = (href) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{companyInfo.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{companyInfo.contact.email}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>{companyInfo.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">BE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">{companyInfo.name}</h1>
              <p className="text-sm text-gray-600 hidden md:block">{companyInfo.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActivePage(item.href) ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-md transition-colors duration-200 ${
                    isActivePage(item.href) ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

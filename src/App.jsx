import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Lock } from 'lucide-react';

const MassageWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  // Check URL for /therapists path
  React.useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#/therapists' || hash === '#therapists') {
        setCurrentPage('therapists');
      }
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Password for therapist selection (you can change this)
  const THERAPIST_PASSWORD = 'bangalore1111';

  const services = [
    {
      name: 'Swedish Massage',
      description: 'Gentle, relaxing full-body massage to ease tension'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Intense pressure to relieve chronic muscle tension'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Relaxing massage with essential oils for mind and body'
    },
    {
      name: 'Sports Massage',
      description: 'Targeted therapy for athletes and active individuals'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Heated stones to melt away stress and muscle tension'
    }
  ];

  const therapists = [
    {
      id: 1,
      name: 'Therapist 1',
      experience: '5 years',
      specialties: ['Swedish', 'Deep Tissue'],
      image: '/api/placeholder/200/200',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Therapist 2',
      experience: '7 years',
      specialties: ['Aromatherapy', 'Hot Stone'],
      image: '/api/placeholder/200/200',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Therapist 3',
      experience: '4 years',
      specialties: ['Sports', 'Deep Tissue'],
      image: '/api/placeholder/200/200',
      rating: 4.7
    }
  ];

  const handlePasswordSubmit = () => {
    if (password === THERAPIST_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Professional Massage at Your Doorstep</h1>
          <p className="text-xl mb-8 opacity-90">Experience premium therapeutic massage in the comfort of your Bangalore home</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setCurrentPage('booking')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Book Now
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Therapists</h3>
              <p className="text-gray-600">All our therapists are professionally trained and certified</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Book anytime between 10 AM to 7 PM, 7 days a week</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">All Bangalore Areas</h3>
              <p className="text-gray-600">We serve all major areas across Bangalore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => setCurrentPage('services')}
              className="text-blue-600 font-semibold hover:underline"
            >
              View All Services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button 
                onClick={() => setCurrentPage('booking')}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BookingPage = () => {
    const [bookingData, setBookingData] = useState({
      name: '',
      phone: '',
      service: ''
    });

    const handleInputChange = (field, value) => {
      setBookingData(prev => ({ ...prev, [field]: value }));
    };

    const handleWhatsAppBooking = () => {
      const whatsappNumber = 'YOURNUMBERHERE'; // Replace with actual WhatsApp number (format: 919876543210)
      const message = `Hi, I'd like to book a massage session.
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Service: ${bookingData.service}`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    };

    return (
      <div className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Book Your Session</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  value={bookingData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                  placeholder="+91 " 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Service</label>
                <select 
                  value={bookingData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={handleWhatsAppBooking}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TherapistSelectionPage = () => {
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <Lock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">Therapist Selection</h2>
              <p className="text-gray-600 mt-2">Enter password to access therapist profiles</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                  placeholder="Enter password"
                />
              </div>
              <button 
                onClick={handlePasswordSubmit}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Access Therapists
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Select Your Therapist</h1>
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
                setSelectedTherapist(null);
              }}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Logout
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <div 
                key={therapist.id} 
                className={`border-2 rounded-lg p-6 cursor-pointer transition ${
                  selectedTherapist?.id === therapist.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTherapist(therapist)}
              >
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{therapist.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-700">{therapist.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Experience: {therapist.experience}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {therapist.specialties.map((specialty, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
                {selectedTherapist?.id === therapist.id && (
                  <div className="bg-blue-500 text-white text-center py-2 rounded font-semibold">
                    Selected ✓
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedTherapist && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setCurrentPage('booking')}
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Proceed to Booking with {selectedTherapist.name}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Massage Blr</span>
            </div>
            <div className="flex gap-6 items-center">
              <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-blue-500 font-medium">Home</button>
              <button onClick={() => setCurrentPage('services')} className="text-gray-600 hover:text-blue-500 font-medium">Services</button>
              <button onClick={() => setCurrentPage('booking')} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-medium">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'booking' && <BookingPage />}
      {currentPage === 'therapists' && <TherapistSelectionPage />}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Massage Blr</h3>
            <p className="text-gray-400">Premium doorstep massage services across Bangalore</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-gray-400">Monday - Sunday</p>
            <p className="text-gray-400">10:00 AM - 7:00 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Massage Blr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MassageWebsite;

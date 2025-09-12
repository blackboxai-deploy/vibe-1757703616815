export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                About us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Our offerings
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Newsroom
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Investors
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Ride
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Drive
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Deliver
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Eat
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Uber for Business
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Uber Freight
              </a>
            </div>
          </div>

          {/* Global Citizenship */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Global citizenship</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Safety
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Diversity and inclusion
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Sustainability
              </a>
            </div>
          </div>

          {/* Travel */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Travel</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Reserve
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Airports
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Cities
              </a>
            </div>
          </div>

          {/* App Store Links & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Download</h4>
            <div className="space-y-4">
              <a href="#" className="block">
                <div className="border border-gray-600 rounded-lg p-3 hover:border-white transition-colors">
                  <div className="text-sm text-gray-300">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="border border-gray-600 rounded-lg p-3 hover:border-white transition-colors">
                  <div className="text-sm text-gray-300">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-gray-300">Follow us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">Uber</div>
              <div className="text-gray-400 text-sm">
                © {currentYear} Uber Technologies Inc.
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center">
                <div className="text-xs">🌐</div>
              </div>
              <span className="text-sm">English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
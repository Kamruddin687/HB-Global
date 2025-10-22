import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HB Global</h3>
            <p className="text-background/80 mb-4">
              Transforming talent into success through strategic consulting and recruitment.
            </p>
            <div className="flex gap-4">
              <Linkedin size={20} className="hover:opacity-70 cursor-pointer" />
              <Twitter size={20} className="hover:opacity-70 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#home" className="hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-background transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Executive Recruitment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Talent Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Career Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@hbglobal.com" className="hover:text-background transition-colors">
                  info@hbglobal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-background transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>123 Business Ave, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 HB Global Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from "wouter";
import { Coffee, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Coffee className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-bold">Espresso Media</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping cafés and restaurants grow their online presence with beautiful websites and engaging content.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-accent transition-colors">Website Design</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Social Media Reels</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Menu Photography</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Google Maps SEO</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@espressomedia.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>@espressomedia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40">
          <p>© 2024 Espresso Media. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}

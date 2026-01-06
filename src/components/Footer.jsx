import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LogoFooter from '../assets/LogoFooter.png';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { path: '/', label: { en: 'Home', id: 'Beranda' } },
    { path: '/portfolio', label: { en: 'Portfolio', id: 'Portofolio' } },
    { path: '/about', label: { en: 'About Us', id: 'Tentang Kami' } }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-3">
              <img src={LogoFooter} alt="Enter Studio Logo" className="h-2/5 w-2/5 object-contain" />
            </div>
            {/* <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t({
                en: 'Creating exceptional visual experiences through professional video production and creative services.',
                id: 'Menciptakan pengalaman visual luar biasa melalui produksi video profesional dan layanan kreatif.'
              })}
            </p> */}
          </div>

          {/* Quick Links */}
          <div className='flex flex-col justify-center'>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              {t({ en: 'Quick Links', id: 'Tautan Cepat' })}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary smooth-transition"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col justify-center'>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              {t({ en: 'Contact', id: 'Kontak' })}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>+62 812-9763-2561</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>info@enterstudio.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>
                  {t({
                    en: 'Depok, Indonesia',
                    id: 'Depok, Indonesia'
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Enter Studio.
              {t({ en: ' All rights reserved.', id: ' Semua hak dilindungi.' })}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary smooth-transition"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
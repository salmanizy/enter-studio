import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';
import logo from '../assets/LogoMetal.png';

export const AboutUs = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '6281297632561';
    const message = encodeURIComponent(
      t({
        en: 'Hello Enter Studio! I would like to discuss a project.',
        id: 'Halo Enter Studio! Saya ingin berdiskusi tentang sebuah proyek.'
      })
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo/Image */}
            <div className="flex justify-center lg:justify-center">
              <div className="w-100 h-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={logo}
                    alt="Enter Studio Logo"
                    className="w-1/2 h-1/2 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t({ en: 'Enter Studio', id: 'Enter Studio' })}
              </h1>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  {t({
                    en: 'Enter Studio is a leading creative production house based in Depok, Indonesia. We specialize in delivering world-class video production, post-production, and comprehensive creative services to clients across various industries.',
                    id: 'Enter Studio adalah rumah produksi kreatif terkemuka yang berbasis di Depok, Indonesia. Kami mengkhususkan diri dalam menyediakan produksi video kelas dunia, pasca-produksi, dan layanan kreatif komprehensif untuk klien di berbagai industri.'
                  })}
                </p>
                <p>
                  {t({
                    en: 'From concept development to final delivery, we handle every aspect of production with meticulous attention to detail and a commitment to exceeding client expectations. Our portfolio spans commercials, documentaries, music videos, corporate films, and branded content for both local and international clients.',
                    id: 'Dari pengembangan konsep hingga pengiriman akhir, kami menangani setiap aspek produksi dengan perhatian mendetail yang teliti dan komitmen untuk melampaui harapan klien. Portofolio kami mencakup iklan, dokumenter, video musik, film korporat, dan konten bermerek untuk klien lokal maupun internasional.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center space-y-6">
                <div className="inline-flex w-16 h-16 rounded-full bg-secondary/10 items-center justify-center mb-2">
                  <MessageCircle className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {t({ en: "Let's Create Together", id: 'Mari Berkarya Bersama' })}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t({
                    en: 'Have a project in mind? We would love to hear about it. Get in touch with us for a free consultation and let\'s discuss how we can bring your vision to life.',
                    id: 'Punya proyek dalam pikiran? Kami ingin mendengarnya. Hubungi kami untuk konsultasi gratis dan mari diskusikan bagaimana kami dapat mewujudkan visi Anda.'
                  })}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-6 text-base font-medium rounded-md smooth-transition mt-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t({ en: 'Chat on WhatsApp', id: 'Chat di WhatsApp' })}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t({ en: 'Our Team', id: 'Tim Kami' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Meet the passionate professionals behind Enter Studio',
                id: 'Kenali para profesional bersemangat di balik Enter Studio'
              })}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Enter Studio Team"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t({ en: 'Visit Our Studio', id: 'Kunjungi Studio Kami' })}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t({
                en: 'Located in the heart of Depok, Indonesia',
                id: 'Berlokasi di jantung Depok, Indonesia'
              })}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3844830816128!2d106.7641778762237!3d-6.324254994832888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef000b22bf03%3A0x1b32161f5fae47a!2sEnter%20studio!5e0!3m2!1sid!2sid!4v1767689512757!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Enter Studio Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
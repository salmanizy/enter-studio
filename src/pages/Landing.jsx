import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/mockData';

export const Landing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551710029-607e06bd45ff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/80 to-black/100" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              {t({
                en: 'Crafting Visual Stories That Inspire',
                id: 'Menciptakan Kisah Visual Yang Menginspirasi'
              })}
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {t({
                en: 'Professional video production and creative services that bring your vision to life with exceptional quality and artistic excellence.',
                id: 'Produksi video profesional dan layanan kreatif yang menghidupkan visi Anda dengan kualitas luar biasa dan keunggulan artistik.'
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-base font-medium rounded-md smooth-transition"
              >
                <Link to="/portfolio">
                  {t({ en: 'View Our Work', id: 'Lihat Karya Kami' })}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-base font-medium rounded-md smooth-transition"
              >
                <Link to="/about">
                  {t({ en: 'Learn More', id: 'Pelajari Lebih Lanjut' })}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t({ en: 'Who is Enter Studio?', id: 'Siapa Enter Studio?' })}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t({
                en: 'Enter Studio is a premier creative production house specializing in video production, post-production, and comprehensive creative services. With years of experience and a passionate team of professionals, we transform ideas into compelling visual narratives that resonate with audiences.',
                id: 'Enter Studio adalah rumah produksi kreatif terkemuka yang mengkhususkan diri dalam produksi video, pasca-produksi, dan layanan kreatif komprehensif. Dengan pengalaman bertahun-tahun dan tim profesional yang bersemangat, kami mengubah ide menjadi narasi visual yang menarik dan beresonansi dengan audiens.'
              })}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {[
                { number: '200+', label: { en: 'Projects Completed', id: 'Proyek Selesai' } },
                { number: '50+', label: { en: 'Happy Clients', id: 'Klien Puas' } },
                { number: '10+', label: { en: 'Years Experience', id: 'Tahun Pengalaman' } }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t({ en: 'Our Services', id: 'Layanan Kami' })}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t({
                en: 'Comprehensive creative services tailored to bring your vision to life',
                id: 'Layanan kreatif komprehensif yang disesuaikan untuk menghidupkan visi Anda'
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg smooth-transition border-border/50 bg-card overflow-hidden"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.title)}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(service.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(service.description)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              {t({ en: 'Ready to Start Your Project?', id: 'Siap Memulai Proyek Anda?' })}
            </h2>
            <p className="text-lg text-primary-foreground/90">
              {t({
                en: "Let's collaborate to create something extraordinary. Get in touch with us today.",
                id: 'Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa. Hubungi kami hari ini.'
              })}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-6 text-base font-medium rounded-md smooth-transition"
            >
              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                {t({ en: 'Contact Us', id: 'Hubungi Kami' })}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
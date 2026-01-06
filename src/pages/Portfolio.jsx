import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/mockData';
import { Calendar } from 'lucide-react';

export const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section
        className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground">
            {t({ en: 'Our Portfolio', id: 'Portofolio Kami' })}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90">
            {t({
              en: 'Explore our latest creative projects',
              id: 'Jelajahi proyek kreatif terbaru kami'
            })}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {portfolioData.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl smooth-transition">
                <CardContent className="p-0">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Image Column */}
                    <div
                      className={`relative h-64 lg:h-auto ${
                        index % 2 === 1 ? 'lg:col-start-2' : ''
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={t(project.title)}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Column */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-2 text-secondary" />
                        {formatDate(project.date)}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                        {t(project.title)}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {t(project.content)}
                      </p>
                      <div className="mt-auto">
                        <Button
                          onClick={() => setSelectedProject(project)}
                          className="bg-secondary text-primary hover:bg-secondary/90 smooth-transition"
                        >
                          {t({ en: 'Read More', id: 'Baca Selengkapnya' })}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-bold pr-8">
                  {t(selectedProject.title)}
                </DialogTitle>
                <DialogDescription className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4 mr-2 text-secondary" />
                  {formatDate(selectedProject.date)}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <img
                  src={selectedProject.image}
                  alt={t(selectedProject.title)}
                  className="w-full h-64 sm:h-96 object-cover rounded-lg"
                />
                <div className="prose prose-lg max-w-none">
                  <p className="text-base text-foreground leading-relaxed whitespace-pre-line">
                    {t(selectedProject.content)}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
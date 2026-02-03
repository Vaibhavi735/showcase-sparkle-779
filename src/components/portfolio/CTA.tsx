import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles } from 'lucide-react';

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-3xl mx-auto text-center glass p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Open to Opportunities</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's connect and build something{' '}
              <span className="gradient-text">meaningful</span> together!
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Currently looking for entry-level opportunities and internships where I can contribute my skills in frontend development and data analysis.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                Let's Talk
              </a>
              <a
                href="mailto:vaibhavivnaragund@gmail.com"
                className="px-8 py-3 rounded-full glass border border-primary/30 text-foreground font-medium transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { ArrowDown, MapPin, Briefcase } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const Hero = () => {
  const typedText = useTypingEffect(['Developer'], 100, 50, 3000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-glow-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to entry-level opportunities and internships</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text glow-text">Vaibhavi</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12">
              <span className="text-muted-foreground">I'm a</span>
              <span className="text-primary">
                {typedText}
                <span className="animate-blink border-r-2 border-primary ml-1" />
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Creating clean and user-friendly web applications
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Fresher</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full glass border border-primary/30 text-foreground font-medium transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-glow-pink rounded-full blur-2xl opacity-40 animate-glow-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border p-1">
                <img
                  src="https://image2url.com/r2/default/images/1770125919294-7032eb2c-7aac-4e25-83cd-07b88e7fde90.jpeg"
                  alt="Vaibhavi V Naragund"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Database, Lightbulb, Users } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Frontend Focus', description: 'Building responsive UIs' },
  { icon: Database, label: 'Data Analysis', description: 'Extracting insights' },
  { icon: Lightbulb, label: 'Problem Solver', description: 'Creative solutions' },
  { icon: Users, label: 'Team Player', description: 'Collaborative mindset' },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">WHO I AM</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-2">
                  <img
                    src="https://image2url.com/r2/default/images/1770362215985-bcd1b2f8-33ca-4d61-845d-016a3586b473.jpeg"
                    alt="Vaibhavi V Naragund"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 -z-10" />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 lg:order-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a developer focused on frontend development and data analysis. I enjoy building clean and responsive user interfaces and working with data to find useful insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I like turning data into clear visuals and simple solutions that are easy for users to understand. I am continuously learning and improving my skills, and I am looking for opportunities where I can contribute to frontend development while applying a data-driven approach to problem solving.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">MCA</div>
                  <div className="text-sm text-muted-foreground">Degree</div>
                </div>
                <div className="glass p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">7.72</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="glass p-6 group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

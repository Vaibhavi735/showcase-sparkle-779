import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Visvesvaraya Technological University, Belgavi',
    location: 'India',
    status: 'Graduated 2025',
    description: 'Relevant coursework: Data Structures, OOPS, DBMS, Software Engineering, Machine Learning',
    cgpa: '7.72',
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">MY JOURNEY</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Education Cards */}
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="glass p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>

                    <p className="text-lg text-primary mb-3">{edu.institute}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

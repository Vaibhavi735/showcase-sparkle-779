import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'from-primary to-cyan-400',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python'],
    color: 'from-secondary to-purple-400',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL'],
    color: 'from-glow-pink to-pink-400',
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'AWS'],
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'GitHub Copilot'],
    color: 'from-orange-500 to-amber-400',
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">WHAT I KNOW</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-primary-foreground text-sm font-medium mb-6`}>
                  {category.title}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-muted/50 text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

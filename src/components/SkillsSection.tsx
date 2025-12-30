const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      skills: [
        ".NET Core",
        "C#",
        "ASP.NET Core",
        "REST APIs",
        "Clean Architecture",
        "Multitenant Architecture",
        "CQRS",
        "Design Patterns",
        "SOLID",
        "Microservices",
        "EF Core",
        "LINQ",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Angular",
        "TypeScript",
        "React",
        "HTML/CSS",
        "Angular Material",
        "AG Grid",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Azure DevOps",
        "Azure Key Vault",
        "Azure Blob Storage",
        "Azure AD",
        "SSO",
        "CI/CD Pipelines",
        "Docker",
        "Hangfire",
        "AWS S3",
      ],
    },
    {
      title: "Databases",
      skills: [
        "SQL Server",
        "T-SQL",
        "Query Optimization",
        "Stored Procedures",
        "Performance Tuning",
        "Indexing",
      ],
    },
    {
      title: "Tools & Testing",
      skills: [
        "xUnit",
        "NUnit",
        "Moq",
        "Git",
        "Postman",
        "Swagger",
        "Jira",
      ],
    },
    {
      title: "AI & Machine Learning (Exploration)",
      skills: [
        "Python (HackerRank Gold)",
        "Scikit-Learn",
        "TensorFlow (beginner/intermediate)",
        "Jupyter / Google Colab",
        "ML fundamentals (data preprocessing, model training & evaluation)",
        "Completion APIs (OpenAI / local models)",
        "Local LLMs (Ollama, small hobby chatbots)",
        "Chatbot prototyping & experimentation",
      ],
      isExploration: true,
      explorationNote: "Exploration & learning, no professional ML deployment experience yet.",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider border-l-2 border-primary pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-sm font-medium bg-badge text-badge-foreground rounded-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {category.isExploration && (
                <p className="text-xs text-muted-foreground italic pt-1">
                  {category.explorationNote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

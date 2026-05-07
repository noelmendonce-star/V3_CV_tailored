export default {
  personal: {
    name: 'Alex Morgan',
    title: 'Full-Stack Software Engineer',
    email: 'alex.morgan@example.com',
    location: 'Berlin, Germany',
    linkedin: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
  },

  summary:
    'Experienced software engineer with 6+ years building scalable web applications. ' +
    'Passionate about clean architecture, developer experience, and accessible interfaces. ' +
    'Comfortable across the full stack, with a focus on React-based frontends and Node.js APIs.',

  experience: [
    {
      id: 'exp-1',
      role: 'Senior Frontend Engineer',
      company: 'Acme Corp',
      location: 'Remote',
      start: 'Jan 2022',
      end: 'Present',
      bullets: [
        'Led migration of monolithic jQuery codebase to React, reducing bundle size by 40%.',
        'Established a shared component library adopted across 3 product teams.',
        'Mentored 2 junior engineers through structured code review cycles.',
        'Drove adoption of automated accessibility auditing in the CI pipeline.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Software Engineer',
      company: 'Beta Systems',
      location: 'Berlin, Germany',
      start: 'Mar 2019',
      end: 'Dec 2021',
      bullets: [
        'Built REST APIs with Node.js and PostgreSQL serving 50k daily active users.',
        'Improved CI/CD pipeline, cutting deployment time from 18 min to 4 min.',
        'Redesigned the onboarding flow, increasing activation rate by 22%.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Junior Developer',
      company: 'Gamma Studio',
      location: 'Berlin, Germany',
      start: 'Aug 2017',
      end: 'Feb 2019',
      bullets: [
        'Developed and maintained client websites using HTML, CSS, and vanilla JavaScript.',
        'Integrated third-party APIs including Stripe and Mailchimp.',
      ],
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. Computer Science',
      institution: 'University of Example',
      year: '2017',
      note: 'Graduated with Honours',
    },
  ],

  skills: {
    Languages:  ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
    Frameworks: ['React', 'Node.js', 'Express', 'Vite', 'Next.js'],
    Tools:      ['Git', 'Docker', 'PostgreSQL', 'Redis', 'Figma', 'VS Code'],
    Concepts:   ['REST APIs', 'Responsive Design', 'Web Accessibility', 'CI/CD', 'Agile'],
  },

  projects: [
    {
      id: 'proj-1',
      title: 'OpenBudget',
      description:
        'A personal finance tracker built with React and IndexedDB. Fully offline-capable PWA with category budgeting and monthly reports.',
      stack: ['React', 'IndexedDB', 'CSS', 'Vite'],
      url: 'https://github.com/alexmorgan/openbudget',
    },
    {
      id: 'proj-2',
      title: 'MarkFlow',
      description:
        'Lightweight Markdown editor with live preview and export to PDF. Supports GitHub Flavored Markdown and custom themes.',
      stack: ['JavaScript', 'Marked.js', 'CSS'],
      url: 'https://github.com/alexmorgan/markflow',
    },
    {
      id: 'proj-3',
      title: 'Patchwork CLI',
      description:
        'A command-line tool for applying and managing structured patches across multiple repos. Built to streamline cross-service refactors.',
      stack: ['Python', 'Click', 'Git'],
      url: 'https://github.com/alexmorgan/patchwork-cli',
    },
  ],
}

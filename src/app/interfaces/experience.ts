export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  programmingLang: string[];
  href: string;
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    company: 'Skandinaviska Enskilda Banken',
    role: 'Full-stack Developer',
    href: 'https://seb.se/',
    description: `
     <ul class="text-color-grey mb-3 p-0">
    <li>
      Developed backend solutions using C# and .NET, including integrations with both third-party systems and internal services.
    </li>
    <li>
      Contributed to a Backend-for-Frontend (BFF) architecture to support new frontend services.
    </li>
    <li>
      Used GitHub for source control management.
    </li>
    <li>
      Maintained and developed micro frontends and product pages using Angular, with a focus on accessibility and user experience.
    </li>
    <li>
      Performed testing using tools such as Jest, Lighthouse, Axe, and Playwright.
    </li>
    <li>
      Worked in an agile team environment following Scrum methodology.
    </li>
    <li>
      Deployed solutions through CI/CD pipelines, including system and integration testing.
    </li>
  </ul>
    `,
    startDate: 'Dec 2023',
    endDate: 'Dec 2024',
    programmingLang: [
      'C#',
      '.NET',
      'Angular',
      'TypeScript',
      'HTML & CSS',
      'Jest',
      'Playwright',
    ],
  },
  {
    id: 2,
    company: 'Viggeby Data AB',
    role: 'Full-stack Developer',
    href: 'https://viggeby.com/',
    description: `
       <ul class="text-color-grey mb-3 p-0">
      <li>Developed and maintained applications and APIs using ASP.NET, .NET Core, and C#.</li>
      <li>Built web applications with AngularJS, Angular, JavaScript, and TypeScript.</li>
      <li>Designed and managed databases with MSSQL.</li>
      <li>Handled full project lifecycle — from planning to testing.</li>
      <li>Implemented performance optimizations to enhance user experience.</li>
      <li>Developed new features and improved systems based on user requirements.</li>
      <li>Used Azure DevOps for source control and CI/CD processes.</li>
    </ul>
    `,
    startDate: 'June 2021',
    endDate: 'April 2023',
    programmingLang: [
      'C#',
      '.NET Core',
      'Angular',
      'AngularJS',
      'HTML & CSS',
      'JavaScript',
      'TypeScript',
      'MSSQL',
    ],
  },
  {
    id: 3,
    company: 'Novotek AB',
    role: 'Software Developer Intern',
    href: 'https://www.novotek.com/se/',
    description: `
       <ul class="text-color-grey mb-3 p-0">
      <li>Developed an industrial web app using Proficy Operations Hub to visualize the production line and each manufacturing step.</li>
      <li>Rendered a canvas-based UI based on coordinate data retrieved from an API.</li>
      <li>Handled frontend development using HTML, CSS, and JavaScript</li>
    </ul>
    `,
    startDate: 'Jan 2021',
    endDate: 'June 2021',
    programmingLang: ['JavaScript', 'HTML & CSS'],
  },
  {
    id: 4,
    company: 'Beguine AB',
    href: 'https://www.beguine.com/',
    role: 'Software Developer Intern',
    description: `
      <ul class="text-color-grey mb-3 p-0">
      <li>Created a dashboard application to display business metrics including news, sales data, revenue, and product performance.</li>
      <li>Built dynamic graphs and visualizations to present data effectively.</li>
      <li>Used HTML, CSS, and JavaScript for frontend development.</li>
    </ul>
    `,
    startDate: 'April 2020',
    endDate: 'June 2020',
    programmingLang: ['JavaScript', 'HTML & CSS'],
  },
];

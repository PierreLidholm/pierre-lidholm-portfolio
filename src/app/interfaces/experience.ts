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
     <div class="text-color-grey mb-3 p-0">
  <p>At SEB, I worked as a full-stack developer focusing on both frontend and backend within a microservices architecture. On the backend, I developed and maintained services using C# and .NET.</p>

<p>I also worked on a backend-for-frontend (BFF) solution to support new frontend implementations.</p>

<p>All code was managed in GitHub with version control and CI/CD pipelines, including automated system and integration tests for each deployment.</p>

<p>On the frontend, I developed and maintained microfrontend components and product pages on SEB’s website using Angular, with a strong focus on accessibility in compliance with WCAG standards. Testing was carried out using tools such as Jest, Lighthouse, Axe, and Playwright.</p>

<p>We followed agile methodologies using Scrum, with sprint planning and daily stand-ups in close collaboration with developers, designers, and product owners.</p>
  </div>
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
       <div class="text-color-grey mb-3 p-0">
     <p>I worked as a full-stack developer responsible for developing and maintaining web-based applications and APIs in .NET using C#. I built new solutions as well as enhanced existing systems.</p>

<p>Frontend development was done using Angular and AngularJS, where I worked with both TypeScript and JavaScript to create responsive and user-friendly interfaces. I was also responsible for the database layer, designing and building MSSQL databases.</p>

<p>My role covered the full development cycle, from requirements analysis and planning to implementation, testing, and deployment. I collaborated with clients to understand user needs and translate them into technical solutions, continuously implementing new features and improving existing systems.</p>

<p>Version control and deployments were handled using Azure DevOps.</p>
    </div>
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
       <div class="text-color-grey mb-3 p-0">
      <p>I developed an application in Proficy Operations Hub, a platform used to build industrial applications for web-based intelligence. I extended an existing application that visualized a production process, where each step in the process was rendered on a canvas using coordinates and data retrieved from an API.</p>

<p>The frontend was built using HTML, CSS, and JavaScript.</p>
    </div>
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
      <div class="text-color-grey mb-3 p-0">
      <p>I created a dashboard for a company that displayed news, sales data, revenue, and product performance using various charts and graphs.</p>

<p>The dashboard was built using HTML, CSS, and JavaScript.</p>
    </div>
    `,
    startDate: 'April 2020',
    endDate: 'June 2020',
    programmingLang: ['JavaScript', 'HTML & CSS'],
  },
];

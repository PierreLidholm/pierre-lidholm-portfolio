export interface Project {
  id: number;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  programmingLang: string[];
  href: string;
  alt: string;
  imgUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    alt: 'Image of Adam Augustssons website',
    imgUrl:
      'https://www.adamaugustsson.se/assets/images/vaggmalningar/saigon_Stories/6.jpg',
    company: 'Adam Augustsson AB',
    href: 'https://www.adamaugustsson.se',
    description: `
      Worked on backend development in C# and .NET, including integrations with third-party systems and internal services. 
      Contributed to a Backend-for-Frontend (BFF) solution to support new frontend services. 
      Managed source control using GitHub. On the frontend, maintained and developed micro frontends and product pages in Angular, 
      ensuring accessibility and usability for all users. Performed testing with Jest, Lighthouse, Axe, and Playwright. 
      Worked in an agile environment using Scrum, and deployed solutions using CI/CD pipelines with system and integration testing.
    `,
    startDate: '2024-01-01',
    endDate: '2024-05-01',
    programmingLang: ['Angular', 'TypeScript', 'HTML & CSS', 'Shopify\'s API', 'GraphQL'],
  },
];

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
    company: "Skandinaviska Enskilda Banken",
    role: "Full-stack Developer",
    href: "https://seb.se/",
    description: `
      Worked on backend development in C# and .NET, including integrations with third-party systems and internal services. 
      Contributed to a Backend-for-Frontend (BFF) solution to support new frontend services. 
      Managed source control using GitHub. On the frontend, maintained and developed micro frontends and product pages in Angular, 
      ensuring accessibility and usability for all users. Performed testing with Jest, Lighthouse, Axe, and Playwright. 
      Worked in an agile environment using Scrum, and deployed solutions using CI/CD pipelines with system and integration testing.
    `,
    startDate: "2023-12-01",
    endDate: "2024-12-01",
    programmingLang: ["C#", ".NET", "Angular", "TypeScript",  "HTML & CSS", "Jest", "Playwright"]
  },
  {
    id: 2,
    company: "Viggeby Data AB",
    role: "Full-stack Developer",
    href: "https://viggeby.com/",
    description: `
      Responsible for developing and maintaining applications and APIs in ASP.NET and .NET Core using C#. 
      Built and maintained web applications using AngularJS, Angular, JavaScript, TypeScript, and Node.js. 
      Designed and built databases with MSSQL. Participated in the entire project lifecycle from planning to testing. 
      Implemented performance optimizations to improve user experience, and developed new features and system enhancements 
      based on user requirements. Source control and CI/CD managed with Azure DevOps.
    `,
    startDate: "2021-06-07",
    endDate: "2023-04-30",
    programmingLang: ["C#", ".NET Core", "Angular",  "AngularJS",  "HTML & CSS", "JavaScript", "TypeScript", "MSSQL"]
  },
  {
    id: 3,
    company: "Novotek AB",
    role: "Software Developer Intern",
    href: "https://www.novotek.com/se/",
    description: `
      Developed an industrial web application using Proficy Operations Hub. The application visualized the production line 
      and each step of the manufacturing process on a canvas using coordinate data from an API. 
      Frontend development was carried out using HTML, CSS, JavaScript, and Node.js.
    `,
    startDate: "2021-01-10",
    endDate: "2021-05-23",
    programmingLang: ["JavaScript", "HTML & CSS"]
  },
  {
    id: 4,
    company: "Beguine AB",
    href: "https://www.beguine.com/",
    role: "Software Developer Intern",
    description: `
      Created a dashboard application displaying business metrics such as news, sales data, revenue, and product performance 
      using graphs and visualizations. Built the dashboard using HTML, CSS, JavaScript, and Node.js.
    `,
    startDate: "2020-04-13",
    endDate: "2020-05-29",
    programmingLang: ["JavaScript",  "HTML & CSS"]
  }
];
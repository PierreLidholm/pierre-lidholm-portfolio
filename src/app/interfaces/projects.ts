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
     <div class="text-color-grey mb-3 p-0">
  <p>Designed and built a personal website for a tattoo artist and painter to showcase artwork and services.</p>
    <p>Integrated a fully functional webshop using the Shopify API to manage products, inventory, and orders.</p>
    <p>Developed the frontend with Angular and TypeScript, focusing on responsiveness and user experience.</p>
    <p>Implemented custom components and features to reflect the artist's unique brand and style.</p>
    <p>Handled all aspects of the project from concept to deployment.</p>
  </div>
    `,
    startDate: '2024-01-01',
    endDate: '2024-05-01',
    programmingLang: ['Angular', 'TypeScript', 'HTML & CSS', 'Shopify\'s API', 'GraphQL'],
  },
];

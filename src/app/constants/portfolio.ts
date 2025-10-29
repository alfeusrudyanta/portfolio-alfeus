type PortfolioData = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

const portfolioData: PortfolioData[] = [
  {
    id: 1,
    image: '/image/portfolio-image-1.png',
    title: 'Todo List',
    description:
      'A to-do list manager that helps users track tasks under three categories — Today, Upcoming, and Completed.',
    link: 'https://todo-list-zeta-khaki.vercel.app/',
  },
  {
    id: 2,
    image: '/image/portfolio-image-2.png',
    title: 'Foody',
    description:
      'A food‑delivery app built with Vite + React + TS that lets users browse menus, place orders, and track deliveries in real time.',
    link: 'https://food-delivery-app-ten-coral.vercel.app/',
  },
  {
    id: 3,
    image: '/image/portfolio-image-3.png',
    title: 'Booky',
    description:
      'A library-management web app that lets users/admin browse collections, search titles, and track book availability.',
    link: 'https://library-application-chi.vercel.app/',
  },
  {
    id: 4,
    image: '/image/portfolio-image-4.png',
    title: 'Movie',
    description:
      'A movie-catalog web app built with React + TypeScript that allows users to browse, search, and view details of films.',
    link: 'https://movies-app-seven-drab.vercel.app/',
  },
  {
    id: 5,
    image: '/image/portfolio-image-5.png',
    title: 'Blog App',
    description:
      'A super-simple social media web app built with React + TypeScript, letting users post updates, follow others, and engage in a clean feed experience.',
    link: 'https://super-simple-social-media.vercel.app/',
  },
  {
    id: 6,
    image: '/image/portfolio-image-6.png',
    title: 'Chef Claude',
    description:
      'A stylish chef-portfolio web app showcasing recipes, cooking skills, and service offerings — built to highlight culinary expertise.',
    link: 'https://chef-claude-navy.vercel.app/',
  },
];

export default portfolioData;

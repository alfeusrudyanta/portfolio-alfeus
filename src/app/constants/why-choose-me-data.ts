type whyChooseMeData = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  benefit: string[];
};

const whyChooseMeData: whyChooseMeData[] = [
  {
    title: 'WORKING WITH ME',
    imgSrc: '/image/profile-picture.png',
    imgAlt: 'profile-picture',
    benefit: [
      'React Expert',
      'Precise Website Implementation',
      'TypeScript Proficiency',
      'Clean, Maintainable Code',
      'Responsive Website Development',
      'UI Design Proficiency (Figma)',
    ],
  },
  {
    title: 'ANOTHER TALENT',
    imgSrc: '/image/random-guy.png',
    imgAlt: 'random-guy-picture',
    benefit: [
      'Basic React Knowledge',
      'Inconsistent Design Translation',
      'Little to No TypeScript Knowledge',
      'Unstructured Code',
      'Inconsistent Responsiveness',
      'No Design Skills',
    ],
  },
];

export default whyChooseMeData;

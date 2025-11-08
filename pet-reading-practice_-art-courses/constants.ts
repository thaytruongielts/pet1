
import type { Person, Course } from './types';

export const PEOPLE: Person[] = [
  {
    id: 1,
    name: 'Rafa',
    description: 'Rafa wants to produce artwork to support his art college application. He’s written stories, which he’d like to publish, and wants to learn how to include drawings in them, without using a computer.'
  },
  {
    id: 2,
    name: 'Simona',
    description: 'Simona enjoys creating art on her computer, and wants to find ways to improve the posters she makes on it. She also wants to share what she’s done with other students on the course.'
  },
  {
    id: 3,
    name: 'Andrei',
    description: 'Andrei wants to try different painting techniques, and have trips to see the work of famous painters, to get ideas for his own pictures. He’d also like to try painting outdoors.'
  },
  {
    id: 4,
    name: 'Nicola',
    description: 'Nicola enjoys printing by hand. She wants to print the patterns she’s created onto different materials, for her mother to make into clothes, and also learn basic printing techniques to use at home.'
  },
  {
    id: 5,
    name: 'Karl',
    description: 'Karl enjoys taking photos of his family, and wants to use them as a basis for the art he produces. He’s like to go somewhere that also offers private lessons.'
  },
];

export const COURSES: Course[] = [
  {
    id: 'A',
    title: 'Get Artistic',
    description: 'Teachers here always have ideas to get you drawing, painting and printing – but you can use your own material, too. The studio-based course focuses on portraits – you’ll learn how to develop whatever you’ve brought, or use famous portraits, to create pictures of people. One-to-one sessions also available.'
  },
  {
    id: 'B',
    title: 'Art Attack!',
    description: 'Learn how to create pictures, perhaps based on your own writing, to put into a short book or poster, using simple techniques that don’t require technology. Discover, too, how to put a book together, with a professional-looking over designed and hand-printed by you. Perfect for anyone considering further studies in art.'
  },
  {
    id: 'C',
    title: 'Art and imagination',
    description: 'If you like designing clothes, you’ll enjoy learning to use special computer software here to create and print out designs for tops, shoes and hats that people would love to wear! You’ll go home with a folder of work, perfect to present when applying for a higher-level art course. Individual classes also available.'
  },
  {
    id: 'D',
    title: 'Create!',
    description: 'Draw and paint in different situations – in the studio or even in the park! Gallery visits are also included, and you’re taught how to base your work on studies of landscapes and portraits by well-known artists. Teachers also encourage you to experiment with various styles and methods.'
  },
  {
    id: 'E',
    title: 'More Art Now!',
    description: 'Improve how you paint people and places on this studio-based course. The teachers bring in work, ranging from photos to posters, to give you ideas. And use the studio website to show your work and exchange ideas with other students – useful for anyone wishing to study art at a higher level.'
  },
  {
    id: 'F',
    title: 'Art Workshop',
    description: 'Do some drawings, in the studio or outside, or bring along your own. The teachers will then help you to turn them into wonderful printed designs, using simple methods you can try yourself after the course. You’ll then transfer your designs onto cotton and silk, using special paints – perfect to use in sewing projects afterwards.'
  },
  {
    id: 'G',
    title: 'Do it yourself',
    description: 'Try making art to go with your stories here – working inside or outside! You’ll get ideas from books showing famous paintings and cartoons, and then create and print pictures of people to accompany your stories, using digital design techniques. There’s even one-to-one teaching if you’d prefer.'
  },
  {
    id: 'H',
    title: 'The Studio',
    description: 'Come and experiment with digital design. You’ll get great ideas through research, then using special software, create your pictures and add details on screen, whether it’s clothes, people, books or something to put on the wall. Upload your work on the studio website and get opinions from your classmates there – and comment on theirs!'
  },
];

export const CORRECT_ANSWERS: { [key: number]: string } = {
  1: 'B',
  2: 'H',
  3: 'D',
  4: 'F',
  5: 'A'
};

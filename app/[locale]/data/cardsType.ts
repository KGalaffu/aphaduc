type CardKey =
  | 'cards.card1.title'
  | 'cards.card1.description'
  | 'cards.card1.fullContent'
  | 'cards.card2.title'
  | 'cards.card2.description'
  | 'cards.card2.fullContent'
  | 'cards.card3.title'
  | 'cards.card3.description'
  | 'cards.card3.fullContent'
  | 'cards.card4.title'
  | 'cards.card4.description'
  | 'cards.card4.fullContent'
  | 'cards.card5.title'
  | 'cards.card5.description'
  | 'cards.card5.fullContent'
  | 'cards.card6.title'
  | 'cards.card6.description'
  | 'cards.card6.fullContent';

export type CardType = {
  id: number;
  titleKey: CardKey;
  descriptionKey: CardKey;
  fullContentKey?: CardKey;
  bgColor: string;
  imgSrc?: string;
};

const cards: CardType[] = [
  {
    id: 1,
    titleKey: 'cards.card1.title',
    descriptionKey: 'cards.card1.description',
    fullContentKey: 'cards.card1.fullContent',
    bgColor: 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300',
  },
  {
    id: 2,
    titleKey: 'cards.card2.title',
    descriptionKey: 'cards.card2.description',
    fullContentKey: 'cards.card2.fullContent',
    bgColor: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
  },
  {
    id: 3,
    titleKey: 'cards.card3.title',
    descriptionKey: 'cards.card3.description',
    fullContentKey: 'cards.card3.fullContent',
    bgColor: 'bg-gradient-to-br from-green-100 via-green-200 to-green-300',
  },
  {
    id: 4,
    titleKey: 'cards.card4.title',
    descriptionKey: 'cards.card4.description',
    fullContentKey: 'cards.card4.fullContent',
    bgColor: 'bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300',
  },
  {
    id: 5,
    titleKey: 'cards.card5.title',
    descriptionKey: 'cards.card5.description',
    fullContentKey: 'cards.card5.fullContent',
    bgColor: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300',
  },
  {
    id: 6,
    titleKey: 'cards.card6.title',
    descriptionKey: 'cards.card6.description',
    fullContentKey: 'cards.card6.fullContent',
    bgColor: 'bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300',
  },
];


export default cards;

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
  | 'cards.card4.fullContent';

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
    bgColor: 'bg-yellow-200',
  },
  {
    id: 2,
    titleKey: 'cards.card2.title',
    descriptionKey: 'cards.card2.description',
    fullContentKey: 'cards.card2.fullContent',
    bgColor: 'bg-yellow-300',
  },
  {
    id: 3,
    titleKey: 'cards.card3.title',
    descriptionKey: 'cards.card3.description',
    fullContentKey: 'cards.card3.fullContent',
    bgColor: 'bg-yellow-400',
  },
  {
    id: 4,
    titleKey: 'cards.card4.title',
    descriptionKey: 'cards.card4.description',
    fullContentKey: 'cards.card4.fullContent',
    bgColor: 'bg-yellow-500',
  },
];

export default cards;

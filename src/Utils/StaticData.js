export const markers = [
  {
    id: 1,
    latitude: 37.78825,
    longitude: -122.435,
  },
  {
    id: 2,
    latitude: 37.79,
    longitude: -122.4324,
  },
  {
    id: 3,
    latitude: 37.785,
    longitude: -122.43,
  },
  {
    id: 4,
    latitude: 37.793,
    longitude: -122.43,
  },
];
export const WhoCanSeeYourPost = [
  {
    id: 1,
    option: 'Anyone',
    value: 1,
    visibility: "anyone"
  },
  {
    id: 2,
    option: 'Only Friends',
    value: 2,
    visibility: "friends"
  },
  {
    id: 3,
    option: 'Only Me',
    value: 3,
    visibility: "me"
  },
];
export const ActiveNonActive = [
  {
    id: 1,
    option: 'Active',
    value: 1,
  },
  {
    id: 2,
    option: 'Do not disturb',
    value: 2,
  },
  {
    id: 3,
    option: 'Invisible',
    value: 3,
  },
];

export const Comments = [
  {
    id: 1,
    name: 'John Doe',
    time: '3 hrs ago',
    comment: 'You always give a good advice,what would you say to someone?',
    image: require('../assets/images/UserProfile.png'),
    isReply: true,
    replies: [
      {
        id: 1,
        replyId: 1,
        name: 'Julia Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
      {
        id: 2,
        replyId: 1,
        name: 'David Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: true,
      },

      {
        id: 3,
        replyId: 2,
        name: 'Elex  Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
      {
        id: 4,
        replyId: 2,
        name: 'David Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Elex ',
    time: '3 hrs ago',
    comment: 'You always give a good advice,what would you say to someone?',
    image: require('../assets/images/UserProfile.png'),
    isReply: true,
    replies: [
      {
        id: 1,
        replyId: 1,
        name: 'Julia Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
      {
        id: 2,
        replyId: 1,
        name: 'David Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: true,
      },

      {
        id: 3,
        replyId: 2,
        name: 'Elex  Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
      {
        id: 4,
        replyId: 2,
        name: 'David Doe',
        time: '3 hrs ago',
        comment: 'You always give a good advice,what would you say to someone?',
        image: require('../assets/images/UserProfile.png'),
        isReply: false,
      },
    ],
  },
];

export const SelectCategorys = [
  {
    id: 1,
    name: 'Golf Shirt',
  },
  {
    id: 2,
    name: 'Golf Bag',
  },
  {
    id: 3,
    name: 'Golf Sticks',
  },
  {
    id: 4,
    name: 'Foly Shirt',
  },
  {
    id: 5,
    name: 'Coly Shirt',
  },
];

export const Names = [
  {
    id: 1,
    name: 'Osama',
  },
  {
    id: 2,
    name: 'John Doe',
  },
  {
    id: 3,
    name: 'Akram Joe',
  },
  {
    id: 4,
    name: 'Iftikhar',
  },
  {
    id: 5,
    name: 'Affiyal',
  },
  {
    id: 6,
    name: 'Joliy',
  },
  {
    id: 7,
    name: 'Abraham',
  },
  {
    id: 8,
    name: 'Kali Doe',
  },
  {
    id: 9,
    name: 'Asaba Joe',
  },
];
export const CartItemsArray = [
  {
    id: 1,
    name: 'Gray Golf Cap',
  },
  {
    id: 2,
    name: 'Cool Golf Niki Leather Bag',
  },
  {
    id: 3,
    name: 'Golf Shirt',
  },
  {
    id: 4,
    name: 'Cool Golf Shirt',
  },
];

export const CartItemsArray2 = [
  {
    id: 1,
    name: 'Oxilenion CAp',
  },
  {
    id: 2,
    name: 'Leather Bag',
  },
  {
    id: 3,
    name: 'Golf Shirt',
  },
  {
    id: 4,
    name: 'Cool Shirt',
  },
  {
    id: 5,
    name: 'Monark shirt',
  },
  {
    id: 6,
    name: 'Tee Shirt',
  },
  {
    id: 7,
    name: 'Ludivizan shirt',
  },
  {
    id: 8,
    name: 'Wolf Shirt',
  },
];

export const HistoryArray = [
  {
    id: 1,
    name: 'Golf Club',
  },
  {
    id: 2,
    name: 'Golf Caps',
  },
  {
    id: 3,
    name: 'Balls',
  },
  {
    id: 4,
    name: 'Shoes',
  },
  {
    id: 5,
    name: 'Monark shirt',
  },
];

export const Terms =
  'A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app. Your terms and conditions document is the contract between you and your customer for your supply of goods or services, and which regulates your business relationship. The same document could be called many other names, from simply "business terms", to "terms of sale" or "T&C".';
export const p3 =
  'This marks the start of what we know now as a "Privacy Policy." While the name "Privacy Policy" refers to the legal agreement, the concept of privacy and protecting user data is closely related.';
export const p2 =
  'In 1968, Council of Europe did studies on the threat of the Internet expansion as they were concerned with the effects of technology on human rights. This lead to the development of policies that were to be developed to protect personal data.';
export const p1 =
  'A Privacy Policy is a legal statement that specifies what the business owner does with the personal data collected from users, along with how the data is processed and for what purposes.';
export const OurStory =
  ' Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

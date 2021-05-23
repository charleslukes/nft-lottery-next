export const nftList: nftListType = [
  {
    id: "a1",
    lotteryHeader: {
      name: "Whats Up",
      grade: 2,
      numberOfNfts: 8,
      currentLotteryNumber: 1,
    },
    description: "Description of the collection of artists",
    rules: "This is the rule of the artist",
    nfts: [
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
    ],
  },
  {
    id: "b1",
    lotteryHeader: {
      name: "Hey There",
      grade: 5,
      numberOfNfts: 8,
      currentLotteryNumber: 2,
    },
    description: "This is the description of the NFTs artists",
    rules: "This is the rule of the new artist",
    nfts: [
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
      {name: "NFT"},
    ],
  },
];

export const lotteryList: lotteryListType = [
  {id: "a1", name: "Lottery", type: "lottery"},
  {id: "b1", name: "Lottery", type: "lottery"},
];

type nftListType = Array<{
  id: string;
  lotteryHeader: lotteryHeaderType;
  description: string;
  rules: string;
  nfts: nftsType;
}>;

export type lotteryHeaderType = {
  name: string;
  grade: number;
  numberOfNfts: number;
  currentLotteryNumber: number;
};

export type nftsType = Array<{
  name: string;
}>;

export type lotteryListType = Array<{
  id: string;
  name: string;
  type: string;
}>;

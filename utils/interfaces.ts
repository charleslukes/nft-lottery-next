export interface IClickData {
  type?: string;
  id?: string;
}

export interface IBoxProps extends IClickData {
  name: string;
  handleClick: (x: IClickData) => void;
  number?: number;
}

export interface IDetailsProps {
  name: string;
  grade: number;
  numberOfNfts: number;
  currentLotteryNumber: number;
  handleModalClick: () => void;
}

import styled from "styled-components";
import { IDetailsProps } from "../utils/interfaces";

const DetailsContainer = styled.div`
  .detail-title {
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
  .view-rules {
    cursor: pointer;
  }
`;

export default function Details(props: IDetailsProps) {
  return (
    <DetailsContainer>
      <div className="detail-title">
        Lottery Number {props.currentLotteryNumber}
      </div>
      <ul>
        <ol>Artist: {props.name}</ol>
        <ol>Grade: {props.grade}</ol>
        <ol>Number: {props.numberOfNfts}</ol>
        <ol className="view-rules" onClick={props.handleModalClick}>
          View Rules
        </ol>
      </ul>
    </DetailsContainer>
  );
}

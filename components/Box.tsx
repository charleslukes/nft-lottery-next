import styled from "styled-components";
import { IBoxProps } from "../utils/interfaces";

const BoxContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  color: gray;
  box-shadow: 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 20px;
  cursor: pointer;
`;

export default function Box(props: IBoxProps) {
  return (
    <BoxContainer
      className="box"
      onClick={() => props.handleClick({ type: props.type, id: props.id })}
    >
      <div>
        {props.name} {props.number}
      </div>
    </BoxContainer>
  );
}

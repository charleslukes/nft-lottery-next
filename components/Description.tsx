import styled from "styled-components";
const DescriptionContainer = styled.div`
  height: 250px;
  border: 1px solid;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default function Description(desc: { content: string }) {
  return (
    <DescriptionContainer>
      <div>{desc.content}</div>
    </DescriptionContainer>
  );
}

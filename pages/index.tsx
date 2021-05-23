import styled from "styled-components";
import Box from "../components/Box";
import CustomHead from "../components/Head";
import {lotteryList, lotteryListType} from "../utils/mockdata";
import {IClickData} from "../utils/interfaces";
import {useRouter} from "next/router";
import {GetStaticProps} from "next";

const HomeContainer = styled.div`
  h3 {
    text-align: center;
  }
  .boxes {
    display: flex;
    justify-content: center;
    align-itemns: center;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const lotteries = lotteryList;
  return {
    props: {
      lotteries,
    },
  };
};

export default function Home(props: {lotteries: lotteryListType}) {
  const router = useRouter();

  const handleClick = (e: IClickData) => {
    router.push(`/${e.type}/${e.id}`);
  };

  return (
    <HomeContainer>
      <CustomHead title="Home" />
      <h3>Select A lottery</h3>
      <div className="boxes">
        {props.lotteries.map((data, index) => (
          <Box
            {...{
              ...data,
              number: index + 1,
              handleClick: handleClick,
            }}
            key={index + 1}
          />
        ))}
      </div>
    </HomeContainer>
  );
}

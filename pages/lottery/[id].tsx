import {useState} from "react";
import styled from "styled-components";
import Link from "next/link";

import Box from "../../components/Box";
import Details from "../../components/Details";
import Description from "../../components/Description";
import ViewRulesModal from "../../components/Modal";
import {IClickData} from "../../utils/interfaces";
import CustomHead from "../../components/Head";
import {GetServerSideProps} from "next";
import {lotteryHeaderType, nftList, nftsType} from "../../utils/mockdata";
import Modal from "react-modal";

// styles
const LotteryInfoContainer = styled.div`
  .box-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-top: 1px solid;
    margin-top: 20px;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // gets the id
  const id = context?.params?.id;
  let data;

  if (id) {
    // find the particular nftList with the id
    const getLotteryInfo = nftList.find((x) => x.id === id);
    data = {
      headers: getLotteryInfo?.lotteryHeader ?? {},
      description: getLotteryInfo?.description ?? "",
      rules: getLotteryInfo?.rules ?? "",
      nftList: getLotteryInfo?.nfts ?? [],
    };
  } else {
    data = {
      headers: {},
      description: "",
      rules: "",
      nftList: [],
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default function Lottery(props: {
  data: {
    headers: lotteryHeaderType;
    description: string;
    rules: string;
    nftList: nftsType;
  };
}) {
  // sets modal default to false
  const [modalIsOpen, setIsOpen] = useState(false);

  // appends the modal to the body
  Modal.setAppElement("body");

  // opens modal
  const openModal = () => {
    setIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // onclick handler
  const handleClick = (e: IClickData) => {
    console.log(e);
  };

  // triggers open modal
  const ModalClick = () => {
    openModal();
  };

  return (
    <LotteryInfoContainer>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <CustomHead title="Lottery" />
      <Details
        {...{
          ...props.data.headers,
          handleModalClick: ModalClick,
        }}
      />

      <Description {...{content: props.data.description}} />
      <div className="box-container">
        {props.data.nftList.map((data, index) => (
          <Box
            {...{
              name: data.name,
              number: index + 1,
              handleClick: handleClick,
            }}
            key={index + 1}
          />
        ))}
      </div>
      <ViewRulesModal
        modalIsOpen={modalIsOpen}
        content={props.data.rules}
        closeModal={closeModal}
      />
    </LotteryInfoContainer>
  );
}

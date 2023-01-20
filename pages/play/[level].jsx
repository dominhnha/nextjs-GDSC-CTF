import React from "react";
import { useRouter } from "next/router";
import { GamePlayLayout } from "../../components/GamePlayLayout";

const PlayWithLevel = () => {
  const router = useRouter();
  const level = router?.query?.level;

  return <GamePlayLayout level={level}></GamePlayLayout>;
};
export default PlayWithLevel;

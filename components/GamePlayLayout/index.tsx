import React from "react";

interface GamePlayLayoutProps {
  level: number;
  children: any;
}

export const GamePlayLayout = (props: GamePlayLayoutProps) => {
  return (
    <div>
      <h1>Nhiệm vụ {props?.level}</h1>
      <div>
        {props?.children}
      </div>
    </div>
  );
};

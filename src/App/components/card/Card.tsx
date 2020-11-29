import React from "react";
import { Card } from "baseui/card";

type Props = {
  imageUrl?: string;
};

const CardComp: React.FC<Props> = (props) => (
  <Card
    overrides={{
      Root: {
        style: {
          backgroundColor: "transparent",
          border : 'none',
        },
      },
      HeaderImage : {
        style : {
          height: "230px",
          width: "180px",
        }
      }
    }}
    headerImage={props.imageUrl}
  >
    {props.children}
  </Card>
);

export default CardComp;

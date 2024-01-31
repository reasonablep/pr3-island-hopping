import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { PromotionsContainer, MessageText } from "../../styles/promotions";
import { useState, useEffect, useRef } from "react";

const messages = [ 
  "First time buyers get 10% off their first purchase!",
  "Buy 2 islands of equal value and get a 3rd for free!",
  "If you buy an island in the next 24 hours, we'll throw in a free yacht!"
];

export default function Promotions() {
  const containerRef = useRef();
  const[messageIndex, setMessageIndex] = useState(0)
  const [show, setShow] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex(i => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);

    }, 4000)

    return () => {
      clearInterval(intervalId);
    }
}, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide 
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout= {{
          enter:500,
          exit:100,
      }}>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
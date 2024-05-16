/* eslint-disable @next/next/no-img-element */
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

function CardeBox() {
  return (
    <div className=" max-w-xs">
      <Box>
        <Card size="2">
          <Inset side="top" pb="current">
            <Image
              src={require("./log.png")}
              alt="Bold typography"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Typography</Strong> is the art and technique of arranging
            type to make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
      </Box>
    </div>
  );
}

export default CardeBox;

"use client";
import { useState } from "react";
import { Box, Center, Flex, Image, Text } from "@mantine/core";
import NextImage from "next/image";
import placeholder from "../../assets/placeholder.svg";
import { DragLeft } from "@/components/Drag/DragLeft";
import { DragRight } from "@/components/Drag/DragRight";

export default function Page() {
  const [open, setOpen] = useState<"left" | "right" | null>(null)



  return (
    <Box style={{ position: "relative", overflowX: "hidden" }} h={600}>
      <DragLeft isOpen={open === "left"} setOpen={setOpen} />
      <Center h="100%">
        <Flex gap="md" align="center">
          <Image
            src={placeholder}
            alt=""
            bg="gray.1"
            w={250}
            h={250}
            fit="contain"
            component={NextImage}
          />
          <Box maw={550}>
            <Text fw="bold" fs="italic" size="xl">
              Une petite présentation s'impose,
            </Text>
            <Text size="xl">
              Alors voilà : Cécile LECERF, Développeuse web depuis maintenant 4
              ans.
            </Text>
          </Box>
        </Flex>
      </Center>
      <DragRight isOpen={open === "right"} setOpen={setOpen} />
    </Box>
  );
}

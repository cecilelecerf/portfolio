"use client";
import { useState } from "react";
import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import NextImage from "next/image";
import placeholder from "../../assets/placeholder.svg";
import { DragLeft } from "@/components/Drag/DragLeft";
import { DragRight } from "@/components/Drag/DragRight";
import { useMediaQuery } from "@mantine/hooks";
import { AccordionCV } from "@/components/Accordion/Accordion";

export default function Page() {
  const [open, setOpen] = useState<"left" | "right" | null>(null)
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

  return (
    <Box style={{ position: "relative", overflowX: "hidden" }} h={!isSmallScreen ? 600 : "auto"}>
      {!isSmallScreen && (
        <DragLeft isOpen={open === "left"} setOpen={setOpen} />
      )}
      <Stack align="center" h="100%" justify="center" gap="xl">
        <Flex gap="md" align="center" maw={700} direction={isSmallScreen ? "column" : "row"} mx="xl">
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
        {isSmallScreen && (
          <AccordionCV />
        )}
      </Stack>
      {!isSmallScreen && (
        <DragRight isOpen={open === "right"} setOpen={setOpen} />
      )}
    </Box>
  );
}

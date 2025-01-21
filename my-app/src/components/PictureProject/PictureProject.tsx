"use client";
import { Image, Modal, Paper } from "@mantine/core"
import { useDisclosure, useHover } from "@mantine/hooks";
import { StaticImageData } from "next/image"
import NextImage from "next/image";


export const PictureProject = ({ picture }: { picture: StaticImageData }) => {

    const [opened, { open, close }] = useDisclosure(false);
    const { hovered, ref } = useHover();
    return (
        <>
            <Modal opened={opened} onClose={close} centered size="75%" >
                <Image src={picture} w="100%" alt="" component={NextImage} fit="contain" h="fit-content" />
            </Modal>

            <Paper ref={ref} h={300} w="100%" shadow="lg" style={{
                overflow: "hidden",
                transform: hovered ? `translateY(-20px)` : "none",
                transition: "transform 0.3s ease",
            }} onClick={open}>
                <Image src={picture} w="100%" h="100%" alt="" component={NextImage} />
            </Paper>
        </>
    )
}
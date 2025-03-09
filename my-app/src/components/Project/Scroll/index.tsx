"use client";
import { Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Scroll } from "./Scroll";

export const LayoutScroll = () => {
    const { width } = useViewportSize();

    return (
        <Stack gap="xl" w={width} display={{ base: "none", lg: "flex" }} style={{ overflowX: 'hidden' }} pos="absolute" top={90} left={-100}>
            <Scroll />
            <Scroll inverted />
        </Stack>
    )
}
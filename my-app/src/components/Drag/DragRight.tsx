import { useState, useRef, Dispatch, SetStateAction } from "react";
import { Paper, Flex, Stack, Text, Center, Image, Tabs, TabsList, TabsTab, TabsPanel } from "@mantine/core";
import { allOutils } from "@/data/outils";
import NextImage from "next/image";


export const DragRight = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<"left" | "right" | null>> }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [start, setStart] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStart(e.clientX)
        document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
    };

    const handleMouseUp = (e: MouseEvent) => {
        setIsDragging(false);
        if (start !== null) {
            if (e.clientX < (3 * (window.innerWidth / 4)) && start > window.innerWidth - 300) {
                setOpen("right")
            } else if (start > window.innerWidth - 500) {
                setOpen(null)
            }
        }
        setStart(null)
        document.body.style.userSelect = "";
        containerRef.current = null;
    };

    if (typeof window !== "undefined") {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }

    return (
        <Stack
            align="start"
            ref={containerRef}
            pos="absolute"
            top={0}
            right={0}
            style={{
                transform: `translateX(${isOpen ? 0 : 900}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease",
                height: "100%",
                cursor: isDragging ? "grabbing" : "grab",
                zIndex: 10,
            }}
            onMouseDown={handleMouseDown}
        >
            <Text onClick={() => setOpen((is) => is === "right" ? null : "right")}>
                {isOpen ? "Mes compétences -> " : "<- Mes compétences"}
            </Text>
            <Paper
                shadow="xl"
                p="xl"
                pr={200}
                w={1100}
                h={550}
                bg={isDragging ? "gray.1" : "gray.0"}
                style={{
                    borderRadius: "10px 0px 0px 10px",
                    overflowY: "scroll",
                }}
            >
                <Tabs defaultValue="Frameworks" orientation="vertical">
                    <TabsList>
                        {allOutils.map((outil, i) =>
                            <TabsTab value={outil.label} key={i}>{outil.label}</TabsTab>
                        )}
                    </TabsList>
                    {allOutils.map((outil, key) =>
                        <TabsPanel value={outil.label} key={key}>
                            <Flex key={key} wrap="wrap">
                                {Object.values(outil.infos).map((info, step) =>
                                    <Paper mx="md" key={step} mb="md" p="sm">
                                        <Center>
                                            {info.logo && (
                                                <Image src={info.logo} w={75} h={75} alt={`logo ${info.name}`} fit="contain" component={NextImage} />
                                            )}
                                        </Center>
                                        <Text ta="center">{info.name}</Text>
                                    </Paper>
                                )}
                            </Flex>
                        </TabsPanel>
                    )}
                </Tabs>


            </Paper>
            <Text onClick={() => setOpen((is) => is === "right" ? null : "right")} fs="italic" c="gray.6">{isOpen ? "Glisser pour fermer" : "Glisser pour ouvrir"}</Text>
        </Stack >
    );
};

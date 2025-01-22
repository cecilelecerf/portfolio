import { Image } from "@mantine/core";
import NextImage from 'next/image';
import pictureMe from "../../assets/Picture_Cecile.png"
import classes from "./CV.module.css"
export const PictureMe = () => (
    <Image
        src={pictureMe}
        alt=""
        w={300}
        h={350}
        fit="contain"
        component={NextImage}
        className={classes.picture}
    />
)
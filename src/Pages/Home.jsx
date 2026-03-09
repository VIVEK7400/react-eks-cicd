import React from "react";
import { Navbar } from "../Components/navbar";
import Autoplay, { ImageSlider } from "./imageslider";
import { Infocard } from "./infocard";
import { CardDeck } from "./carddeck";
import { Parallax } from "./parallax";
import { Footer } from "../Components/footer";
import Navbar1 from "../Components/navbarnew";


export default function Home(){
    
    return(
        <>
            <Navbar/>
            {/* <Autoplay/> */}
            <ImageSlider/>
            <Infocard/>
            <CardDeck/>
            <Parallax/>
            <Footer/>
        </>
    )
}
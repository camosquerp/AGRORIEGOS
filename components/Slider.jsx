import React from "react";
import { useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
    width: 100%;
    height: 100vh;
    display: flex;
    transition: 1s;
    position: relative;
    overflow: hidden;
    opacity: 0;
    &.loaded {
        opacity: 1;
    }
`;
const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  widht: 30px;
  height: 30px;
  display: flex; 
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5
  z.index: 2;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #0fa104;
  padding: 8px;
  margin: 0 5px;
`;


export default function Carousel(props: any) {
    const images = ['s1.png','s2.png','s3.png','s4.png','s5.png'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectNewImage = (index: number, images: string[], next = true) => {
        setLoaded(false);
        setTimeout(() => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        }, 500);
    };

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () =>{
        selectNewImage(selectedIndex, images);
    }
    return (
       <>
         <CarouselImg 
            src={require(`../assets/img/${selectedImage}`).default} 
            alt="riegos" 
            className ={loaded ? "loaded" : ""}
            onLoad={() => setLoaded(true)}
            />
        <CarouselButtonContainer>
         <CarouselButton onClick={previous}>{"<"}</CarouselButton>
         <CarouselButton onClick={next}>{">"}</CarouselButton>
        </CarouselButtonContainer>
     </>
    ); 
}
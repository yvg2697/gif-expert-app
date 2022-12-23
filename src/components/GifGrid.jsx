import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

      const [images, setImages] = useState([]);

      useEffect(() => {
            getGifs(); 
      },[])
      

      const getGifs = async () => {
            const url =
                  "https://api.giphy.com/v1/gifs/search?q=messi&limit=10&api_key=Pi5CdkR5jUsRS7db5sr4JVHY14vgUZXM";   
            const resp = await fetch(url);
            const { data } = await resp.json();

            const gifs = data.map(({ id, title, images }) => {
                  return {
                        id: id,
                        title: title,
                        images: images?.original.url,
                  }
            });
            setImages(gifs);
      }
    
      return (
        <div>
          <h3> {category} </h3>
          <ol>
            {images.map((img) => (
                  <GifGridItem key={img.id} {...img}>
                  </GifGridItem>
            ))}
          </ol>
        </div>
      );
}

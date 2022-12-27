import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import axios from "axios";
// const baseURL = "https://jsonplaceholder.typicode.com/posts/";

// export function GifGrid() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div className="card-grid">
//       <ol>
//         {post.map((post) => {
//           <GifGridItem></GifGridItem>;
//         })}
//       </ol>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }

export const GifGrid = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Pi5CdkR5jUsRS7db5sr4JVHY14vgUZXM`;

  const [images, setImages] = useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setImages(response.data);
    });
  }, []);
  console.log(images.data);

  return (
    <div className="card-grid">
      <h3> {category} </h3>
      <ol>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </ol>
    </div>
  );
};

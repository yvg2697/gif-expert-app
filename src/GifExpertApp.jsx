import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Messi']);

  return (
    <div>
      {/* <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr> */}
      <GifGrid />
      {/* <ol>
        {categories.map((category) => (
          <GifGrid />
        ))}
      </ol> */}
    </div>
  );
};
//  <GifGrid key={category} category={category} />;
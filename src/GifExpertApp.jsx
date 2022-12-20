import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Messi', 'CR7', 'Ney']);

    const handleNew = () => {
        // setCategories(['ESOO', ...categories]);
        setCategories(category => ['ESOO', ...category]);
    }

    return (
        <>
            
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleNew}> Add New</button>     

        <ol>
            {categories.map(category => {
                return <li key={category}> {category} </li>;   
            })}
        </ol> 

        </>
    );
}

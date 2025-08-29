import React from 'react'
import ColorCoded from './colorCoded';
//CONTEST QUESTION
// You are working on a colorful box application for an e-commerce platform where users can quickly identify different product categories through color-coded boxes. Your task is to create a React component called ColorBox that will accept two props: text, which indicates the category name (like "Electronics," "Clothing," or "Home Decor"), and color, which specifies the background color for that category's box. You initially implement this in your App.js file while rendering three instances of the ColorBox component with distinct text and colors, like so:


// However, since you want to expand this feature to display many more categories dynamically as new products are added frequently, it's inefficient to hardcode each instance of <ColorBox />. Your objective is now to refactor your code. Create an array containing objects representing multiple categories with their corresponding colors.
// Use JavaScript’s .map() function within your App component to generate all ColorBox components dynamically from that array instead of writing them one by one. Once implemented correctly, ensure it still displays the ColorBoxes with appropriate colors and texts based on data in the array.


const OuterColor = () => {
    const data = [
        {category:"Electronics", color:"green"},
        {category:"Clothing", color:"red"},
        {category:"Home Decor", color:"blue"}
    ]

    return (
    <div> 
        {
            data.map(
                (ele)=> <ColorCoded category={ele.category} color={ele.color} />

                
            )
        }

         </div>
  )
}

export default OuterColor
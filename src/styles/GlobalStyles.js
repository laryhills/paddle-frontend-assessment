import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    //creating css variables

    :root {
        --primary: #ba55d3; /* purple; */
        --secondary: #4f5665; /* grey */
        --lightblack: #0b132a; /* light black*/
        --lightGrey: #eee;
        --medGrey: #353535;
        
    }

    body {
        font-family: Rubik;
        font-style: normal;
        overflow-x: hidden;
    }

    h2 {
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        color: var(--lightblack);
    }

    h3 {
        font-weight: 500;
        font-size: 35px;
        line-height: 50px;
        color: var(--lightblack);
    }

    h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;

        color: var(--lightblack);
    }   

    
    ${"" /* Caontact Slider */}
    .slick-track {
        margin-left: -200px;
    }
    .slick-slide > div {
        margin: 0 10px;
    }
    .slick-list {
        margin: 0 -10px;
    }

`;

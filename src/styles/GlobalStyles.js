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

    @media screen and (max-width: 768px) {
        h3 {
            width: auto;
            height: auto;
        }
    }

    h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;

        color: var(--lightblack);
    }   

    @media screen and (max-width: 768px) {
        h4 {
            font-size: 12px;
        }
    }
    
    ${"" /* Caontact Slider */}
    .slick-track {
        margin-left: -200px;
    }
    @media screen and (max-width: 768px) {
        .slick-track {
            margin-left: 0px;
        }
    }
    .slick-slide > div {
        margin: 0 10px;
    }
    .slick-list {
        margin: 0 -10px;
    }

`;

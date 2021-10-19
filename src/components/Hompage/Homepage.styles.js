import styled from "styled-components";
import rectangle from "../../images/rectangle.svg";
import tick from "../../images/good_tick.svg";

export const Wrapper = styled.div`
  font-style: normal;
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    padding-top: 25px;
  }
  @media screen and (max-width: 640px) {
    padding-top: 10px;
  }
`;
export const Button = styled.a`
  width: 53px;
  height: 19px;
  left: 1057px;
  top: 58.62px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: 4px solid var(--primary);
  box-sizing: border-box;
  border-radius: 4px;
  color: var(--primary);
  :hover {
    color: #ffffff;
    background-color: var(--primary);
  }
`;
export const Section1Image = styled.img`
  width: 762px;
  height: 508px;
  left: 672px;
  top: 113px;
`;

export const Section1Heading1 = styled.div`
  width: 555px;
  height: 140px;
  left: 150px;
  top: 206.77px;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  color: var(--lightblack);
  z-index: 1;
  text-shadow: 0px 2px 4px var(--primary);

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
    max-width: 350px;
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Section1Text = styled.div`
  width: auto;
  height: auto;
  left: 150px;
  top: 366.77px;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;

  color: var(--secondary);
  z-index: 1;
`;

export const Section1Button = styled.div`
  height: 60px;
  background: var(--primary);
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  :hover {
    color: #ba55ba;
    background-color: #eee;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Section2Text = styled.span`
  width: 53px;
  height: 30px;
  left: 332.5px;
  top: 767.05px;

  font-weight: lighter;
  font-size: 20px;
  line-height: 30px;

  color: var(--secondary);
`;

export const Section3Image = styled.img`
  width: 737px;
  height: 296px;
  left: 74px;
  top: 1051px;

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;

export const SectionUL = styled.ul`
  list-style: none;
`;

export const Section4Li = styled.li`
  background: url(${rectangle}) left center no-repeat;
  padding-left: 40px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: var(--secondary);
`;

export const Section5Li = styled.li`
  background: url(${tick}) left center no-repeat;
  padding-left: 40px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: var(--secondary);
`;

export const Section4Button = styled.div`
  width: 177.88px;
  height: 45px;
  color: #ba55ba;
  background: #ffff;
  border: 3px solid var(--primary);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  :hover {
    background: var(--primary);
    color: #ffffff;
  }
`;

export const Section4Wrapper = styled.div`
  min-width: 18.75rem;
`;

export const FooterMark = styled.div`
  width: 114px;
  height: 30px;
  left: 159px;
  top: 4412.18px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #afb5c0;
`;

export const Section7Wrapper = styled.div`
  position: relative;
  top: 80px;
  z-index: 99;
`;

import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px;
`;

export const CardStyled = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  width: 380px;
  height: 460px;
  border-radius: 20px;
`;

export const Logo = styled.img`
  padding-top: 20px;
  padding-left: 20px;
`;

export const Chat = styled.img`
  margin-top: -16px;
  padding-left: 36px;
  margin-bottom: 14px;
`;

export const AvatarBox = styled.div`
  position: relative;
  width: 380px;
  line-height: 0;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const List = styled.ul`
list-style: none;
margin: 0;
margin-top: 55px;
padding-left: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
`

export const Text = styled.p`
margin: 0;
font-family: Montserrat, sans-serif;
text-transform: uppercase;
font-size: 20px;
line-height: calc(24 / 20);
font-weight: 500;
color: #EBD8FF;
`

export const Button = styled.button`
font-family: Montserrat, sans-serif;
text-transform: uppercase;
display: block;
padding: 14px 56px;
margin: 26px auto;
border-radius: 10px;
border: transparent;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
background-color: #EBD8FF;
`

export const ActiveButton = styled.button`
font-family: Montserrat, sans-serif;
text-transform: uppercase;
display: block;
padding: 14px 39px;
margin: 26px auto;
border-radius: 10px;
border: transparent;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
background-color: #5CD3A8;
`
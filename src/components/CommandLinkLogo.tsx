import styled from "styled-components";
import commandLinkLogo from "../assets/images/commandlink-logo.png";

const Image = styled.img`
  margin: 10px 0 40px 0;
`;

export const CommandLinkLogo = () => {
  return <Image src={commandLinkLogo} alt="CommandLink" />;
};

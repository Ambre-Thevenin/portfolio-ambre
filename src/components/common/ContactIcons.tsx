import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import MailIcon from '../icons/MailIcon';
import { MainText } from '../design/MainText';

export const ContactIcons = ({color, iconSize}: { color: string; iconSize: number | string}) => {
    return (
        <IconsContainer>
            <Link to="https://www.linkedin.com/in/ambrethevenin/" target="_blank" rel="noreferrer">
          <LinkedinIcon color={color} width={iconSize} />
        </Link>
        <Link to="https://github.com/Ambre-Thevenin" target="_blank" rel="noreferrer">
          <GithubIcon color={color} width={iconSize} />
        </Link>
        <Link to="mailto:ambre.thvn@gmail.com?subject=Ambre, Lets work together" target="_blank" rel="noreferrer">
          <MailIcon color={color} width={iconSize} />
        </Link>
        <Link to="https://drive.google.com/file/d/1nJxGZ6hPo8M6nVpJ7hTXjrNWXJjOo299/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none'}}>
          <CVLink size={iconSize} color={color}>CV</CVLink>
        </Link>
        </IconsContainer>
    )
}

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
  margin-right: ${({ theme }) => theme.spacings.md}px;
`;

const CVLink = styled(MainText)<{ color: string; size: number | string}>`
  font-size: ${({ size, theme }) => typeof size === 'string' ? size : `${theme.spacings.xxxl}px`};
  color: ${({color, theme}) => color ?? theme.colors.textPrimaryColor}
`;
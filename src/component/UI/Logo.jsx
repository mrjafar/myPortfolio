import styled from 'styled-components';

const LogoWrapper = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 3.5rem;
  font-weight: bold;
  color: #00ffd1;
  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }

  span {
    color: #fff;
  }

   @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const Logo = () => {
  return <LogoWrapper>&lt;<span>JK</span> /&gt;</LogoWrapper>;
};

export default Logo;
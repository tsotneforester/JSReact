import { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NewHorizonsSVG from '../assets/new-horizons.svg?react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { title: 'Home', route: '/' },
    { title: 'Add Emploee', route: '/new-emploee' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <NavbarContainer>
        <NewHorizonsIcon />

        {/* 🔰 Desktop Links */}
        <LinksContainer>
          {routes.map((route, i) => (
            <LinkItem key={i} to={route.route}>
              {route.title}
            </LinkItem>
          ))}
        </LinksContainer>
        {/* 🔰 Mobile Menu Button */}
        <MenuButton onClick={() => setIsOpen(true)}>☰</MenuButton>
        {/* 🔰 Fullscreen Modal for Mobile */}
        {isOpen && (
          <Modal>
            <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
            {routes.map((route, i) => (
              <LinkItem
                onClick={() => setIsOpen(false)}
                key={i}
                to={route.route}
              >
                {route.title}
              </LinkItem>
            ))}
          </Modal>
        )}
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;

// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 30px;
`;

const NewHorizonsIcon = styled(NewHorizonsSVG)`
  font-size: 1.5rem;
  font-weight: bold;
  width: 180px;
`;

const LinksContainer = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    gap: 1.5rem;
  }
`;

const LinkItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  line-height: 28px;

  &.active {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 900;
  }
`;

const MenuButton = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  z-index: 1000;
  overflow-y: scroll;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

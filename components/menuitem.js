import Link from 'next/link'
import { motion } from "framer-motion";
import styled from 'styled-components'

const NavListItem = styled(motion.li)`
  margin-bottom: 1.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const NavListItemLink = styled.a`
  font-size: 3.2rem;
  color: var(--secondaryColor);
`;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const name = ["About", "Portfolio", "Concepts", "Contact"];
const link = ["/about", "/portfolio/amorphous", "/concepts", "/contact"];


export const MenuItem = ({hoverEnter, hoverLeave, handleNav, i }) => {

  return (
    <NavListItem
      onClick={handleNav}
      variants={variants}
    >
      <Link href={`${link[i]}`}>
        <NavListItemLink
          onMouseEnter={hoverEnter}
          onMouseLeave={hoverLeave}
        >
          {name[i]}
        </NavListItemLink>
      </Link>
    </NavListItem>
  );
};


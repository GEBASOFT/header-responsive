import Image from "next/image"
import { Container, Content, Logo, NavWeb, NavItem, Menu, NavMobile, BackDrop } from "./styles"

import { useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

import menuIcon from './icons/menu.svg';
import closeIcon from './icons/close.svg';

export function Header({ logo }){
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const router = useRouter()

  function handleMenu() {
    setIsOpenMenu(state => !state)
  }
  
  function renderNavItems(){
    return (
      <>
        <Link href="/sobre" passHref>
          <NavItem selected={router.route === '/sobre'}>
            sobre
          </NavItem>
        </Link>
        <Link href="/servicos" passHref>
          <NavItem selected={router.route === '/servicos'}>
            serviços
          </NavItem>
        </Link>
        <Link href="/projetos" passHref>
          <NavItem selected={router.route === '/projetos'}>
            nossos projetos
          </NavItem>
        </Link>
        <Link href="/contato" passHref>
          <NavItem selected={router.route === '/contato'}>
            contato
          </NavItem>
        </Link>
      </>
    )
  }

  return (
    <Container>
      <Content>
        { logo &&
        <Link href="/" passHref>
          <Logo>
            <Image src={logo} alt="Logo da empresa" width={340} height={70} />
          </Logo>
        </Link>}
        <NavWeb>
          {renderNavItems()}
        </NavWeb>
        <Menu onClick={handleMenu}>
          <Image src={menuIcon} alt="Menu" width={30} height={30} />
        </Menu>
        <NavMobile show={isOpenMenu}>
          <Image style={{ cursor: 'pointer' }} src={closeIcon} alt="Close" width={24} height={24} onClick={handleMenu} />
          {renderNavItems()}
          <Logo style={{ marginTop: 'auto' }}>
            <Image src="/Logo.svg" alt="Logo da Moddev" width={340} height={70} />
          </Logo>
        </NavMobile>
        <BackDrop show={isOpenMenu} onClick={handleMenu}/>
      </Content>
    </Container>
  )
}
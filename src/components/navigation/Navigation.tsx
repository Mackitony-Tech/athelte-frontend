import React from "react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
} from "carbon-components-react";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="KAC Platform Name">
              <SkipToContent />
              <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
              <HeaderName href="#" prefix="KAC">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="KAC [Platform]">
                <HeaderMenuItem isCurrentPage href="/">
                  Home
                </HeaderMenuItem>
                <HeaderMenuItem href="/athletes">Athletes</HeaderMenuItem>
                <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
                <HeaderMenuItem href="/contacts">Contacts</HeaderMenuItem>
                <HeaderMenuItem href="/admin">Admin</HeaderMenuItem>
              </HeaderNavigation>
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
                <SideNavItems>
                  <HeaderSideNavItems>
                    <HeaderMenuItem href="/">Home</HeaderMenuItem>
                    <HeaderMenuItem href="/athletes">Athletes</HeaderMenuItem>
                    <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
                    <HeaderMenuItem href="/contacts">Contacts</HeaderMenuItem>
                    <HeaderMenuItem href="admin">Admin</HeaderMenuItem>
                  </HeaderSideNavItems>
                </SideNavItems>
              </SideNav>
            </Header>
          )}
        />
      </div>
    </>
  );
}

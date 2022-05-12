import React from "react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
} from "carbon-components-react";
export default function Navigation() {
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

import React from "react";
import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react";
export default function Navigation() {
  return (
    <>
      <div className="header-container">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="nav-bar">
              <SkipToContent />
              <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
              <HeaderName href="/" prefix="K A">
                [Training Camp]
              </HeaderName>
              <HeaderNavigation aria-label="nav">
                <HeaderMenuItem isCurrentPage href="/">
                  Home
                </HeaderMenuItem>
                <HeaderMenuItem href="/athletes">Athletes</HeaderMenuItem>
                <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
                <HeaderMenuItem href="/contacts">Contacts</HeaderMenuItem>
                <HeaderMenuItem href="/admin">Admin Login</HeaderMenuItem>
              </HeaderNavigation>
            </Header>
          )}
        />
      </div>
    </>
  );
}

import React from "react";
import Button from "react-bootstrap/esm/Button";

export default function Navigation() {
  return (
    <>
      <div>
        <div>Kamwosor Athletics camp</div>
        <Button variant="light" href="/">
          Home
        </Button>
        <Button variant="light" href="/blog">
          Blog
        </Button>
        <Button variant="light" href="/admin">
          Admin
        </Button>
      </div>
    </>
  );
}

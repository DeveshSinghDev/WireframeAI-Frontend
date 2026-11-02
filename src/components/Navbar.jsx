import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-nav">
      <nav className="shell site-nav__inner" aria-label="Primary">
        <Link className="site-nav__brand" to="/">WireframeAI</Link>

        <div className="site-nav__links">
          <Link className="site-nav__link" to="/#product">Product</Link>
          <Link className="site-nav__link" to="/#how">How it works</Link>
          <Link className="site-nav__link" to="/#pricing">Pricing</Link>
          <Link className="site-nav__link" to="/components">Components</Link>
          <Link className="site-nav__link" to="/Blog">Blog</Link>
          <Link className="site-nav__link" to="/about">About</Link>
        </div>

        <div className="site-nav__actions">
          <Link className="site-nav__login" to="/login">Login</Link>
          <Link className="site-nav__cta" to="/signup">Sign up</Link>
          <button
            ref={toggleRef}
            type="button"
            className="site-nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div className="site-nav__menu" id={menuId}>
            <Link to="/#product" onClick={() => setOpen(false)}>Product</Link>
            <Link to="/#how" onClick={() => setOpen(false)}>How it works</Link>
            <Link to="/#pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link to="/components" onClick={() => setOpen(false)}>Components</Link>
            <Link to="/Blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setOpen(false)}>Sign up</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";
//



const Header = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "products", title: "products" },
    { id: 2, href: "contact", title: "contact" },
    { id: 5, href: "faqs", title: "faqs" },
    { id: 6, href: "products-details", title: "products-details" },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper  container-1660 clearfix */}
      <div className="header-upper">
        <div className="container">
          <div className="header-inner py-5 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/flogo.gif"
                    width={140}
                    alt="Safra Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="assets/images/logos/flogo.gif"
                  menus={menus}
                  onePage={onePage}
                />
              </nav>
              {/* Main Menu End*/}
            </div>

          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};


const Nav = ({
  logo = "assets/images/logos/logo.png",
  dark,
  onePage,
  menus,
}) => {

  //

  return (
    <Fragment>
      <div className="d-none d-lg-flex desktop-menu">
        <div className="navbar-collapse clearfix">
          {onePage ? (
            <ul className="navigation onepage clearfix">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navigation clearfix">
              <li className="dropdown">
                <Link href="/">Home</Link>
              </li>
              <li className="dropdown">
                <Link href="about">About us</Link>
              </li>
              <li className="dropdown">
                <Link href="products">Products</Link>
                <ul>
                  <li>
                    <Link href="aliphatic-products">Aliphatics</Link>
                  </li>
                  <li>
                    <Link href="aromatic-products">Aromatics</Link>
                  </li>

                  <li>
                    <Link href="chemplex-products">Chemplex</Link>
                  </li>

                  <li>
                    <Link href="blended-products">Blended</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  &nbsp;<span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a>Solutions</a>
                <ul>
                  <li>
                    <Link href="paint">Paint</Link>
                  </li>
                  <li>
                    <Link href="adhesives">Adhesives</Link>
                  </li>
                  <li>
                    <Link href="insecticides">Insecticides and Pesticides</Link>
                  </li>
                  <li>
                    <Link href="ink">Ink</Link>
                  </li>
                  <li>
                    <Link href="Water-Treatment">Water Treatment</Link>
                  </li>
                  <li>
                    <Link href="tannery">Tannery</Link>
                  </li>
                  <li>
                    <Link href="resins">Resins</Link>
                  </li>
                  <li>
                    <Link href="Industrial-Cleaning">Industrial Cleaning and Maintenance</Link>
                  </li>

                  <li>
                    <Link href="household-products">Household Products</Link>
                  </li>
                  <li>
                    <Link href="fuel-additives">Fuel Additives</Link>
                  </li>
                  <li>
                    <Link href="oil-fields">Oil Fields Chemicals</Link>
                  </li>
                  <li>
                    <Link href="bitumen">Bitumen Based Products</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  &nbsp;<span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <Link href="scm-marketing">SCM & Marketing</Link>
              </li>
              <li className="dropdown">
                <Link href="careers">Careers</Link>
              </li>
              <li className="dropdown">
                <Link href="contact">Contact us</Link>
              </li>

            </ul>
          )}
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="d-block d-lg-none mobile-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo"
                width={140}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <MobileMenu onePage={onePage} menus={menus} />
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
};

const MobileMenu = ({ sidebar, onePage, menus }) => {
  //
  //
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <Fragment>
      {onePage ? (
        <ul
          className={`${sidebar ? "sidebar-menu" : "navigation"
            } onepage clearfix`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${sidebar ? "sidebar-menu" : "navigation"} clearfix`}>
          <li className="dropdown">
            <a href="/">Home</a>
            <ul style={activeLi("home")}>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="/about">About us</Link>
          </li>
          <li className="dropdown">
            <Link href="products">Products</Link>
            <ul style={activeLi("Services")}>
              <li>
                <Link href="aliphatic-products">Aliphatics</Link>
              </li>
              <li>
                <Link href="aromatic-products">Aromatics</Link>
              </li>
              <li>
                <Link href="chemplex-products">Chemplex</Link>
              </li>
              <li>
                <Link href="blended-products">Blended</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Services")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>

          <li className="dropdown">
            <a>Solutions</a>
            <ul style={activeLi("Solutions")}>
              <li>
                <Link href="paint">Paints</Link>
              </li>
              <li>
                <Link href="adhesives">Adhesives</Link>
              </li>
              <li>
                <Link href="insecticides">Insecticides and Pesticides</Link>
              </li>
              <li>
                <Link href="ink">Ink</Link>
              </li>
              <li>
                <Link href="Water-Treatment">Water Treatment</Link>
              </li>
              <li>
                <Link href="tannery ">Tannery</Link>
              </li>
              <li>
                <Link href="resins">Resins</Link>
              </li>
              <li>
                <Link href="Industrial-Cleaning">Industrial Cleaning & Maintenance</Link>
              </li>

              <li>
                <Link href="household-products">Household Product</Link>
              </li>
              <li>
                <Link href="fuel-additives">Fuel Additives</Link>
              </li>
              <li>
                <Link href="oil-fields">Oil Field</Link>
              </li>
              <li>
                <Link href="bitumen">Bitumen Based Products</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("Solutions")}>
              <span className="far fa-angle-down" />
            </div>
          </li>

          <li className="dropdown">
            <Link href="scm-marketing">SCM & Marketing</Link>
          </li>
          <li className="dropdown">
            <Link href="careers">Careers</Link>
          </li>
          <li className="dropdown">
            <Link href="contact">Contact us</Link>
          </li>

        </ul>
      )}
    </Fragment>

  );
};
export default Header;

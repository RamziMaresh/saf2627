import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const date = new Date()
const currentYear = date.getFullYear()


const Footer = () => {
  return (
    <div className="main-footer footer-one rel z-1 mt-300">
      <div className="container">
        <div className="row justify-content-between ">
          <div className="col-xl-2 col-lg-4 col-sm-6 mt-50 ">
            <div
              className="footer-widget widget-about"
            >
              <div className="logo-outer text-center">
                <div className="logo mb-20">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/flogo.gif"
                      width={200}
                      alt="Safra Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="logo-outer text-center">
                <div className="logo">
                    <img
                    className="logo-outer-2"
                      src="/assets/images/logos/saudi_made_logo_en.jpg"
                      width={120}
                      alt="Safra Logo"
                      title="Logo"
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 mt-50">
            <div className="row">

              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"
                >
                  <h6 className="footer-title">Head Office</h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:info@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 12 604 8777
                    </li>
                    <li>
                      <i className="fal fa-fax" />
                      (+966) 12 643 1214
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"

                >
                  <h6 className="footer-title">Chemplex </h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:info@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 12 604 8833
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-contact"

                >
                  <h6 className="footer-title">Plant (Yanbu)</h6>
                  <ul>
                    <li>
                      <i className="fal fa-envelope" />
                      <a href="mailto:info@safraco.com">info@safraco.com</a>
                    </li>
                    <li>
                      <i className="fal fa-phone" />
                      (+966) 14 396 8022
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="footer-bottom mt-30 py-15">
          <div className="row justify-content-center text-center">
            <span className="terms-policy">
              © {date.getFullYear()} All rights reserved | Safra Company Limited
            </span>
            <span className="terms-policy">
              <Link href="/terms" className="terms-policy">Terms of Use |</Link> <Link href="/terms" className="terms-policy">Privacy Policy</Link> | v.2.1
            </span>

            <div className="scrool-top">
            <ScrollToTop smooth c color="black" viewBox="0 0 256 256" className="scrool-top"/>
            </div>



            <div className="social-style-one justify-content-center text-center ">
                <a target="_blank" href="https://www.linkedin.com/company/safra/mycompany/">
                  <i className="fab fa-linkedin" />
                </a>
                <a target="_blank" href="https://www.facebook.com/p/Safra-Co-Ltd-100063547352403/?locale=ar_AR">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="mailto:info@safraco.com" >
                  <i className="far fa-envelope" />
                </a>

              </div> 
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import { Nav, Tab } from "react-bootstrap";

const About = () => {
  return (
    <>
      <title>About Us | Safra Company Limited</title>
      <meta name="description" content="The production capacity of SAFRA refinery is continuously expanding to meet increasing demand for products while ..." />

      <SafraLayout>
        <PageBanner pageName={"About Us"} />

        {/* About Area Start */}
        <section className="artificial-intelligence-area rel pt-60 rpt-60 pb-40 rpb-10 z-2">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-11">
                <div
                  className="section-title text-center mb-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4>At a Glance</h4>
                  <div className="pb-20">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-1070">
            <div className="row pb-10 rpb-20 gap-100 align-items-center">

              <div className="ceo-text">
                <div
                  className="ai-content mb-40 rmb-0"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <p>
                    The production capacity of SAFRA refinery is continuously expanding to meet
                    increasing demand for products while keeping pace with the latest technological
                    developments and simultaneously meeting stringent international standards for
                    manufacturing solvents.<br />

                    The plant is equipped with necessary technological flexibility and pool of technical
                    experts to produce innovative tailor made products conforming to the customer
                    specifications. It is very well equipped with high capacity solvent filling facility in drums,
                    tankers, containers and ISO tank. It also has a pipeline linked to the sea-terminal
                    facilitating excellent freight economics to our esteemed customers owing to the efficient
                    port facilities for shipment of products in large vessels.
                    Our environmentally friendly solvents comply with international quality and safety
                    standards. Our fully integrated production, sales & distribution processes ensure on time deliveries to the regional and international partners
                    for further down-streaming quality products.
                    SAFRA has an ambitious drive and aspiration to contribute to Saudi Vision 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}


        {/* Images Banner 01 start*/}
        <section className="solutions-area pb-20 rpb-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-sm-10">
                <div
                  className="fancy-box"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/fancy-box/fancy-box1.svg"
                      alt="safra-about-cards"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-10">
                <div
                  className="fancy-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/fancy-box/fancy-box2.svg"
                      alt="safra-about-cards"
                    />
                  </div>
                </div>
              </div>


              <div className="col-xl-4 col-md-6 col-sm-10">
                <div
                  className="fancy-box"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/fancy-box/fancy-box3.svg"
                      alt="safra-about-cards"
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </section>
        {/* Images Banner 01 Ends*/}



        {/* CEO M Area Start */}
        <section className="tooltip-area-two bgs-cover">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-9 col-lg-11 rmb-10 text-center"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h4 className="pb-0">
                    CEO Message
                  </h4>
                  <div className="">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                  </div>
                </div>
                {/* CEO Photo & Credentials */}
                <div className="flex-shrink-0 text-center">
                  <div className="mb-4">
                    <img
                      src="assets/images/md/ceo.svg"
                      alt="CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3>Khalid I. Zagzoog</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                </div>
                {/* Message Content */}
                <div className="ceo-message">
                  <p>
                    People and culture are the biggest assets in Safra, which we continuously cherish and develop to accomplish our objective of highest levels of customer satisfaction.
                    Through the history of times, we have experienced that the success of us and that of you as our partner, lies in the applied transparency, continuous product
                    development and efficient process implementation, on which our business approach rests.
                    We are committed to meet variety of customer requirements in the area of industrial chemicals & solvents, consumer products and related services
                  </p>
                  <p className="text-sm leading-relaxed">
                    To meet the growing needs of industrial & decorative paints, home care products, agricultural pesticides and other end-user products, we are dedicated to expand
                    our production capabilities, which will further support these industrial sectors with continuous and reliable supply of their raw material requirements. Without any compromise on the environmental health,
                    we apply highest care to the quality of products that we produce, together with meeting our business commitments with accuracy and on-time
                  </p>
                  <p>
                    We take pride in acknowledging our contribution to the Saudi economy and society by producing & supplying industrial raw material for growth of local industry
                    and by training and developing Saudi youth in various fields of business & management, respectively.
                    We at Safra, believe in empowering and rewarding our intellectual capital and providing a motivating work environment within the guidelines of Islamic ethics and culture.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* CEO M Area End */}




        {/* Contact Area Start */}
        <section
          className="cta-area bgs-cover py-130 rpy-100"
          style={{ backgroundImage: "url(assets/images/backgrounds/contact_banner.svg)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-8">
                <div
                  className="cta-content text-white rmb-35"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-40">
                    <span className="subtitle d-block mb-10">
                      Safra Team
                    </span>
                    <h3>We Are Ready To Serve You <br />and Answer Your Inquiries!</h3>
                  </div>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn">
                      Contact Us <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
                  data-aos="zoom-in-right"
                  data-aos-duration={1000}
                >
                  <a
                    href="mailto:info@safraco.com"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact Area End */}


        {/* Corporate Area Start */}
        <section className="tab-area-two pt-40 rpt-40"
          style={{ backgroundImage: "url(assets/images/backgrounds/tolltip.svg)" }}>
          <div className="container">
            <Tab.Container defaultActiveKey={"tabTwo1"}>
              <div
                className="flex-shrink-0 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >

                <div className="section-title">
                  <h4 className="pb-0">
                    Corporate Purpose
                  </h4>
                  <div className="">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                  </div>
                </div>

              </div>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="tabTwo1">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-xl-9 col-lg-9">
                      <div
                        className="ceo-text"
                        data-aos="fade-left"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                      >
                        <p className="vision-teaxt-header text-center">
                          Maximizing stakeholder benefits through world-class leadership in the hydrocarbon sector, fostered sustainability, captured value, R&D and multinational culture
                        </p>

                        <ul className="icon-list style-two my-35">
                          <li>
                            <i className="fal fa-check" /> Maximizing Stakeholders’ Benefits:
                          </li>
                          <p>
                            These will be achieved by exceeding their minimum expectations, both internal stakeholders: (employees, shareholders & investors) and external stakeholders: (customers & suppliers).
                            This incredible challenge will be accomplished by beating cost of capital and growing the business.
                          </p>
                          <li className="">
                            <i className="fal fa-check" /> World Class Leadership in the Hydrocarbon Field:
                          </li>
                          <p>
                            SAFRA will set a clear future state where all employees are engaged in a shared goal, having defined continuous improvement framework and exceptional process standards.
                            The company will work collaboratively both within its sector and its supply chain. It will benchmark itself against other world leaders.
                          </p>
                          <li>
                            <i className="fal fa-check" /> Fostered Sustainability, Captured Value, R&D and Multinational Culture:
                          </li>
                          <p>
                            Sustainability for SAFRA goes far beyond just climate protection as this objective will responsibly be achieved by pursuing three dimensional
                            levels; environmental, economic and social. SAFRA’s sustainable growth will provide the basis for more investments and value capturing
                            for stakeholders in both short and long term. The company will totally be committed to achieve sustainable growth
                            via its employees who will achieve exceptional standards of performance, responsible behavior, innovation, continuous learning, and knowledge dissemination. <br />
                            Employees and other stakeholders will have huge opportunity to be part of a successful enterprise.
                            Moreover, SAFRA will emphasize on the importance of how its employees work with each other and how they behave.
                            Employees empowerment will increasingly be emphasized for exceptional performance that will make the employees perform
                            the best of their capabilities and in turn help SAFRA’s Corporate Purpose turns into reality. Entrepreneurial drives, teamwork
                            orientation, outstanding ethical behaviors, learning organization, and practical creativity are crucial to SAFRA’s success.
                            Focus on customers is also essential so that the company constantly keep them at the center of its attention.
                            The company will competitively anticipate and meet customers’ changing needs, aspirations and expectations from hydrocarbon products.
                            It will serve its customers through its R&D, wealth of knowledge, operational experience, multinational culture and
                            respond competitively to their needs through its diversified portfolio, quality hydrocarbon and petrochemical products.
                          </p>
                          <p>
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="tabTwo2">
                  <div className="row align-items-center justify-content-center">

                    <div className="col-xl-9 col-lg-9">
                      <div className="ceo-text">

                        <p className="vision-teaxt-header">
                          SAFRA is devoted to diversify its value-added hydrocarbon quality products to
                          its customers worldwide, capitalizing on its R&D and transnational culture.
                        </p>
                        <p>
                          SAFRA is to be recognized as a world-class producer of hydrocarbon products and
                          services supplied worldwide. Its purpose is achieved through an organization and
                          working environment able to meet and exceed its international B2B & B2C customers’ needs. The company provides its stakeholders with long-term growth and profitability
                          by establishing and maintaining leadership position in the market.<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section>
        {/* Corporate Area End */}

        {/* Leadership Area Start */}
        <section
          className="tooltip-area-two bgs-cover rel pt-40 rpt-10">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-9 col-lg-11 rmb-10 text-center"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-20">
                  <h4 className="pb-0">
                    Leadership
                  </h4>
                  <div className="pb-20">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                  </div>
                  <h5 className="pb-10">
                    Our board of directors drive our company, guide our strategy and lead our people
                  </h5>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </section>
        {/* leadership Area End */}


        {/* Values Area Start */}
        <section className="feature-box-area pt-40 rpt-60 pb-40 rpb-20 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-11">
                <div
                  className="section-title text-center mb-40"
                >
                  <h4>
                    Corporate <span>Values</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-xl-4 col-md-6"
              >
                <div className="iconic-box style-seven">
                  <div className="content">
                    <h5>Compliance to Business Principles</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
              >
                <div className="iconic-box style-seven">
                  <div className="content">
                    <h5>Customers Orientation</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-md-6"
              >
                <div className="iconic-box style-seven">
                  <div className="content">
                    <h5>Transparency</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
              >
                <div className="iconic-box style-seven">
                  <div className="content">
                    <h5>Integrity & Honesty</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
              >
                <div className="iconic-box style-seven">
                  <div className="content">
                    <h5>Corporate Social Responsibility </h5>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* Values Area End */}


        {/* Products Area Start */}
        <section
          className="tooltip-area-two bgs-cover rel pt-60 rpt-60"
        >
          <div className="container">
            <div className="row justify-content-center">

              <div
                className="col-xl-9 col-lg-11 rmb-10 text-center"
                data-aos-duration={1500}
                data-aos-offset={50}
              >

                <div className="section-title pb-10">
                  <h4 className="">
                    Quality Consistency
                  </h4>
                  <div className="pb-20">
                    <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                  </div>
                  <h5 className="pb-0">
                    Quality consistency is vital for us as we know there are no shortcuts when it comes to providing customers with consistent and reliable, quality products
                  </h5>
                  <div >
                    <div className="">
                      <img
                        className="rounded-0"
                        src="assets/images/about/sustainability-1.svg"
                        alt="sustainability-1"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* Products Area End */}
      </SafraLayout>

    </>

  );
};
export default About;

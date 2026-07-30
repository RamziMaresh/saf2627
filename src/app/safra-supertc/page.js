"use client";

import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Safra Super TC (LACQUER THINNER)"} />
            {/* Product Details Start */}
            <section className="product-details pb-100 pt-100 rpt-100">
                <div className="container">
                    <div className="row gap-110">
                        <div className="col-lg-6">{/**7 */}
                            <div
                                className="product-details-images rmb-55"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <Tab.Container defaultActiveKey={"preview1"}>
                                    <Tab.Content className="tab-content preview-images">
                                        <Tab.Pane
                                            className="tab-pane fade preview-item"
                                            eventKey="preview1"
                                        >
                                            <img
                                                src="assets/images/products/preview51.svg"
                                                alt="Perview"
                                            />
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tab-pane fade preview-item"
                                            eventKey="preview2"
                                        >
                                            <img
                                                src="assets/images/products/preview52.svg"
                                                alt="Perview"
                                            />
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tab-pane fade preview-item"
                                            eventKey="preview3"
                                        >
                                            <img
                                                src="assets/images/products/preview53.svg"
                                                alt="Perview"
                                            />
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <Nav as={"div"} className="nav thumb-images rmb-20">
                                        <Nav.Link
                                            as={"a"}
                                            eventKey="preview1"
                                            className="thumb-item"
                                        >
                                            <img
                                                src="assets/images/products/thumb51.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                        <Nav.Link
                                            as={"a"}
                                            eventKey="preview2"
                                            className="thumb-item"
                                        >
                                            <img
                                                src="assets/images/products/thumb52.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                        <Nav.Link
                                            as={"a"}
                                            eventKey="preview3"
                                            className="thumb-item"
                                        >
                                            <img
                                                src="assets/images/products/thumb53.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div
                                className="product-details-content"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <div className="section-title flex ">
                                    <h3>Safra Super TC </h3>
                                </div>

                                <ul className="list mt-20">
                                    <li>General-purpose paint and lacquer thinner diluent for almost all types of lacquers applied by different methods.</li>
                                    <li>Composed of high-quality oxygenated and hydrocarbon solvents.</li>
                                    <li>Quickly reduce the viscosity of the lacquer to the required point.</li>
                                    <li>The applied layer of the paint doesn't contain any paint defects.</li>
                                </ul>

                                <ul className="category-tags pt-5 rpt-20">
                                    <div className="pb-0">
                                        <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                                    </div>
                                    <li>
                                        <h6>SAFETY DATA SHEET & TECHNICAL DATA SHEET</h6>
                                    </li>
                                    <span><i className="fa fa-file-pdf pdf-icon"></i>
                                        <Link href="/assets/images/pdfs/Spp/Msds/Safra SuperTC msds.pdf" target="_blank"> MSDS </Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                        <Link href="/assets/images/pdfs/Spp/tds/Safra SuperTC TDS.pdf" target="_blank"> TDS </Link>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/**
          <Tab.Container defaultActiveKey={"details"}>
            <Nav
              as={"ul"}
              className="nav nav advanced-tab style-two product-info-tab mt-90 mb-40"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav.Item as={"li"}>
                <Nav.Link eventKey="details">
                  Descrptions <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as={"li"}>
                <Nav.Link eventKey="information">
                  Additional Information's <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content pb-30"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Tab.Pane className="tab-pane fade" eventKey="details">
                <p>
                  The production capacity of SAFRA refinery is continuously expanding to meet increasing demand for products while keeping
                  pace with the latest technological developments and simultaneously meeting stringent international standards for manufacturing solvents.
                </p>
                <p>
                  The plant is equipped with necessary technological flexibility and pool of technical experts to produce innovative tailor
                  made products conforming to the customer specifications. It is very well equipped with high capacity solvent filling facility
                  in drums, tankers, containers and ISO tank. It also has a pipeline linked to the sea-terminal facilitating excellent freight economics
                  to our esteemed customers owing to the efficient port facilities for shipment of products in large vessels. Our environmentally friendly solvents
                  comply with international quality and safety standards. Our fully integrated production, sales & distribution processes ensure on time deliveries
                  to the regional and international partners for further down-streaming quality products. SAFRA has an ambitious drive and aspiration to contribute
                  to Saudi Vision 2030.

                </p>
              </Tab.Pane>

              <Tab.Pane className="tab-pane fade" eventKey="information">
                <h5>Additional information</h5>
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
                <ul className="list mt-20">
                  <li>200 L</li>
                  <li>4.5 L </li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
           */}
                </div>
            </section>
            {/* Product Details End */}

        </SafraLayout>
    );
};
export default page;

"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {

    const certifications = [
        { src: "/assets/images/icons/saudi-made.svg", alt: "Saudi Made", label: "Saudi Made", subLabel: "صناعة سعودية" },
        { src: "/assets/images/icons/iso-9001.svg", alt: "ISO 9001", label: "ISO 9001", subLabel: "ISO 9001:2015" },
        { src: "/assets/images/icons/safra-quality.svg", alt: "Safra Quality", label: "Safra Quality", subLabel: "Industrial" },
    ];


    return (
        <SafraLayout>
            <PageBanner pageName={"Safra SHINE (WOOD VARNISH)"} />
            {/* Product Details Start */}
            <section className="product-details pb-60 pt-60 rpt-60">
                <div className="container">
                    <div className="row gap-110">
                        <div className="col-lg-5">{/**7 */}
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
                                                src="assets/images/products/preview71.svg"
                                                alt="Perview"
                                            />
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tab-pane fade preview-item"
                                            eventKey="preview2"
                                        >
                                            <img
                                                src="assets/images/products/preview72.svg"
                                                alt="Perview"
                                            />
                                        </Tab.Pane>
                                        <Tab.Pane
                                            className="tab-pane fade preview-item"
                                            eventKey="preview3"
                                        >
                                            <img
                                                src="assets/images/products/preview73.svg"
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
                                                src="assets/images/products/thumb71.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                        <Nav.Link
                                            as={"a"}
                                            eventKey="preview2"
                                            className="thumb-item"
                                        >
                                            <img
                                                src="assets/images/products/thumb72.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                        <Nav.Link
                                            as={"a"}
                                            eventKey="preview3"
                                            className="thumb-item"
                                        >
                                            <img
                                                src="assets/images/products/thumb73.svg"
                                                alt="Thumb"
                                            />
                                        </Nav.Link>
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="product-details-content"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <div className="section-title flex ">
                                    <h3>Safra SHINE (WOOD VARNISH) </h3>
                                </div>

                                <ul className="list mt-20">
                                    <li>Transparent as well as available in different colors.</li>
                                    <li>Gives Surfaces distinguished shining look.</li>
                                    <li>Controls water vapor diffusion.</li>
                                    <li>Prevents mold growth.</li>
                                    <li>Weather resistant.</li>
                                    <li>Contains no lead in any form.</li>
                                </ul>

                                <div className="cert-row-container">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="cert-badge-card">
                                            <div className="cert-img-wrapper">
                                                <a href="/certificates">
                                                    <img
                                                        src={cert.src}
                                                        alt={cert.alt}
                                                        width={70}
                                                        height={70}
                                                        priority={index === 0}
                                                    />
                                                </a>
                                            </div>
                                            {/* 
                      <span className="cert-title">{cert.label}</span>
                      <span className="cert-subtitle">{cert.subLabel}</span>
                      */}
                                        </div>
                                    ))}
                                </div>

                                <ul className="category-tags pt-5 rpt-20">
                                    <div className="pb-0">
                                        <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                                    </div>
                                    <li>
                                        <h6>SAFETY DATA SHEET & TECHNICAL DATA SHEET</h6>
                                    </li>
                                    <span><i className="fa fa-file-pdf pdf-icon"></i>
                                        <Link href="/assets/images/pdfs/Spp/Msds/Safra Shine.pdf" target="_blank"> MSDS </Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                        <Link href="/assets/images/pdfs/Spp/tds/SAFRA SHINE TDs.pdf" target="_blank"> TDS </Link>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* Product Details End */}

        </SafraLayout>
    );
};
export default page;

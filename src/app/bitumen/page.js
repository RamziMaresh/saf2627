import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const paint = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Bitumen Based Products"} />
            <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h4>Bitumen Based Products Solutions</h4>
                                <div
                                    className="item"
                                    data-aos="fade-left"
                                    data-aos-duration={1500}
                                    data-aos-offset={50}
                                >
                                    <div className="tag-coulds">
                                        <Link href="/">Home Page <i class="fa fa-angle-right"></i> </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="pb-40">
                                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="blog-details-content pt-10  pb-40">
                                <div className="blog-details-content ">

                                    <h6 className="pt-20">
                                        <div>Safranine (Solvent Naphtha C9)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Nine.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aromatic/msds/Safranine-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                                    </a>
                                    <p>
                                        Safranine isused in various applications such as industrial solvents and cleaning fluids, as
                                        an oil painting medium, as the sole ingredient in the home cleaning fluid energine, as
                                        an ingredient in shoe polish, as an ingredient in lighter fluids for wick type lightersand
                                        as an adulterant to petrol, as an excellent carrier of agriculture and as an additive and
                                        solvent to
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </SafraLayout>

    );
};
export default paint;

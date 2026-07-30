import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const paint = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Oil Fields Chemicals"} />

            <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h4>Oil Fields Chemicals Solutions</h4>
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
                                        <div>Safrasol D80 (Dearomatized Kerosene)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span className="text-red"><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D80.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D80-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                                    </a>
                                    <p>
                                        SafraSol D80 dilutes and dissolves different chemicals and solvents. It has higher flash
                                        point and therefore less contribution properties than normal kerosene. The product is
                                        applied in: Car de-waxing, household applications (insecticides, car care, polishes and
                                        waxes) , industrial cleaning,lighting aids and fuels, metal working, lubricants, pesticides,
                                        PVC formulation and drilling base oil, because of its low water pollution characteristics.
                                    </p>
                                    <h6 className="pt-20">
                                        <div>Safratol (Xylene)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Xylene.pdf" target="_blank" > SPECS</Link> /
                                            <Link href="/assets/images/pdfs/aromatic/msds/Safra-Xylene-MSDS.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"><i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                                    </a>
                                    <p>
                                        Safraxyl is a solvent that has slow evaporation rate. It is used in paints, alkyd resin, inks,
                                        oil field chemicals, agricultural chemicals, industrial cleaning, maintenance solvents,
                                        leather tanneries, rubber and leather industries. It is also used a cleaning agent for
                                        steel, as a carrier of pesticide, and a thinner for paint and varnishes
                                    </p>

                                    <h6 className="pt-20">
                                        <div>Safranine (Solvent Naphtha C9)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Nine.pdf" target="_blank" > SPECS</Link> /
                                            <Link href="/assets/images/pdfs/aromatic/msds/Safranine-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"><i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                                    </a>
                                    <p>
                                        Safranine isused in various applications such as industrial solvents and cleaning fluids, as
                                        an oil painting medium, as the sole ingredient in the home cleaning fluid energine, as
                                        an ingredient in shoe polish, as an ingredient in lighter fluids for wick type lightersand
                                        as an adulterant to petrol, as an excellent carrier of agriculture and as an additive and
                                        solvent to
                                    </p>
                                    <h6 className="pt-20">
                                        <div>Safraplus (Solvent Naphtha Plus)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Plus.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aromatic/msds/Safranine-Plus-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                                    </a>
                                    <p>
                                        Safraplus is the best solvent for oil field chemicals industry. Its interesting specification
                                        limits allow multi-pronged application capacity.
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

import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const paint = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Fuel Additives"} />

            <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h4>Fuel Additives Solutions</h4>
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
                                        <div>Safratol (Toluene)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Toluene.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aromatic/msds/Safratol-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                                    </a>
                                    <p>
                                        Safratol is widely used as an industrial feed stock and as a solvent. It dissolves paints,
                                        many chemical reactants, rubber, printing ink, adhesives (glues), lacquers, leather
                                        tannin and disinfectants.It is also used as a fullerene indicator and raw material for
                                        toluene di-isocyanate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </SafraLayout >

    );
};
export default paint;

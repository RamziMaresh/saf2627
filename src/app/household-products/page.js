import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const paint = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Household Products"} />

            <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h4>Household Products Solutions</h4>
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
                                    <h6 className="pt-20 ">Safranorm</h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Norm.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aliphatic/msds/Safra-norm-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                                    </a>
                                    <p>
                                        SafraNorm is an excellent refined product than kerosene which has good solvency
                                        power and good impregration for household, industrial cleaning and architectural
                                        coatings.
                                    </p>

                                    <h6 className="pt-20">
                                        <div>Safrasol D40 (Dearomatized White Spirit)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D40.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D40-Msds.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                                    </a>
                                    <p>
                                        SafraSol D40 is environmentally preferred solvent for households, hospitals and offices.
                                        It is readily available for dry cleaning and is the replacement of perchlorethylene. It is
                                        also used in industries for cleaning and formulation with different types of plastics due
                                        to its compatibility. It can be mixed as well with low odor paints, thinners and lacquer
                                        thinners.
                                    </p>

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
                                        <div>Safra Shine (Wood Varnish)</div>
                                    </h6>
                                    <a>
                                        <i className="fa fa-file-pdf pdf-icon"></i>
                                        <span><Link href="/assets/images/pdfs/Spp/Specs/Safra Shine.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                                            <Link href="/assets/images/pdfs/Spp/Msds/Safra Shine.pdf" target="_blank"> MSDS </Link></span>
                                        <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                                    </a>
                                    <ul className="icon-list mt-20 mb-35">
                                        <li>
                                            <i className="fal fa-check" />  Transparent as well as available in different colors.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Gives Surfaces distinguished shining look.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Controls water vapor diffusion.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" />  Prevents mold growth.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Weather resistant.
                                        </li>
                                        <li>
                                            <i className="fal fa-check" /> Contains no lead in any form
                                        </li>
                                    </ul>

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

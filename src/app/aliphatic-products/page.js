import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Aliphatics"} />

      <section className="project-grid-area pt-100 rpt-100 pb-85 rpb-55">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-xl-9 col-lg-11">
              <div className="tag-share pt-0 pb-0">
                <h4>ALIPHATIC SOLVENTS</h4>
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                </div>
              </div>
              <div className="pb-40">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <p>
                Aliphatic group targets important industries including paints, adhesives, pesticides,
                aerosol, oilfield, as well as normal white spirit, light white spirit,
                heavy white spirit, de-aeomatized white spirit and de-aromatized kerosene.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="blog-details-content pt-0  pb-40">
                <div className="blog-details-content ">
                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SafraNorm</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Norm.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-norm-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SafraNorm is an excellent refined product than kerosene which has good solvency
                      power and good impregration for household, industrial cleaning and architectural
                      coatings.
                    </p>
                  </div>
                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SafraSol D40 (Dearomatized White Spirit)</div>
                    </h6>
                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D40.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D40-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SafraSol D40 is environmentally preferred solvent for households, hospitals and offices.
                      It is readily available for dry cleaning and is the replacement of perchlorethylene. It is
                      also used in industries for cleaning and formulation with different types of plastics due
                      to its compatibility. It can be mixed as well with low odor paints, thinners and lacquer
                      thinners.
                    </p>
                  </div>
                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SafraSol D80  (Dearomatized kerosene)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span className="text-red"><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D80.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D80-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SafraSol D80 dilutes and dissolves different chemicals and solvents. It has higher flash
                      point and therefore less contribution properties than normal kerosene. The product is
                      applied in: Car de-waxing, household applications (insecticides, car care, polishes and
                      waxes) , industrial cleaning,lighting aids and fuels, metal working, lubricants, pesticides,
                      PVC formulation and drilling base oil, because of its low water pollution characteristics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
    </SafraLayout>
  );
};
export default page;

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
          {/*}
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <p>
                Aliphatic group targets important industries including paints, adhesives, pesticides,
                aerosol, oilfield, as well as normal white spirit, light white spirit,
                heavy white spirit, de-aeomatized white spirit and de-aromatized kerosene.
              </p>
            </div>
          </div>
*/}
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
                      <div>SAFRANORM™ (White Spirit 20%)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Norm.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-norm-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      Is avilible with 20% mild odor contents. SafraNorm is excellent refined product than kerosene which has good solvency
                      power and good impregration for household, industrial cleaning and architectural coatings.
                    </p>
                    <p>
                      Applications: architectural coatings, household products, adhesives, cleaning and maintenance chemicals, etc ...
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SAFRANORM 15™(White Spirit 15%)</div>
                    </h6>
                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Norm.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-norm-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      Is available with 15% mild odor contents which renders optimum solution viscosities for long-oil alkyd resins & varnishes for household
                      (car care, polishing and waxes), industrial cleaning (metal and wood degreasing, wood protection) and architectural coatings (solvent based paints).
                    </p>
                    <p>
                      Applications: paints, varnishes, household products, adhesives, cleaning and maintenance chemicals, etc...
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SAFRALITE™ (Light White Spirit)</div>
                    </h6>
                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SAFRALITE™ (Light White Spirit): Is used in manufacturing inks, dry cleaning, leather tanneries,
                      cleaning and maintenance chemicals and rubber solvents. Safralite™ has excellent properties of diluting with different miscellaneous solvents, resins and adhesives.
                    </p>
                    <p>
                      Applications: inks, dry cleaning, leather tannins, cleaning and maintenance chemicals, rubber solvent, etc...
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SAFRASOL 80™ (Heavy White Spirit)</div>
                    </h6>
                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SAFRASOL 80™ (Heavy White Spirit): Can be blended with bitumen based products. Due to its special boiling range and high flash point,
                      bitumen based products show excellent film formation when applied in SafraSol 80™ as a medium and in asphalt cutter solvents.
                      It is also a useful diluent thanks to its special cutting nature along with its special evaporation rate.
                    </p>
                    <p>
                      Applications: bitumen based products, asphalt cutter solvents, etc ...
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SAFRASOL D40™ (De-Aromatized White Spirit)</div>
                    </h6>
                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D40.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D40-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SAFRASOL D40™ (De-Aromatized White Spirit): Is available with mild odor contents. It is an environmentally-preferred solvent for households, hospitals and offices. SafraSol D40™ is readily available for dry cleaning and is the replacement of perchloroethylene. It is also used in industries
                      for cleaning and formulation with different types of plastics due to its compatibility. It can be mixed as well with low odor paints, thinners and lacquer thinners.
                    </p>

                    <p>
                      Applications: paints, charcoal lighters, dry cleaning, construction chemicals, odorless thinners, industrial degreasers, cleaning and maintenance chemicals, etc...
                    </p>
                  </div>
                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>SAFRASOL D80™ (De-Aromatized Kerosene)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span className="text-red"><Link href="/assets/images/pdfs/aliphatic/specs/Safra Sol D80.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aliphatic/msds/Safra-D80-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link><hr />
                    </div>
                    <p>
                      SAFRASOL D80™ (De-Aromatized Kerosene): Dilutes and dissolves different chemicals and solvents. It has higher flash point and therefore less
                      combustion properties than normal kerosene. SafraSol D80™ is applied in: Car de-waxing, household applications
                      (insecticides, car care, polishes and waxes), industrial cleaning, lighting aids and fuels, metal working, lubricants,
                      pesticides, PVC formulation and drilling base oil, because of its low water pollution characteristics.
                    </p>
                    <p>
                      Applications: insecticides, agricultural pesticides, paints, thinners, charcoal lighters, oil drilling solvents, insecticides aerosols,
                      metal working, de-waxing materials, etc ...
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

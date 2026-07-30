import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";



const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Aromatic"} />


      <section className="project-grid-area pt-100 rpt-100 pb-85 rpb-55">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="tag-share pt-0 pb-0">
                <h4>AROMATIC SOLVENTS</h4>
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
              <p className="">
                Including Xylene, Toluene, C9 and C9+ other hydrocarbon solvents.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">

              <div className="blog-details-content pt-0 pb-40">
                <div className="blog-details-content ">

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >

                    <h6 className="pt-20">
                      <div>Safraxyl (Xylene)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Xylene.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aromatic/msds/Safra-Xylene-MSDS.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                    </div>
                    <p>
                      Safraxyl is a solvent that has slow evaporation rate. It is used in paints, alkyd resin, inks, oil field chemicals,
                      agricultural chemicals, industrial cleaning, maintenance solvents,
                      leather tanneries, rubber and leather industries. It is also used a cleaning agent for
                      steel, as a carrier of pesticide, and a thinner for paint and varnishes.
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>Safratol (Toluene)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Toluene.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aromatic/msds/Safratol-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                    </div>
                    <p>
                      Safratol is widely used as an industrial feed stock and as a solvent. It dissolves paints, many chemical reactants,
                      rubber, printing ink, adhesives (glues), lacquers, leather
                      tannin and disinfectants.It is also used as a fullerene indicator and raw material for
                      toluene di-isocyanate.
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >

                    <h6 className="pt-20">
                      <div>Safraplus (Solvent Naphtha Plus)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Plus.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aromatic/msds/Safranine-Plus-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                    </div>
                    <p>
                      Safraplus is the best solvent for oil field chemicals industry. Its interesting specification
                      limits allow multi-pronged application capacity.
                    </p>
                  </div>

                  <div
                    className="product-photo"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h6 className="pt-20">
                      <div>Safranine (Solvent Naphtha C9)</div>
                    </h6>

                    <div>
                      <i className="fa fa-file-pdf pdf-icon"></i>
                      <span><Link href="/assets/images/pdfs/aromatic/specs/Safra-Nine.pdf" target="_blank" > SPECS</Link> | <i className="fa fa-file-pdf pdf-icon"></i>
                        <Link href="/assets/images/pdfs/aromatic/msds/Safranine-Msds.pdf" target="_blank"> MSDS </Link></span>
                      <Link href="contact"> | <i className="fa fa-envelope pdf-icon"></i></Link> <hr />
                    </div>
                    <p>
                      Safranine isused in various applications such as industrial solvents and cleaning fluids, as an oil painting medium, as the sole ingredient in the home cleaning fluid energine, as
                      an ingredient in shoe polish, as an ingredient in lighter fluids for wick type lightersand
                      as an adulterant to petrol, as an excellent carrier of agriculture and as an additive and
                      solvent to achieve specific results.
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

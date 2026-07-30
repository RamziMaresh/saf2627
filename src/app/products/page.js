import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Products"} />


      {/* Products Area Start */}
      <section
        className="tooltip-area-two bgs-cover rel pt-100 rpt-100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 rmb-80"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center">
                <h4 className="pb-40">
                  Our Products Are Meeting Customers Needs From Industrial Chemicals To
                  Consumers Products And Services
                </h4>
                <hr />
                <br />
              </div>

              <div className="blog-details-content ">

                <p>
                  SAFRA currently manufactures two product groups, Aliphatics (feed-stock of kerosene & hydrogen) and Aromatics (feed-stock of reformate) of
                  superior quality to best fill the needs of all customers. It also undertakes the blending of various products to meet specific customers
                  chemical and solvents requirements. The company produces Aliphatic and Aromatic solvents, serving industries such as Paints, Adhesives,
                  Insecticides & Pesticides, Thinner, Ink, printing, Tannery, Resins, Industrial Cleaning and Maintenance, Spot Removing, Wood Protection and varnishes, Construction Chemicals, Oil Fields Chemicals, Bitumen Based Products, etc. Safra has got privilege of producing odorless (aromatic free) solvents
                  for various applications especially oil-drilling, aerosol insecticide, agricultural pesticide, industrial cleaning and maintenance. <br />
                  Safra aims to enhance market leadership in its current products/services and establish new manufacturing
                  facilities and trading divisions.
                </p>


                <h6 className="pt-20">
                  <div>The major product groups of SAFRA comprise of the following:</div>
                </h6>

                <div className="pb-20">
                  <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                </div>

                <a> <Link href="aliphatic-products" className="text-link">   - Aliphatics Solvents </Link>
                  <hr />
                </a>

                <a> <Link href="aromatic-products" className="text-link">  - Aromatics Solvents </Link>
                  <hr />
                </a>

                <a> <Link href="chemplex-products" className="text-link">  - Chemplex Products </Link>
                  <hr />
                </a>

                <a> <Link href="blended-products" className="text-link">  - Blended Products </Link>
                </a>
              </div>
              <br />

            </div>
          </div>
        </div>
      </section>
      {/* Products Area End */}
    </SafraLayout>

  );
};
export default page;

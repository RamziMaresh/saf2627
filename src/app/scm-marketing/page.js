"use client";
import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
//


import PopUp from "@/src/components/popup/Popup";
const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"SCM & Marketing"} />
      {/* News media section one start  */}
      <section className="services-two-area-l pt-100 rpt-60 pb-10 rpb-0 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="tag-share pt-0 pb-">
                <h5>ISO 9001: 2015 (international organization for standardization)</h5>
              </div>

              <p className="tag-share2">
                ISO 9001: 2015 is an internationally recognized standard for quality management systems (QMS), ensuring our commitment
                to delivering high-quality products and services. By adhering to ISO 9001:2015, we continually improve our processes,
                enhance customer satisfaction, and foster a culture of excellence. Our dedication to these standards reflects our mission
                to meet and exceed customer expectations while ensuring operational efficiency and compliance.
                {/* 
                <Link href="/assets/images/pdfs/iso/iso_safra_2024.pdf" className="text-center" target="_blank">
                  . <i className="fa fa-file-pdf pdf-icon"></i>
                </Link>
                */}
              </p>

              <div className="">
              <PopUp />
              </div>

              <div
                className="image mt-40 text-center"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/logos/iso_logo.jpg"
                  width={200}
                  alt="Map Locations"
                />
              </div>

              <div className="pb-20 pt-20">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>

              
              <div className="tag-share pt-10 pb-0">
                <h6>Sales</h6>
              </div>
              <p className="tag-share2">
                Safra meets the requirements of wide spectrum of market segments by producing high quality solvents in the most modern and fully automated plant.
                It’s expertise in understanding the needs and dynamics of local and regional industrial markets further attributes to serve better than competitors.
                <br />
                Safra undertake deliveries anywhere in the world. The products are supplied in bulk/vessel, containers,
                ISO Tanks, road tankers, and road trailers in accordance with the requirements of our customers under International Shipping Code.
                Using various packing such as new and reconditioned drums while adhering to global safety standards.
              </p>

              <div className="pb-20 pt-20">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>

              <div className="tag-share pb-0">
                <h6>Marketing</h6>
              </div>
              <p className="tag-share2">
                Safra aims to further fulfill the needs of customers with higher levels of satisfaction by producing the best quality
                of solvents and its distribution in the local, regional and international markets.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>


      {/* About Area Five Start */}
      <section className="about-area-five pb-40 pt-0 rpb-20 rel z-1"
      >
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-images-five rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-five1.png" alt="Customer-Service-1" />
                <img src="assets/images/about/about-five2.png" alt="Customer-Service-2" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-five mt-0 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="tag-share pt-10 pb-0">
                  <h5>Customer Service</h5>
                </div>
                <div className="pb-20">
                  <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                </div>

                <p>
                  There are different ways of moving the materials; we move them via road tankers or trailers (Drums) to our local customer in the Kingdom or around GCC.
                  We also ship container shipments (Drums) or Iso-Tanks internationally.<br /><br />
                  Finally we move the bulk quantities via vessels to different parts of the world.
                </p>

                <p>
                  <b>
                    Safra offers a full package of support to their Customers including the following:
                  </b>
                </p>
                <ul className="icon-list style-two mt-40 mb-40">
                  <li>
                    <i className="fal fa-check" />  Advisory Support for Product Selection.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Product-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Safety-data Sheets.
                  </li>
                  <li>
                    <i className="fal fa-check" />   Application Support.
                  </li>
                  <li>
                    <i className="fal fa-check" />  Producing Innovative Products To Cater Specific Needs Of Customers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>


      <section className="services-two-area-l pt-10 rpt-0 pb-10 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div className="tag-share pt-0 pb-10">
                <h6>Logistics</h6>
              </div>
              <div className="pb-20">
                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center pb-40">
            <div className="col-xl-9 col-lg-11">
              <p className="tag-share2">
                We have added a full-fledged logistics department to our customer service team
                to achieve on-time delivery and to ensure our objective of meeting the various
                packaging mode requirements of customers.
              </p>
              <p className="tag-share2">
                We have secured long-term agreements with some of the best service providers
                in the international logistic markets, who give our requirements the utmost
                priority, in line with our strict performance evaluation techniques.
                We provide customers with the option of requesting different modes of
                packaging such as: drums, tankers, ISO-tanks, bulk ships and small packages,
                depending on the nature of the customer's business.
              </p>

            </div>
          </div>
          <div className="container">
            <div
              className="image mt-40 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/backgrounds/map-locations.gif"
                alt="Map Locations"
              />
            </div>
          </div>
        </div>
      </section>


      {/* About Area End 


      <section className="hero-area-six pt-40 rpt-20 pb-0 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <hr />
            </div>
          </div>
        </div>
      </section>
*/}
    </SafraLayout >
  );
};
export default page;


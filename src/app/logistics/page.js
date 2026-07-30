import SafraLayout from "../../layouts/SafraLayout";
import PageBanner from "../../components/PageBanner";

import Link from "next/link";
const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Logistics"} />


            <section className="services-two-area-l pt-100 rpt-100 pb-10 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-11">
                            
                            <div className="tag-share pt-0 pb-10">
                                <h4>Logistics</h4>
                            </div>
                            <div className="pb-20">
                                <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center pb-40">
                        <div className="col-xl-9 col-lg-11">
                            <p>
                                We have added a full-fledged logistics department to our customer service team
                                to achieve on-time delivery and to ensure our objective of meeting the various
                                packaging mode requirements of customers.
                            </p>
                            <p>
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
        </SafraLayout>

    );
};
export default page;


/* 
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
*/
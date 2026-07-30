import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";

const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Privacy Policy"} />
            <section className="services-two-area pt-100 rpt-100 pb-0 rpb-   rel z-2">
                <div className="container">

                    <div className="row justify-content-center text-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h3>Privacy Statement</h3>

                                <div
                                    className="item"
                                    data-aos="fade-left"
                                    data-aos-duration={1500}
                                    data-aos-offset={50}
                                >
                                    <div className="tag-coulds">
                                        <Link href="/"> Home Page |</Link>
                                        <Link href="about">About Page |</Link>
                                        <Link href="contact">Contact Page |</Link>
                                    </div>
                                </div>

                            </div>
                            <hr />
                        </div>
                    </div>

                </div>
            </section>
        </SafraLayout>
    );
};
export default page;

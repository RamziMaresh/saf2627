import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";

const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Terms "} />
            <section className="services-two-area pt-100 rpt-100 pb-0 rpb- rel z-2">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-9 col-lg-11">
                            <div className="tag-share pt-0 pb-10">
                                <h3>Terms And Conditions</h3>

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

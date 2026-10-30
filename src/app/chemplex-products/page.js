import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Set specific text for the About page */}
      <title> Safra Chemplex Products | Safra Company Limited</title>
      <meta name="description" content="Chemplex mainly provides retail products to customers and marketed in smaller packaging including paint thinner, lacquer thinner, wood varnish, charcoal lighter, linseed oil and CPVC cleacners and other products..." />

      <SafraLayout>
        <PageBanner pageName={"Chemplex"} pageTitle={"Chemplex "} />
        <section className="shop-area py-100 rpy-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 pt-0 pb-0">
                <div className="tag-share pt-0 pb-0">
                  <h4>Chemplex Products</h4>
                </div>
                <div className="pb-20">
                  <img src="assets/images/logos/BarBot.jpg" alt="safra-line" width={400} />
                </div>
              </div>
              {/* 
              <p className="pb-40 text-black">
                Chemplex mainly provides retail products to customers and marketed in smaller packaging including paint thinner, lacquer thinner, wood varnish, charcoal lighter, linseed oil and CPVC cleacners and other products.
              </p>
*/}
              <div className="col-xl- ">
                <div className="shop-page-wrap">
                  <div className="row">
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-pro">
                            <img
                              className="product-image"
                              src="assets/images/products/product1.svg"
                              alt="Product-Pine"
                            />
                          </Link>
                        </div>

                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-pro">Safra Pro </Link>
                          </h6>
                          {/**
                        <span className="price">$13.00</span>
                         */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-prime">
                            <img
                              className="product-image"
                              src="assets/images/products/product2.svg"
                              alt="Product-Prime"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-prime">Safra Prime</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-cryl">
                            <img
                              className="product-image"
                              src="assets/images/products/product3.svg"
                              alt="Product-Cryl"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-cryl">Safra Cryl</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-autoCryl">
                            <img
                              className="product-image"
                              src="assets/images/products/product4.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-autoCryl">AutoCryl</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-supertc">
                            <img
                              className="product-image"
                              src="assets/images/products/product5.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-supertc">Safra Super TC (LACQUER THINNER)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-pine">
                            <img
                              className="product-image"
                              src="assets/images/products/product6.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-pine">Safra Pine</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="safra-shine">
                            <img
                              className="product-image"
                              src="assets/images/products/product7.svg"
                              alt="Product-07-"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="safra-shine">Safra SHINE (WOOD VARNISH)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="Bond-Cpvc-Cleaner">
                            <img
                              className="product-image"
                              src="assets/images/products/product8.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="Bond-Cpvc-Cleaner">Safra Bond (CPVC Cleaner)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={150}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="Bond-Cpvc-Cement">
                            <img
                              className="product-image"
                              src="assets/images/products/product9.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20 ">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="Bond-Cpvc-Cement">Safra Bond (CPVC Cement)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="Bond-Pvc-Cement-Transparent">
                            <img
                              className="product-image"
                              src="assets/images/products/product10.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="Bond-Pvc-Cement-Transparent">Safra Bond (PVC Cement Transparent)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-sm-6 mb-50"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <Link href="Bond-PVC-CementGray">
                            <img
                              className="product-image"
                              src="assets/images/products/product11.svg"
                              alt="Product"
                            />
                          </Link>
                        </div>
                        <div className="content m-20">
                          <h6 className="text-center border border-gray-50 rounded-2 p-10">
                            <Link href="Bond-PVC-CementGray">Safra Bond (PVC Cement Gray)</Link>
                          </h6>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </SafraLayout>
    </>
  );
};
export default page;

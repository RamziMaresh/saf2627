import SafraLayout from "../layouts/SafraLayout";

const e404 = () => {
  return (
    <SafraLayout header={10}>
      <section className="error-area py-150 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="error-content mt-80 rmt-60">
                <div
                  className="image"
                  data-aos="zoom-in-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="/assets/images/Others/404-error.png"
                    alt="404 Error"
                  />
                </div>

                <p
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Page not found...!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SafraLayout>
  );
};
export default e404;

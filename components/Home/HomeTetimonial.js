import { Quotes } from "@/public/svg/icon";

const testimonial = "/img/testimonial/bg-industry-testimonial.jpg";

export default function HomeTetimonial() {
  return (
    <>
      <div
        className="testimonial_section"
        style={{ backgroundImage: `url(${testimonial})` }}
      >
        <div className="overlay"></div>

        {/* <!-- Single Testimonial Shortcode --> */}
        <div className="fn_cs_single_testimonial">
          <div className="container">
            <div className="inner">
              <Quotes className="fn__svg" />
              <div className="content_holder">
                <p>
                  QUALITY IN A SERVICE OR PRODUCT
                  IS NOT WHAT YOU PUT INTO IT
                  IT IS WHAT THE CUSTOMER
                  GETS OUT OF IT.
                </p>
                {/* <h3>Ceo Name</h3> */}
                <h5>-PETER DRUCKER</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Single Testimonial Shortcode --> */}
      </div>
    </>
  );
}

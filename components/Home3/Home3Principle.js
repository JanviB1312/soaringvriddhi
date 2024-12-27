import ContinuousSlider from "../ContinuousSlider";
const background1 = "img/about/rating_bg.jpg";

export default function Home3Principle() {
  return (
    <>
      <div className="fn_cs_principles">
        <div className="container">
          <div className="inner">
            <div className="left_part">
              <h3>Why Choose Us?</h3>
              <p>
                We go beyond the ordinary to exceed your expectations, ensuring
                that every detail is meticulously crafted to perfection.
              </p>
              {/* <p>
                With our extensive experience and expertise, our products have
                made a mark in over 45 countries, boasting the largest
                installation base worldwide. Partnering with pioneers in various
                technologies, we ensure top-notch quality and reliability. Our
                installations span across refineries, petrochemicals, chemicals,
                metals, power plants, and pharmaceutical industries globally.
              </p> */}
              {/*  <p>Every engineer in our team is certified by our esteemed partners, empowering them to swiftly address any service issues. We take immense pride in our ability to repair not only instruments supplied by us but also those from other sources. Our commitment lies in ensuring the quickest turnaround time for instrument repairs and validations, reaffirming our dedication to customer satisfaction.</p> */}
            </div>
            <div className="right_part">
              <ul className="masonry">
                <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Expertise and Experience</h3>
                      <p>
                        Our team brings decades of expertise and experience in
                        the construction industry, harnessing a profound
                        understanding of complex projects to deliver outstanding
                        results.
                      </p>
                    </div>
                    <div className="number_holder">01</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Commitment to Excellence</h3>
                      <p>
                        We are committed to excellence in every project,
                        ensuring that we meet the highest standards of quality
                        and craftsmanship in every task we undertake.
                      </p>
                    </div>
                    <div className="number_holder">02</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Comprehensive Service Offering</h3>
                      <p>
                        We provide a full spectrum of services from initial
                        design to final construction, making us a one-stop-shop
                        for all your construction needs.
                      </p>
                    </div>
                    <div className="number_holder">03</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Quality and Safety</h3>
                      <p>
                        Quality and safety are at the forefront of our
                        operations, with stringent protocols in place to ensure
                        that every project is not only aesthetically pleasing
                        but also structurally sound and safe.
                      </p>
                    </div>
                    <div className="number_holder">04</div>
                  </div>
                </li>
                {/* <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Innovative Solutions</h3>
                      <p>
                        Our approach involves utilizing cutting-edge
                        technologies and innovative methods to solve traditional
                        challenges, allowing us to offer unique and effective
                        solutions.
                      </p>
                    </div>
                    <div className="number_holder">04</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div className="title_holder">
                      <h3>Timely Project Delivery</h3>
                      <p>
                        We understand the importance of deadlines, which is why
                        we prioritize efficient project management to ensure
                        timely delivery without compromising on quality.
                      </p>
                    </div>
                    <div className="number_holder">04</div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fn_cs_project_sticky_modern mt-20"
        data-animation-type="alpha"
      >
      {/*   <ContinuousSlider /> */}
      </div>
    </>
  );
}

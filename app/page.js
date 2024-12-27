
import HomeAbout from "@/components/Home/HomeAbout";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeCTA from "@/components/Home/HomeCTA";
import HomeProject from "@/components/Home/HomeProject";
import HomeServices from "@/components/Home/HomeServices";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeTetimonial from "@/components/Home/HomeTetimonial";
import Home3Principle from "@/components/Home3/Home3Principle";
import Home3Project from "@/components/Home3/Home3Project";
import Layout from "@/layouts/layout";

export default function Home() {
  return (
    <>
      <Layout className={"transdark"}>
        <HomeSlider />

        {/* <!-- Principles Modern --> */}
        {/* <HomePrinciples /> */}
        
        {/* <!-- /Principles Modern --> */}

        {/* Services */}
       {/*  <HomeServices /> */}
        {/* /Services */}

        {/* <!-- About Section --> */}
        {/* <HomeAbout /> */}
        {/* <!-- /About Section --> */}

        {/* <!-- Service Section --> */}
        {/* <HomeWhyChooseUs /> */}
        {/* <!-- /Service Section --> */}

        {/* <!-- Project Sticky Full --> */}
        {/* <HomeProject /> */}
        {/* <!-- /Project Sticky Full --> */}

        {/* <!-- Project Sticky Shortcode --> */}
        <Home3Project />
        {/* <!-- /Project Sticky Shortcode --> */}

        <Home3Principle />

        {/* <!-- Call to Action --> */}
        <HomeCTA />
        {/* <!-- /Call to Action --> */}
        {/* <!-- Testimonial Section --> */}
        <HomeTetimonial />
        {/* <!-- /Testimonial Section --> */}

        {/* <!-- Blog Section --> */}
        {/* <HomeBlog /> */}
        {/* <!-- /Blog Section --> */}
      </Layout>
    </>
  );
}

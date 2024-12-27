"use client";

import Image from "next/image";
import { Element, Link } from "react-scroll";

function IndustryTabComponent({ data }) {
  // const [activeSection, setActiveSection] = useState("");
  // const paragraphRef = useRef(null);

  // useEffect(() => {
  //   Events.scrollEvent.register("end", (to, element) => {
  //     setActiveSection(to);
  //   });

  //   scrollSpy.update();

  //   return () => {
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);

  // console.log("ac", activeSection);

  // const handleClick = (to) => {
  //   scroller.scrollTo(to, {
  //     duration: 500,
  //     delay: 0,
  //     //   smooth: "easeIn",
  //   });
  //   console.log("to", activeSection);
  //   setActiveSection(to);
  //   if (to == "section4") {
  //     console.log("para", paragraphRef.current);
  //   }
  // };
  return (
    <>
      <div className="sticky top-0 w-full flex sm:flex-row p-4 flex-col m-2 justify-start bg-white text-black *:px-10 *:py-2 font-normal *:text-base *:cursor-pointer">
        <Link
          className=" min-w-max text-center  hover:font-semibold rounded-md"
          activeClass=" text-white bg-logo-blue/100 font-semibold "
          to="section1"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          Market Overview
        </Link>
        <Link
          className="min-w-max text-center hover:font-semibold rounded-md"
          activeClass=" text-white bg-logo-blue/100 font-semibold "
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          Challenges & Opportunities
        </Link>
        <Link
          className="min-w-max  text-center hover:font-semibold rounded-md"
          activeClass=" text-white bg-logo-blue/100 font-semibold "
          to="section3"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          Technology & Innovation
        </Link>
        <Link
          className="min-w-max  text-center hover:font-semibold rounded-md"
          activeClass=" text-white  bg-logo-blue/100 font-semibold "
          to="section4"
          spy={true}
          smooth={true}
          duration={500}
          containerId="containerElement"
        >
          Case Studies
        </Link>
      </div>
      <div className=" w-screen max-w-sm sm:max-w-7xl flex justify-center sm:mx-24 sm:my-2">
        <div
          id="containerElement"
          className="*:w-full overflow-y-scroll max-h-screen"
        >
          <Element
            name="section1"
            className="min-h-96 px-4 bg-white rounded-b-md rounded-bl-md flex flex-col gap-4"
          >
            <div className="min-h-screen w-full rounded-md p-10">
              <section className="business-section text-black text-base font-medium">
                <p>
                  India is one of the major players in the agriculture sector
                  worldwide and it is the primary source of livelihood for ~55%
                  of India’s population. India has the world&#39;s largest
                  cattle herd (buffaloes), the largest area planted for wheat,
                  rice, and cotton, and is the largest producer of milk, pulses,
                  and spices in the world. It is the second-largest producer of
                  fruit, vegetables, tea, farmed fish, cotton, sugarcane, wheat,
                  rice, cotton, and sugar. The agriculture sector in India holds
                  the record for second-largest agricultural land in the world
                  generating employment for about half of the country’s
                  population.{" "}
                  <Image
                    src="/img/education-training.jpg"
                    alt="industry-intro"
                    className=" float-end p-2 m-4 border "
                    width={448}
                    height={330}
                  />{" "}
                  Thus, farmers become an integral part of the sector to provide
                  us with a means of sustenance. Consumer spending in India will
                  return to growth in 2021 post the pandemic-led contraction,
                  expanding by as much as 6.6%. The Indian food industry is
                  poised for huge growth, increasing its contribution to world
                  food trade every year due to its immense potential for value
                  addition, particularly within the food processing industry.
                  The Indian food processing industry accounts for 32% of the
                  country’s total food market, one of the largest industries in
                  India and is ranked fifth in terms of production, consumption,
                  export and expected growth.
                </p>
                <p>
                  Foodgrain production in India touched 330.5 million metric
                  tonnes (MT) in 2022-23 (3rd Advance Estimate). India is the
                  world’s 2nd largest producer of food grains, fruits and
                  vegetables and the 2nd largest exporter of sugar. A total of
                  521.27 LMT rice has been anticipated for procurement for the
                  upcoming KMS 2023-24, up from 496 LMT produced during the
                  previous KMS 2022-23.
                </p>
                <p>
                  With cutting-edge technologies such as AI, ML, IoT and
                  blockchain, India&#39;s education sector will redefine itself
                  in the years to come. It has also embraced the Education 4.0
                  revolution, which promotes inclusive learning and increased
                  employability. The government has implemented policies like
                  the NEP, which will be fully implemented over the course of
                  this decade starting from 2021-22 and will have a strong focus
                  on high-quality vocational education
                </p>
              </section>
            </div>
          </Element>
          <Element
            name="section2"
            className="min-h-96 p-4 bg-white  rounded-md flex flex-col gap-4"
          >
            <div className="min-h-screen w-full text-black rounded-md p-10">
              {/* <div className="flex flex-col text-wrap break-keep md:flex-row justify-end text-5xl font-bold   mb-4">
                Challenges & Opportunities
              </div> */}
              <section className="business-section text-base font-medium">
                <p>
                  The education sector in India was estimated to be worth US$
                  117 billion in FY20 and is expected to reach US$ 225 billion
                  by FY25.{" "}
                </p>{" "}
                <p>
                  India has over 250 million school-going students, more than
                  any other country. India had 38.5 million students enrolled in
                  higher education in 2019-20, with 19.6 million male and 18.9
                  million female students.
                </p>
                <p>
                  According to UNESCO’s ‘State of the Education Report for India
                  2021’, the Pupil Teacher Ratio (PTR) at senior secondary
                  schools was 47:1, as against 26:1 in the overall school
                  system.
                </p>
                <Image
                  src="/img/education-and-training.jpg"
                  alt="industry-intro"
                  className=" float-start p-2 m-2 border "
                  width={448}
                  height={330}
                />
                <p>
                  The Number of colleges in India reached 49,385 in FY24 (as of
                  September 13, 2023) and 43,796 in FY21, up from 42,343 in
                  FY20. The number of universities in India reached 1,196 in
                  FY24 (as of September 13, 2023), up from 760 in FY15.
                </p>
                <p>
                  India had 41.38 million students enrolled in higher education
                  in 2020-21 with 21.2 million male and 20.1 million female
                  students, as against 38.5 million students enrolled in higher
                  education in 2019-20, with 19.6 million male and 18.9 million
                  female students. In 2022-23, there are 8,902 total
                  AICTE-approved institutes in India. Out of these 8,902
                  institutes, there are 3,577 undergraduate, 4,786 postgraduate
                  and 3,957 diploma institutes.
                </p>
                <p>
                  The Indian edtech market size is expected to reach US$ 30
                  billion by 2031, from US$ 700-800 million in 2021. According
                  to KPMG, India has also become the second largest market for
                  E-learning after the US.
                </p>
                <p>
                  The online education market in India is expected to grow by
                  US$ 2.28 billion during 2021-2025, growing at a CAGR of almost
                  20%. The market grew by 19.02% in India in 2021.
                </p>
              </section>
            </div>
          </Element>
          <Element
            name="section3"
            className="min-h-96 p-4 bg-white rounded-md flex flex-col gap-4"
          >
            <div className="min-h-screen w-full text-black rounded-md p-10">
              <section className="business-section text-base font-medium">
                <p>
                  From April 2000-September 2023, Foreign Direct Investment
                  (FDI) equity inflow in the education sector stood at US$ 9.44
                  billion, according to the data released by the Department for
                  Promotion of Industry and Internal Trade (DPIIT).
                </p>

                <p>
                  The education and training sector in India has witnessed some
                  major investments and developments in the recent past. Some of
                  them are:
                </p>

                <ul className=" list-disc">
                  <li>
                    Size and Growth: The Indian education industry is a massive
                    market, estimated at $117 billion and projected to reach
                    $313 billion by 2030 [Invest India]. This growth is fueled
                    by a young population and rising demand for quality
                    education.
                  </li>
                  <li>
                    Structure: The sector is divided into pre-schooling, K-12
                    education, and higher education. The private sector is
                    playing an increasingly prominent role, with the number of
                    private schools steadily rising.
                  </li>
                  <li>
                    Demographic Advantage: India boasts a large young population
                    (over 580 million between 5 and 24 years old) creating a
                    significant market for educational services.
                  </li>
                  <li>
                    Integer erat dui, rutrum tempor dui in, volutpat rhoncus
                    nulla. Aliquam tincidunt elementum dolor vel dignissim.
                    Phasellus nec lacus tincidunt ligula semper porta. Vivamus
                  </li>

                  <li>
                    Sed accumsan orci turpis. Praesent tristique congue nibh,
                    vel bibendum ex porta a. Vestibulum odio dolor, pharetra
                    quis dolor vel, viverra egestas elit. Aenean non urna
                    vehicula, lobortis nisl ac, congue eros. Nullam ante risus,
                  </li>
                  <li>
                    Fusce rutrum, lectus eget aliquet dignissim, dui ex congue
                    nisi, non consequat metus eros in lacus. Nunc egestas vel
                    nunc et mollis. Phasellus facilisis felis id mauris luctus,
                    sit amet aliquet purus feugiat. Morbi sed dignissim purus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                  </li>
                </ul>
              </section>
            </div>
          </Element>
          <Element
            name="section4"
            className="min-h-96 p-4 bg-white rounded-md flex flex-col gap-4"
          >
            <div className="min-h-screen w-ful text-black  rounded-md p-10">
              {/* <div className="flex flex-col md:flex-row justify-end text-5xl font-bold   mb-4">
                Case Studies
              </div> */}
              <section className=" text-base font-medium">
                <ul className=" list-disc">
                  <li>
                    Size and Growth: The Indian education industry is a massive
                    market, estimated at $117 billion and projected to reach
                    $313 billion by 2030 [Invest India]. This growth is fueled
                    by a young population and rising demand for quality
                    education.
                  </li>
                  <Image
                    src="/img/education-3.jpg"
                    alt="industry-intro"
                    className=" float-start p-2 m-6 border "
                    width={448}
                    height={330}
                  />
                  <li>
                    Structure: The sector is divided into pre-schooling, K-12
                    education, and higher education. The private sector is
                    playing an increasingly prominent role, with the number of
                    private schools steadily rising.
                  </li>
                  <li>
                    Demographic Advantage: India boasts a large young population
                    (over 580 million between 5 and 24 years old) creating a
                    significant market for educational services.
                  </li>
                  <li>
                    Integer erat dui, rutrum tempor dui in, volutpat rhoncus
                    nulla. Aliquam tincidunt elementum dolor vel dignissim.
                    Phasellus nec lacus tincidunt ligula semper porta. Vivamus
                    in mattis sem. Fusce et sem vel justo auctor egestas.
                    Praesent ex quam, scelerisque sed convallis non, dictum vel
                    magna. Sed eu venenatis est. Integer vestibulum a diam et
                    pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ut tempor nisl. Sed vel dignissim ipsum.
                    Vestibulum sed molestie elit.
                  </li>

                  <li>
                    Sed accumsan orci turpis. Praesent tristique congue nibh,
                    vel bibendum ex porta a. Vestibulum odio dolor, pharetra
                    quis dolor vel, viverra egestas elit. Aenean non urna
                    vehicula, lobortis nisl ac, congue eros. Nullam ante risus,
                    tincidunt id egestas sed, rutrum at libero. Maecenas vel
                    nisi arcu. Mauris tempus nisi mauris, sit amet malesuada
                    nibh semper eu. Nam dolor libero, fringilla vel nisi ac,
                    euismod porta dui. Ut magna velit, scelerisque eu ex nec,
                    eleifend viverra erat. Sed vitae est lobortis sapien lacinia
                    condimentum. Praesent dictum quam lectus, in sagittis arcu
                    ultricies at.
                  </li>
                  <li>
                    Fusce rutrum, lectus eget aliquet dignissim, dui ex congue
                    nisi, non consequat metus eros in lacus. Nunc egestas vel
                    nunc et mollis. Phasellus facilisis felis id mauris luctus,
                    sit amet aliquet purus feugiat. Morbi sed dignissim purus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Sed dui nulla, scelerisque
                    eget odio a, porta volutpat lorem. Praesent mattis felis
                    dui, ac interdum orci iaculis vel. Etiam in ultrices erat.
                    Vestibulum in nisi ut sapien ullamcorper luctus. Suspendisse
                    vel mauris tempor, vestibulum libero sed, varius enim.
                    Phasellus blandit commodo lectus tincidunt sollicitudin.
                    Donec pulvinar tempor pretium. Nulla porta vel augue eu
                    luctus. Maecenas ultrices, neque ac ultricies tincidunt,
                    lectus metus molestie sem, bibendum interdum lectus urna
                    vitae est. Vivamus dapibus fringilla dolor, vel semper risus
                    accumsan eu. Donec ultricies sollicitudin facilisis. Nulla
                    pulvinar sit amet nunc ac sagittis. Nunc justo tellus,
                    tincidunt in mauris vel, tincidunt vestibulum enim. Aliquam
                    aliquam lacus sed euismod feugiat. In ornare elit odio, non
                    consequat odio eleifend porta.
                  </li>
                </ul>
              </section>
            </div>
          </Element>
        </div>
      </div>
    </>
  );
}

{
  /* <ul className="list-disc">
                  <li>
                    Size and Growth: The Indian education industry is a massive
                    market, estimated at $117 billion and projected to reach
                    $313 billion by 2030 [Invest India]. This growth is fueled
                    by a young population and rising demand for quality
                    education.
                  </li>
                  <li>
                    Structure: The sector is divided into pre-schooling, K-12
                    education, and higher education. The private sector is
                    playing an increasingly prominent role, with the number of
                    private schools steadily rising.
                  </li>
                  <li>
                    Demographic Advantage: India boasts a large young population
                    (over 580 million between 5 and 24 years old) creating a
                    significant market for educational services.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati ipsa aspernatur praesentium, debitis labore
                    architecto voluptatum dolorem iste, error tempore id quis,
                    tenetur asperiores? Adipisci reprehenderit ipsum officia id
                    commodi.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vehicula porttitor libero, et sagittis lorem ullamcorper
                    sed. Phasellus elit turpis, auctor ac ex eu, dictum dictum
                    arcu. Nunc ornare tortor vel nisi tempus rhoncus. Curabitur
                    at risus ut magna efficitur auctor vel in augue. Nulla
                    commodo mi nec urna tempus iaculis. Suspendisse vitae quam
                    nunc. Etiam consectetur laoreet euismod. Pellentesque vel
                    justo mauris. Pellentesque sed placerat metus, at laoreet
                    leo. Etiam ac sollicitudin magna. Aliquam erat volutpat.
                    Nullam mattis gravida felis, quis convallis turpis interdum
                    et. Nam aliquam varius laoreet. Donec vel mauris ac ex
                    facilisis posuere. In tempus volutpat orci, vel aliquam
                    massa commodo nec. Fusce nulla lorem, dignissim quis risus
                    sed, vestibulum pretium mauris. Nullam placerat laoreet
                    libero eget sollicitudin. Sed pharetra leo a erat vehicula,
                    eget tincidunt quam ultricies. Lorem ipsum dolor sit amet,
                  </li>
                  <li>
                    In facilisis congue congue. Sed elementum posuere tincidunt.
                    In vitae orci nec ligula fermentum eleifend eget ac nisi.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Suspendisse felis purus,
                    dapibus non libero in, aliquet lacinia nisl. Nullam
                    sollicitudin felis ac lacus egestas facilisis. Vivamus id
                    bibendum lorem, at sollicitudin felis. Nunc mollis tempor
                    nunc sit amet porttitor. Mauris tincidunt sollicitudin dui
                    eget pharetra. Nulla facilisi. Proin sed magna rutrum massa
                    commodo tempor quis id erat. Fusce ac nisl in ipsum dictum
                    finibus. Nulla sed egestas turpis. Aenean ultrices fringilla
                    magna, vitae pellentesque felis porta nec. Nunc nulla lorem,
                    pellentesque sit amet nunc in, porttitor elementum est.
                    Etiam interdum vitae nisi fringilla dictum. Etiam elementum
                    odio et dolor ultricies sollicitudin. Etiam lacinia sit amet
                    tortor sed pretium. Nunc ullamcorper pulvinar orci.
                    Suspendisse et nisi malesuada, varius sapien maximus,
                    malesuada nibh. Vivamus ullamcorper nunc a odio tristique
                    vestibulum.
                  </li>
                </ul> */
}

export default IndustryTabComponent;

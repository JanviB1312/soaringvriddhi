import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo-as.png";
import footerimage from "@/public/img/services/footerimage3.jpg";

export default function Footer() {
  return (
    <>
      <footer className="industify_fn_footer">
        <div className=" container mx-auto py-10 px-4 relative" style={{ maxWidth: "2000px", backgroundImage: `url(${footerimage.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          {/* Adding an overlay with higher opacity */}
          <div className="absolute inset-0 bg-white bg-opacity-75"></div>
          
          <div className="flex flex-wrap justify-between items-start relative">
           
            <div className="w-full lg:w-1/5 mb-8 lg:mb-0 flex flex-col items-center">
              <Link href="/" className="flex gap-4 items-center text-4xl font-bold">
                <Image src={Logo} width={240} height={320} alt="Footer Logo" />
              </Link>
            </div>
  
            <div className="w-full lg:w-1/5 mb-8 lg:mb-0 pl-24">
              <h3 className="text-xl text-black-600 font-semibold mb-4 mt-8">Quick links</h3>
              <ul className="space-y-2">
                <li><Link href="/CivilConstruction" className="text-red-500 text-base">Our Services</Link></li>               
                <li><Link href="/contact" className="text-red-500 text-base">Contact us</Link></li>         
              </ul>
            </div>
  
            <div className="w-full lg:w-1/5 text-red-500 pl-24 md:pl-2 lg:pl-0">
              <h3 className="text-xl text-black-600 font-semibold mb-4 mt-8">Contact us</h3>
              <ul className="space-y-2">
                <li>Mobile:    (+91) 9313099137</li>
                <li>E-mail: <a className="ml-2 " href="mailto:sales@smarttechnosystem.com">  info@acquireservices.in</a></li>
                <li>Address: 001FF, Block 130, <br/>Lig Apartment, Sector 10<br/> Greater Noida ,Gautam <br/> Buddh Nagar ,Uttar Pradesh<br/></li>
                <li className="ml-14"></li>
                <li className="ml-14"></li>
              </ul>
            </div>
            
            <div className="w-full lg:w-2/5 text-red-500 pl-24 md:pl-12 lg:pl-12">
              <h3 className="text-xl text-black-600 font-semibold mb-4 mt-8">Find us here</h3>
              <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.911355112138!2d77.47296654030458!3d28.571093625151967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cec195becc479%3A0xfccf19e36bc0da2f!2sSree%20Ram%20Apartment%20Sector%2010%2C%20Greater%20Noida%20Authority%20LIG%20Flats!5e0!3m2!1sen!2sus!4v1719405331250!5m2!1sen!2sus"
                  width="80%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="items-center justify-center"
                ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
  
}

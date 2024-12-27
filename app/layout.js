import { Suspense } from "react";
import "swiper/css/effect-fade";
import "../node_modules/react-modal-video/css/modal-video.css";
import "../public/css/base.css";
import "../public/css/custom.css";
import "../public/css/fontawesome-all.min.css";
import "../public/css/fontello.css";
import "../public/css/justified.css";
import "../public/css/magnific-popup.css";
import "../public/css/nice-select.css";
import "../public/css/style.css";
import "../public/css/swiper.css";
import "./globals.css";

import Loading from "./loading";
// import 'metismenujs/dist/metismenujs.css'
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--DmSans",
});

export const metadata = {
  title: {
    template: "Acquire Utility | %s",
    default: "Acquire Utility",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

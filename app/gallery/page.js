import Gallery from "@/components/Gallery/Gallery";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Gallery",
};

export default function page() {
  return (
    <Layout>
      <Gallery />
    </Layout>
  );
}

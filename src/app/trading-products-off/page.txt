import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import dynamic from "next/dynamic";

const TradingDetails = dynamic(
  () => import("../../components/isotope/TradingDetails"),
  {
    ssr: false,
  }
);



const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Trading"} />
      <TradingDetails />
    </SafraLayout>
  );
};
export default page;

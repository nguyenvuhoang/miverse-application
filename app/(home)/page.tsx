import { Metadata } from "next";
import CreateSellNft from "../components/block/CreateSellNft";
import LiveAuction from "../components/block/LiveAuction";
import PopularCollection from "../components/block/PopularCollection";
import TopSeller from "../components/block/TopSeller";
import Hero from "../components/hero/Hero";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";
import TodaysPicks from "../components/block/TodaysPicks";

export const metadata: Metadata = {
    title: "Miverse",
};

export default function page(): Element {
    return (
        <>
            <Hero />
            <LiveAuction />
            <TopSeller />
            <TodaysPicks style="pad-b-54 no-pt-mb" />
            <PopularCollection />
            <CreateSellNft />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}

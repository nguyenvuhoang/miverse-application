import LiveAuction2 from "@/app/components/block/LiveAuction2";
import NftInfo from "@/app/components/block/NftInfo";
import PopularCollection2 from "@/app/components/block/PopularCollection2";
import TodaysPicks2 from "@/app/components/block/TodaysPicks2";
import TopSeller2 from "@/app/components/block/TopSeller2";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Home 2",
};

export default function page() {
    return (
        <>
            <NftInfo style="home-2" />
            <LiveAuction2 />
            <PopularCollection2 />
            <TopSeller2 />
            <TodaysPicks2 />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}

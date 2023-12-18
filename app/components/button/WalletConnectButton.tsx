"use client";

import { Suspense, lazy } from "react";

export default function WalletConnectButton(): JSX.Element {
  const CardanoWallet = lazy(() =>
    import("@meshsdk/react").then(module => {
      return { default: module.CardanoWallet };
    })
  );

  return (
    <>
      <div className="sc-btn-top mg-r-12" id="site-header">
        <Suspense fallback={<div>Loading....</div>}>
          <CardanoWallet isDark={true} />
        </Suspense>
      </div>
    </>
  );
}

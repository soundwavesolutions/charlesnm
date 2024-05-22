import React from "react";

const Footer = () => {
  return (
    <div className="py-4">
      <div className="flex justify-center items-center gap-5 mb-4">
        <a
          href="#"
          className="hover:underline text-[var(--primary)] font-semibold"
        >
          Schwab Safe®
        </a>
        <a
          href="#"
          className="hover:underline text-[var(--primary)] font-semibold"
        >
          The Schwab Security Guarantee
        </a>
        <a
          href="#"
          className="hover:underline text-[var(--primary)] font-semibold"
        >
          Schwab Homepage
        </a>
      </div>
      <p className="text-sm">
        <a
          href="#"
          className="hover:underline text-[var(--primary)] font-medium"
        >
          Web Browser Information
        </a>{" "}
        — IMPORTANT information for Windows XP users.
      </p>
      <div className="border border-[#666666] text-[#666666] p-2 text-center my-3 text-sm font-medium">
        Brokerage Products: Not FDIC Insured • No Bank Guarantee • May Lose
        Value
      </div>
      <p className="text-[#666666] text-sm font-medium mb-2">
        Not all products and services listed are available outside the U.S. and
        some are subject to country specific restrictions.
      </p>
      <p className="text-[#666666] text-sm font-medium mb-2">
        Check the background of this firm or one of its investment professionals
        on FINRA's BrokerCheck.
      </p>
      <p className="text-[#666666] text-sm font-medium mb-2">
        The Charles Schwab Corporation provides a full range of brokerage,
        banking and financial advisory services through its operating
        subsidiaries. Its broker-dealer subsidiary, Charles Schwab & Co., Inc.
        (member SIPC), offers investment services and products, including Schwab
        brokerage accounts. Its banking subsidiary, Charles Schwab Bank (member
        FDIC and an Equal Housing Lender), provides deposit and lending services
        and products. <br /> Access to Electronic Services may be limited or
        unavailable during periods of peak demand, market volatility, systems
        upgrade, maintenance, or for other reasons.
      </p>
      <p className="text-[#666666] text-sm font-medium mb-2">
        This site is designed for U.S. residents. Non-U.S. residents are subject
        to country-specific restrictions. Learn more about our services for{" "}
        <span className="text-[var(--primary)]">non-U.S. residents.</span>
      </p>
      <p className="text-[#666666] text-sm font-medium mb-2">
        © 2024 Charles Schwab & Co., Inc, All rights reserved. Member SIPC.
        Unauthorized access is prohibited. Usage will be monitored. (0617-ZYYE)
      </p>
    </div>
  );
};

export default Footer;

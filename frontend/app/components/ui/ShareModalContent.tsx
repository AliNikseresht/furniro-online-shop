import Link from "next/link";
import React from "react";

type Props = {
  shareLink: string;
};

const ShareModalContent = ({ shareLink }: Props) => {
  return (
    <div className="flex flex-col gap-4 my-2">
      <p className="text-center">Share this product via:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <Link
          href={`https://wa.me/?text=${encodeURIComponent(shareLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] py-2 px-4 rounded-lg border border-[#25D366] text-sm hover:bg-[#25D366] hover:text-white transition"
        >
          WhatsApp
        </Link>
        <Link
          href={`https://t.me/share/url?url=${encodeURIComponent(shareLink)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0088CC] py-2 px-4 rounded-lg border border-[#0088CC] text-sm hover:bg-[#0088CC] hover:text-white transition"
        >
          Telegram
        </Link>
        <Link
          href={`https://twitter.com/share?url=${encodeURIComponent(
            shareLink
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DA1F2] py-2 px-4 rounded-lg border border-[#1DA1F2] text-sm hover:bg-[#1DA1F2] hover:text-white transition"
        >
          Twitter
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareLink
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4267B2] py-2 px-4 rounded-lg border border-[#4267B2] text-sm hover:bg-[#4267B2] hover:text-white transition"
        >
          Facebook
        </Link>
      </div>
      <p className="text-center mt-4">Or copy the link below:</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={shareLink}
          readOnly
          className="w-full bg-transparent border border-[#696969] py-1.5 px-4 rounded-lg text-sm outline-none text-[#000]"
        />
        <button
          onClick={() => navigator.clipboard.writeText(shareLink)}
          className="text-[#000] py-1.5 px-4 rounded-lg border border-[#696969] text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShareModalContent;

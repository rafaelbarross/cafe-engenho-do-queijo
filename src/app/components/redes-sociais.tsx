import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function RedeSociais() {
  return (
    <div className="flex items-center gap-2">
      <Link
        passHref
        href="https://www.instagram.com/cafeengenhodoqueijo"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Button
          variant="default"
          size="icon"
          className="rounded-full !p-0 h-8 w-8 hover:scale-110 transition-all"
        >
          <RiInstagramFill />
        </Button>
      </Link>

      <Link
        passHref
        href="https://www.facebook.com/p/Caf%C3%A9-Engenho-do-Queijo-100075888760204/"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <Button
          variant="default"
          size="icon"
          className="rounded-full !p-0 h-8 w-8  hover:scale-110 transition-all"
        >
          <FaFacebook />
        </Button>
      </Link>
    </div>
  );
}

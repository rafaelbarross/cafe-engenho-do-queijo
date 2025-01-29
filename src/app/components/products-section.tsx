"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    title: "Café Artesanal",
    description:
      "Nosso café é torrado artesanalmente, garantindo um sabor único e marcante",
    image: "/images/1.jpg",
  },
  {
    title: "Queijos Especiais",
    description:
      "Variedade de queijos produzidos localmente com leite de alta qualidade",
    image: "/images/2.jpg",
  },
  {
    title: "Doces Caseiros",
    description: "Deliciosos doces feitos com receitas tradicionais da região",
    image: "/images/3.jpg",
  },
  {
    title: "Doces Caseiros",
    description: "Deliciosos doces feitos com receitas tradicionais da região",
    image: "/images/4.jpg",
  },
  {
    title: "Doces Caseiros",
    description: "Deliciosos doces feitos com receitas tradicionais da região",
    image: "/images/5.jpg",
  },
  {
    title: "Doces Caseiros",
    description: "Deliciosos doces feitos com receitas tradicionais da região",
    image: "/images/6.jpg",
  },
];

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
        // "(min-width: 1536px)": { slidesToScroll: 4 },
      },
    },
    [Autoplay({ delay: 5000 })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div id="produtos" className="relative  py-16 scroll-mt-10">
      <h2 className="mb-12 text-center text-3xl font-bold">Nossos Produtos</h2>

      <div className="overflow-hidden px-px" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
            >
              <Card className="h-full overflow-hidden">
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        size="icon"
        className="absolute top-1/2  -left-4 z-10 drop-shadow-2xl"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="absolute top-1/2  -right-4 z-10 drop-shadow-2xl"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

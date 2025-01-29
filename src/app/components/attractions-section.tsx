"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const attractions = [
  {
    title: "Tour pelo Engenho",
    description: "Conheça o nosso espaço de produção e história",
    image: "/images/atracoes/3.jpg",
  },
  {
    title: "Área de Lazer",
    description: "Espaço para relaxar e aproveitar a natureza",
    image: "/images/atracoes/2.jpg",
  },
  {
    title: "Loja de Souvenirs",
    description: "Leve para casa nossos produtos e lembranças",
    image: "/images/atracoes/1.jpg",
  },
];

export function AttractionsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
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
    <section
      id="atracoes"
      className="relative  max-w-3xl 2xl:max-w-5xl mx-auto pt-10  sm:pt-16 scroll-mt-10"
    >
      <h2 className="mb-12 text-center text-3xl font-bold">Atrações</h2>

      {/* Carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Slides container */}
        <div className="backface-visible touch-pan-y ml-[calc(1rem*-1)] flex">
          {attractions.map((attraction, index) => (
            <div key={index} className="relative min-w-0 pl-4 flex-[0_0_100%]">
              <div className="overflow-hidden rounded-lg relative">
                <div className="aspect-[16/9] ">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    width={400}
                    height={300}
                    className="h-[20rem] md:h-full object-cover w-full"
                  />
                  {/* Gradient overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-10 mt-auto" /> */}
                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80  via-black/40 to-transparent">
                    <h3 className="text-2xl font-bold mb-2">
                      {attraction.title}
                    </h3>
                    <p className="text-white/90">{attraction.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        size="icon"
        className="absolute top-[55%]   -left-4 z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="absolute top-[55%]   -right-4 z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </section>
  );
}

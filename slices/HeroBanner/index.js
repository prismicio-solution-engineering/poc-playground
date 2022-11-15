import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */
const HeroBanner = ({ slice }) => (
  <section>
    <div className="relative overflow-hidden bg-white mb-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-4 pt-6 sm:px-6 lg:px-8" />
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <div className="block xl:inline">
                  <PrismicRichText field={slice.primary.title_top_line} />{" "}
                </div>
                <div className="block text-indigo-600 xl:inline">
                  <PrismicRichText field={slice.primary.title_bottom_line} />
                </div>
              </div>
              <div className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                <PrismicRichText field={slice.primary.description} />
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {slice.variation == "default" && (
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:mr-3">
                    {slice?.items?.map((item, idx) => (
                      <PrismicLink
                        key={idx}
                        className={
                          item.cta_type == "Primary"
                            ? "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            : "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                        }
                        field={item.cta_link}
                      ></PrismicLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={slice.primary.image.url} alt={slice.primary.image.alt}
        />
      </div>
    </div>
  </section>
);

export default HeroBanner;

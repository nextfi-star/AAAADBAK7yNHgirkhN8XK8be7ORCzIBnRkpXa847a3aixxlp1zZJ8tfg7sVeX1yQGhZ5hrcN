import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";

export const How_options = () => {
  const t = useTranslations("landing");
  const mainHowRowData = useMemo(
    () => [
      {
        className: "how__row",
        items: [
          {
            className: "how__item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/icons_cube.svg",
              width: 136,
              height: 136,
              alt: "Cube",
            },
            text: {
              title: t("compStck"),
              description: t("stckDesc"),
            },
          },
          {
            className: "how__item big-item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/stars_max.svg",
              width: 200,
              height: 200,
              alt: "Cube",
            },
            text: {
              title: t("artIntli"),
              description: t("artDesc"),
            },
          },
          {
            className: "how__item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/icons_bubbles.svg",
              width: 136,
              height: 136,
              alt: "Cube",
            },
            text: {
              title: t("presciMetal"),
              description: t("metalDesc"),
            },
          },
        ],
      },
      {
        className: "how__row",
        items: [
          {
            className: "how__item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/stars_bank.svg",
              width: 136,
              height: 136,
              alt: "Cube",
            },
            text: {
              title: t("corptBonds"),
              description: t("bondsDesc"),
            },
          },
          {
            className: "how__item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/oin_selector.svg",
              width: 136,
              height: 136,
              alt: "Cube",
            },
            text: {
              title: t("oilSctr"),
              description: t("oilDesc"),
            },
          },
          {
            className: "how__item",
            dataAos: "fade-up",
            dataAosDuration: 1500,
            dataAosOnce: true,
            image: {
              src: "/main/icons_cube.svg",
              width: 136,
              height: 136,
              alt: "Cube",
            },
            text: {
              title: t("startup"),
              description: t("startup_desc"),
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="how__content">
      {mainHowRowData.map((row, index) => (
        <div key={index} className={row.className}>
          {row.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={item.className}
              data-aos={item.dataAos}
              data-aos-duration={item.dataAosDuration}
              data-aos-once={item.dataAosOnce}
            >
              <Image
                alt={item.image.alt}
                height={item.image.height}
                src={item.image.src}
                width={item.image.width}
              />
              <div className="how__item-content big-item">
                <span className="how__item-title">{item.text.title}</span>
                <span className="how__item-text">{item.text.description}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

import slack from "../../assets/slack.png";
import amazon from "../../assets/amazon.png";
import woocommerce from "../../assets/woocommerce.png";
import meundies from "../../assets/meundies.png";
import sitepoint from "../../assets/sitepoint.png";

export default function Company() {
  const logos = [
    { img: slack, alt: "slack" },
    { img: amazon, alt: "amazon" },
    { img: woocommerce, alt: "woocommerce" },
    { img: meundies, alt: "meundies" },
    { img: sitepoint, alt: "sitepoint" },
  ];

  return (
    <section id="Company" className="container mx-auto gap-8 overflow-hidden flex-responsive items-start md:items-center">
      <h2 className="w-64 shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 text-base md:text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </h2>

      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo.img} alt={logo.alt} />
        ))}

        {/* Doble logo for smaot animations */}
        {logos.map((logo, index) => (
          <img key={`Doble ${index}`} src={logo.img} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}

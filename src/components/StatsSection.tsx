import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export default function StatsSection(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const stats: Stat[] = [
    { label: "Tickets Resolved", value: 35000, suffix: "+" },
    { label: "Customer Satisfaction", value: 98, suffix: "%" },
    { label: "Resolution Time Reduced", value: 30, suffix: "%" },
    { label: "Self-Service Rate", value: 45, suffix: "%" },
  ];

  return (
    <section ref={ref} className="bg-[#006D5B] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:text-left text-center">
          <span className="inline-block bg-blue bg-opacity-20 text-white px-3 py-1 text-sm rounded-full mb-4">
            SafariDesk Customer Support
          </span>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Streamline your support, <br />{" "}
            <span className="bg-gradient-to-r from-teal-300 to-green-300 text-transparent bg-clip-text">
              delight your customers
            </span>
          </h2>
          <p className="text-emerald-200 max-w-xl md:mx-0 mx-auto">
            Empower your team with a powerful ticketing system and a seamless
            customer portal designed for efficiency.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center md:text-left">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold">
                {isInView ? (
                  <CountUp
                    end={s.value}
                    duration={2.5}
                    suffix={s.suffix || ""}
                    enableScrollSpy
                  />
                ) : (
                  "0"
                )}
              </p>
              <p className="text-sm text-emerald-200">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
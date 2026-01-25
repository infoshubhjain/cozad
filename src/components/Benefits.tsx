import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Droplets, AlertTriangle, Settings } from "lucide-react";

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Benefits = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Yield Increase",
      description: "Average improvement in crop yield per hectare",
    },
    {
      icon: Droplets,
      value: 60,
      suffix: "%",
      label: "Water Reduction",
      description: "Less water consumption through precision irrigation",
    },
    {
      icon: AlertTriangle,
      value: 85,
      suffix: "%",
      label: "Early Detection",
      description: "Disease and pest detection before visible symptoms",
    },
    {
      icon: Settings,
      value: 90,
      suffix: "%",
      label: "Automation Rate",
      description: "Farming decisions made without human intervention",
    },
  ];

  const objectives = [
    "Increase crop yield per hectare through data-driven optimization",
    "Reduce water, fertilizer, and pesticide usage for sustainability",
    "Enable early detection of stress, disease, and nutrient deficiency",
    "Continuously adapt farming decisions using learning models",
    "Operate with minimal human intervention for efficiency",
  ];

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            System Objectives
          </h2>
          <div className="space-y-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-white/90">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

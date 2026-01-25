import { motion } from "framer-motion";
import { 
  Database, 
  Satellite, 
  Server, 
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Technology = () => {
  const layers = [
    {
      number: "01",
      title: "Field Sensing Layer",
      description: "High-resolution ground truth data from soil, environmental, and crop sensors",
      icon: Satellite,
      items: ["Soil moisture at multiple depths", "NPK nutrient probes", "Multispectral cameras", "Chlorophyll fluorescence"],
      color: "from-primary to-primary/70",
    },
    {
      number: "02", 
      title: "Connectivity & Edge",
      description: "Low-power wide-area protocols with edge processing for reduced latency",
      icon: Server,
      items: ["LoRaWAN for large farms", "NB-IoT/LTE-M support", "Edge noise filtering", "Anomaly detection"],
      color: "from-accent to-accent/70",
    },
    {
      number: "03",
      title: "Data Platform Layer",
      description: "Unified time-series platform with geospatial indexing and external data integration",
      icon: Database,
      items: ["Time-series database", "Satellite imagery fusion", "Weather forecast integration", "Historical data lake"],
      color: "from-secondary-foreground to-secondary-foreground/70",
    },
    {
      number: "04",
      title: "Intelligence Layer",
      description: "ML models for prediction, optimization, and autonomous decision-making",
      icon: Smartphone,
      items: ["Yield prediction models", "Disease detection CNN", "Reinforcement learning", "Real-time recommendations"],
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="technology" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            System Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Tightly Coupled{" "}
            <span className="text-gradient">Intelligence Layers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our production-grade architecture seamlessly integrates sensing, 
            processing, and actuation for truly autonomous farming.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative p-6 lg:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-soft transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4">
                    <div className={`text-6xl font-bold bg-gradient-to-br ${layer.color} bg-clip-text text-transparent opacity-50`}>
                      {layer.number}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <layer.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-xl">
                      {layer.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {layer.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;

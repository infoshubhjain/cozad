import { motion } from "framer-motion";
import { 
  Cpu, 
  Wifi, 
  CloudRain, 
  Leaf, 
  BarChart3, 
  Zap,
  Thermometer,
  Droplets
} from "lucide-react";
import sensorImage from "@/assets/sensor-device.jpg";
import droneImage from "@/assets/drone-field.jpg";
import aiImage from "@/assets/ai-agriculture.jpg";

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Soil Sensing",
      description: "Multi-depth moisture, temperature, and NPK nutrient probes for precise soil analysis",
    },
    {
      icon: CloudRain,
      title: "Weather Integration",
      description: "Real-time weather data and forecasting to optimize irrigation and protection",
    },
    {
      icon: Cpu,
      title: "AI Decision Engine",
      description: "Machine learning models for yield prediction, disease detection, and optimization",
    },
    {
      icon: Wifi,
      title: "IoT Connectivity",
      description: "LoRaWAN, NB-IoT, and mesh networks for seamless field coverage",
    },
    {
      icon: Zap,
      title: "Smart Actuation",
      description: "Automated irrigation valves, fertilizer spreaders, and precision sprayers",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights, historical trends, and actionable recommendations",
    },
  ];

  const showcaseItems = [
    {
      image: sensorImage,
      title: "Smart Sensors",
      description: "Deploy IoT sensors across your fields for continuous soil and environmental monitoring",
    },
    {
      image: droneImage,
      title: "Aerial Surveillance",
      description: "Drone-mounted multispectral cameras detect crop stress before visible symptoms appear",
    },
    {
      image: aiImage,
      title: "AI Analytics",
      description: "Deep learning models analyze data streams to optimize every farming decision",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-earth">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Comprehensive Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Five Integrated Layers of{" "}
            <span className="text-gradient">Smart Farming</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From ground sensors to cloud analytics, our end-to-end system 
            captures data, makes decisions, and takes action autonomously.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent flex flex-col justify-end p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium text-sm">Technology</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

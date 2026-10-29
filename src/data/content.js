import charger6kwAcImage from "../assets/charger-6kw-ac.png";
import charger12kwAcImage from "../assets/charger-12kw-ac.png";
import charger30kwImage from "../assets/charger-30kw.png";
import charger60kwImage from "../assets/charger-60kw.png";
import charger120kwImage from "../assets/charger-120kw.png";
import charger180kwImage from "../assets/charger-180kw.png";
import charger240kwImage from "../assets/charger-240kw.png";
import bessSystemImage from "../assets/bess-system.png";
import evDcFastChargingImage from "../assets/ev-dc-fast-charging.png";
import evPassengerFleetImage from "../assets/ev-passenger-fleet.png";
import evCargoFleetImage from "../assets/ev-cargo-fleets.png";

export const pageTabs = ["Marketplace", "Charger Classes", "Returns", "Impact"];

export const marketStats = [
  { label: "Asset Capacity", value: "6 kW - 240 kW | Scalable Storage" },
  { label: "Coverage Areas", value: "Urban Hubs - Logistics - Long Haul Routes" },
  { label: "Investor Entry", value: "Rs 1.5K - Rs 15L+" },
];

export const marketplaceHighlights = [
  "High-utilization infrastructure across charging networks, energy storage, and fleet operations.",
  "Asset-backed exposure to premium hardware, software, AI optimization, and energy management.",
  "Flexible participation in EV charging, battery storage, passenger fleets, and cargo logistics.",
];

export const steps = [
  {
    title: "Browse",
    description: "Explore opportunities across charging networks, energy storage, and fleet infrastructure.",
  },
  {
    title: "Model",
    description: "Adjust your investment size to preview returns, risks, and lock-in periods.",
  },
  {
    title: "Deploy",
    description: "Invest in live assets backed by transparent underwriting and real-time monitoring.",
  },
];

export const segmentShowcaseStats = [
  { label: "Active Segments", value: "3" },
  { label: "Autonomous monitoring", value: "24/7" },
  { label: "Response time", value: "<1s" },
  { label: "System uptime", value: "99.9%" },
  { label: "Total TVL", value: "Rs 190M+" },
];

export const investyzSegmentsLive = [
  {
    id: "autonomous-maintenance-engines",
    title: "Battery Energy Storage",
    category: "Battery Energy Storage",
    metric: "99% uptime for CPOs",
    tvl: "Rs 32.0M",
    investors: "1,923",
    apy: "11.5%",
    accent: "from-emerald-400 via-cyan-300 to-blue-400",
    accentDark: "#10b981",
    icon: "BESS",
    image: bessSystemImage,
    description:
      "Support grid-scale battery storage systems that store renewable energy and stabilize power grids.",
    tags: ["Grid Stabilization", "Peak Shaving", "Frequency Regulation", "Backup Power"],
    details: {
      title: "Inside Battery Energy Storage",
      subtitle:
        "Strategic energy storage systems that stabilize the grid, shave peak demand, and provide long-duration energy management for charging networks and industrial consumers.",
      features: ["Grid Stabilization", "Peak Shaving", "Frequency Regulation", "Backup Power"],
      snapshot: [
        { label: "Lock Period", value: "90 days" },
        { label: "Min. Investment", value: "Rs 10K" },
        { label: "Risk Level", value: "Low" },
      ],
    },
  },
  {
    id: "zero-downtime-power-orchestration",
    title: "EV DC Fast Charging",
    category: "EV DC Fast Charging",
    metric: "30% reduction in energy costs",
    tvl: "Rs 28.0M",
    investors: "3,421",
    apy: "13.5%",
    accent: "from-blue-400 via-indigo-300 to-cyan-300",
    accentDark: "#2a56c6",
    icon: "EV",
    image: evDcFastChargingImage,
    description:
      "Accelerate the electric vehicle revolution by investing in fast-charging infrastructure.",
    tags: ["High-Power DC Fast Charging", "Strategic Locations", "Smart Grid Integration", "24/7 Availability"],
    details: {
      title: "Inside EV DC Fast Charging",
      subtitle:
        "High-power charging hubs are optimized for fast vehicle turnaround, energy cost savings, and intelligent demand response.",
      features: ["High-Power DC Fast Charging", "Strategic Locations", "Smart Grid Integration", "24/7 Availability"],
      snapshot: [
        { label: "Lock Period", value: "30 days" },
        { label: "Min. Investment", value: "Rs 150" },
        { label: "Risk Level", value: "Low" },
      ],
    },
  },
  {
    id: "self-balancing-grid",
    title: "The Self-Balancing Grid",
    category: "EV Passenger Fleets",
    metric: "40% increase in component life",
    tvl: "Rs 24.0M",
    investors: "1,768",
    apy: "12.0%",
    accent: "from-fuchsia-400 via-violet-300 to-blue-300",
    accentDark: "#a855f7",
    icon: "PF",
    image: evPassengerFleetImage,
    description:
      "Intelligent passenger fleet charging adapts schedules, routing, and charge cycles to maximize uptime while extending vehicle component life.",
    tags: ["Fleet Charging", "Predictive", "Reliability"],
  },
  {
    id: "ev-cargo-fleets",
    title: "Dynamic Mission Planning",
    category: "EV Cargo Fleets",
    metric: "60% route efficiency gain",
    tvl: "Rs 19.5M",
    investors: "982",
    apy: "14.0%",
    accent: "from-amber-400 via-orange-300 to-rose-300",
    accentDark: "#f59e0b",
    icon: "CF",
    image: evCargoFleetImage,
    description:
      "Cargo fleet planning links charging availability, route efficiency and delivery schedules to reduce idle time and maximise commercial utilization.",
    tags: ["Route Optimization", "Cargo Ready", "Networked"],
  },
];

export const investyzSegmentsUpcoming = [
  {
    id: "vehicle-to-grid",
    title: "Vehicle-to-Grid (V2G)",
    eyebrow: "Bidirectional Energy Flow",
    status: "Coming Soon",
    accentColor: "#06b6d4",
    description:
      "Turn EV fleets into distributed grid assets and sell stored energy back during peak demand windows.",
  },
  {
    id: "green-hydrogen",
    title: "Green Hydrogen Corridors",
    eyebrow: "Next-Gen Clean Fuel",
    status: "On Roadmap",
    accentColor: "#8b5cf6",
    description:
      "Infrastructure-backed investment in hydrogen fueling corridors for heavy commercial transport decarbonization.",
  },
];

export const segmentBenefits = [
  {
    title: "High Yield Returns",
    stat: "14%",
    statLabel: "Max APY",
    icon: "APY",
    body: "Earn up to 14% APY across 4 live infrastructure segments, from EV fast charging to cargo fleet AI.",
  },
  {
    title: "Real Asset Backing",
    stat: "Rs 190M+",
    statLabel: "Total TVL",
    icon: "RWA",
    body: "Every token is backed by physical infrastructure including chargers, batteries, and fleets that generate real revenue.",
  },
  {
    title: "Carbon Neutral",
    stat: "50K+",
    statLabel: "Tons CO2 Offset",
    icon: "CO2",
    body: "Your investments power lower-emission infrastructure and accelerate India's sustainable mobility transition.",
  },
  {
    title: "Periodic Payouts",
    stat: "13K+",
    statLabel: "Active Investors",
    icon: "PAY",
    body: "Receive rewards on flexible schedules including weekly, monthly, quarterly and annual distributions.",
  },
];

export const trustedCertifications = [
  "Startup India Certified",
  "MSME Registered",
  "ISO 9001 Certified",
  "ISO 14001 Certified",
];

export const segmentFlow = [
  {
    step: "01",
    title: "Connect Your Wallet",
    body: "Link your wallet to access infrastructure-backed opportunities on the network.",
  },
  {
    step: "02",
    title: "Choose Your Segment",
    body: "Select from live battery storage, EV fast charging, and EV passenger fleet opportunities.",
  },
  {
    step: "03",
    title: "Invest & Earn",
    body: "Pick a plan that fits your goals and start earning daily rewards immediately.",
  },
];

export const segmentProcess = [
  {
    step: "01",
    title: "Asset Identification",
    body: "We identify high-potential infrastructure opportunities, starting with EV DC fast chargers.",
  },
  {
    step: "02",
    title: "Asset Deployment & Structuring",
    body: "Assets are deployed or partnered with, and structured into investable opportunities.",
  },
  {
    step: "03",
    title: "Fractional Investment",
    body: "Investors can participate with smaller amounts through fractional ownership.",
  },
  {
    step: "04",
    title: "Revenue Generation",
    body: "Assets generate real-world income through usage, such as EV charging demand.",
  },
  {
    step: "05",
    title: "Returns Distribution",
    body: "Investors receive returns based on actual asset performance.",
  },
];

export const segments = [
  {
    id: "charger-6kw-ac",
    name: "6 kW AC Charger",
    power: "6 kW",
    site: "Homes, apartment parking and workplace bays",
    useCase: "Overnight AC charging",
    description:
      "A compact AC charger built for long-dwell parking where vehicles can charge gradually over several hours with a simpler electrical setup.",
    features: ["Easy wall-mount installation", "Ideal for overnight parking", "Low infrastructure load"],
    risk: "Low Risk",
    riskLevel: "Low",
    yieldRate: 9.5,
    lockDays: 45,
    minAmount: 1500,
    maxAmount: 8000,
    image: charger6kwAcImage,
    riskDrivers: [
      "Residential and workplace usage can vary with occupancy and EV adoption.",
      "Lower power output means revenue depends on long parking durations rather than fast session turnover.",
      "Host-site decisions can influence installation timing and charger availability.",
    ],
  },
  {
    id: "charger-12kw-ac",
    name: "12 kW AC Charger",
    power: "12 kW",
    site: "Hotels, offices and premium destination parking",
    useCase: "Destination AC charging",
    description:
      "A higher-capacity AC charger suited to destination locations where drivers stay for multiple hours and operators want stronger daily throughput than entry AC setups.",
    features: ["Balanced AC power level", "Good fit for destination parking", "Lower capex than DC fast charging"],
    risk: "Low Risk",
    riskLevel: "Low",
    yieldRate: 10.5,
    lockDays: 60,
    minAmount: 3000,
    maxAmount: 12000,
    image: charger12kwAcImage,
    riskDrivers: [
      "Destination charging demand depends on parking dwell time and host-property occupancy.",
      "Moderate charging speed may be less attractive where users expect quick top-ups.",
      "Operating upside is tied to repeat site visits rather than highway-scale traffic.",
    ],
  },
  {
    id: "charger-30kw",
    name: "30 kW Urban Fast Charger",
    power: "30 kW",
    site: "Retail parking, cafes and office parks",
    useCase: "Short dwell-time charging",
    description:
      "Entry-level DC fast charging for daily commuter destinations where drivers need a quick top-up during errands or work hours.",
    features: ["Compact install footprint", "Ideal for mixed-use sites", "Reliable for 2-3 vehicles per hour"],
    risk: "Low Risk",
    riskLevel: "Low",
    yieldRate: 11.5,
    lockDays: 60,
    minAmount: 2500,
    maxAmount: 15000,
    image: charger30kwImage,
    riskDrivers: [
      "Urban utilization can shift with parking access, local traffic and nearby charger competition.",
      "Smaller DC sites rely on repeat local demand rather than large fleet contracts.",
      "Power availability and landlord approvals can affect deployment speed.",
    ],
  },
  {
    id: "charger-60kw",
    name: "60 kW Retail Fast Charger",
    power: "60 kW",
    site: "Shopping malls, hotels and commercial centers",
    useCase: "Peak-hour retail charging",
    description:
      "A dependable fast charger for busy commercial sites with strong daytime traffic and consistent dwell times.",
    features: ["High utilization potential", "Fleet-ready support", "Fast installation turnaround"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 13.5,
    lockDays: 90,
    minAmount: 8000,
    maxAmount: 30000,
    image: charger60kwImage,
    riskDrivers: [
      "Retail demand can fluctuate with footfall, seasonality and host-site merchandising.",
      "Session turnover depends on uptime and customer dwell behavior.",
      "Commercial landlords may impose stricter operating and branding requirements.",
    ],
  },
  {
    id: "charger-120kw",
    name: "120 kW Highway Fast Charger",
    power: "120 kW",
    site: "Highway service plazas and premium city corridors",
    useCase: "Intercity travel charging",
    description:
      "High-speed charging infrastructure designed for drivers on longer routes and premium urban corridors with high turnover.",
    features: ["Highway grade hardware", "Premium charging experience", "Ideal for 20-40 minute stops"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 15,
    lockDays: 120,
    minAmount: 15000,
    maxAmount: 50000,
    image: charger120kwImage,
    riskDrivers: [
      "Highway volumes can change with route demand, seasonality and nearby competition.",
      "Grid readiness and maintenance response are critical to uptime.",
      "Long-route charging behavior may shift as vehicle ranges improve.",
    ],
  },
  {
    id: "charger-180kw",
    name: "180 kW Ultra-Fast Charger",
    power: "180 kW",
    site: "Travel hubs, logistics parks and destination stops",
    useCase: "High-demand travel corridors",
    description:
      "Ultra-fast charging for high-traffic routes where throughput and uptime are critical to customer satisfaction.",
    features: ["Ultra-fast charging", "Supports heavy traffic sites", "Advanced power management"],
    risk: "Medium Risk",
    riskLevel: "Medium",
    yieldRate: 16.5,
    lockDays: 150,
    minAmount: 25000,
    maxAmount: 85000,
    image: charger180kwImage,
    riskDrivers: [
      "High-throughput sites are more exposed to uptime issues and maintenance delays.",
      "Demand concentration at travel hubs can create sharper peak and off-peak swings.",
      "Energy costs and power management matter more at this utilization level.",
    ],
  },
  {
    id: "charger-240kw",
    name: "240 kW Flagship Charger",
    power: "240 kW",
    site: "Anchor fleet depots and major destination hubs",
    useCase: "Heavy-duty fleet and premium charging",
    description:
      "Flagship charging infrastructure built for major hubs where rapid turnover and premium service levels drive higher revenue potential.",
    features: ["Flagship charger class", "Fleet and highway ready", "Best-in-class throughput"],
    risk: "High Risk",
    riskLevel: "High",
    yieldRate: 18,
    lockDays: 180,
    minAmount: 40000,
    maxAmount: 150000,
    image: charger240kwImage,
    riskDrivers: [
      "Flagship deployments require strong host partnerships and consistent high-volume traffic.",
      "Larger ticket sizes increase concentration risk for smaller investors.",
      "Project performance is more sensitive to utilization assumptions and site execution quality.",
    ],
  },
];

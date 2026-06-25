// Catalog for the ProtoHouse store. The material ecosystem is the same set of
// channels, brackets, and hubs that the Education guides build on, so a learner
// can buy exactly what a project calls for.

export const categories = [
  { id: "structure", label: "Structure" },
  { id: "motion", label: "Motion" },
  { id: "electronics", label: "Electronics" },
  { id: "kits", label: "Kits" },
];

export const products = [
  {
    id: "u-channel",
    name: "U-Channel",
    category: "structure",
    price: 8,
    unit: "each",
    description:
      "The backbone of the ecosystem. 16mm on-center hole pattern so every bracket and hub lines up. Sold in 3, 5, and 7-hole lengths.",
  },
  {
    id: "l-bracket",
    name: "L-Bracket",
    category: "structure",
    price: 3,
    unit: "each",
    description:
      "90-degree bracket that ties channels together or hangs a component off the grid. The workhorse connector in every build.",
  },
  {
    id: "gusset",
    name: "Flat Gusset",
    category: "structure",
    price: 2.5,
    unit: "each",
    description:
      "Flat plate for joining channels in-plane and stiffening a frame. Same hole pattern, infinite uses.",
  },
  {
    id: "motor-hub",
    name: "Motor Hub",
    category: "motion",
    price: 6,
    unit: "each",
    description:
      "Adapts a motor output shaft to wheels, sprockets, and gears. Press-fit bore options for our standard gearmotors.",
  },
  {
    id: "bearing-block",
    name: "Bearing Block",
    category: "motion",
    price: 9,
    unit: "each",
    description:
      "Mounts a bearing onto the channel grid for free-spinning axles and steering tubes. The heart of the swerve build.",
  },
  {
    id: "bevel-set",
    name: "Bevel Gear Set",
    category: "motion",
    price: 14,
    unit: "pair",
    description:
      "Matched bevel pair for turning power 90 degrees. Hardened teeth for low backlash in drivetrains.",
  },
  {
    id: "gearmotor",
    name: "12V Gearmotor",
    category: "electronics",
    price: 18,
    unit: "each",
    description:
      "Reliable brushed gearmotor with an encoder option. The default actuator for beginner drivetrains.",
  },
  {
    id: "motor-driver",
    name: "Dual Motor Driver",
    category: "electronics",
    price: 22,
    unit: "each",
    description:
      "Drives two motors with current sensing and a simple logic interface. Bolts straight to a flat bracket.",
  },
  {
    id: "sensor-array",
    name: "Reflectance Sensor Array",
    category: "electronics",
    price: 11,
    unit: "each",
    description:
      "Line-following sensor bar used in the Line-Following Rover guide. Mounts to a flat bracket at ride height.",
  },
  {
    id: "starter-kit",
    name: "Tank Bot Starter Kit",
    category: "kits",
    price: 99,
    unit: "kit",
    description:
      "Everything the Tabletop Tank Bot guide calls for: channels, brackets, hubs, two gearmotors, a driver, and tracks. The fastest way to start building.",
  },
  {
    id: "swerve-kit",
    name: "Mini Swerve Kit",
    category: "kits",
    price: 249,
    unit: "kit",
    description:
      "All the parts for one Mini Swerve Module: swerve channel, bearing blocks, bevel set, motors, and a steering encoder.",
  },
];

// Options for the 3D print-on-demand service.
export const printMaterials = [
  { id: "pla", label: "PLA", note: "Rigid, great for prototypes", pricePerGram: 0.08 },
  { id: "petg", label: "PETG", note: "Tougher, mild heat resistance", pricePerGram: 0.1 },
  { id: "abs", label: "ABS", note: "Durable, higher heat resistance", pricePerGram: 0.12 },
  { id: "tpu", label: "TPU", note: "Flexible, rubber-like", pricePerGram: 0.16 },
  { id: "nylon-cf", label: "Nylon-CF", note: "Stiff, structural, carbon-filled", pricePerGram: 0.32 },
];

export const printColors = [
  "Black",
  "White",
  "Gray",
  "Red",
  "Blue",
  "Orange",
  "Natural / Clear",
];

export const printInfills = [
  { id: "15", label: "15% — light, display parts" },
  { id: "30", label: "30% — general purpose" },
  { id: "50", label: "50% — load-bearing" },
  { id: "100", label: "100% — maximum strength" },
];

// File types we accept for the print service.
export const acceptedPrintTypes = ".stl,.3mf,.obj,.step,.stp";

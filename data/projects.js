// Portfolio of past work shown on /projects (and the featured card on the home page).
// Fill in photos, writeup links, and repo/CAD links as they become available.
export const projects = [
  {
    id: "mini-swerve-drive",
    title: "Mini Swerve Drive",
    badge: "Flagship",
    summary:
      "A 12×12 in. custom swerve drive built around a purpose-designed PCB carrier board and field-oriented motor control. Compact, but it proves the point. We can pull mechanical, electrical, and firmware into one working stack.",
    skills: [
      "Mechanical design",
      "PCB design (KiCad)",
      "ESP32-S3 master controller",
      "MKS ESP32 FOC drivers",
      "AS5600 encoders",
      "ELRS receiver",
      "Motor control algorithms",
      "System integration",
    ],
    photoPlaceholder: "Add swerve drive photo",
    writeupHref: null, // TODO: link a detailed writeup page or external post.
    links: [], // TODO: add e.g. { label: "GitHub", href: "..." }, { label: "CAD", href: "..." }
  },
  {
    id: "custom-drone",
    title: "Custom Drone",
    summary:
      "A drone built from the ground up. It pairs a custom electronics stack with flight controller integration and carefully tuned RF links.",
    skills: [
      "Aerospace mechanical design",
      "Flight controller integration",
      "RF systems",
      "Power systems",
    ],
    photoPlaceholder: "Add drone photo",
    writeupHref: null, // TODO
    links: [], // TODO: GitHub / build log
  },
  {
    id: "frc-competition-robot",
    title: "FRC Competition Robot",
    summary:
      "A full FRC competition robot, delivered under tight competitive constraints. Large-scale mechanical engineering, run as a team from start to finish.",
    skills: [
      "Large-scale mechanical engineering",
      "Team project management",
      "Design under constraints",
      "Real-world deployment",
    ],
    photoPlaceholder: "Add FRC robot photo",
    writeupHref: null, // TODO
    links: [], // TODO
  },
  {
    id: "ai-vocal-assistant",
    title: "AI Vocal Assistant",
    badge: "Congressional App Challenge",
    summary:
      "A team-built AI vocal assistant, and a winner of the Congressional App Challenge at the district level. The Challenge is a national student coding competition.",
    skills: ["Software engineering", "AI / ML", "Technical communication"],
    photoPlaceholder: "Add project screenshot",
    writeupHref: null, // TODO
    links: [], // TODO: GitHub / demo
  },
];

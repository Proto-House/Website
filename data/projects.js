// Portfolio of past work shown on /projects (and the featured card on the home page).
// `projects` are flagship work; `sideProjects` are smaller things we've made along the way.
// `image` is the card hero (use a "title_*" file when one exists in the project's image folder).
// `overview` + `media` populate the inline writeup dropdown on each card. Skip .HEIC files —
// browsers can't render them.

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
    image: "/images/Mini swerve/title_mini_swerve.png",
    overview: [
      "The Mini Swerve Drive is a compact four-module swerve drivetrain. Every module steers and drives on its own, mounted on a 12.25-inch square chassis. The robot moves in any direction while rotating at the same time, the same omnidirectional control system you'll find on competition robots and industrial mobile platforms. Each module pairs a brushless drive motor with a brushless steering motor through an 8:1 reduction. A magnetic encoder closes the loop on wheel angle, giving us precise and repeatable positioning.",
      "What makes this build different: we engineered nearly every layer in-house. The mechanical assembly came together in CAD from scratch. The control electronics live on a custom PCB carrier board we designed around an ESP32-S3 master controller. Field-oriented motor control runs on dedicated FOC drivers that talk over a shared bus. The master pulls commands from a radio receiver, runs swerve kinematics in real time, and coordinates eight motors at once. Mechanical design, custom circuitry, PCB layout, embedded firmware, motor control algorithms; one working platform pulls all of it together.",
      "The Mini Swerve Drive doubles as proof of engineering capability and as the foundation for our education work. It shows the same core skills industrial automation demands: precise motion control, robust electronics design, system integration, and the ability to take a complex mechatronic system from idea to working hardware. A formal physical build is on the way. We'll update this writeup once it's done.",
    ],
    media: [
      { type: "image", src: "/images/Mini swerve/swerve module.png", alt: "Swerve module" },
      { type: "image", src: "/images/Mini swerve/swerve exploded.png", alt: "Swerve module exploded view" },
      { type: "image", src: "/images/Mini swerve/swerve pcb.png", alt: "Swerve PCB carrier board" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Eventide-03/Mini-Swerve" },
    ],
  },
  {
    id: "Vision Driven Autonomous Arm",
    title: "Vision Driven Autonomous Arm",
    summary:
      "Our very first industry style project that sparked a year of research into vision driven automation. This robot arm was completely coded in a three-day hackathon, driven by an AI vision model, along with many open source softwares such as OpenCV, the arm is able to detect parts in frame, then to plan and exectue the motions depending on the scenario.",
    skills: [
      "Computer vision",
      "Robotic manipulation",
      "AI / ML inference",
      "Embedded control",
      "System integration",
    ],
    image: "/images/Misc Images/cool-arm.png",
    links: [],
    // Writeup intentionally omitted for now.
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
    image: "/images/FRC Robot/title_robot.png",
    overview:
      "Our FRC season build — mechanical, electrical, and controls integrated under competition deadlines. The full-robot CAD, the routed parts layout, the brain pan (electronics tray), the intake, and the indexer all came together into a working robot. Below are CAD shots, in-progress photos, and bench tests.",
    media: [
      { type: "image", src: "/images/FRC Robot/cool bot pic.JPG", alt: "Finished competition robot" },
      { type: "image", src: "/images/FRC Robot/full robot.webp", alt: "Full robot CAD" },
      { type: "image", src: "/images/FRC Robot/brain pan.jpg", alt: "Electronics brain pan" },
      { type: "image", src: "/images/FRC Robot/indexer.webp", alt: "Indexer mechanism" },
      { type: "image", src: "/images/FRC Robot/intake.webp", alt: "Intake mechanism" },
      { type: "image", src: "/images/FRC Robot/routed parts.webp", alt: "Routed parts layout" },
      { type: "image", src: "/images/FRC Robot/image.webp", alt: "Robot detail" },
      { type: "video", src: "/images/FRC Robot/Indexer Test.mov", title: "Indexer test", defaultVolume: 0.1 },
      { type: "video", src: "/images/FRC Robot/intake test.mov", title: "Intake test", defaultVolume: 0.5 },
      { type: "video", src: "/images/FRC Robot/brain pan demo.mov", title: "Brain pan demo" },
    ],
    links: [],
  },
  {
    id: "ai-vocal-assistant",
    title: "Aries — AI Vocal Assistant",
    badge: "Congressional App Challenge Winner 2024",
    summary:
      "A dictation-controlled computer assistant. Speak to Aries and it operates your machine end to end — browser, documents, mouse and keyboard, plus Gemini-powered answers — all hands-free.",
    skills: [
      "Software engineering",
      "AI / ML",
      "Speech recognition",
      "Google Gemini integration",
      "Technical communication",
    ],
    image: "/images/Vocal assistant/title_vocal_assistant.png",
    overview:
      "Aries is a dictation-controlled computer assistant we built as a team, and the project that won the 2024 Congressional App Challenge. It runs full computer actions from voice: browser support (search the web, open sites, navigate hands-free), a voice-controlled notepad for opening and editing documents, full mouse and keyboard control for anything not directly supported, and Google Gemini integration to answer queries and provide information on the fly.",
    media: [
      { type: "image", src: "/images/Vocal assistant/demo image.png", alt: "Aries demo screenshot" },
      { type: "youtube", id: "GzjIs1BqSg8", title: "Aries demo (Congressional App Challenge submission)" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/OmyDaGreat/Aries/tree/main" },
    ],
  },
];

export const sideProjects = [
  {
    id: "custom-drone",
    title: "Custom Drone",
    summary:
      "A drone built from the ground up — custom electronics stack, flight controller integration, and carefully tuned RF links.",
    image: "/images/Drone/drone cad.png",
    overview:
      "A drone designed and built end to end. The CAD model defines the airframe, with motors, ESCs, and the flight controller stack laid out around it. Bench tests below: motors first, then a full drone test.",
    media: [
      { type: "image", src: "/images/Drone/drone cad.png", alt: "Drone CAD model" },
      { type: "video", src: "/images/Drone/motor test vid.MOV", title: "Motor test" },
      { type: "video", src: "/images/Drone/drone test vid.MOV", title: "Drone test", defaultVolume: 0.5 },
    ],
  },
  {
    id: "macropad",
    title: "Macropad",
    summary:
      "A custom mechanical macropad with a hand-routed PCB and bespoke firmware. Small build, the whole electronics-firmware-mechanical loop.",
    image: "/images/macro pad/macropad.png",
    overview:
      "A compact mechanical macropad with a custom PCB and firmware. Designed the board, soldered it up, and brought it to life with custom key mappings.",
    media: [
      { type: "image", src: "/images/macro pad/hackpad cad.png", alt: "Macropad CAD" },
      { type: "image", src: "/images/macro pad/macropad schematic.png", alt: "Macropad schematic" },
      { type: "image", src: "/images/macro pad/macropad pcb design.png", alt: "Macropad PCB design" },
      { type: "video", src: "/images/macro pad/working pic.MOV", title: "Macropad working demo" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Eventide-03/Hackpad" },
    ],
  },
  {
    id: "ftc-mecanum",
    title: "Mecanum Drivetrain",
    summary:
      "A four-wheel mecanum drivetrain with the drive software to match holonomic, omnidirectional motion coded with precise autonomous commands. The same kinematic model that underpins AGVs and material-handling robots in industrial automation.",
    image: "/images/FTC Mecanum/Title_FTC CAD.webp",
    overview:
      "Mecanum wheels give you omnidirectional motion. The drivetrain can translate, strafe, and rotate while keeping its heading locked the whole time. That's how automated guided vehicles get around on a factory floor. We designed the four-wheel platform and wrote the controls software end to end: inverse kinematics for the four mecanum wheels, field-oriented teleop, and the driver interface. The build is small. The problem is the same one we solve at industrial scale.",
    media: [
      { type: "video", src: "/images/FTC Mecanum/mecanum vid.mov", title: "Mecanum drivetrain demo" },
    ],
  },
  {
    id: "frc-driver-station",
    title: "FRC Driver Station",
    summary:
      "A purpose-built FRC driver station. Custom layout for the operator inputs and a clean home for the laptop and radio.",
    image: "/images/driver station/driverstation.webp",
    overview:
      "Our custom FRC driver station, built to keep controls, the radio, and the driver laptop in one tidy package on the field.",
    media: [
      { type: "image", src: "/images/driver station/driver_station_side_profile.png", alt: "FRC driver station side profile" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Eventide-03/FRC-Driver-Station/tree/main" },
    ],
  },
];

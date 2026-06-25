// Building blocks for custom courses. When someone creates their own project,
// they pick which disciplines it involves (CAD, code, PCB, etc.) and we
// assemble a week-style course: a planning day, one focused day per discipline,
// and a test-and-iterate day. The generated steps are discipline-general but
// detailed, so a custom project still walks through the real engineering
// process the same way our guided courses do.

// The disciplines a builder can include. Shown as checkboxes before creating a
// project so they can scope what the build actually requires.
export const disciplines = [
  {
    id: "design",
    label: "Mechanical Design & CAD",
    blurb: "Model the robot in Onshape with our channel-and-bracket ecosystem.",
  },
  {
    id: "electronics",
    label: "Electronics & Wiring",
    blurb: "Pick motors, power, and drivers, and wire it all up safely.",
  },
  {
    id: "pcb",
    label: "PCB Design",
    blurb: "Design a custom circuit board in KiCad instead of a rats-nest of wires.",
  },
  {
    id: "firmware",
    label: "Firmware & Code",
    blurb: "Write the embedded code that brings the hardware to life.",
  },
  {
    id: "vision",
    label: "Computer Vision",
    blurb: "Give the robot a camera and the code to understand what it sees.",
  },
];

// Difficulty changes the framing of the planning day and the depth we expect.
const planningDay = (difficulty) => ({
  title: "Plan & scope your build",
  goal: "Turn your idea into a concrete spec you can actually engineer against.",
  steps: [
    {
      title: "Write down what your robot should do",
      body:
        "Before any CAD or code, write one or two sentences describing what success looks like: what the robot does, how big it is, and what it interacts with. Vague goals create scope creep. A sharp goal like \"a robot that drives to a cup and knocks it over\" tells you exactly what to design.",
    },
    {
      title: "List your requirements and constraints",
      body:
        difficulty === "Advanced"
          ? "Capture the hard numbers: payload, reach, speed, runtime, budget, and any size limits. For an advanced build, also note tolerances and where precision actually matters. These numbers drive every later decision, so write them where you'll see them every day."
          : "Capture the basics: how big it can be, what it needs to lift or move, how long it should run on a battery, and your budget. Keep it simple, but write it down. You'll check every design choice against this list.",
    },
    {
      title: "Sketch the system on paper",
      body:
        "Draw a rough block diagram: the major mechanical pieces, what moves, where the motors and sensors go, and how power and signals flow. This 15-minute sketch surfaces the hard problems early, while they're still cheap to change.",
    },
    {
      title: "Plan your week",
      body:
        "Break the work into days using the phases below. Aim for one meaningful chunk of progress a day — that's what keeps your streak alive and the project moving instead of stalling.",
    },
  ],
});

const testingDay = () => ({
  title: "Test, debug & iterate",
  goal: "Get the whole system working together and make it reliable.",
  steps: [
    {
      title: "Bring up one subsystem at a time",
      body:
        "Resist the urge to turn everything on at once. Power and test each piece in isolation — drivetrain, then sensors, then the full control loop. When something breaks, you'll know exactly which part to blame.",
    },
    {
      title: "Run it against your requirements",
      body:
        "Pull out the requirements list from day one and check each item. Does it actually do what you set out to build? Note what falls short — that's your iteration list, not a failure.",
    },
    {
      title: "Find the weakest link and fix it",
      body:
        "Every first build has one part that's clearly worst: a flexing bracket, a loose wire, a twitchy control loop. Fix that one thing, retest, and repeat. A few focused iterations beat a total redesign.",
    },
    {
      title: "Document what you built",
      body:
        "Save your Onshape doc, take photos, and jot down what you'd do differently. This is how a one-off project becomes a skill you carry into the next build — and a portfolio piece worth showing.",
    },
  ],
});

// One focused day per discipline. Written to apply to any robot, but concrete
// enough to actually guide the work.
const disciplineDay = {
  design: {
    title: "Mechanical design in Onshape",
    goal: "Model your robot's structure so every part has a place before you build.",
    steps: [
      {
        title: "Set up your Onshape document and library",
        body:
          "Create a new Onshape document and import the ProtoHouse part library so channels, brackets, hubs, and motors are a drag away. Work top-down: design the frame first, then hang components off it. Use mate connectors on the 16mm hole pattern, never raw faces, so parts stay aligned when you change dimensions later.",
      },
      {
        title: "Lay out the frame from channel and brackets",
        body:
          "Start with a base sketch sized to our U-channels and build the load-bearing structure from channel joined by L-brackets and gussets. Keep the heavy parts (battery, motors) low and centered so the robot is stable. Everything else bolts onto this skeleton.",
      },
      {
        title: "Place your moving parts and check clearances",
        body:
          "Insert the motors, wheels, joints, or mechanisms your design needs and mate them to the frame. Use Onshape's section and interference tools to confirm nothing collides through its full range of motion. This is the cheapest place to catch a mistake — fixing it here costs seconds, not a reprint.",
      },
      {
        title: "Make the design parametric where it matters",
        body:
          "Turn the dimensions you're unsure about — ride height, sensor offset, gear center distance — into named variables. Then you can tune them in one place instead of rebuilding parts. This is the habit that separates a CAD model from a real engineering model.",
      },
    ],
  },
  electronics: {
    title: "Electronics & wiring",
    goal: "Choose your power and control hardware and wire it up without the smoke.",
    steps: [
      {
        title: "Pick your power source and budget the current",
        body:
          "Add up what every motor and board draws at peak and choose a battery and wire gauge that can supply it with margin. Undersized wiring and batteries cause brownouts that look like random software bugs. Decide your system voltage now — it constrains everything downstream.",
      },
      {
        title: "Choose motors, drivers, and a controller",
        body:
          "Match each motor to a driver that can handle its stall current, and pick a microcontroller with enough pins and the right interfaces for your sensors. Mount the boards to the frame with flat brackets so nothing dangles. Components that move in operation eventually fail.",
      },
      {
        title: "Wire power and signal deliberately",
        body:
          "Run a clean power distribution from the battery through a main switch and fuse, then to each driver. Keep signal wires away from motor power to reduce noise, and make every ground common. Label both ends of each wire — future-you will be grateful when debugging.",
      },
      {
        title: "Power up safely the first time",
        body:
          "Before connecting motors, power just the logic and confirm voltages with a multimeter. Then add one motor channel at a time, current-limited if you can. Smoke-testing in stages turns a fried board into a small, recoverable mistake.",
      },
    ],
  },
  pcb: {
    title: "PCB design in KiCad",
    goal: "Replace the wiring nest with a custom board that's reliable and reusable.",
    steps: [
      {
        title: "Draw the schematic",
        body:
          "In KiCad, capture your circuit as a schematic first: microcontroller, power regulation, motor driver and sensor connections. Use named nets and clear labels. A clean schematic is the single source of truth for the whole board — get it right before any layout.",
      },
      {
        title: "Pick footprints and check parts are real",
        body:
          "Assign a footprint to every component and confirm each part is actually buyable and in stock. Mixing up a footprint (wrong pin pitch, wrong package) is the most common board-killing mistake. Cross-check against the datasheet pinout.",
      },
      {
        title: "Lay out the board",
        body:
          "Place connectors at the edges, keep the microcontroller central, and put power regulation near where power enters. Route power traces wide enough for their current and keep high-current motor paths away from sensitive analog and signal lines. Pour a ground plane to keep things quiet.",
      },
      {
        title: "Run DRC, then order it",
        body:
          "Run KiCad's design rule check and clear every error before exporting Gerbers. Order from a fab house, and while it ships, order your components so you can assemble the moment the boards arrive. Order a couple spares — first boards often need a revision.",
      },
    ],
  },
  firmware: {
    title: "Firmware & code",
    goal: "Write the embedded code that turns your hardware into a working robot.",
    steps: [
      {
        title: "Set up your toolchain and blink an LED",
        body:
          "Install the toolchain for your microcontroller (Arduino, PlatformIO, or vendor SDK) and get the classic blinking LED running. This proves you can compile, flash, and see the board respond before any real logic is on the line.",
      },
      {
        title: "Drive each output and read each input",
        body:
          "Write small test sketches: spin each motor, read each sensor, print the values. Confirm every piece of hardware works on its own and that your wiring matches your code's pin assignments. Building the full program on top of unverified I/O is how you lose a weekend to a swapped wire.",
      },
      {
        title: "Write the main control loop",
        body:
          "Structure your program as a loop that reads inputs, decides what to do, and drives outputs — running fast and consistently. Keep it non-blocking: avoid long delays that freeze the robot. This read-think-act loop is the heartbeat of nearly every robot.",
      },
      {
        title: "Add tuning and safety",
        body:
          "Expose the numbers you'll want to adjust — speeds, gains, thresholds — as constants at the top of the file. Add a clear stop condition or kill switch. Then iterate: tune, test, repeat, until the behavior is smooth and predictable.",
      },
    ],
  },
  vision: {
    title: "Computer vision",
    goal: "Give your robot a camera and the code to act on what it sees.",
    steps: [
      {
        title: "Get a camera feed and understand the image",
        body:
          "Connect your camera and display the live frames. Learn the resolution and frame rate you're working with, and remember an image is just a grid of pixels with color values. Everything in vision starts from reading those numbers.",
      },
      {
        title: "Detect your target",
        body:
          "Start simple: find your object by color thresholding in a suitable color space, or use a lightweight pretrained model if the target is complex. Draw the detection back onto the frame so you can see exactly what the code thinks it found. Tune until detection is reliable under your real lighting.",
      },
      {
        title: "Turn pixels into real-world coordinates",
        body:
          "A detection at pixel (x, y) means nothing to a motor until you map it to the real world. Calibrate the camera's position relative to the robot so you can convert image location into a direction or coordinate the robot can act on. Keep the camera rigidly mounted — every wobble breaks the math.",
      },
      {
        title: "Close the loop: see, then act",
        body:
          "Connect detection to motion: steer toward the target, or feed its coordinate into your robot's control. Add a slow, careful approach near the goal so small vision errors don't cause overshoot. Test it live and watch where it gets confused — that tells you what to improve.",
      },
    ],
  },
};

// Assemble a custom course from a spec. `idFactory` supplies a unique id
// (passed in so this stays free of Date.now()/Math.random(), keeping it usable
// anywhere). Returns a course object shaped exactly like our guided courses.
export function buildCustomCourse({ id, title, difficulty, summary, disciplineIds }) {
  // Keep disciplines in canonical order regardless of click order.
  const ordered = disciplines
    .map((d) => d.id)
    .filter((dId) => disciplineIds.includes(dId));

  const days = [
    planningDay(difficulty),
    ...ordered.map((dId) => disciplineDay[dId]),
    testingDay(),
  ];

  return {
    id,
    custom: true,
    title,
    difficulty,
    tagline: "Your custom build",
    summary,
    durationDays: days.length,
    disciplines: ordered.map(
      (dId) => disciplines.find((d) => d.id === dId).label
    ),
    skills: [],
    materials: [],
    days,
  };
}

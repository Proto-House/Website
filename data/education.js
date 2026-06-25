// Content for the Education page. Grows as new kits and curriculum ship.

export const offerings = [
  {
    id: "swerve-drive-kit",
    title: "Swerve Drive Education Kit",
    status: "In development",
    description:
      "A hands-on kit for teaching modern drivetrain design. Students dig into kinematics, motor control, and the electronics behind a real swerve module. No black boxes here.",
  },
  {
    id: "curriculum",
    title: "Modern Robotics Curriculum",
    status: "In development",
    description:
      "Lesson content built around current robotics engineering: CAD, PCB design, embedded programming, and computer vision. It's meant to replace the decade-old materials still floating around classrooms.",
  },
];

// Guided courses. Each one is a full, ~week-long build broken into days. A day
// has a goal and several in-depth steps that walk through the real engineering
// process — design in Onshape with our material ecosystem, electronics, and
// code — the way we'd actually do it. Progress and a daily streak are tracked
// client-side (see lib/learning.js); each course opens on its own page.
export const courses = [
  {
    id: "tabletop-tank",
    title: "Tabletop Tank Bot",
    difficulty: "Beginner",
    tagline: "Your first robot, designed and built from scratch.",
    summary:
      "Over five days you'll design a tracked two-motor robot in Onshape using our channel-and-bracket system, wire up its electronics, and write the code to drive it. No prior experience needed — this is the on-ramp to everything else.",
    durationDays: 5,
    disciplines: ["Mechanical Design & CAD", "Electronics & Wiring", "Firmware & Code"],
    skills: [
      "Onshape fundamentals",
      "Channel + bracket assembly",
      "Motor mounting",
      "Wiring & power",
      "Tank-drive control",
    ],
    materials: ["U-Channel", "L-Brackets", "Flat Gussets", "Motor Hubs", "12V Gearmotors", "Dual Motor Driver"],
    days: [
      {
        title: "Day 1 — Plan and set up Onshape",
        goal: "Understand the build, get your tools ready, and learn how our parts fit together.",
        steps: [
          {
            title: "Understand what you're building",
            body:
              "The Tank Bot is a simple, sturdy robot: two channels for a frame, a gearmotor driving a track on each side, and a battery and driver in the middle. Because the two sides drive independently, it steers like a tank — both forward to go straight, one side to turn. Picture the finished robot before you start; it makes every step make sense.",
          },
          {
            title: "Create a free Onshape account",
            body:
              "Onshape is a professional CAD tool that runs entirely in your browser, so there's nothing to install and your work saves automatically in the cloud. Sign up for the free Maker plan at onshape.com. Spend ten minutes in their 'Primer' tutorial to learn the interface — sketching, extruding, and the Pan/Rotate/Zoom controls — before you build anything real.",
          },
          {
            title: "Import the ProtoHouse part library",
            body:
              "Add our public parts document to your account so you can drag in channels, brackets, hubs, and motors instead of modeling them. Every part shares a 16mm on-center hole pattern — a consistent grid that lets any bracket bolt to any channel. Learning to lean on a library like this is exactly how real engineers work: you design the robot, not the screws.",
          },
          {
            title: "Learn the channel grid",
            body:
              "Open a U-Channel and look at its hole pattern. Those holes are your coordinate system: everything lands on the 16mm grid so parts always line up. The golden rule in Onshape: mate parts using their holes (mate connectors), never by eyeballing faces. Do that and your assembly stays correct even when you change a dimension later.",
          },
        ],
      },
      {
        title: "Day 2 — Design the chassis",
        goal: "Build the robot's frame in Onshape so it's rigid and sized for everything that mounts to it.",
        steps: [
          {
            title: "Create the assembly and a layout sketch",
            body:
              "Start a new document and create an Assembly. Make a base sketch — a simple rectangle — sized so two U-Channels run parallel about a hand's width apart. This sketch is your floor plan; dimension it to the channel hole spacing so the rails and cross-pieces all line up on the grid.",
          },
          {
            title: "Insert and mate the side channels",
            body:
              "Drag two U-Channels in and mate them to your layout sketch using their end holes. These two rails are the backbone the whole robot bolts to. Use a Fastened mate connector on a specific hole so each channel is locked in a known place — not floating where you happened to drop it.",
          },
          {
            title: "Tie the frame together with brackets and gussets",
            body:
              "Add a cross-channel or a pair of flat gussets near each end to join the two rails into a rigid rectangle. A frame that twists makes a robot that drives crooked. Bolt the cross-pieces on the grid and you'll feel the assembly go from floppy to solid.",
          },
          {
            title: "Sanity-check the size",
            body:
              "Use Onshape's measure tool to confirm your frame is the size you intended and that there's room in the middle for a battery and a driver board. It's far cheaper to resize a rectangle now than to discover on build day that nothing fits. Save a named version when it looks right.",
          },
        ],
      },
      {
        title: "Day 3 — Add the drivetrain",
        goal: "Mount the motors and tracks in CAD so the robot can actually move.",
        steps: [
          {
            title: "Mount a gearmotor on each side",
            body:
              "Bolt an L-Bracket to the rear of each channel and attach a 12V gearmotor to it. This is the core move of our whole ecosystem: a bracket adapts any component — here a motor — onto the channel grid. Mirror it so both motors sit at the same height and face outward symmetrically.",
          },
          {
            title: "Add hubs and drive sprockets",
            body:
              "Slide a Motor Hub onto each motor's output shaft and attach a drive sprocket. The hub is the adapter between a round motor shaft and anything you want to spin with it. Add a matching idler sprocket at the front of each channel for the track to wrap around.",
          },
          {
            title: "Wrap the tracks and set tension",
            body:
              "Route a track around the drive and idler sprockets on each side. In Onshape, measure the center distance between the two sprockets and adjust the idler position until the track would sit snug — not so loose it slips, not so tight it binds. Getting this right in CAD saves a frustrating fight during the physical build.",
          },
          {
            title: "Check it clears and looks balanced",
            body:
              "Spin the model around and confirm the tracks don't rub the frame and the motors don't stick out where they'll catch on things. Eyeball the weight balance — motors at the back means you may want the battery forward. Save a version; your mechanical design is done.",
          },
        ],
      },
      {
        title: "Day 4 — Electronics and wiring",
        goal: "Power the robot and connect the motors safely.",
        steps: [
          {
            title: "Understand the electrical system",
            body:
              "Three things make the robot move: a battery (power), a motor driver (the muscle that switches that power), and a microcontroller (the brain sending commands). The controller can't drive a motor directly — it's too weak — so it tells the driver what to do, and the driver delivers the battery's current to the motors. Sketch this on paper before you touch a wire.",
          },
          {
            title: "Mount the battery, driver, and controller",
            body:
              "Bolt a flat bracket across the frame as an electronics tray and mount the dual motor driver and your microcontroller to it. Strap the battery down low and centered. Anything that flops around in operation will eventually pull a wire loose, so fasten everything down properly now.",
          },
          {
            title: "Wire power through a switch",
            body:
              "Run the battery's positive lead through a main power switch before it reaches the driver, so you can cut power instantly. Connect battery power and ground to the driver's input terminals, and give the microcontroller its own regulated power. Double-check polarity with a multimeter — reversing power is the fastest way to fry a board.",
          },
          {
            title: "Connect the motors and tidy up",
            body:
              "Wire each gearmotor to its own output channel on the driver, and connect the driver's signal pins to your microcontroller. Bundle and route wires so none can reach a moving track. Label each motor's wires (left/right) — you'll need to know which is which the moment you start coding.",
          },
        ],
      },
      {
        title: "Day 5 — Code it and drive",
        goal: "Write the firmware, drive your robot, and tune it until it runs clean.",
        steps: [
          {
            title: "Set up your coding environment",
            body:
              "Install the Arduino IDE (or PlatformIO) and get the blinking-LED example running on your microcontroller. This proves your whole toolchain works — you can write code, upload it, and the board responds — before any motor logic is involved. Don't skip it; it saves hours of 'is it my code or my setup?' confusion later.",
          },
          {
            title: "Spin each motor on its own",
            body:
              "Write a tiny program that drives just the left motor forward, then just the right. Confirm each spins the direction you expect — if one runs backward, swap its two motor wires or flip the sign in code. Verifying each output in isolation before combining them is a habit that will save you on every project.",
          },
          {
            title: "Write tank-drive control",
            body:
              "Now write the real loop: read two inputs (two buttons, a serial command, or a joystick) and set the left and right motor speeds accordingly. Both forward drives straight; opposite directions spins in place. This read-decide-act loop is the heartbeat of essentially every robot you'll ever build.",
          },
          {
            title: "Tune, troubleshoot, and take it for a lap",
            body:
              "Drive it. If it pulls to one side, the motors aren't matched — trim one's speed slightly in code. Put a speed limit near the top of your file so it's easy to slow things down while testing. When it drives where you point it, you've taken a robot from a blank Onshape document to working hardware. That's the whole loop, start to finish.",
          },
        ],
      },
    ],
  },
  {
    id: "line-follower",
    title: "Line-Following Rover",
    difficulty: "Beginner",
    tagline: "Your first taste of autonomy: a robot that drives itself.",
    summary:
      "A six-day build of a rover that follows a line on the floor entirely on its own. You'll design a compact base and a parametric sensor mount in Onshape, wire up a reflectance sensor array, and write a real closed-loop controller. The single best introduction to how autonomous robots actually think.",
    durationDays: 6,
    disciplines: ["Mechanical Design & CAD", "Electronics & Wiring", "Firmware & Code"],
    skills: [
      "Parametric CAD design",
      "Sensor integration",
      "Reading analog sensors",
      "Proportional control",
      "Control-loop tuning",
    ],
    materials: ["U-Channel", "Flat Brackets", "Motor Hubs", "12V Gearmotors", "Caster Wheel", "Reflectance Sensor Array"],
    days: [
      {
        title: "Day 1 — Plan and understand the idea",
        goal: "Learn how line following works and scope your rover before building.",
        steps: [
          {
            title: "Understand closed-loop control",
            body:
              "A line follower is your first 'closed-loop' robot: it senses the world (where's the line?), decides (am I drifting left or right?), and acts (steer back). It repeats this dozens of times a second. Every self-driving behavior, from a Roomba to a Tesla, is this same loop scaled up. Grasping it here unlocks all of robotics.",
          },
          {
            title: "Plan a small, low robot",
            body:
              "Line followers work best small, light, and low to the ground, with the sensor out front leading the wheels. Sketch a two-driven-wheel rover with a single caster at the back for balance — a 'differential drive.' Decide roughly how big it is and where the sensor bar will hang. Keep the center of mass low and between the wheels so it doesn't tip when it turns hard.",
          },
          {
            title: "Set up Onshape and the parts library",
            body:
              "If you haven't already, make an Onshape account and import the ProtoHouse part library. If you built the Tank Bot, you'll reuse the same channels, motors, hubs, and the 16mm grid — this build is a step up in brains, not in CAD difficulty.",
          },
        ],
      },
      {
        title: "Day 2 — Design the rover base",
        goal: "Model a compact differential-drive chassis in Onshape.",
        steps: [
          {
            title: "Build a short two-motor frame",
            body:
              "Create an assembly and build a small frame from short U-Channel, just wide enough for two motors facing outward. Mount a gearmotor and hub on each side with brackets — same technique as the Tank Bot. Smaller and lighter is better here, so trim anything you don't need.",
          },
          {
            title: "Add the caster and wheels",
            body:
              "Put driven wheels on the two motor hubs and a single caster wheel at the back. The two driven wheels steer the robot by spinning at different speeds; the caster just keeps it from tipping. Confirm in CAD that the robot sits level and the driven wheels carry most of the weight, so they don't slip.",
          },
          {
            title: "Leave room for electronics and a sensor up front",
            body:
              "Make sure there's a flat spot for the battery, driver, and controller, and that the front of the frame is open for the sensor mount you'll design next. Use the measure tool to check ground clearance — you want the chassis low but not dragging. Save a version.",
          },
        ],
      },
      {
        title: "Day 3 — Design a parametric sensor mount",
        goal: "Model a sensor bracket whose height you can tune without rebuilding it.",
        steps: [
          {
            title: "Learn why sensor height matters",
            body:
              "Reflectance sensors shine light down and measure how much bounces back — white floor reflects a lot, black line reflects little. They only work in a narrow height band: too high and the signal is weak, too low and they can't tell line from floor. That's why this mount needs to be adjustable, and why we'll make it parametric.",
          },
          {
            title: "Model the mount with a variable height",
            body:
              "Design a small flat bracket that hangs the reflectance sensor array off the front of the frame, facing the floor. Here's the key skill: define the ride height as a named variable (say, 'sensorGap = 8mm') and build the part to reference it. Change that one number and the whole part updates — that's parametric design, and it's a habit that pays off on every future project.",
          },
          {
            title: "Mount it and check clearance",
            body:
              "Attach the sensor mount to the front of the rover on the grid. Use Onshape's section view to look at the sensor from the side and confirm it sits at your target gap above the floor with nothing else scraping. Try changing 'sensorGap' to 6mm and 10mm and watch it move — now you can tune it physically later just by reprinting at a new value.",
          },
        ],
      },
      {
        title: "Day 4 — Electronics and wiring",
        goal: "Power the rover and connect the motors and the sensor array.",
        steps: [
          {
            title: "Mount and wire the power and motors",
            body:
              "Just like the Tank Bot: mount the battery, dual motor driver, and microcontroller on a flat bracket tray, run battery power through a switch, and wire each motor to a driver channel. Keep it tidy and labeled. If you've done this once it'll go fast; if not, take it slow and check polarity with a multimeter.",
          },
          {
            title: "Connect the sensor array",
            body:
              "The reflectance array has a row of sensors and needs power, ground, and a signal line for each sensor (or a shared bus, depending on the model). Wire it to your microcontroller's analog or digital inputs per its datasheet. Keep these signal wires away from the noisy motor wires so the readings stay clean.",
          },
          {
            title: "Power up and read raw values",
            body:
              "Before any driving logic, power the robot on blocks (wheels off the ground) and print the raw sensor values to your serial monitor. Slide a piece of paper with a black line under the sensor and watch the numbers change. Seeing the sensors respond is your proof the electronics are right before you trust them to steer.",
          },
        ],
      },
      {
        title: "Day 5 — Read the line in code",
        goal: "Turn raw sensor readings into a single number: where is the line?",
        steps: [
          {
            title: "Calibrate the sensors",
            body:
              "Every floor and line reflects differently, so first calibrate: sweep the robot over the line and record each sensor's reading on pure white and on the line. Use those to scale each sensor's output to a consistent range. Calibration is the unglamorous step that makes the difference between a robot that works and one that mysteriously doesn't.",
          },
          {
            title: "Compute the line position",
            body:
              "Combine the sensors into one number that says where the line sits relative to center — for example, a weighted average where sensors on the left pull the value negative and the right pull it positive. Zero means dead center. Print this value and slide the robot left and right over the line to confirm it tracks smoothly from negative to positive.",
          },
          {
            title: "Handle losing the line",
            body:
              "Decide what happens when no sensor sees the line — at a gap or a sharp corner. A simple rule: keep turning the direction you last saw it. Add this now so your robot recovers instead of driving off into the unknown. Test it by lifting the robot off the line and watching what your code decides to do.",
          },
        ],
      },
      {
        title: "Day 6 — Close the loop and tune",
        goal: "Steer from the line position and tune until it follows smoothly.",
        steps: [
          {
            title: "Write a proportional controller",
            body:
              "This is the payoff. Take your line-position number (the 'error') and use it to steer: the further off-center, the harder you turn back. In code that's one line — slow one wheel and speed the other in proportion to the error. This is a 'P controller,' the foundation of nearly all robot control.",
          },
          {
            title: "Tune the gain",
            body:
              "The 'gain' is how aggressively the robot reacts to being off-center. Too low and it drifts off gentle curves; too high and it wobbles back and forth oscillating across the line. Start low, drive it, and raise the gain until it tracks tightly without shaking. This hands-on tuning teaches you more about control than any textbook.",
          },
          {
            title: "Run the full course and refine",
            body:
              "Lay out a track with straights and curves and let it run a full lap autonomously. Where does it struggle — tight corners, intersections? Adjust the sensor height (you made it parametric!), the speed, or the gain to fix the worst spot, then run again. When it completes a lap on its own, you've built a genuinely autonomous robot.",
          },
        ],
      },
    ],
  },
  {
    id: "vision-arm",
    title: "Vision-Guided Robotic Arm",
    difficulty: "Advanced",
    tagline: "The full stack: mechanism, electronics, code, and computer vision.",
    summary:
      "Over seven days, build a multi-jointed arm that finds an object with a camera and picks it up. You'll size and design the linkage in Onshape, drive it with servos, solve the inverse-kinematics math, and write the computer vision that ties perception to motion. This is a real mechatronics project that touches every discipline at once.",
    durationDays: 7,
    disciplines: ["Mechanical Design & CAD", "Electronics & Wiring", "Firmware & Code", "Computer Vision"],
    skills: [
      "Multi-joint mechanism design",
      "Torque & servo sizing",
      "Inverse kinematics",
      "Camera calibration",
      "Perception-to-motion control",
    ],
    materials: ["Arm Channel", "Pivot Brackets", "High-Torque Servos", "Servo Driver", "Gripper Kit", "Camera Module"],
    days: [
      {
        title: "Day 1 — Plan, scope, and kinematics",
        goal: "Define what the arm must do and understand the geometry before designing.",
        steps: [
          {
            title: "Define the task and workspace",
            body:
              "Pin down exactly what the arm does: pick up what kind of object, from where, and place it where? Sketch the area it must reach — its 'workspace.' Everything downstream (link lengths, motor torque, camera placement) flows from this. An advanced project lives or dies on a clear spec, so spend real time here.",
          },
          {
            title: "Understand degrees of freedom",
            body:
              "Each joint adds a 'degree of freedom.' A base rotation plus two or three vertical joints and a gripper is enough to reach a point in 3D space and grab it. More joints mean more flexibility but more to control. Sketch your joint layout and count them — this defines both the mechanics and the math you'll write on day 6.",
          },
          {
            title: "Set up Onshape and gather references",
            body:
              "Open a fresh Onshape document and import the ProtoHouse arm parts. Find a reference image of a similar arm to keep your proportions sane. Decide your link lengths from the workspace you sketched — reach is roughly the sum of your arm segments, so size them to comfortably cover your target area.",
          },
        ],
      },
      {
        title: "Day 2 — Size the joints and pick servos",
        goal: "Do the torque math so your motors can actually lift the arm and its payload.",
        steps: [
          {
            title: "Understand torque and leverage",
            body:
              "Torque is rotational force, and it grows with distance: a weight held far from a joint is much harder to hold than the same weight up close. That's why the base joint of an arm works hardest — it carries everything beyond it at the end of a long lever. Internalize this and the rest of the sizing is arithmetic.",
          },
          {
            title: "Calculate the torque at each joint",
            body:
              "For each joint, add up the weight of everything past it (links, servos, and payload) times how far out it sits when the arm is stretched horizontally — the worst case. That gives the torque that joint must produce. Work from the gripper inward; the numbers grow as you approach the base.",
          },
          {
            title: "Select servos with margin",
            body:
              "Pick a high-torque servo for each joint rated comfortably above your calculated number — aim for at least 1.5× headroom so the arm isn't straining at its limit. Heavier servos near the base, lighter toward the tip (since every servo's weight becomes load for the joints behind it). This margin is what separates an arm that holds steady from one that sags and buzzes.",
          },
        ],
      },
      {
        title: "Day 3 — Design the linkage in Onshape",
        goal: "Model the arm so every joint pivots cleanly and the whole thing is rigid.",
        steps: [
          {
            title: "Build the segments from arm channel",
            body:
              "Model each arm segment from Arm Channel cut to the lengths you sized. Keep them light but stiff — a flexing arm ruins precision. Where you can, lighten parts you've over-built, but never at the cost of rigidity at the joints. Save each segment as its own part so you can adjust lengths independently.",
          },
          {
            title: "Create the joints with pivot brackets",
            body:
              "Join the segments with pivot brackets and mount a servo at each joint. The critical move: place a mate connector exactly on each joint's axis of rotation and use a Revolute mate so the segment swings around the true pivot. Get this right and your CAD angles will match your real servo angles — which makes day 6's math trustworthy.",
          },
          {
            title: "Drive the assembly and check the workspace",
            body:
              "Use Onshape's mate values to sweep each joint through its range and watch the arm move. Confirm it can actually reach the workspace you defined on day 1, and that it doesn't fold into itself or hit its own base. Use interference detection to catch collisions. This virtual test is far cheaper than discovering the limits with real servos straining.",
          },
        ],
      },
      {
        title: "Day 4 — Gripper, camera, and electronics",
        goal: "Add the end effector and camera, and wire up the power and control.",
        steps: [
          {
            title: "Mount the gripper",
            body:
              "Attach the gripper kit at the end of the arm — the 'end effector.' Make sure it can open wide enough for your target object and that its own servo is one of the ones you sized. Keep it as light as you can; every gram here is leverage against every joint behind it.",
          },
          {
            title: "Mount the camera rigidly",
            body:
              "Mount the camera so it has a clear, fixed view of the workspace — either overhead looking down, or on the base looking out. The single most important rule: it must not move relative to the robot's base, because day 7's math depends on a fixed, known camera position. A wobbly camera mount will quietly wreck your accuracy.",
          },
          {
            title: "Wire power, the servo driver, and the controller",
            body:
              "Servos can pull serious current together, so give them a dedicated power supply sized for all of them at once — don't try to power them from the microcontroller. Use a servo driver board so one controller can command every joint over a simple bus. Common all the grounds, run power through a switch, and verify voltages before connecting the servos.",
          },
        ],
      },
      {
        title: "Day 5 — Firmware: drive the joints",
        goal: "Get reliable, smooth control of each joint from code.",
        steps: [
          {
            title: "Set up the toolchain and center the servos",
            body:
              "Install your toolchain and write a first program that sends each servo to its center position. This both proves your code-to-hardware path works and gives you a known home pose. Power the arm supported (so it can't crash if a servo jumps) the first time you energize it.",
          },
          {
            title: "Map code angles to real angles",
            body:
              "Each servo's raw command doesn't equal a real-world joint angle — there are offsets and directions to sort out. Move each joint to known angles and record the commands that produce them, then write a small conversion so 'move joint 2 to 45°' means the same thing in code, in CAD, and in reality. This calibration is what makes the kinematics math actually land.",
          },
          {
            title: "Add smooth, coordinated motion",
            body:
              "Commanding a servo to snap instantly to a new angle is jerky and stresses the hardware. Write motion that eases each joint from its current angle to the target over a short time, and move the joints together so the gripper travels a sensible path. Smooth motion isn't just prettier — it's gentler on your mechanics and far more predictable.",
          },
        ],
      },
      {
        title: "Day 6 — Inverse kinematics",
        goal: "Compute the joint angles that put the gripper at any target point.",
        steps: [
          {
            title: "Understand forward vs. inverse kinematics",
            body:
              "Forward kinematics is easy: given the joint angles, where's the gripper? Inverse kinematics (IK) is the hard, useful one: given a target point you want to reach, what joint angles get you there? Solving IK is what lets you say 'go to that cup' instead of hand-jamming every joint. This is the intellectual core of the whole project.",
          },
          {
            title: "Solve it in 2D first",
            body:
              "Start in the arm's vertical plane and ignore the base rotation. With two segments and some trigonometry (the law of cosines), you can compute the two joint angles that place the gripper at a target height and distance. Work it out on paper, then translate to code. Test it against your Onshape model: command a point, and check the real arm matches where CAD says it should be.",
          },
          {
            title: "Add the base rotation for full 3D",
            body:
              "Now handle a target anywhere in 3D: the base rotates to face the target's direction, and your 2D solution handles reach and height in that plane. Combine them and you can command an (x, y, z) point and have the arm go there. Verify a handful of points by eye against the model before trusting it with the camera.",
          },
        ],
      },
      {
        title: "Day 7 — Computer vision and the pick",
        goal: "See the object, convert it to a coordinate, and pick it up automatically.",
        steps: [
          {
            title: "Get the camera feed and detect the object",
            body:
              "Bring in the camera frames and detect your target — start simple with color thresholding if the object is a distinct color, or a lightweight pretrained model if it's complex. Draw the detection back on the image so you can see exactly what the code locks onto. Tune it under the actual lighting you'll run in, not ideal conditions.",
          },
          {
            title: "Convert pixels to a real-world coordinate",
            body:
              "A detection at some pixel means nothing until you map it to a point in the robot's space. Calibrate using your fixed camera position: relate where things appear in the image to where they actually are on the table. This camera calibration is fiddly but essential — it's the bridge between 'seen' and 'reachable.'",
          },
          {
            title: "Chain it together: see, solve, move, grab",
            body:
              "Now connect everything you've built: detect the object, convert it to a coordinate, run your IK to get joint angles, move there smoothly, and close the gripper. Add a slow, careful final approach so small vision errors don't knock the object over. The first time the arm finds something on its own and picks it up, you'll have built a complete vision-guided robot — mechanism, electronics, code, and perception, all working as one.",
          },
        ],
      },
    ],
  },
];

export const audiences = [
  {
    id: "schools",
    title: "Schools",
    description:
      "Engineering programs that want a curriculum reflecting how robots actually get built today. The kits come apart, so students can really understand them.",
  },
  {
    id: "frc-teams",
    title: "FRC teams",
    description:
      "Competitive teams who want their members to really get drivetrain design, electronics, and controls. We push past the off-the-shelf parts.",
  },
  {
    id: "individual-learners",
    title: "Individual learners",
    description:
      "Students and hobbyists who want to learn by building and testing real hardware. Stuff that mirrors how the pros actually work.",
  },
];

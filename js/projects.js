'use strict';

// CUSTOMISE: CV path and short project-card content.
// Media paths are relative to the HTML page. See README.md for examples.
// Dates: "2025", "2025-06" or "2025-06-20". Leave unknown dates as "".
// Completed projects use completedDate; other statuses use estimatedCompletionDate.
const portfolio = {
  cv: null,
  projects: [
    {
      id: 'honours',
      title: 'Fitness Tracker & Planner',
      category: 'University',
      status: 'progress',
      completedDate: '',
      estimatedCompletionDate: '2027',
      label: 'Honours Stage Project',
      description:
        'A cross-platform fitness application exploring heuristic-based ' +
        'training plans, workout tracking and gamification.',
      tags: ['C#', '.NET MAUI', 'Heuristics'],
      featured: true,
      visual: 'fitness',
      media: [],
    },
    {
      id: 'roblox',
      title: 'Roblox Game',
      category: 'Personal',
      status: 'progress',
      completedDate: '',
      estimatedCompletionDate: '',
      label: 'Independent project',
      description:
        'An experimental game project exploring gameplay development and ' +
        'interactive experiences in Roblox Studio.',
      tags: ['Lua', 'Roblox Studio', 'Game Development'],
      featured: true,
      visual: 'game',
      media: [],
    },
    {
      id: 'capstone',
      title: 'Hull-ywood Cinema | First Year Capstone',
      category: 'University',
      status: 'completed',
      completedDate: '2025',
      estimatedCompletionDate: '',
      label: 'First-year project',
      description:
        'A console-based cinema point-of-sale and management ' +
        'application developed for Hull-ywood Cinema, featuring ' +
        'ticket and concession sales, screening scheduling, ' +
        'staff management, customer loyalty schemes, and ' +
        'membership functionality. Awarded 100%.',
      tags: ['Capstone'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/capstone/capstone-overview.png',
          alt: 'Hull-ywood Cinema console-based application',
          caption: 'Completed cinema management application',
        },
      ],
    },
    {
      id: 'graphics',
      title: 'Graphics Programming Creation',
      category: 'University',
      status: 'completed',
      completedDate: '2025',
      estimatedCompletionDate: '',
      label: 'Graphics programming',
      description:
        'A 3D graphics exhibition created using C# and OpenTK, ' +
        'showcasing geometric modelling, mathematical ' +
        'transformations, shader-based lighting, textures, ' +
        'animation, and interactive cameras. Awarded 100%.',
      tags: ['Graphics Programming'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/graphics/graphics-showcase1.png',
          alt:
            'OpenTK 3D graphics exhibition featuring geometric ' +
            'shapes, textured planets, and objects displayed ' +
            'on wooden platforms',
          caption: 'Completed 3D graphics exhibition.',
        },
      ],
    },
    {
      id: 'ddd-individual',
      title: 'Student Engagement & Support System',
      category: 'University',
      status: 'completed',
      completedDate: '2025',
      estimatedCompletionDate: '',
      label: 'Individual project',
      description:
        'A C#/.NET application designed to improve university ' +
        'student support through wellbeing check-ins, academic ' +
        'progress monitoring, supervisor meeting management, ' +
        'and role-based functionality, with persistent ' +
        'data storage and automated testing.',
      tags: ['Individual Development'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/ddd-indiv/ddd-overview.png',
          alt: 'Console window view of the support system application.',
          caption: 'Completed Student Engagement & Support System Application.',
        },
      ],
    },
    {
      id: 'prompt-panic',
      title: 'Prompt Panic',
      category: 'University',
      status: 'completed',
      completedDate: '2026',
      estimatedCompletionDate: '',
      label: 'DDD Teamwork Project',
      description:
        'A team-developed game created through an Agile ' +
        'software engineering lifecycle, progressing from ' +
        'requirements and interactive prototypes to a ' +
        'completed, deployed product. Developed collaboratively ' +
        'using Scrum practices, iterative testing, ' +
        'and structured development milestones.',
      tags: ['Teamwork'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/ddd-team/dddteam-game.png',
          alt: '',
          caption: 'Completed Prompt Panic game.',
        },
      ],
    },
    {
      id: 'architecture',
      title: 'Game Engine & Game',
      category: 'University',
      status: 'progress',
      completedDate: '',
      estimatedCompletionDate: '2026',
      label: 'Games Architecture',
      description:
        'An ongoing university project focused on game architecture, a ' +
        'game engine and a game.',
      tags: ['Game Engine', 'Games Architecture'],
      media: [],
    },
    {
      id: 'sim-ai',
      title: 'Simulation & AI Game',
      category: 'University',
      status: 'progress',
      completedDate: '',
      estimatedCompletionDate: '2026',
      label: 'Sim & AI',
      description:
        'An ongoing university game project exploring simulation and ' + 'artificial intelligence.',
      tags: ['Simulation', 'AI'],
      media: [],
    },
    {
      id: 'vr',
      title: 'Virtual Reality Retail Simulation',
      category: 'University',
      status: 'completed',
      completedDate: '2026',
      estimatedCompletionDate: '',
      label: 'VR',
      description:
        'An immersive VR retail simulation developed using Unity ' +
        'and the XR Interaction Toolkit for Meta Quest 3, ' +
        'featuring interactive products, physics-based ' +
        'manipulation, validated shelf placement, and ' +
        'state-driven workflows with audio and haptic feedback.',
      tags: ['VR'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/vr/vr-shopenvironment.png',
          alt: 'Virtual reality shop environment',
          caption: 'Completed VR Retail Simulation',
        },
      ],
    },
    {
      id: 'mr',
      title: 'Mixed Reality Retail Experience',
      category: 'University',
      status: 'completed',
      completedDate: '2026',
      estimatedCompletionDate: '',
      label: 'MR',
      description:
        'A room-scale mixed reality retail experience developed ' +
        'in Unity for Meta Quest 3, transforming a physical ' +
        'environment into an interactive store using full-colour ' +
        'passthrough, spatially anchored virtual products, ' +
        'natural hand-tracking interactions, and custom shaders.',
      tags: ['MR'],
      media: [
        {
          type: 'image',
          src: 'assets/projects/mr/mr-retailscene.png',
          alt: 'Mixed reality shop environment',
          caption: 'Completed MR Retail Simulation',
        },
      ],
    },
  ],
};

const statusNames = {
  completed: 'Completed',
  progress: 'In progress',
  future: 'Future plan',
};

// CUSTOMISE: expanded descriptions, your role, media and repository links.
// Match each key to its project ID above. Blank fields show coming-soon text.
const projectDetails = {
  honours: {
    overview: [
      'My honours-stage project explores a cross-platform fitness ' +
        'tracker and planner, bringing training-plan generation, workout ' +
        'tracking and gamification into one application.',
      'The project uses C# and .NET MAUI, with heuristic-based planning ' +
        'as a key area of exploration. Development is in progress.',
    ],
    produced: '',
    role: '',
    highlights: [],
    repository: '',
    media: [],
  },
  roblox: {
    overview: [
      'An independent game project in Roblox Studio, exploring gameplay ' +
        'programming and interactive experiences using Lua. Development is ' +
        'in progress.',
    ],
    produced: '',
    role: '',
    highlights: [],
    repository: '',
    media: [],
  },
  capstone: {
    overview: [
      'Hull-ywood Cinema was my first-year university capstone project, ' +
        'completed as part of the Programming Portfolio module in 2025. ' +
        'The project involved independently developing a console-based ' +
        'point-of-sale and cinema management application for a fictional ' +
        'cinema chain based in Hull. I was awarded 100% for the assessment, ' +
        'reflecting the successful completion of my submitted project.',

      'The objective was to develop a software solution capable of ' +
        'supporting everyday cinema operations, including ticket sales, ' +
        'concession purchases, film scheduling, staff management and ' +
        'customer membership schemes. The assignment introduced a range ' +
        'of functional requirements and business rules that needed to ' +
        'be considered throughout the design and development process.',

      'A central aspect of the project was ensuring that the ' +
        'application could handle different scenarios reliably. ' +
        'These included validating customer information, checking ' +
        'age restrictions for films, preventing ticket sales beyond ' +
        'available seating capacity and avoiding scheduling conflicts. ' +
        'The specification also required data to be loaded from and ' +
        'saved to files, introducing the need for persistent data ' +
        'management and careful input validation.',

      'The project was structured around four key workflows: ' +
        'selling tickets and concessions, managing screening ' +
        'schedules, operating a customer loyalty scheme and ' +
        'handling paid gold memberships. Each workflow presented ' +
        'different programming challenges, from transaction ' +
        'calculations and conditional logic to date handling, ' +
        'file processing and enforcing business rules.',

      'As an individual assessment, the capstone provided an ' +
        'opportunity to apply programming knowledge to a larger, ' +
        'interconnected application. It helped strengthen my ' +
        'understanding of algorithm design, debugging, data ' +
        'validation and software development while building ' +
        'confidence in approaching more complex programming tasks.',
    ],
    produced:
      'A console-based cinema point-of-sale and management ' +
      'application developed for the Hull-ywood Cinema scenario. ' +
      'The project specification covered ticket and concession ' +
      'transactions, screening schedules, standard and premium ' +
      'seating, staff permissions, customer loyalty rewards, ' +
      'gold memberships and persistent file-based data. ' +
      'The assessment also required documented demonstrations ' +
      'of four distinct application workflows. ' +
      'The completed submission received a grade of 100%.',
    role:
      'Sole Developer | University Capstone Project. ' +
      'Individually responsible for developing and submitting ' +
      'the programming solution, interpreting the assignment ' +
      'requirements, designing the application logic, ' +
      'implementing functionality, debugging and demonstrating ' +
      'the completed software.',
    highlights: [
      'Achieved 100% in the first-year Programming Portfolio ' + 'capstone assessment.',

      'Developed an individual programming project based on ' +
        'a realistic cinema point-of-sale and management scenario.',

      'Worked with transaction-processing requirements covering ' +
        'ticket selection, concession purchases, pricing and ' +
        'available seating capacity.',

      'Addressed input validation requirements involving film ' +
        'age ratings, customer information, monetary values and ' +
        'cinema configuration data.',

      'Explored screening scheduling rules involving overlapping ' +
        'showtimes, film durations, trailers and screen turnaround ' +
        'periods.',

      'Worked with role-based functionality distinguishing ' +
        'general cinema staff from managers, including ' +
        'administrative permissions.',

      'Applied customer membership rules involving loyalty ' +
        'visit tracking, free-ticket rewards, annual gold ' +
        'memberships and concession discounts.',

      'Gained experience with file-based data management, ' +
        'including loading, validating, updating and saving ' +
        'application information.',

      'Applied computational problem-solving, algorithm design ' +
        'and debugging techniques to an interconnected software ' +
        'development assignment.',

      'Strengthened independent development skills through ' +
        'planning, implementation, testing and documentation ' +
        'of the project workflows.',
    ],
    repository: 'https://github.com/University-of-Hull-CST/cinema-capstone-ZoeH811.git',
    media: [
      {
        type: 'image',
        src: 'assets/projects/capstone/capstone-transaction.png',
        alt: 'Transaction overview detailing items purchased from POS system',
        caption: 'Figure 01 — Overall transaction processing from POS system.',
      },
      {
        type: 'image',
        src: 'assets/projects/capstone/capstone-scheduling.png',
        alt: 'Cinema screning scheduling example',
        caption: 'Figure 02 — Movie scheduling showcase.',
      },
      {
        type: 'video',
        src: 'assets/projects/capstone/capstone-video.mp4',
        caption: 'Figure 03 — Overall Hull-ywood application showcase ',
      },
    ],
  },

  graphics: {
    overview: [
      'For my university Graphics Programming module, I was ' +
        'challenged to create a unique piece of digital art using ' +
        'programming. I designed and developed a 3D exhibition ' +
        'showcasing a collection of geometric shapes, textured ' +
        'objects, and detailed models arranged across a series ' +
        'of wooden display platforms.',

      'Built using C# and OpenTK, the project combined 3D ' +
        'modelling, mathematical transformations, animation, ' +
        'shader-based lighting, and texture mapping to create ' +
        'an interactive visual experience. The application ' +
        'demonstrated core computer graphics principles through ' +
        'a custom scene graph, multiple camera perspectives, ' +
        'and a variety of rendered objects.',

      'The project achieved a final grade of 100%, meeting ' +
        'all assessment criteria and demonstrating both ' +
        'technical understanding and creative application ' +
        'of real-time graphics programming.',
    ],

    produced:
      'A fully functional 3D graphics application featuring ' +
      'a virtual exhibition of geometric primitives, textured ' +
      'models, animated objects, dynamic lighting, and ' +
      'interactive camera controls.',

    role:
      'Sole Developer — responsible for the design, ' +
      'programming, mathematical implementation, rendering, ' +
      'and testing of the complete application.',

    highlights: [
      'Achieved 100% in the university assessment.',

      'Developed custom vector and matrix classes that ' + 'passed all provided unit tests.',

      'Created reusable 3D primitives including triangles, ' +
        'quads, cubes, cylinders, and spheres.',

      'Implemented translation, rotation, scaling, and ' +
        'compound transformations using vector and matrix ' +
        'mathematics.',

      'Built a hierarchical scene graph using object-oriented ' + 'design and the Visitor pattern.',

      'Implemented frame-independent animation using ' +
        'delta time and combined movement transformations.',

      'Developed shader-based lighting with directional, ' + 'point, and spot lights.',

      'Applied multiple textures and advanced normal ' +
        'mapping techniques to enhance surface detail.',

      'Implemented multiple camera perspectives, including ' + 'interactive camera navigation.',
    ],

    repository:
      'https://github.com/UOH-CS-Level6/551455-graphics-programming-2526-the-repo-ZoeH811.git',
    media: [
      {
        type: 'image',
        src: 'assets/projects/graphics/graphics-dachshund.png',
        alt: '3D dachshund model constructed from geometric primitives',
        caption:
          'Figure 01 — Dachshund model demonstrating ' +
          'geometric primitives and scale transformations',
      },
      {
        type: 'video',
        src: 'assets/projects/graphics/graphics-simple-animation.mp4',
        caption:
          'Figure 02 — Demonstration of simple and complex animations ' +
          'using delta-time-based transformations',
      },
      {
        type: 'video',
        src: 'assets/projects/graphics/graphics-complex-animation.mp4',
        caption: 'Figure 03 — Complex animation showcase',
      },
      {
        type: 'image',
        src: 'assets/projects/graphics/graphics-spotlight.png',
        alt: '3D objects illuminated using shader-based spotlight effects',
        caption: 'Figure 04 — Shader-based spotlight demonstration',
      },
      {
        type: 'image',
        src: 'assets/projects/graphics/graphics-texturedbus.png',
        alt: 'Red 3D bus featuring textured surfaces and geometric components',
        caption: 'Figure 05 — Texture mapping applied to a 3D bus model',
      },
      {
        type: 'video',
        src: 'assets/projects/graphics/graphics-normalmapping.mp4',
        caption: 'Figure 06 — Cobblestone normal mapping and lighting',
      },
      {
        type: 'video',
        src: 'assets/projects/graphics/graphics-usercontrollablecamera.mp4',
        caption: 'Figure 07 — User controllable camera showcase',
      },
    ],
  },

  'ddd-individual': {
    overview: [
      'A student engagement and support management application ' +
        'developed individually using C# and the .NET framework. ' +
        'The project was designed to address challenges within ' +
        "a university's personal supervision system by providing " +
        'a centralised platform for monitoring student wellbeing, ' +
        'academic progress, and engagement with support services.',

      'The application supports three primary user roles: ' +
        'Students, Personal Supervisors, and Senior Tutors. ' +
        'Students can periodically self-report their wellbeing ' +
        'and academic progress, providing supervisors with ' +
        'additional context beyond traditional engagement ' +
        'metrics. Personal Supervisors can review the status ' +
        'of their assigned students and arrange meetings, ' +
        'while Senior Tutors can oversee student engagement ' +
        'and supervisory activity across the department.',

      'A key focus of the project was designing structured ' +
        'workflows around the responsibilities of different ' +
        'stakeholders. The application provides role-specific ' +
        'functionality for recording student check-ins, ' +
        'reviewing engagement information, and managing ' +
        'meeting arrangements between students and their ' +
        'Personal Supervisors.',

      'Persistent data storage allows student records, ' +
        'engagement updates, and meeting information to ' +
        'remain available between application sessions. ' +
        'The system was developed using a structured ' +
        'software engineering process, including requirements ' +
        'analysis, system modelling, implementation, ' +
        'and testing.',

      'The project also incorporates version control ' +
        'through GitHub Classroom and an automated build ' +
        'and test pipeline to support code quality and ' +
        'development reliability. It demonstrates practical ' +
        'software engineering skills through the development ' +
        'of a stakeholder-focused application addressing ' +
        'a real-world university support challenge.',
    ],
    produced:
      'A completed C#/.NET student engagement management ' +
      'application supporting student wellbeing check-ins, ' +
      'academic progress reporting, supervisor monitoring, ' +
      'meeting arrangements, senior tutor oversight, ' +
      'persistent data storage, and automated build ' +
      'and testing workflows.',
    role:
      'Individual software developer responsible for ' +
      'requirements analysis, system design, application ' +
      'architecture, C# implementation, data persistence, ' +
      'stakeholder workflows, software testing, version ' +
      'control, and CI pipeline configuration.',
    highlights: [
      'Developed a C#/.NET application to support ' +
        'university student engagement and wellbeing monitoring.',

      'Designed role-specific workflows for Students, ' +
        'Personal Supervisors, and Senior Tutors.',

      'Implemented periodic student self-reporting ' + 'for wellbeing and academic progress.',

      'Created supervisor functionality for reviewing ' +
        'assigned students and monitoring engagement.',

      'Supported meeting arrangements between students ' + 'and their Personal Supervisors.',

      'Developed senior tutor oversight functionality ' +
        'for reviewing student status and supervisory activity.',

      'Implemented persistent data storage to retain ' + 'application records between sessions.',

      'Applied structured requirements analysis, ' +
        'system modelling, implementation, and testing ' +
        'throughout the development process.',

      'Used GitHub Classroom for source control ' + 'and collaborative development tooling.',

      'Configured an automated continuous integration ' +
        'pipeline for application builds and testing.',
    ],

    repository:
      'https://github.com/UOH-CS-Level6/001-port-individual-software-project-portfolio-ZoeH811.git',
    media: [
      {
        type: 'video',
        src: 'assets/projects/ddd-indiv/ddd-showcasevideo.mp4',
        caption: 'Figure 01 — Support system application overview',
      },
    ],
  },
  'prompt-panic': {
    overview: [
      'Prompt Panic is a game developed collaboratively as part ' +
        'of a university Agile Software Engineering project. ' +
        'The assignment challenged our team to design, develop, ' +
        'and deploy a digital game inspired by student life, ' +
        'taking an initial concept through requirements ' +
        'analysis, prototyping, implementation, and release.',

      'The project followed an Agile development approach, ' +
        'using Scrum practices to organise tasks, manage ' +
        'requirements, and coordinate development across the ' +
        'team. User stories were structured into themes and ' +
        'epics, prioritised within a product backlog, and ' +
        'supported by acceptance criteria and a shared ' +
        'Definition of Done.',

      'Development progressed through Launch, Discovery, ' +
        'Alpha, Beta, and Live showcase stages. Each stage ' +
        'focused on progressively refining the product, ' +
        'from establishing the initial game vision and ' +
        'prototyping features to implementing working ' +
        'software and preparing the final deployed release.',

      'Throughout development, the team used project ' +
        'boards, sprint planning, stand-ups, and ' +
        'retrospectives to monitor progress and adapt ' +
        'to changing requirements. Iterative feedback ' +
        'and testing informed improvements to the game, ' +
        'while development practices such as code reviews ' +
        'and continuous integration supported software ' +
        'quality and collaboration.',

      'The completed project demonstrates the practical ' +
        'application of Agile software engineering within ' +
        'a team environment, combining game development ' +
        'with requirements management, iterative delivery, ' +
        'testing, and deployment. It provided experience ' +
        'working towards shared milestones while ' +
        'contributing to a complete software product.',
    ],
    produced:
      'A completed team-developed game, Prompt Panic, ' +
      'delivered through an Agile software development ' +
      'lifecycle. The project included requirements ' +
      'documentation, user stories and acceptance criteria, ' +
      'interactive prototypes, working game software, ' +
      'testing evidence, and a deployed final product.',
    role:
      'Member of a collaborative software development ' +
      'team, contributing to the design, development, ' +
      'testing, and delivery of Prompt Panic. Participated ' +
      'in Agile planning, requirements refinement, ' +
      'development activities, and team reviews.',
    highlights: [
      'Collaborated within a development team to design, ' + 'build, and deploy a complete game.',

      'Applied Agile and Scrum practices throughout ' + 'the software development lifecycle.',

      'Organised requirements into user stories, ' +
        'epics, themes, and measurable acceptance criteria.',

      'Used prioritised product backlogs and project ' + 'boards to coordinate development tasks.',

      'Contributed to iterative prototyping, ' + 'feature development, and software testing.',

      'Participated in sprint planning, stand-ups, ' +
        'and retrospectives to review progress ' +
        'and improve team workflows.',

      'Worked towards structured Launch, Discovery, ' +
        'Alpha, Beta, and Live development milestones.',

      'Supported software quality through testing, ' +
        'feedback, and collaborative development practices.',

      'Contributed to delivering a finished game ' + 'through the final live product showcase.',
    ],
    repository: 'https://github.com/UOH-CS-Level6/group-project-repo-2025-2026-NoiseMak12.git',
    media: [
      {
        type: 'video',
        src: 'assets/projects/ddd-team/dddteam-overview.mp4',
        caption: 'Figure 01 — Prompt Panic gameplay overview.',
      },
    ],
  },
  architecture: {
    overview: [],
    produced: '',
    role: '',
    highlights: [],
    repository: '',
    media: [],
  },
  'sim-ai': {
    overview: [],
    produced: '',
    role: '',
    highlights: [],
    repository: '',
    media: [],
  },
  vr: {
    overview: [
      'An immersive virtual reality retail simulation developed ' +
        'individually using Unity and the XR Interaction Toolkit, ' +
        'designed for the Meta Quest 3. The project recreates a ' +
        'retail environment where users can explore a virtual ' +
        'store, interact with products, and complete structured ' +
        'stock management tasks.',

      'The experience combines physics-based object interaction, ' +
        'validated shelf placement, world-space user interfaces, ' +
        'and multimodal feedback to create an interactive and ' +
        'accessible VR environment. Users can pick up, inspect, ' +
        'and position products while receiving visual, audio, ' +
        'and haptic feedback in response to their actions.',

      'A central progression system manages the retail workflow, ' +
        'requiring users to identify and correctly place products ' +
        'before gaining access to a restricted staff stockroom. ' +
        'Product validation uses structured metadata rather than ' +
        'object names, supporting reusable interactions and ' +
        'preventing incorrect progression.',

      'The project emphasises modular software architecture, ' +
        'event-driven programming, interaction reliability, ' +
        'and VR usability. It demonstrates how immersive ' +
        'technologies can support retail training, workflow ' +
        'simulation, and interactive shopping experiences.',
    ],

    produced:
      'A completed Unity VR retail simulation featuring an ' +
      'interactive shop environment, grabbable products, ' +
      'validated shelf sockets, teleport locomotion, ' +
      'world-space UI, audio and haptic feedback, and ' +
      'a state-controlled staff stockroom.',
    role:
      'Individual developer responsible for designing the ' +
      'retail environment, implementing XR interactions, ' +
      'developing C# gameplay systems, configuring product ' +
      'validation and progression logic, and testing ' +
      'the VR experience.',

    highlights: [
      'Developed a virtual retail environment in Unity ' +
        'using the XR Interaction Toolkit for Meta Quest 3.',

      'Implemented VR controller interactions, teleport ' +
        'locomotion, and physics-based product manipulation.',

      'Created validated shelf sockets that accept or ' +
        'reject products using structured product metadata.',

      'Designed an event-driven interaction system ' +
        'for grabbing, releasing, and placing objects.',

      'Implemented a central state manager to control ' +
        'workflow progression and prevent invalid actions.',

      'Developed a restricted stockroom with animated ' +
        'access controlled by successful task completion.',

      'Integrated world-space UI, spatial audio, and ' +
        'controller haptics to provide interaction feedback.',

      'Applied physics tuning and tracking-aware validation ' +
        'to improve interaction stability and reliability.',
    ],

    repository: 'https://github.com/ZoeH811/Assignment-VR.git',

    media: [
      {
        type: 'video',
        src: 'assets/projects/vr/vr-showcase.mp4',
        caption: 'Figure 01 — VR Retail Simulation Overview',
      },
    ],
  },
  mr: {
    overview: [
      'An immersive mixed reality retail experience developed ' +
        'individually using Unity for the Meta Quest 3. The ' +
        'application transforms an existing university computer ' +
        'laboratory into an interactive retail environment by ' +
        'overlaying virtual products, shelving, promotional ' +
        'displays, and shopping interfaces onto real-world ' +
        'surfaces using full-colour passthrough.',

      'The experience was designed around the physical layout ' +
        'of the Turing PC laboratory, using spatial registration ' +
        'to align virtual retail elements with existing desks, ' +
        'walls, and walkways. Physical desks become product ' +
        'displays, walls support virtual branding, and the ' +
        "laboratory's existing layout provides a navigable " +
        "shopping environment without replacing the user's " +
        'view of the real world.',

      'Natural hand-tracking interactions allow users to ' +
        'browse and manipulate virtual products within the ' +
        'physical environment. One-handed gestures support ' +
        'product selection and handling, while two-handed ' +
        'interactions enable more detailed inspection and ' +
        'manipulation. Spatially positioned interfaces provide ' +
        'product information and contextual feedback without ' +
        "unnecessarily obstructing the user's surroundings.",

      'The project explores the technical challenges of ' +
        'integrating virtual content with real-world geometry, ' +
        'including spatial alignment, object scaling, ' +
        'interaction usability, and rendering. Custom shader ' +
        'techniques enhance the visual presentation of virtual ' +
        'retail elements while maintaining the visibility ' +
        'and accessibility of the physical environment.',

      'Particular attention was given to user comfort, ' +
        'natural movement, and intuitive interaction design. ' +
        'The completed application demonstrates how mixed ' +
        'reality can enhance physical retail spaces through ' +
        'interactive product discovery, spatial interfaces, ' +
        'and immersive shopping experiences.',
    ],
    produced:
      'A completed room-scale mixed reality retail application ' +
      'for Meta Quest 3, featuring full-colour passthrough, ' +
      'spatially aligned virtual retail displays, interactive ' +
      '3D products, hand-tracking interactions, spatial user ' +
      'interfaces, and custom shader-based visual enhancements.',
    role:
      'Individual developer responsible for designing the ' +
      'mixed reality retail experience, developing the Unity ' +
      'application, integrating passthrough and hand-tracking ' +
      'systems, positioning virtual content within the ' +
      'physical environment, implementing interactions ' +
      'and UI, developing visual shaders, and testing ' +
      'spatial alignment and usability.',
    highlights: [
      'Developed a room-scale mixed reality retail ' + 'application in Unity for Meta Quest 3.',

      'Integrated full-colour passthrough to blend virtual ' +
        'retail content with a real-world environment.',

      'Aligned virtual shelves, products, and promotional ' +
        'displays with the physical geometry of a university ' +
        'computer laboratory.',

      'Implemented natural hand-tracking interactions ' +
        'for selecting, grabbing, and inspecting virtual ' +
        'retail products.',

      'Supported one-handed and two-handed object ' +
        'manipulation for intuitive product interaction.',

      'Designed spatially anchored user interfaces ' +
        'and contextual notifications to communicate ' +
        'product information and interaction feedback.',

      'Developed custom shader-based visual effects ' +
        'to enhance the appearance of virtual retail ' +
        'objects and displays.',

      'Prioritised natural physical movement, readable ' +
        'interfaces, and spatial awareness to support ' +
        'comfortable mixed reality interaction.',

      'Tested the experience against real-world room ' +
        'geometry to maintain appropriate virtual object ' +
        'scaling, positioning, and spatial consistency.',
    ],
    repository: 'https://github.com/ZoeH811/MixedRealityProj.git',
    media: [
      {
        type: 'video',
        src: 'assets/projects/mr/mr-overviewvideo.mp4',
        caption: 'Figure 01 — MR Retail Simulation Overview',
      },
    ],
  },
};

// DISPLAY LOGIC: the functions below render cards and project overlays.
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );

// Use UTC so partial dates keep the same displayed month in every time zone.
function projectDate(project) {
  const completed = project.status === 'completed';
  const value = completed ? project.completedDate : project.estimatedCompletionDate;
  if (!/^\d{4}(-\d{2})?(-\d{2})?$/.test(value || '')) return null;

  const [year, month = 1, day = 1] = value.split('-').map(Number);
  if (year < 1000 || month < 1 || month > 12 || day < 1) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCMonth() !== month - 1) return null;

  const options = { year: 'numeric', timeZone: 'UTC' };
  if (value.length >= 7) options.month = 'long';
  if (value.length === 10) options.day = 'numeric';
  return {
    value,
    year: String(year),
    timestamp: date.getTime(),
    text: new Intl.DateTimeFormat('en-GB', options).format(date),
    label: completed ? 'Completed' : 'Estimated completion',
  };
}

function projectDateMarkup(project) {
  const date = projectDate(project);
  if (!date) {
    const message =
      project.status === 'completed'
        ? 'Completion date to be added'
        : 'Estimated completion to be confirmed';
    return `<p class="project-date">${message}</p>`;
  }
  return `<p class="project-date">${date.label}:
    <time datetime="${date.value}">${date.text}</time></p>`;
}

function mediaMarkup(project) {
  if (!project.media.length)
    return `<div class="media-placeholder ${project.visual === 'game' ? 'game-visual' : 'fitness-visual'}">
    <span aria-hidden="true" class="placeholder-symbol">${project.visual === 'fitness' ? '{ + }' : '{ ▶ }'}</span>
    <span>${escapeHTML(project.label)}</span>
    <small>Screenshots & video coming soon</small>
    </div>`;
  return `<div class="project-gallery">${project.media
    .map((item) => {
      const src = escapeHTML(item.src);
      const caption = escapeHTML(item.caption || '');
      const sources = (item.sources || [{ src: item.src, type: 'video/mp4' }])
        .map(
          (source) => `
        <source
          src="${escapeHTML(source.src)}"
          type="${escapeHTML(source.type)}"
        >`,
        )
        .join('');
      return `<figure>${
        item.type === 'video'
          ? `<video controls playsinline preload="metadata"${item.poster ? ` poster="${escapeHTML(item.poster)}"` : ''} aria-label="${escapeHTML(item.alt || item.caption || project.title + ' video')}">
    ${sources}${item.captions ? `<track kind="captions" src="${escapeHTML(item.captions)}" srclang="en" label="English" default>` : ''}Your browser does not support video. <a href="${src}">Download the video</a>.</video>`
          : `<a href="${src}" target="_blank" rel="noopener noreferrer">
    <img src="${src}" alt="${escapeHTML(item.alt || project.title + ' screenshot')}" loading="lazy">
    </a>`
      }${caption ? `<figcaption>${caption}</figcaption>` : ''}${
        item.type === 'video'
          ? `
    <p class="video-error" role="status" hidden></p>`
          : ''
      }</figure>`;
    })
    .join('')}</div>`;
}
// Media errors do not bubble, so listen during the capture phase. This also
// covers videos inserted later when a project overlay is opened.
document.addEventListener(
  'error',
  (event) => {
    const video = event.target;
    if (video.tagName !== 'VIDEO') return;

    const message = video.closest('figure')?.querySelector('.video-error');
    if (!message) return;

    const reasons = {
      1: 'Video loading was interrupted.',
      2: 'The video could not be downloaded. Check the server connection.',
      3: 'The browser could not decode this video.',
      4: 'The video could not be loaded or its format is unsupported.',
    };
    message.textContent = reasons[video.error?.code] || 'Video playback failed.';
    message.hidden = false;
  },
  true,
);

function cardMarkup(project) {
  return `<article class="project-card" id="${project.id}">${mediaMarkup({ ...project, media: project.media.slice(0, 1) })}<div class="project-body">
    <div class="project-meta">
    <span class="status-pill status-${project.status}">${statusNames[project.status]}</span>
    <span class="project-index">${project.category}</span>
    </div>
    <p class="project-label">${escapeHTML(project.label)}</p>
    <h3>${escapeHTML(project.title)}</h3>
    ${projectDateMarkup(project)}
    <p>${escapeHTML(project.description)}</p>
    <div class="tech-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
    <button type="button" class="project-details-button" data-project-details="${project.id}" aria-haspopup="dialog" aria-controls="project-dialog">Explore project <span aria-hidden="true">↗</span>
    <span class="sr-only">: ${escapeHTML(project.title)}</span>
    </button>
    </div>
    </article>`;
}

function repositoryURL(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}

function detailMarkup(project) {
  const details = projectDetails[project.id] || {};
  const paragraphs = details.overview?.length ? details.overview : [project.description];
  const repository = repositoryURL(details.repository);
  const media = [...project.media, ...(details.media || [])];
  return `<div class="detail-heading">
    <p class="eyebrow">${escapeHTML(project.category)} / ${escapeHTML(project.label)}</p>
    <h2 id="project-dialog-title">${escapeHTML(project.title)}</h2>
    <span class="status-pill status-${project.status}">${statusNames[project.status]}</span>
    ${projectDateMarkup(project)}
    </div>
    <div class="detail-layout">
    <div class="detail-copy">
    <section>
    <h3>Project overview</h3>${paragraphs.map((text) => `<p>${escapeHTML(text)}</p>`).join('')}</section>
    <section>
    <h3>What was produced</h3>
    <p>${escapeHTML(details.produced || 'A detailed breakdown of the build will be added here.')}</p>
    </section>
    <section>
    <h3>My role & contribution</h3>
    <p>${escapeHTML(details.role || 'My responsibilities and contributions will be documented here.')}</p>
    </section>
    ${
      details.highlights?.length
        ? `<section>
    <h3>Technical highlights</h3>
    <ul>${details.highlights.map((text) => `<li>${escapeHTML(text)}</li>`).join('')}</ul>
    </section>`
        : ''
    }
    <section>
    <h3>Tools & technologies</h3>
    <div class="tech-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
    </section>
    <section class="detail-repository">
    <h3>Explore the code</h3>${
      repository
        ? `<a class="button button-primary" href="${escapeHTML(repository)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span>
    <span class="sr-only"> (opens in a new tab)</span>
    </a>`
        : `<p>A repository link will be added when available.</p>`
    }</section>
    </div>
    <section class="detail-media">
    <h3>Screenshots & videos</h3>${mediaMarkup({ ...project, media })}</section>
    </div>`;
}

// One native modal for both views: focus stays inside it, Escape dismisses it,
// and the browser makes the page behind it inert while it is open.
const projectDialog = document.createElement('dialog');
projectDialog.id = 'project-dialog';
projectDialog.className = 'project-dialog';
projectDialog.setAttribute('aria-labelledby', 'project-dialog-title');
projectDialog.innerHTML = `<div class="detail-toolbar">
    <span>PROJECT DETAILS</span>
    <button type="button" class="detail-close" aria-label="Close project details" autofocus>Close <span aria-hidden="true">×</span>
    </button>
    </div>
    <div class="detail-content">
    </div>`;
document.body.append(projectDialog);
let projectOpener;
const detailContent = projectDialog.querySelector('.detail-content');
projectDialog.querySelector('.detail-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', (event) => {
  const bounds = projectDialog.getBoundingClientRect();
  if (
    event.target === projectDialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    projectDialog.close();
});
projectDialog.addEventListener('close', () => {
  detailContent.querySelectorAll('video').forEach((video) => video.pause());
  detailContent.innerHTML = '';
  document.body.classList.remove('project-dialog-open');
  if (projectOpener?.isConnected) projectOpener.focus({ preventScroll: true });
});
document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-details]');
  if (!trigger) return;
  const project = portfolio.projects.find((item) => item.id === trigger.dataset.projectDetails);
  if (!project) return;
  projectOpener = trigger;
  document.querySelectorAll('.project-card video').forEach((video) => video.pause());
  detailContent.innerHTML = detailMarkup(project);
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  document.body.classList.add('project-dialog-open');
});

// Render only the projects explicitly selected for the homepage.
const featured = document.querySelector('[data-featured-projects]');
if (featured)
  featured.innerHTML = portfolio.projects
    .filter((project) => project.featured)
    .map(cardMarkup)
    .join('');

// Build the available years from project data; combine all filters before sorting.
const library = document.querySelector('[data-project-library]');
if (library) {
  const form = document.querySelector('#project-filters');
  const count = document.querySelector('#project-count');
  const yearSelect = form.elements.year;
  const years = [
    ...new Set(portfolio.projects.map((project) => projectDate(project)?.year).filter(Boolean)),
  ].sort((a, b) => Number(b) - Number(a));
  yearSelect.innerHTML =
    '<option value="all">All years</option>' +
    years.map((year) => `<option value="${year}">${year}</option>`).join('') +
    '<option value="undated">Date not set</option>';

  function renderProjects() {
    const status = form.elements.status.value;
    const category = form.elements.category.value;
    const year = yearSelect.value;
    const sort = form.elements.sort.value;
    const order = { completed: 0, progress: 1, future: 2 };
    const projects = portfolio.projects.filter((project) => {
      const date = projectDate(project);
      return (
        (status === 'all' || project.status === status) &&
        (category === 'all' || project.category === category) &&
        (year === 'all' || (year === 'undated' ? !date : date?.year === year))
      );
    });
    projects.sort((a, b) => {
      const byName = a.title.localeCompare(b.title);
      if (sort === 'name') return byName;
      if (sort === 'newest' || sort === 'oldest') {
        const first = projectDate(a);
        const second = projectDate(b);
        // Unknown dates stay at the end in either direction.
        if (!first || !second) return Number(!first) - Number(!second) || byName;
        const difference = first.timestamp - second.timestamp;
        return (sort === 'newest' ? -difference : difference) || byName;
      }
      return order[a.status] - order[b.status] || byName;
    });
    library.innerHTML = projects.map(cardMarkup).join('');
    count.textContent = `${projects.length} project${projects.length === 1 ? '' : 's'}`;
    document.querySelector('#projects-empty').hidden = projects.length !== 0;
  }
  form.addEventListener('change', renderProjects);
  // Reset values are applied after the reset event; render on the next task.
  form.addEventListener('reset', () => setTimeout(renderProjects, 0));
  renderProjects();
}

// Keep the existing placeholder until a real PDF path is configured.
const cvAction = document.querySelector('[data-cv-action]');
if (cvAction && portfolio.cv) {
  const link = document.createElement('a');
  link.className = 'button button-primary';
  link.href = portfolio.cv;
  link.download = 'Zoe-Hewitt-CV.pdf';
  link.textContent = 'Download CV ↓';
  cvAction.replaceWith(link);
  document.querySelector('[data-cv-note]').textContent = 'PDF · Download a copy to keep';
}

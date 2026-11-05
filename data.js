const gameProjects = [
  {
    title: "Are You Sure?",
    category: "Visual novel, Simulation",
    short: "An educational narrative game about toxic relationships",
    long: "1st Place Winner — 2026 Life.Love. Game Design Challenge: Toxify.<br><br>Are You Sure? is a narrative-driven game exploring how relationships can become unhealthy even without malicious intentions. Players navigate difficult interpersonal situations and make choices that affect their perception of reality, relationships, and trust in themselves.<br><br>I designed and developed the game, focusing on decision-making systems that explore gaslighting and memory distortion. The game emphasizes psychological tension and meaningful choices without depicting any violence.",
    tag: ["2026", "Game Jam", "1st Place", "Solo", "Unity"],
    links: {
      // itch: "",
      youtube: "https://youtu.be/IGlJT6BZJS4?list=PLZt9A6vVLcX8"
    },
    imgCount: 6
  },
  {
    title: "Last One Standing",
    category: "Visual novel, Simulation",
    short: "A narrative stat-management survival game",
    long: "L.O.S.T is a narrative-driven game focused on stat management and decision-making. Players should survive through a semester with a group project as computer science students, balancing four key stats: stress, tiredness, affinity, and project quality.<br>This project is successfully crowdfunded for the next development phase, full release planned in 2026.<br><br>I worked as a solo developer responsible for all design, programming, and visuals. I focused on creating event stories that resonate with players and balancing stats, ensuring that all four stats meaningfully interact without overwhelming the player.",
    tag: ["2025", "Solo", "Unity"],
    links: {
      youtube: "https://youtu.be/z9t0phKUqew"
    },
    imgCount: 7
  },
  {
    title: "Beat the Sushi",
    category: "Rhythm",
    short: "A timing-based simple rhythm game",
    long: "Beat the Sushi is a simple rhythm game where players use Spacebar/Backspace along with the rhythm to place the fish perfectly on the sushi.<br><br>I worked as a solo developer responsible for all design, programming, and visuals. I focused on implementing a custom note-timing and spawning system using Unity timing functions for frame-accurate.",
    tag: ["2025", "Solo", "Unity"],
    links: {
      itch: "https://soliloquymoon.itch.io/beat-the-sushi",
      youtube: "https://youtu.be/DSc0tVdKhdw",
      github: "https://github.com/soliloquymoon/Beat-The-Sushi"
    },
    imgCount: 5
  },
  {
    title: "Badger Booze",
    category: "Simulation",
    short: "A mobile bartending game with motion controls",
    long: "Badger Booze is a mobile bartender tycoon game with point-and-click and motion-based control. Players work as a bartender in a busy bar, crafting drinks to satisfy randomized customer orders.<br><br>I worked as a generalist developer, contributing to game design, programming, animation, and UI/UX design. I designed the mobile motion-control logic and wireframes, and implemented core gameplay systems including order randomization, drink composition, daily analysis, and recipe progression. I also coordinated team workflow and documentation using Notion.",
    tag: ["2024", "Team", "Unity"],
    links: {
      youtube: "https://youtu.be/PLnetI8ppNg",
      github: "https://github.com/soliloquymoon/Badger-Booze",
      notion: "https://grandiose-dead-45e.notion.site/Badger-Booze-Teamspace-1a0441d60927806c971ec06da9d9f5f1"
    },
    imgCount: 9
  },
  {
    title: "Lucid Ledger",
    category: "Simulation",
    short: "A deck-based business sim about trading dreams",
    long: "Lucid Ledger is a deck-based business simulation game set in a futuristic fantasy world where dreams function as valuable commodities. As the dream accountant, players buy dreams from the market, enhance or modify them using cards to increase their value, and then sell them strategically for profit.<br><br>I worked as a producer, overseeing the project from concept to delivery. I designed the core game concept, managed schedules, and created project documentation. I also contributed to UI/UX design by creating in-game icons, produced the game trailer, and delivered the project presentation.",
    tag: ["2025", "Team", "GameMaker"],
    links: {
      itch: "https://soliloquymoon.itch.io/lucid-ledger",
      youtube: "https://youtu.be/EO8SYXlQ9Ms",
      github: "https://github.com/soliloquymoon/Lucid-Ledger",
      notion: "https://road-iodine-d0e.notion.site/Dashboard-293676abd1dd8128871dde613f2614dd"
    },
    imgCount: 4
  },
  {
    title: "Jelly Room",
    category: "Management",
    short: "An idle tycoon game about raising jellies",
    long: "Jelly Room is a simple idle tycoon game where the player manage jellies, upgrade their room, and unlock new jelly types to maximize jelatine production.<br><br>I worked as a solo developer responsible for all design, programming, and visuals. I focused on creating clear growth feedback loops and tuning upgrade pacing to keep player progression satisfying.",
    tag: ["2024", "Solo", "Unity"],
    links: {
      itch: "https://soliloquymoon.itch.io/jelly-room",
      youtube: "https://youtu.be/ePx51h6XfQE",
      github: "https://github.com/soliloquymoon/Jelly-Room"
    },
    imgCount: 3
  }
];

const modelingProjects = [
  {
    title: "Hourglass",
    short: "A stylized 3D hourglass recreation",
    long: "Originally designed for a character sheet in 2024, this hourglass was recreated in 3D. I translated the stylized concept into a game-ready model, focusing on clean shapes, emissive details, and maintaining the original visual mood.",
    tag: ["2025"],
    imgCount: 3
  },
  {
    title: "LD Character",
    short: "A stylized LD character model study",
    long: "A low-detail 3D character model created to explore stylized proportions, readable silhouettes, and efficient polygon use. The model is fully rigged for basic posing and animation, allowing for experimentation with movements while maintaining simplicity suitable for game-ready implementation. Focused on conveying charm and personality through minimal detail and clear color separation.",
    tag: ["2025"],
    imgCount: 3
  },
  {
    title: "SD Character",
    short: "A stylized SD character model study",
    long: "A practice SD-style 3D character (OC) model created to explore stylized proportions, clean silhouette design, and basic rigging workflow. The goal was to develop a compact, game-ready look while experimenting with exaggerated features and a soft, appealing aesthetic.",
    tag: ["2025"],
    imgCount: 3
  },
  {
    title: "Bakery",
    short: "A cozy stylized 3D bakery scene",
    long: "A small bakery scene featuring playful, stylized food items. I focused on exploring a variety of materials, such as glossy glazes, soft bread surfaces, and light, creamy textures.",
    tag: ["2025"],
    imgCount: 4
  },
  {
    title: "Avocado Logo",
    short: "A 3D jelly-style logo animation",
    long: "A 3D reinterpretation of my 2D GitHub profile logo, built with jelly-like materials and keyframe deformation to create a soft wobbling motion. The animation adds subtle twists and rotation for a playful, organic identity mark.",
    tag: ["2025"],
    imgCount: 2
  }
];

const workInProgressProjects = [
  {
    title: "Project Inside Story",
    short: "A branching narrative mystery game",
    long: "Project Inside Story is a narrative-driven mystery game with branching storylines. Players should uncover the truth behind a murder case by gathering clues through conversations, chat logs, keyword searches, and direct confrontations.<br><br>I am working as a solo developer responsible for all design, programming, and visuals. I am focusing on crafting tight, reactive scenes and pacing events so the player feels fully absorbed in the unfolding mystery.",
    tag: ["WIP", "Game Project", "Solo", "Unity"],
    imgCount: 4
  },
  {
    title: "Last Call",
    short: "A drink-crafting simulation game",
    long: "Last Call is a bartender simulation game focused on crafting and condition-based orders. Players should match the drink stats to the order conditions.<br><br>I worked as a solo developer responsible for design, programming, and visuals. I focused on iterative balancing using R to fine-tune ingredient values and maintain fairness between recipes.",
    tag: ["WIP", "Game Project", "Solo", "Unity"],
    links: {
      github: "https://github.com/soliloquymoon/Last-Call/"
    },
    imgCount: 5
  },
  {
    title: "UI Icons",
    short: "A practice set of stylized 3D UI icons",
    long: "A practice piece for game UI elements. I modeled this reward badge in a soft, stylized 3D style commonly used in casual and mobile games. I plan to create multiple UI elements to build a cohesive visual style.",
    tag: ["WIP", "3D Modeling"],
    imgCount: 1
  }
]
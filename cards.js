// ============================================================
// Project card data — add new projects here
// ============================================================
// Each entry needs:
//   type        : 'internal' | 'external'
//   video       : path to cover video ('' for none)
//   title       : project name
//   titleLink   : URL for the title (local .html for internal, full URL for external)
//   subtitle    : one-line description shown below title
//   author      : "By ..." name
//   tags        : array of tag strings, e.g. ['ar', 'social']
//   description : paragraph shown in accordion
//   learnMoreUrl: URL for the "Learn more" button

var PROJECTS = [
  {
    type: 'external',
    video: 'public/cover-videos/capybara-cover.mp4',
    title: 'Capybara',
    titleLink: 'capybara.html',
    subtitle: 'Programmable and Social AR for Children',
    author: 'Princeton HCI',
    tags: ['mobile'],
    description: 'Capybara is a social AR app that aims to democratize AR by empowering young people to express themselves through creating AR content with others while learning programming. Inspired by Scratch and Pokémon GO, Capybara will enable people of all ages can used block-based programming to build AR experiences with 3D characters that they can place at physical locations, which others can interact with and remix into their own creations.',
    learnMoreUrl: 'https://capybara.cs.princeton.edu',
  },
  {
    type: 'external',
    video: 'public/cover-videos/dream-garden.mp4',
    title: 'Dream gARden',
    titleLink: 'https://dl.acm.org/doi/10.1145/3544549.3585810',
    subtitle: 'Collaboratively Created AR Spaces',
    author: 'Liz Petrov',
    tags: ['mobile'],
    description: 'Despite the potential for connecting strangers in the digital realm, current research has not explored location-based augmented reality experiences that enable strangers to connect by building artifacts collaboratively. With Dream Garden, anyone can see 3D flowers planted by strangers, and plant their own flowers to grow the garden. Dream Garden gives us insights on how we can use augmented reality as a tool to bring people together in real life, creating technologies that bring us together instead of driving us apart.',
    learnMoreUrl: 'https://dl.acm.org/doi/10.1145/3544549.3585810',
  },
  {
    type: 'external',
    video: 'public/cover-videos/artic-escape.mp4',
    title: 'ARtic Escape',
    titleLink: 'https://dl.acm.org/doi/10.1145/3544549.3585841',
    subtitle: 'Socially Engaging AR Escape Rooms',
    author: 'Theo Knoll',
    tags: ['mobile'],
    description: 'While physical escape rooms provide groups with fun, social experiences, they require a gameplay venue, props, and a game master, all of which detract from their ease of access. We present ARctic Escape, a co-located augmented reality two-person escape room designed to promote collaboration through play. Participants found that the ARctic Escape experience was fun, collaborative, promoted discussion, and inspired new social dynamics.',
    learnMoreUrl: 'https://dl.acm.org/doi/10.1145/3544549.3585841',
  },
  {
    type: 'external',
    video: 'public/cover-videos/adam%20gamba%20-%20pokar%20(1).mp4',
    title: 'PokAR',
    titleLink: 'https://arxiv.org/abs/2301.00505',
    subtitle: 'Facilitating Poker Play Through AR',
    author: 'Adam Gamba',
    tags: ['mobile'],
    description: 'PokAR aims to alleviate the following three difficulties of traditional poker by leveraging AR technology: (1) the need to have physical poker chips, (2) complex rules of poker, and (3) slow game pace caused by laborious tasks. With PokAR, two players engage in heads-up Texas hold\'em poker, utilizing AR on their mobile devices to facilitate gameplay. We found that PokAR slightly increased the game pace, and participants had an overall enjoyable experience, suggesting that AR has the potential to augment and simplify traditional table games.',
    learnMoreUrl: 'https://arxiv.org/abs/2301.00505',
  },
  {
    type: 'external',
    video: 'public/cover-videos/anchor-note.mp4',
    title: 'AnchorNote',
    titleLink: 'https://drive.google.com/file/d/1ekovWmMAqBWOC4D-0UzcPD0lGRfpDEMi/view',
    subtitle: 'Exploring Gesture- and Speech-Based Spatial Sticky Notes for Collaboration in Augmented Reality',
    author: 'Diya Hundiwala',
    tags: ['spectacles'],
    description: 'Sticky notes are a durable medium for collaborative brainstorming, but spoken ideas are easily lost if no one captures them. AnchorNote is a co-located AR system that lets pairs of collaborators capture spoken ideas as spatially anchored sticky notes in real time, using live speech transcription and LLM summarization on AR glasses. A two-phase study with 20 participants found that while AnchorNote reduced writing burden, it introduced new coordination costs and reshaped when ideas felt "ready" to share.',
    learnMoreUrl: 'https://drive.google.com/file/d/1ekovWmMAqBWOC4D-0UzcPD0lGRfpDEMi/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/soundscape.mp4',
    title: 'Soundscape',
    titleLink: 'https://drive.google.com/file/d/1PXZBj6gvwCFeWRud5MdYnY7zVmvI3UUr/view',
    subtitle: 'An AR System for Spatially Persistent Music Tagging and Social Discovery',
    author: 'Anish Kataria',
    tags: ['spectacles'],
    description: 'Despite the potential for music to be a shared, place-based experience, current streaming services have made listening solitary and disconnected from physical context. Soundscape is a head-worn AR system that lets users anchor songs to physical locations as persistent music tags, discover traces left by others, and receive context-aware recommendations through a steerable AI "Co-DJ." We found that users strongly valued the social meaning of human-authored tags, but expressed anxiety over the permanence of their own digital traces, highlighting content governance as a key design challenge for social AR systems.',
    learnMoreUrl: 'https://drive.google.com/file/d/1PXZBj6gvwCFeWRud5MdYnY7zVmvI3UUr/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/pairformance.mp4',
    title: 'Pairformance',
    titleLink: 'https://drive.google.com/file/d/1QR8RzwAWyNrGJJwUPnmGUb3QRE8YDqUG/view',
    subtitle: 'Enabling Personal Trainer-Level Guidance',
    author: 'Jesse Barnes',
    tags: ['spectacles'],
    description: 'Beginner gym-goers often feel anxious about their exercise form, yet existing fitness tools fail to replicate the real-time guidance of a personal trainer. PairFormance is a co-located AR system that uses machine learning to let gym partners coach each other on squat depth, overlaying a 3D body skeleton for the observer while displaying rep counts and tempo cues for the squatter. We found that participants valued the objective feedback and felt more confident coaching each other.',
    learnMoreUrl: 'https://drive.google.com/file/d/1QR8RzwAWyNrGJJwUPnmGUb3QRE8YDqUG/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/spyglass.mp4',
    title: 'Spyglass',
    titleLink: 'https://drive.google.com/file/d/1Zkj1ckuBAOjYgcaVz1lJXtue_SCDC5ne/view',
    subtitle: 'Exploring Asymmetric Information in Co-located Augmented Reality',
    author: 'Sava Evangelista',
    tags: ['spectacles'],
    description: 'Many AR systems show identical content to all users, stripping away the nuanced information differences that make face-to-face social interaction rich. Spyglass is a co-located AR adaptation of the social deduction game Spyfall, where non-spy players see detailed 3D props tied to a secret location while the spy sees only abstract blobs. We found that participants enjoyed the AR version more than the analog version, though the asymmetry increased difficulty for the spy and hardware discomfort disrupted immersion.',
    learnMoreUrl: 'https://drive.google.com/file/d/1Zkj1ckuBAOjYgcaVz1lJXtue_SCDC5ne/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/order-up.mp4',
    title: 'Order Up!',
    titleLink: 'https://drive.google.com/file/d/1t9K6xvgSGue0gsS9t-dKhhLqXsF-UuSi/view',
    subtitle: 'A Collaborative AR Kitchen Game for Teamwork Training',
    author: 'Henry Li',
    tags: ['spectacles'],
    description: 'Screen-based tools and virtual environments limit the embodied cues that make real-world teamwork effective, yet physical team-building activities are difficult to standardize and scale. Order Up! is a co-located AR kitchen game where small groups collaborate to complete time-limited cooking orders using shared virtual ingredients and tools on Snapchat Spectacles. We found that participants communicated frequently and developed functional coordination skills, suggesting co-located AR is well-suited for teamwork training.',
    learnMoreUrl: 'https://drive.google.com/file/d/1t9K6xvgSGue0gsS9t-dKhhLqXsF-UuSi/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/focus-proxy.mp4',
    title: 'FocusProxy',
    titleLink: 'https://drive.google.com/file/d/1V2YetHkgZzb_P98mg4xi-_CNc82MDK_Z/view',
    subtitle: 'Ambient Co-Presence for Studying with Augmented Reality',
    author: 'Jack O’Donnell',
    tags: ['spectacles'],
    description: 'Studying alone is often isolating, yet existing solutions either demand too much attention, like video calls, or provide too little social presence, like productivity timers. FocusProxy is an AR system that renders a low-fidelity, activity-aware Bitmoji avatar of a remote study partner within the user\'s physical workspace, using LLMs to infer study behavior from periodic screen captures. We found that participants felt a subtle sense of accountability and reduced isolation without the distraction of synchronous communication.',
    learnMoreUrl: 'https://drive.google.com/file/d/1V2YetHkgZzb_P98mg4xi-_CNc82MDK_Z/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/ar-storytelling-studio.mp4',
    title: 'AR Storytelling Studio',
    titleLink: 'https://drive.google.com/file/d/1nQIYiH0NiNBVqZmX5QEaRgKSwuX9viia/view',
    subtitle: 'Interactive Augmented Reality Theater Using LLM-Powered NPCs',
    author: 'Kevin Edouard, Rhiaan Jhaveri',
    tags: ['spectacles'],
    description: 'Traditional AR theater relies on pre-rendered, scripted assets that limit performers\' ability to improvise in real time. The AR Storytelling Studio is a mixed-reality performance system that lets actors dynamically generate voiced NPCs and interactable 3D props during live scenes using voice, gesture, and LLM-driven dialogue on Snapchat Spectacles. We found that participants viewed the system as a compelling and novel storytelling medium, though generation latency frequently disrupted performance flow and actor usability remained a significant challenge.',
    learnMoreUrl: 'https://drive.google.com/file/d/1nQIYiH0NiNBVqZmX5QEaRgKSwuX9viia/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/cadence.mp4',
    title: 'Cadence',
    titleLink: 'https://drive.google.com/file/d/12pX16u0gL0KHSQ8XJBcGBSPuSi2IaK-z/view',
    subtitle: 'AI-Enabled Spatial Chord Mapping in Augmented Reality for Novice Composers',
    author: 'Evan Soper',
    tags: ['spectacles'],
    description: 'Introductory music theory courses often emphasize memorization over creative application, leaving beginners without opportunities to meaningfully explore composition. Cadence is a co-located AR application that helps novices compose chord progressions by navigating an interactive 3D harmonic map with real-time theoretical explanations from an LLM. We found that participants reported improved understanding of harmonic relationships and greater confidence constructing progressions, suggesting spatial AR can support active compositional learning without replacing learner judgment.',
    learnMoreUrl: 'https://drive.google.com/file/d/12pX16u0gL0KHSQ8XJBcGBSPuSi2IaK-z/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/together-in-reality.mp4',
    title: 'Together in Reality',
    titleLink: 'https://drive.google.com/file/d/16PYmhNmUZO6KV6TY_tdyvtRy1TJxEKDm/view',
    subtitle: 'A Collaborative AR Puzzle Adventure',
    author: 'Natnael Alemayehu',
    tags: ['spectacles'],
    description: 'Traditional escape rooms are expensive and geographically fixed, while historical tours often lack the engagement of active problem-solving. Together in Reality is a collaborative AR puzzle adventure on Snap Spectacles that transforms a historic university site into an interactive game board, using asymmetric "Riddler" and "Solver" roles to force verbal collaboration. We found high participant enjoyment and strong knowledge retention, demonstrating that site-specific AR narratives can effectively democratize the escape room format.',
    learnMoreUrl: 'https://drive.google.com/file/d/16PYmhNmUZO6KV6TY_tdyvtRy1TJxEKDm/view',
  },
  {
    type: 'external',
    video: 'public/cover-videos/artistry.mp4',
    title: 'ARTistry',
    titleLink: 'https://drive.google.com/file/d/1u7eBY5vM3MSN1lYIwP-Iy8tFCYaseh6w/view',
    subtitle: 'Object-Guided Augmented Reality for Teaching Foundational Drawing Techniques Through Spatial Decomposition and Collaboration',
    author: 'Fatiha Haider',
    tags: ['spectacles'],
    description: 'Beginner drawers often struggle to translate what they observe into three-dimensional form, yet most AR drawing tools prioritize tracing over structural reasoning. ARTistry is a co-located AR drawing assistant that overlays interactive 3D geometric primitives onto physical objects, encouraging users to decompose real-world subjects into basic shapes before drawing. We found that participants\' drawings showed measurable improvements in volumetric form and proportion, and shared sessions prompted strategy exchange that deepened spatial understanding.',
    learnMoreUrl: 'https://drive.google.com/file/d/1u7eBY5vM3MSN1lYIwP-Iy8tFCYaseh6w/view',
  },
];

// ============================================================
// Rendering — no need to edit below this line
// ============================================================

var ICON_EXTERNAL = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,80V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H176A8,8,0,0,1,184,80Z" opacity="0.2"></path><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg>';

var ICON_INTERNAL = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path></svg>';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

var TAG_ICONS = {
  spectacles: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M2 15a9.5 9.5 0 0 1 4-7.8"/><path d="M22 15a9.5 9.5 0 0 0-4-7.8"/><line x1="10" y1="15" x2="14" y2="15"/></svg>',
  mobile: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>'
};

function renderTags(tags) {
  return tags.map(function(tag) {
    var icon = TAG_ICONS[tag] ? '<span class="project-tag-icon" style="display:inline-flex;align-items:center;">' + TAG_ICONS[tag] + '</span>' : '';
    return '<a href="' + escapeHtml(tag) + '" class="project-tag" data-tag="' + escapeHtml(tag) + '">'
      + icon
      + '<span>' + escapeHtml(tag) + '</span>'
      + '</a>';
  }).join('');
}

function renderCard(project) {
  var p = project;
  var isInternal = p.type === 'internal';
  var prefix = isInternal ? 'blog-post-internal' : 'blog-post-external';
  var tagsAttr = p.tags.join(',');

  var titleAnchorOpen = isInternal
    ? '<a href="' + escapeHtml(p.titleLink) + '">'
    : '<a href="' + escapeHtml(p.titleLink) + '" target="_blank" rel="noreferrer noopener">';

  var learnMoreAnchorOpen = isInternal
    ? '<a href="' + escapeHtml(p.learnMoreUrl) + '" class="' + prefix + '-navlink1">'
    : '<a href="' + escapeHtml(p.learnMoreUrl) + '" target="_blank" rel="noreferrer noopener" class="' + prefix + '-link1">';

  var icon = isInternal ? ICON_INTERNAL : ICON_EXTERNAL;
  var iconWrapClass = isInternal ? (prefix + '-container5') : (prefix + '-code-embed');
  var videoHtml = p.video
    ? '<video src="' + escapeHtml(p.video) + '" loop="" muted="" preload="auto" autoplay="" playsinline="" class="' + prefix + '-video"></video>'
    : '';

  return (
    '<div class="' + prefix + '-blog-post-card project-card" data-tags="' + escapeHtml(tagsAttr) + '">'
    + videoHtml
    + '<div class="' + prefix + '-container">'
      + '<div data-role="accordion-container" class="' + prefix + '-element accordion-element">'
        + titleAnchorOpen
          + '<h1 class="' + prefix + '-text"><span>' + escapeHtml(p.title) + '</span></h1>'
        + '</a>'
        + '<span class="' + prefix + '-text1"><span>' + escapeHtml(p.subtitle) + '</span></span>'
        + '<div class="' + prefix + '-profile">'
          + '<span>By</span>'
          + '<span class="' + prefix + '-text3"><span>' + escapeHtml(p.author) + '</span></span>'
        + '</div>'
        + '<div class="project-tags">' + renderTags(p.tags) + '</div>'
        + '<span data-role="accordion-content" class="' + prefix + '-text4">'
          + '<span>' + escapeHtml(p.description) + '</span>'
        + '</span>'
      + '</div>'
      + '<div class="' + prefix + '-container1">'
        + '<div class="' + prefix + '-container2">'
          + '<div class="' + prefix + '-container3">'
            + learnMoreAnchorOpen
              + '<div class="' + prefix + '-container4">'
                + '<div class="' + iconWrapClass + '">' + icon + '</div>'
                + '<span class="' + prefix + '-text5">Learn more</span>'
              + '</div>'
            + '</a>'
          + '</div>'
        + '</div>'
      + '</div>'
    + '</div>'
    + '</div>'
  );
}

(function() {
  function render() {
    var container = document.getElementById('project-cards-container');
    if (!container) return;
    container.innerHTML = PROJECTS.map(renderCard).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();

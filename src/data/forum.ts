export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-combat-master-esp-include', title: 'What does Combat Master ESP include?', upvotes: 73,
    excerpt: 'A quick breakdown of boxes, skeletons, name tags and distance covered by the ESP setup guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master ESP and wallhack setup guide', sourcePath: '/blog/combat-master-esp-wallhack-setup/',
    answer: 'The guide covers player boxes, skeleton ESP, name tags, distance readouts and color options, plus wallhack outlines through walls.',
    detail: 'It recommends starting with boxes and distance only, then enabling extra information one option at a time as you get comfortable reading the screen.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust range and colors one step at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-combat-master-wallhack', title: 'How should I set up the wallhack for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm them in a practice match, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master ESP and wallhack setup guide', sourcePath: '/blog/combat-master-esp-wallhack-setup/',
    answer: 'Use the setup guide to enable wallhack outlines, pick high-contrast colors for teammates and enemies, and set a draw distance that suits your usual fights.',
    detail: 'Test your layout in a practice match before relying on it in a live game. A simple configuration is easier to read than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the draw distance before changing sizes or colors.',
  }),
  guideDiscussion({
    slug: 'what-aimbot-fov-is-comfortable', title: 'What aimbot FOV and smoothing are comfortable?', upvotes: 44,
    excerpt: 'The aimbot guide focuses on a small FOV and heavy smoothing so soft aim stays controllable.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master aimbot settings: FOV, smoothing and bones', sourcePath: '/blog/combat-master-aimbot-settings-guide/',
    answer: 'There is no single ideal value for every player. The guide recommends a small FOV with high smoothing, then loosening values gradually while you keep control of your own aim.',
    detail: 'Save your profile once it feels natural so you can return to it after any experiment.',
    tip: 'Change one value at a time and play a short practice session before settling on a new setup.',
  }),
  guideDiscussion({
    slug: 'which-bone-should-i-pick-for-soft-aim', title: 'Which bone should I pick for soft aim?', upvotes: 32,
    excerpt: 'A practical question about chest versus head targeting and when each makes sense.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master aimbot settings: FOV, smoothing and bones', sourcePath: '/blog/combat-master-aimbot-settings-guide/',
    answer: 'The guide suggests chest for general and close-range fights because it is more forgiving, and head or upper chest for long-range engagements.',
    detail: 'It also recommends saving separate profiles so you can switch quickly depending on the weapon you carry.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-use-the-combat-master-radar', title: 'How do I use the 2D radar effectively?', upvotes: 29,
    excerpt: 'Place it near your normal glance path, keep the range medium and check it before crossing open ground.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master 2D radar and minimap guide', sourcePath: '/blog/combat-master-radar-minimap-guide/',
    answer: 'The radar guide recommends a medium size and range, positioned in a corner where you already glance, with slight transparency so the game stays visible behind it.',
    detail: 'Pair each radar glance with a look at the actual scene so you do not tunnel on the minimap.',
    tip: 'Glance at the radar before crossing open ground and again after every fight.',
  }),
  guideDiscussion({
    slug: 'what-is-in-combat-master-full', title: 'What is included in Combat Master Full?', upvotes: 67,
    excerpt: 'The overview guide lists every module and explains how they work together.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Combat Master cheats guide: ESP, aimbot and radar', sourcePath: '/blog/combat-master-esp-aimbot-radar-guide/',
    answer: 'The guide describes Combat Master Full as including player ESP, wallhack, soft aimbot, a 2D radar, a stream-proof overlay and patch updates in one package.',
    detail: 'It also explains how the modules complement each other, for example ESP for what is in front of you and radar for what is around you.',
    tip: 'Compare the feature list against your needs before checkout; the full table is in the overview guide.',
  }),
  guideDiscussion({
    slug: 'monthly-or-lifetime-combat-master', title: 'Monthly or Lifetime: which plan should I choose?', upvotes: 53,
    excerpt: 'Monthly is $35 and Lifetime is $150—here is how the buying guide compares them.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'How to buy Combat Master cheats in 2026: Monthly vs Lifetime', sourcePath: '/blog/how-to-buy-combat-master-cheats/',
    answer: 'Both plans include every module. The buying guide suggests Monthly for trying the cheat or playing for a season and Lifetime for regular players.',
    detail: 'If you expect to play for more than four to five months, Lifetime costs less overall.',
    tip: 'Review the requirements and the terms before you buy; all sales are final.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-the-stream-proof-overlay', title: 'What should I know about the stream-proof overlay?', upvotes: 38,
    excerpt: 'The guide explains how to test that overlays stay off your recordings.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Stream-proof overlay setup for Combat Master', sourcePath: '/blog/combat-master-stream-proof-overlay/',
    answer: 'Stream-proof mode hides the overlay from common capture software. The guide recommends testing every capture mode you plan to use with a short saved recording.',
    detail: 'It notes that stream-proof hides what is drawn on screen but not obvious gameplay behavior.',
    tip: 'Do not rely on the live preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-a-combat-master-patch', title: 'What should I do after a Combat Master patch?', upvotes: 24,
    excerpt: 'Check status, update the loader, and test in a practice match before you play for real.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Combat Master anti-cheat patch day checklist', sourcePath: '/blog/combat-master-anti-cheat-patch-checklist/',
    answer: 'The checklist says to read the latest status notes, wait until the loader matches the game version, download the newest loader and test in a practice match.',
    detail: 'It also recommends conservative aim settings for the first matches after any update.',
    tip: 'If status shows updating, testing or detected, stop and wait.',
  }),
  guideDiscussion({
    slug: 'can-anti-cheat-updates-affect-combat-master-hacks', title: 'Can anti-cheat updates affect Combat Master hacks?', upvotes: 46,
    excerpt: 'Yes. The checklist explains what changes with game, anti-cheat, Windows and Steam updates.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Combat Master anti-cheat patch day checklist', sourcePath: '/blog/combat-master-anti-cheat-patch-checklist/',
    answer: 'The guide lists game, anti-cheat, Windows and Steam updates as events that can change loader behavior or increase risk until the build is reviewed.',
    detail: 'Undetected is a point-in-time label, not a promise, so waiting after a patch is the safer choice.',
    tip: 'Re-download the newest loader instead of reusing an old file.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-sniper-soft-aim', title: 'How should I tune soft aim for sniper rifles?', upvotes: 21,
    excerpt: 'Use a narrow FOV, high smoothing and a head or upper-chest bone, and hold the aim key only while scoped.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Combat Master sniper aimbot and loadout tips', sourcePath: '/blog/combat-master-sniper-aimbot-loadout-guide/',
    answer: 'The sniper guide recommends a narrow FOV and heavy smoothing, with the aim key held only while scoped so assist does not trigger outside the scope.',
    detail: 'It also suggests keeping a separate saved profile for scoped weapons.',
    tip: 'Accept the occasional miss; perfect shots every time look suspicious.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-between-combat-master-esp-and-radar', title: 'Do I need both ESP and the radar?', upvotes: 33,
    excerpt: 'They cover different information, and the overview guide explains why they work best together.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Combat Master cheats guide: ESP, aimbot and radar', sourcePath: '/blog/combat-master-esp-aimbot-radar-guide/',
    answer: 'ESP shows players in your view and the radar shows everything around you, including areas behind you. The guide recommends using both.',
    detail: 'Both are included in Combat Master Full, so you do not need to choose between them.',
    tip: 'Use the radar to check for flanks and ESP to read targets during the fight.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'is-combat-master-esp-safe-to-use', category: 'General', categoryTone: 'purple',
    title: 'Is Combat Master ESP safe to use?',
    excerpt: 'Quick answer from the overview guide: no cheat is risk free, and status can change after any patch.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Combat Master cheats guide: ESP, aimbot and radar', sourcePath: '/blog/combat-master-esp-aimbot-radar-guide/',
    body: ['No cheat is risk free. Anti-cheat and report systems change, and undetected is a point-in-time label rather than a guarantee. ESP is quieter than obvious aim assist, but it is still third-party software.', 'The overview guide recommends reading the latest status notes before you play, starting with conservative settings and stopping if status shows updating or detected.'],
    comments: [
      { author: 'squad_leader', age: '1 hour ago', score: 24, body: 'Always check status before launching after an update. Waiting a few hours is cheaper than losing an account.' },
      { author: 'rotation_reader', age: '48 min. ago', score: 11, body: 'The guide suggests boxes and distance first, then extra overlays once you read the screen comfortably.' },
      { author: 'practice_range', age: '35 min. ago', score: 8, body: 'Test in a practice match first and keep your settings modest.' },
    ],
  },
  {
    slug: 'how-do-i-install-the-combat-master-loader', category: 'General', categoryTone: 'purple',
    title: 'How do I install the Combat Master loader?',
    excerpt: 'Download the current loader after checkout, run it as administrator, then launch Combat Master from Steam.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to buy Combat Master cheats in 2026: Monthly vs Lifetime', sourcePath: '/blog/how-to-buy-combat-master-cheats/',
    body: ['After checkout, download the loader and setup guide from your order. Run the loader as administrator on Windows 10 or 11, then launch Combat Master from Steam and open the in-game menu.', 'If something fails, email support@combatmasterhacks.org with your order email, Windows version and the exact error text.'],
    comments: [
      { author: 'steam_first', age: '3 hours ago', score: 17, body: 'Make sure Combat Master is fully updated through Steam before you start the loader.' },
      { author: 'admin_rights', age: '2 hours ago', score: 9, body: 'Right-click and run as administrator if the overlay does not appear.' },
    ],
  },
  {
    slug: 'practice-combat-master-esp-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the best way to practice my ESP setup?',
    excerpt: 'Use a practice match, add overlays one at a time and save a profile you like.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Combat Master ESP and wallhack setup guide', sourcePath: '/blog/combat-master-esp-wallhack-setup/',
    body: ['Practice in a training or practice match. Enable boxes and distance first, walk around a building to check readability, then add wallhack outlines, skeletons and name tags one by one.', 'When the screen feels right, save the profile so you can reload it next session instead of starting again.'],
    comments: [
      { author: 'corner_checker', age: '5 hours ago', score: 13, body: 'Shorter draw distance in buildings made the biggest difference for me.' },
      { author: 'color_contrast', age: '4 hours ago', score: 6, body: 'High-contrast team colors help a lot when lighting changes.' },
    ],
  },
  {
    slug: 'what-to-check-before-playing-after-a-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a patch?',
    excerpt: 'The patch-day checklist recommends checking status, updating the loader and testing in a practice match.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'Combat Master anti-cheat patch day checklist', sourcePath: '/blog/combat-master-anti-cheat-patch-checklist/',
    body: ['Check the current status notes first. After a game update, wait for a compatible build, download the newest loader and verify the setup in a practice match before you queue for real.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies.'],
    comments: [
      { author: 'patch_watcher', age: '8 hours ago', score: 12, body: 'Testing after the update before real matches is the part people skip. Do not skip it.' },
      { author: 'steady_hands', age: '7 hours ago', score: 7, body: 'If status has not caught up, wait. A checklist beats guessing.' },
    ],
  },
  {
    slug: 'combat-master-esp-or-aimbot-first', category: 'Community', categoryTone: 'green',
    title: 'Should I learn ESP or soft aim first?',
    excerpt: 'Our overview recommends starting with ESP and radar, then adding soft aim with modest settings.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Combat Master cheats guide: ESP, aimbot and radar', sourcePath: '/blog/combat-master-esp-aimbot-radar-guide/',
    body: ['According to the overview guide, ESP and radar are information tools and are quieter than aim assist. Start there, get comfortable reading the screen, and then add soft aim with a small FOV and heavy smoothing.', 'The best fit depends on how you play. Read the full overview before choosing which modules to rely on.'],
    comments: [
      { author: 'one_more_round', age: '10 hours ago', score: 10, body: 'Starting with ESP and radar made it easier to tune soft aim later because I already understood positions.' },
    ],
  },
  {
    slug: 'how-to-learn-soft-aim-in-practice', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I get comfortable with soft aim before real matches?',
    excerpt: 'Use a practice match, start with a small FOV and raise smoothing until movement feels natural.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Combat Master aimbot settings: FOV, smoothing and bones', sourcePath: '/blog/combat-master-aimbot-settings-guide/',
    body: ['Open a practice match and set a small FOV so assist only triggers when your crosshair is already close. Raise smoothing until the movement feels like a slightly faster version of your own aim.', 'Change one value at a time and save the profile when it feels natural. The linked guide has a full tuning routine.'],
    comments: [
      { author: 'slow_and_smooth', age: '20 hours ago', score: 10, body: 'Heavy smoothing felt too slow at first, but it looks much more natural.' },
      { author: 'profile_saver', age: '18 hours ago', score: 5, body: 'Save profiles often so you can go back to a setup that worked.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

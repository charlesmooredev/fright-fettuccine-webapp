import { BlogData } from '../types/generated';

export enum BlogType {
  Top,
  Classics,
}

export const blogsArray = [
  {
    id: 1,
    title: "The Midnight Hunt: A True Encounter with the Vampires of Raven's Hollow",
    image: 'the_midnight_hunt.jpg',
    poster: 'NightTeller',
    type: BlogType.Top,
    sections: [
      'In the small, fog-covered town of Raven’s Hollow, whispers of the old tales still linger. Most dismiss them as nothing more than ghost stories told around campfires, but I’m here to tell you they’re not just stories. They’re warnings.',
      'It was a cold autumn night, the kind that chills you to the bone even if you’re bundled up. I was driving through Raven’s Hollow after visiting an old friend. The moon was high, casting an eerie glow on the leafless trees that lined the road. That’s when I saw it – a figure, tall and unnaturally still, standing at the edge of the woods.',
      'Curiosity got the best of me. I slowed down and noticed that the figure was a man, dressed in old-fashioned clothing, his skin as pale as the moonlight. But it was his eyes that froze me in my tracks – crimson red, glowing with an unnatural hunger.',
      'Before I could react, the man vanished, leaving behind nothing but the cold air and an overwhelming sense of dread. I sped off, but as I glanced in my rearview mirror, I saw them – a group of figures, emerging from the woods, moving faster than any human should.',
      'I barely made it out of Raven’s Hollow that night. I’ve tried to rationalize what I saw, but deep down, I know the truth. The tales of vampires in Raven’s Hollow aren’t just stories. They’re real, and they’re hunting.',
    ],
    comments: [
      {
        poster: 'SkepticalSam',
        comment:
          'This story is way too far-fetched. Vampires? Really? Sounds like something out of a bad horror movie.',
        date: '2024-08-10',
      },
      {
        poster: 'VampireHunter82',
        comment:
          "I've been to Raven's Hollow. This isn't just a story... I saw something similar, and it changed my life forever.",
        date: '2024-08-11',
      },
      {
        poster: 'ShadowSeeker',
        comment:
          'Whether you believe it or not, there are dark things in this world. The signs are all there if you know where to look.',
        date: '2024-08-12',
      },
      {
        poster: 'JustaStoryBro',
        comment: "I think it's just a creative writing exercise. Good read though!",
        date: '2024-08-12',
      },
      {
        poster: 'NoSleepNancy',
        comment: 'I read this late at night, and now I can’t sleep. Thanks for the nightmares...',
        date: '2024-08-12',
      },
    ],
  },
  {
    id: 2,
    title: 'The Beast of Pine Ridge: My Terrifying Encounter with Bigfoot',
    image: 'beast_pine_ridge.jpg',
    poster: 'WildernessWatcher',
    sections: [
      'Pine Ridge has always been known for its dense forests and untamed wilderness. For years, locals have whispered about strange sightings in the woods, but I always chalked it up to overactive imaginations—until last week.',
      'It was just after dusk when I decided to take a walk along the old logging road that cuts through the heart of the forest. The trees loomed tall on either side, and the only sound was the crunch of leaves underfoot. That’s when I noticed the silence. No birds, no rustling of animals—just an eerie, unnatural quiet.',
      'As I rounded a bend, I saw it. A massive, hulking figure covered in dark, matted fur. It stood at least eight feet tall, with arms as thick as tree trunks. My heart stopped as the creature turned its head slowly, locking eyes with me. Its gaze was piercing, almost intelligent.',
      'For a moment, we both stood frozen. Then, in a blur of motion, it disappeared into the trees, moving with a speed and grace that seemed impossible for something so large. I didn’t waste a second—I turned and ran back the way I came, not stopping until I was safely back in my cabin.',
      'Since that night, I’ve been unable to shake the feeling that I’m being watched. I don’t know what I saw out there, but I’m convinced that Pine Ridge is home to something that defies explanation. The legends of Bigfoot aren’t just stories—they’re a warning.',
    ],
    type: BlogType.Top,
    comments: [
      {
        poster: 'SkepticSteve',
        comment: 'Come on, man. Bigfoot? This sounds like something out of a cheap TV show.',
        date: '2024-08-09',
      },
      {
        poster: 'OutdoorJoe',
        comment:
          "I've hiked Pine Ridge too, and I’ve heard some strange things at night. Maybe there's more to this story than we think.",
        date: '2024-08-10',
      },
      {
        poster: 'BelieverBob',
        comment:
          'I’ve always believed in Bigfoot, and stories like this just confirm it for me. There’s too much evidence to ignore.',
        date: '2024-08-10',
      },
      {
        poster: 'NatureNerd',
        comment: 'Whether or not Bigfoot is real, this is a great story. I got chills reading it!',
        date: '2024-08-11',
      },
      {
        poster: 'EyesWideOpen',
        comment: 'Keep your eyes peeled out there. The woods are full of mysteries.',
        date: '2024-08-11',
      },
    ],
  },
  {
    id: 3,
    title: 'The Shadow Stalker: A Nightmarish Encounter in Blackwood Forest',
    image: 'shadow_stalker.jpg',
    poster: 'NightOwl',
    sections: [
      'Blackwood Forest has always had a reputation for being a place where strange things happen. The dense trees, the perpetual fog, and the eerie silence make it feel like the forest is alive with secrets. But nothing could have prepared me for what I encountered there last month.',
      'It was a chilly evening, and I was camping with a few friends deep in the heart of Blackwood. As the night wore on, a thick fog rolled in, swallowing up our campfire and plunging us into darkness. That’s when I saw it—something moving just beyond the tree line, barely visible through the mist.',
      'At first, I thought it was just a trick of the light, but then it stepped closer. The creature was tall, impossibly thin, with limbs that seemed to stretch far beyond normal proportions. Its skin was dark, almost blending in with the shadows, and its eyes—those eyes—were like two burning embers, piercing through the fog.',
      'It moved silently, almost gliding across the ground. My friends didn’t see it at first, but I couldn’t tear my eyes away. It seemed to be watching us, studying us. And then, just as quickly as it appeared, it vanished into the darkness, leaving behind nothing but an overwhelming sense of dread.',
      "Since that night, I’ve been haunted by the memory of the creature. The locals call it the 'Shadow Stalker,' a creature of the night that preys on those who wander too deep into Blackwood Forest. I used to think the stories were just old legends, but now I know better. The Shadow Stalker is real, and it’s out there, lurking in the darkness, waiting for its next victim.",
    ],
    type: BlogType.Top,
    comments: [
      {
        poster: 'DoubtfulDave',
        comment: "Sounds like you let your imagination run wild. There's no such thing as a 'Shadow Stalker.'",
        date: '2024-08-05',
      },
      {
        poster: 'ForestDweller',
        comment:
          "I've camped in Blackwood before and felt like something was watching me. Maybe there's some truth to this.",
        date: '2024-08-05',
      },
      {
        poster: 'TrueBeliever',
        comment:
          'The Shadow Stalker is a well-known legend around these parts. I’ve heard similar stories from others.',
        date: '2024-08-06',
      },
      {
        poster: 'JustHereForTheScares',
        comment: 'This gave me chills! Great story, even if it is just fiction.',
        date: '2024-08-06',
      },
      {
        poster: 'ShadowSeeker',
        comment: 'The forest is full of things we don’t understand. Be careful out there.',
        date: '2024-08-07',
      },
    ],
  },
  {
    id: 4,
    title: "The Siren's Lament: A Sailor's Last Voyage",
    image: 'sirens_lament.jpg',
    poster: 'SeaFarer',
    sections: [
      'The ocean has always been a place of mystery and danger, but nothing compares to what I experienced on my last voyage. The sea was calm that night, the sky clear and filled with stars. We were sailing along the coast, heading for port, when we heard it—a song so hauntingly beautiful it seemed to come from the very depths of the sea.',
      'At first, we thought it was just the wind playing tricks on us, but the song grew louder, more irresistible. The men were entranced, their eyes glazed over as they leaned over the rails, searching for the source of the melody. That’s when we saw her—a figure in the water, illuminated by the moonlight. She was stunning, with long, flowing hair and a voice that could break the hardest of hearts.',
      'But there was something wrong, something sinister. Her eyes were dark, devoid of warmth, and her smile—oh, that smile—was cold and predatory. I tried to warn the men, but they were beyond reason, drawn to her like moths to a flame.',
      'Before I knew it, two of the crew had jumped overboard, swimming towards her. I could only watch in horror as they disappeared beneath the waves, their cries for help swallowed by the sea. The song stopped abruptly, and the siren vanished into the depths, leaving behind an eerie silence and the stark realization that we had lost them.',
      'We returned to port with fewer men and heavy hearts. I’ll never forget the look in her eyes, or the power of her song. The legends of sirens aren’t just sailor’s tales—they’re warnings. Beware the call of the sea, for it may be the last thing you ever hear.',
    ],
    type: BlogType.Classics,
    comments: [
      {
        poster: 'SaltySam',
        comment:
          'This sounds like every old sailor’s tale I’ve ever heard. Probably just exhaustion playing tricks on your mind.',
        date: '2024-08-08',
      },
      {
        poster: 'MermaidMara',
        comment: 'There are too many stories like this for them all to be fake. I believe you!',
        date: '2024-08-08',
      },
      {
        poster: 'OceanOracle',
        comment: 'The sea is a mysterious place. I’ve heard similar tales from other sailors. Stay safe out there.',
        date: '2024-08-09',
      },
      {
        poster: 'SkepticSally',
        comment: 'Sounds like a good story, but I’m not buying it. Maybe you just need a break from the sea.',
        date: '2024-08-09',
      },
      {
        poster: 'WaveWatcher',
        comment: 'I got chills reading this. Whether real or not, it’s a haunting tale.',
        date: '2024-08-09',
      },
    ],
  },
  {
    id: 5,
    title: "The Werewolf of Silverwood: A Full Moon's Terror",
    image: 'werewolf_of_silverwood.jpg',
    poster: 'MoonGazer',
    sections: [
      'Silverwood is a small, quiet town nestled in the mountains, but it holds a dark secret that only the locals whisper about. They say that on the night of a full moon, something prowls the woods—something not entirely human.',
      'I had heard the stories growing up, but I never believed them. That all changed one fateful night when I decided to take a walk through the forest under the light of the full moon. The air was crisp, the night silent, save for the occasional rustle of leaves.',
      'As I walked deeper into the woods, I felt an uneasy sensation, like I was being watched. The hairs on the back of my neck stood on end. That’s when I heard it—a low, guttural growl coming from the shadows. My heart raced as I scanned the darkness, trying to make sense of the sound.',
      'Then, I saw it. A pair of glowing yellow eyes staring back at me, followed by the hulking figure of a beast. It stood upright, covered in coarse fur, its snout elongated with sharp fangs that gleamed in the moonlight. It was a werewolf, just like the legends described. The creature let out a bone-chilling howl that echoed through the trees, and I knew I had to run.',
      'I barely made it back to town, my lungs burning and my heart pounding in my chest. The locals didn’t need to ask what I had seen—they knew. The werewolf of Silverwood is real, and it’s still out there, hunting under the full moon. If you ever find yourself in Silverwood on a moonlit night, stay inside, and pray the beast doesn’t find you.',
    ],
    type: BlogType.Classics,
    comments: [
      {
        poster: 'DoubtingThomas',
        comment: 'Werewolves? Really? Sounds like someone’s been watching too many horror movies.',
        date: '2024-07-18',
      },
      {
        poster: 'HowlingHenry',
        comment: 'I’ve heard those howls at night too. There’s definitely something in those woods.',
        date: '2024-07-20',
      },
      {
        poster: 'SilverSurvivor',
        comment:
          'I grew up in Silverwood, and I believe every word of this. The full moon isn’t a time to be out there.',
        date: '2024-07-20',
      },
      {
        poster: 'LunaLover',
        comment: 'This is terrifying! Whether true or not, it’s a great story.',
        date: '2024-07-21',
      },
      {
        poster: 'WolfWatcher',
        comment: 'There are more things in this world than we understand. Stay safe, everyone.',
        date: '2024-07-21',
      },
    ],
  },
  {
    id: 6,
    title: "The Mothman's Warning: A Night of Dread in Point Pleasant",
    image: 'mothman.jpg',
    poster: 'UrbanLegendsFan',
    sections: [
      'Point Pleasant is known for its quiet streets and small-town charm, but it’s also infamous for something much darker—the legend of the Mothman. I always thought it was just a story, a tale spun to scare children. That was until one fateful night when I came face to face with the creature itself.',
      'It was a cold November evening, and I was driving home from a friend’s house when I decided to take a shortcut through an old country road. The air was heavy with fog, and the trees seemed to close in around me as I drove. Suddenly, my headlights caught something—an enormous figure with glowing red eyes, standing in the middle of the road.',
      'The creature was unlike anything I had ever seen—tall, with massive wings that stretched out like those of a giant moth. It stared at me, unblinking, as if it was looking right into my soul. My hands trembled as I gripped the steering wheel, unsure of what to do.',
      'Just as I was about to back up, the Mothman spread its wings and took off into the night, disappearing into the fog. I sat there in stunned silence, my heart pounding in my chest. I didn’t know what it meant, but I had a terrible feeling that something bad was going to happen.',
      'The next day, news broke that the Silver Bridge had collapsed, taking dozens of lives with it. I couldn’t shake the feeling that the Mothman had been a warning, a harbinger of the disaster to come. The legend is real, and its appearance is not something to be taken lightly.',
    ],
    type: BlogType.Classics,
    comments: [
      {
        poster: 'SkepticSandra',
        comment: 'This sounds like a spooky coincidence, but I’m not convinced it was the Mothman.',
        date: '2024-06-22',
      },
      {
        poster: 'MothmanBeliever',
        comment: 'The Mothman is real. There are too many sightings for it to be fake. This story gave me chills.',
        date: '2024-06-25',
      },
      {
        poster: 'BridgeBuilder',
        comment: "I've heard about the Silver Bridge disaster. If the Mothman was a warning, we should pay attention.",
        date: '2024-07-04',
      },
      {
        poster: 'FoggyDriver',
        comment: 'I’ve driven those roads at night, and they’re creepy enough without adding the Mothman into the mix.',
        date: '2024-08-02',
      },
      {
        poster: 'UrbanLegendLover',
        comment:
          "Great story! Whether you believe in the Mothman or not, it's one of the most fascinating urban legends out there.",
        date: '2024-08-05',
      },
    ],
  },
  {
    id: 7,
    title: 'The Ghost of the Grey Lady: Haunting the Halls of Whittington Manor',
    image: 'grey_lady_ghost.jpg',
    poster: 'HistoryHaunter',
    sections: [
      'Whittington Manor is a grand, old estate that has stood for centuries. It’s the kind of place that echoes with the past, where every creak of the floorboards feels like a whisper from another time. But the manor’s most infamous resident is not of the living—the Grey Lady, a ghost that has haunted its halls for as long as anyone can remember.',
      'The legend says she was the wife of a lord, betrayed and heartbroken, who took her own life in the manor’s tower. Since then, she’s been seen wandering the halls, her sorrowful figure draped in grey, searching for something—or someone—that she lost.',
      'I visited Whittington Manor as part of a historical tour, not expecting to see anything out of the ordinary. The guide recounted the story of the Grey Lady, but I brushed it off as just another ghost story. That was until I found myself alone in the library, the air suddenly turning cold.',
      'Out of the corner of my eye, I saw her—a faint, grey figure gliding silently through the room. She moved as though in a trance, her face hidden beneath a veil. I froze, unable to speak or move, as she passed by me, her presence sending a chill down my spine.',
      'When I finally found the courage to leave the room, I told the guide what I had seen. He only nodded, saying that many visitors have seen the Grey Lady, and she always appears when the manor is at its most quiet. I left Whittington Manor with a new respect for the stories of old. The Grey Lady’s sorrow is real, and she still roams the halls, bound to the place where her heart was broken.',
    ],
    type: BlogType.Classics,
    comments: [
      {
        poster: 'NonBelieverNina',
        comment: 'Ghosts? Really? I think your mind was just playing tricks on you.',
        date: '2024-03-24',
      },
      {
        poster: 'HauntedHelen',
        comment: 'I’ve been to Whittington Manor too, and I felt the same cold chill. The Grey Lady is real.',
        date: '2024-04-27',
      },
      {
        poster: 'HistoryBuff',
        comment: 'The story of the Grey Lady is well-documented. Many have seen her over the years.',
        date: '2024-06-15',
      },
      {
        poster: 'SpookedSarah',
        comment: 'I got goosebumps just reading this. Whether or not you believe in ghosts, this is a haunting tale.',
        date: '2024-06-19',
      },
      {
        poster: 'GhostHunterGary',
        comment: 'I’d love to visit Whittington Manor myself. Maybe I’ll catch a glimpse of the Grey Lady!',
        date: '2024-08-07',
      },
    ],
  },
] as BlogData[];

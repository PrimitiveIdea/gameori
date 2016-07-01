
/** administrators indexes **/
db.getCollection("administrators").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** games indexes **/
db.getCollection("games").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** administrators records **/
db.getCollection("administrators").insert({
  "_id": ObjectId("577542221c3aaacab1000001"),
  "password": "mtrk213",
  "username": "admin",
  "__v": 0
});

/** games records **/
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d3a01c3aaa49df000000"),
  "amazon_link": "https://www.amazon.com/Final-Fantasy-XIV-Heavensward-Standard/dp/B00ZVQKUGW/ref=pd_sim_367_4?ie=UTF8&dpID=51euVJjGQgL&dpSrc=sims&preST=_AC_UL320_SR258%2C320_&refRID=CZ5MBCCT5ZTF4PD6ZAZV",
  "date": ISODate("2016-06-29T17:53:09.748Z"),
  "description": "Heroes of Eorzea, the time has come to rise once again! Set forth with players across the globe on an adventure that will take you to the heavens and beyond. A whole new FINAL FANTASY XIV awaits!\r\nFeaturing an Increased Level Cap (50-60), Flying Mounts, a New Playable Race – The Au Ra, and 3 New Jobs – Dark Knight, Machinist, and Astrologian, FINAL FANTASY XIV: Heavensward expands on all the elements that make FINAL FANTASY XIV stand out.\r\n\r\n    An ongoing FINAL FANTASY story that keeps evolving\r\n    Dynamic, open-world real time events that require multiple players working together to defeat\r\n    Epic battles against classic FINAL FANTASY monsters, including the fearsome Primals\r\n    Freely change your character class easily and on the fly with the Armoury System\r\n    Play with friends from around the world no matter what platform they own\r\n\r\nAdditional hardware required for Remote Play.\r\nUse of PSN and SEN account are subject to the Terms of Service and User Agreement and applicable privacy policy (see terms at sonyentertainmentnetwork.com/terms-of-service & sonyentertainmentnetwork.com/privacy-policy).\r\n\r\n*Online multiplayer also requires a PlayStation Plus subscription.\r\n\r\n2010 - 2015 SQUARE ENIX CO., LTD. All Rights Reserved.\r\nHEAVENSWARD is a registered trademark or trademark of Square Enix Co., Ltd. FINAL FANTASY, SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd.\r\n \r\nThe ESRB rating icon is a registered trademark of the Entertainment Software Association. All other trademarks are the properties of their respective owners.\r\n \r\n\r\nSystem Requirements:\r\n\r\n    Supported Platforms: PlayStation 4",
  "game_id": "FINAL FANTASY XIV: Heavensward - Windows",
  "game_title": "FINAL FANTASY XIV: Heavensward",
  "images": {
    "image_banner": "./public/user/res/images/1000000002/banner.jpg",
    "image_review": "./public/user/res/images/1000000002/review.jpg",
    "image_large": "./public/user/res/images/1000000002/large.jpg",
    "image_thumb": "./public/user/res/images/1000000002/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000002/icon.jpg"
  },
  "tag": " FINAL FANTASY XIV: Heavensward expands on all the elements that make FINAL FANTASY XIV stand out."
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d3c81c3aaa9ebf000001"),
  "amazon_link": "https://www.amazon.com/Final-Fantasy-XV-PlayStation-4/dp/B00DBF829C/ref=sr_1_1?s=videogames&ie=UTF8&qid=1467222863&sr=1-1&keywords=Final+fantasy",
  "date": ISODate("2016-06-29T18:16:55.526Z"),
  "description": "\"Get ready to be at the centre of the ultimate fantasy adventure. Enter the world of FINAL FANTASY XV, and experience epic action-packed battles along your journey of discovery. You are Noctis, the Crown Prince of the Kingdom of Lucis, and your quest is to reclaim your homeland from the clutches of the imperial army. Joined by your closest friends, you will take the wheel and experience a voyage like no other, travelling through the breath-taking world of Eos encountering larger-than-life beasts and unforgiving enemies. You will learn to master the skills of weaponry and magic, channelling the power of your ancestors allowing you to effortlessly warp through the air in thrilling combat. Fresh faces and long-time fans, fulfil your destiny and experience a brand new kind of fantasy. Pre-order the Day One Edition to receive the exclusive FINAL FANTASY series weapon - the Masamune!\" ",
  "game_id": "Final Fantasy XV - PlayStation 4",
  "game_title": "Final Fantasy XV",
  "images": {
    "image_banner": "./public/user/res/images/1000000003/banner.jpg",
    "image_review": "./public/user/res/images/1000000003/review.jpg",
    "image_large": "./public/user/res/images/1000000003/large.png",
    "image_thumb": "./public/user/res/images/1000000003/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000003/icon.jpg"
  },
  "tag": "FINAL FANTASY XV, and experience epic action-packed battles along your journey of discovery."
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d3eb1c3aaa9ebf000002"),
  "amazon_link": "https://www.amazon.com/Lightning-Returns-Final-Fantasy-Playstation-3/dp/B00946FSIA/ref=sr_1_3?s=videogames&ie=UTF8&qid=1467306172&sr=1-3&keywords=final+fantasy+xiii",
  "date": ISODate("2016-06-30T17:19:24.903Z"),
  "description": "The world of Gran Pulse is sinking into the sea and what remains is now called Nova Chrysalia. With only thirteen days remaining until the end of the world, Chaos reigns in a world that never ages. New life cannot be born. People need salvation. As Lightning, it is your mission to save as many souls as possible so that they may be brought to the new world. Along the journey, you will encounter familiar faces and engage new foes in all new lands. You must ultimately choose which souls to save and which to abandon and fully understand Lightning's true destiny. It all ends here. ",
  "game_id": "Lightning Returns: Final Fantasy XIII",
  "game_title": "Final Fantasy XIII - Lightning Returns",
  "images": {
    "image_banner": "./public/user/res/images/1000000004/banner.png",
    "image_review": "./public/user/res/images/1000000004/review.jpg",
    "image_large": "./public/user/res/images/1000000004/large.jpg",
    "image_thumb": "./public/user/res/images/1000000004/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000004/icon.png"
  },
  "tag": "The world of Gran Pulse is sinking into the sea and what remains is now called Nova Chrysalia."
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d4001c3aaa49df000002"),
  "amazon_link": "https://www.amazon.com/Assassins-Creed-Syndicate-Standard-PlayStation-4/dp/B00X87BLK0/ref=sr_1_1?s=videogames&ie=UTF8&qid=1467307349&sr=1-1&keywords=assassins+creed",
  "date": ISODate("2016-06-30T17:24:12.630Z"),
  "description": "London, 1868. The Industrial Revolution unleashes an incredible age of invention, transforming the lives of millions with technologies once thought impossible. Opportunities created during this period have people rushing to London to engage in this new world, a world no longer controlled by kings, emperors, politicians, or religion, but by a new common denominator: money.\r\n \r\n\r\nNot everyone is able to enjoy the benefits of this boom, however. Despite fueling the engine of the British Empire, workers’ lives are little more than legalized slavery while the top few percent profit from their labor. Living poor and dying young, the lower class unite in protest as a new kind of family, gangs, who turn to a life in the underworld in their struggle to survive. A struggle, until watchful Assassins come to their side and re-ignite an age-old conflict involving London’s leaders that will echo throughout modern history, from the underground up.\r\n \r\n\r\nIntroducing Jacob Frye, who with the help of his twin sister Evie, will change the fate of millions in Assassin’s Creed Syndicate. Rise to rally and lead the underworld to break the corrupt stranglehold on London in a visceral adventure filled with action, intrigue, and brutal combat.",
  "game_id": "Assassin's Creed: Syndicate - Standard Edition - PlayStation 4",
  "game_title": "Assassin's Creed",
  "images": {
    "image_banner": "./public/user/res/images/1000000005/banner.jpg",
    "image_review": "./public/user/res/images/1000000005/review.jpg",
    "image_large": "./public/user/res/images/1000000005/large.png",
    "image_thumb": "./public/user/res/images/1000000005/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000005/icon.jpg"
  },
  "tag": "London, 1868. The Industrial Revolution unleashes an incredible age of invention"
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d3da1c3aaa49df000001"),
  "amazon_link": "https://www.amazon.com/Final-Fantasy-XIV-Reborn-Download/dp/B00CMSCV4Q/ref=pd_sim_367_1?ie=UTF8&dpID=51IQKFCIkGL&dpSrc=sims&preST=_AC_UL320_SR226%2C320_&refRID=5M1S65DB0P07BSYY8FS6",
  "date": ISODate("2016-06-29T17:30:29.766Z"),
  "description": "FINAL FANTASY XIV: A Realm Reborn is a massively multiplayer online role-playing game (MMORPG) for Windows® PC and PlayStation®3 that invites you to explore the realm of Eorzea with friends from around the world. Form a party and adventure with a multitude of players from across theglobe. Forge friendships, mount chocobos, and board airships as you and your companions create your own unique stories in Eorzea. Set out alone or enlist the aid of friends as you undertake epic quests, battle familiar FINAL FANTASY monsters, and acquire unique abilities and equipment. All the classic elements from the series that you have come to know and love are waiting! Embark on the adventure of a lifetime to help reforge the fate of Eorzea on PS3 or PC on 08.27.13\r\n\r\nStory Overview:\r\nEorzea. A Land embraced by Gods and forged by Heroes. Seeking control of this realm and its abundant crystal resources, the Garlean Empire sends forth a massive host on a campaign to conquer its southern neighbor. Driven by madness, the commander of the invading forces silently plots to tear the moon from the heavens and hurl it down upon the land. The people of the realm soon learn of this foul scheme, and join their hands in prayer in an eleventh-hour attempt to entreat the aid of the gods, only to see their endeavors fail. From within the moon emerges Bahamut, an ancient terror seething with rage fueled by countless generations of imprisonment. Sensing the tug of Fate, a powerful magus channels the last of his strength to send Eorzea’s heroes into a temporal rift. There they wait, untouched by the flames of destruction, until they are needed again. Those heroes are you, and the hour of awakening is now. Come and witness a realm reborn.\r\n\r\n\r\nKey Features:\r\n\r\n    All the hallmarks of the FINAL FANTASY franchise, including an engaging storyline, genre-leading graphics, and HD real time cut scenes\r\n    Robust gameplay features such as player-run Free Companies, story-driven player-vs.-player content, and a unique summoning system, all designed to accommodate a dynamic player community\r\n    Incredible new graphics engine that delivers a high level of detail and quality on both the PlayStation 3 and Windows PC platforms\r\n    A flexible class system that allows players to change to any of the eighteen different classes on the fly, simply by swapping their equipped weapon or tool\r\n    Breathtaking musical score by renowned FINAL FANTASY series composers\r\n    Cross-platform play on PlayStation 3 and Windows PC\r\n\r\n\r\n\r\nSystem Requirements:\r\n\r\nMinimum Requirements:\r\n\r\n    Supported OS: Windows Vista 32/64 bit   Windows 7 32/64 bit   Windows 8 32/64 bit\r\n    Processor: Intel® Core™2 Duo 3GHz\r\n    RAM: 2GB (4GB recommended for 64bit OS)\r\n    Hard Disk: 20 GB\r\n    Video Card: NVIDIA® Geforce® 8800 or higher, ATI Radeon™ HD 4770 or higher\r\n    Additional Requirements: Screen Resolution: 1280x720\r\n    Internet: Persistent broadband internet connection required\r\n    Sound Card: DirectSound® compatible sound card (DirectX® 9.0c or higher)\r\n    DirectX®: DirectX® 9.0c or higher\r\n\r\nRecommended Requirements:\r\n\r\n    Supported OS: Windows 7 32/64 bit   Windows 8 32/64 bit\r\n    Processor: Intel® Core™ i5 2.66GHz\r\n    RAM: 4 GB\r\n    Hard Disk: 20 GB\r\n    Video Card: NVIDIA® Geforce® GTX 660 or higher, AMD Radeon™ HD 7950 or higher\r\n    Additional Requirements: Screen Resolution: 1920x1080\r\n    Internet: Persistent broadband internet connection required\r\n    Sound Card: DirectSound® compatible sound card (DirectX® 9.0c or higher)\r\n    DirectX®: DirectX® 9.0c or higher \r\n\r\n* NVIDIA® SLI™ and AMD CrossFire™ support will be available at release.\r\n\r\nSystem Requirements:\r\nSupported OS:  \tWindows 7,Windows Vista,Windows,Windows 8\r\nProcessor:  \t        none specified\r\nRAM:  \t                none specified\r\nHard Disk:  \t        none specified\r\nVideo Card:  \t        none specified",
  "game_id": "Final Fantasy XIV: A Realm Reborn [Download]",
  "game_title": "Final Fantasy XIV: A Realm Reborn",
  "images": {
    "image_banner": "./public/user/res/images/1000000001/banner.jpg",
    "image_review": "./public/user/res/images/1000000001/review.jpg",
    "image_large": "./public/user/res/images/1000000001/large.jpg",
    "image_thumb": "./public/user/res/images/1000000001/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000001/icon.jpg"
  },
  "tag": "FINAL FANTASY XIV: A Realm Reborn is a MMORPG game that invites you to explore the realm of Eorzea with friends from around the world. "
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d4121c3aaa9ebf000003"),
  "amazon_link": "https://www.amazon.com/Final-Fantasy-Type-0-HD-PlayStation-4/dp/B00KWJ4JW4/ref=sr_1_1?s=videogames&ie=UTF8&qid=1467307514&sr=1-1&keywords=final+fantasy+type-0",
  "date": ISODate("2016-06-30T17:29:22.572Z"),
  "description": "One of the most highly anticipated role-playing games of all time, FINAL FANTASY TYPE-0 makes its Western debut on PlayStation 4 and Xbox One as FINAL FANTASY TYPE-0 HD. Featuring the immersive story, memorable characters, and production values the series is known for, players are transported to Orience, a dark, FINAL FANTASY world governed by crystals and torn apart by war, as the nation’s youth are swept into its conflict. Step into the fray as Class Zero, a group of fourteen students from an elite military academy whose country is attacked by an aggressive neighboring Empire. Using the powerful abilities and magic of all fourteen characters in fast-paced action RPG combat, players must face the brutality and injustices of war to uncover the secrets of its genesis. ",
  "game_id": "Final Fantasy Type-0 HD - PlayStation 4",
  "game_title": "Final Fantasy Type-0",
  "images": {
    "image_banner": "./public/user/res/images/1000000006/banner.jpg",
    "image_review": "./public/user/res/images/1000000006/review.jpg",
    "image_large": "./public/user/res/images/1000000006/large.jpg",
    "image_thumb": "./public/user/res/images/1000000006/thumb.png",
    "image_icon": "./public/user/res/images/1000000006/icon.jpg"
  },
  "tag": "FINAL FANTASY TYPE-0 makes its Western debut on PlayStation 4 and Xbox One as FINAL FANTASY TYPE-0 HD"
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d4241c3aaa49df000003"),
  "amazon_link": "https://www.amazon.com/Diablo-III-Reaper-Souls-PC-Mac/dp/B00FENJVOE/ref=sr_1_3?s=videogames&ie=UTF8&qid=1467307784&sr=1-3&keywords=diablo+III",
  "date": ISODate("2016-06-30T17:33:21.792Z"),
  "description": "No One Can Stop Death -\r\nThe Prime Evil rages within the Black Soulstone, its essence screaming for vengeance and release. Before the artifact can be sealed away forever, Malthael -- the Angel of Death -- manifests in the mortal realms with a deadly new purpose: to steal the Black Soulstone and bend its infernal power to his will. So begins the end of all things… ",
  "game_id": "Diablo III: Reaper of Souls - PC",
  "game_title": "Diablo III : Reaper of Souls",
  "images": {
    "image_banner": "./public/user/res/images/1000000007/banner.jpg",
    "image_review": "./public/user/res/images/1000000007/review.jpg",
    "image_large": "./public/user/res/images/1000000007/large.jpg",
    "image_thumb": "./public/user/res/images/1000000007/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000007/icon.png"
  },
  "tag": "The Prime Evil rages within the Black Soulstone, its essence screaming for vengeance and release"
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d43c1c3aaa9ebf000004"),
  "amazon_link": "https://www.amazon.com/Technomancer-PC-DVD/dp/B01HH0P3L6/ref=sr_1_2?s=videogames&ie=UTF8&qid=1467308024&sr=1-2&keywords=technomancer",
  "date": ISODate("2016-06-30T17:37:37.150Z"),
  "description": "Spiders studio is back with The Technomancer, a sci-fi RPG for PlayStation 4, Xbox One and PC set on Mars during the War of Water, where an aspiring Technomancer faces a myriad of questions as his future grows threatened by the secrets of his past. Technomancers are \"mage-warriors\", who harness, thanks to an innate talent, destructive electrical-based powers, amplified by their cybernetic implants. Both respected and feared by all, they are fearsome warriors trained from a young age to fight. You are one of them, about to finally pass your initiation rite to become a fully-fledged Technomancer. An RPG, The Technomancer will offer players action-oriented combat gameplay along four different skill trees, focusing on 3 different fighting styles and the destructive electric-focused powers of the Technomancers. But all situations aren't necessarily to be dealt with brute strength, with dynamic conversation dialogue playing a deep role in quests, changing the story depending on the decisions you make. Craft equipment, weapons and armor for yourself and for the companions you'll recruit along your adventure, nurturing relationships with them. On the run from the Secret Police and confronted by the harsh realities of the Red Planet, you must undertake a quest that takes you through forgotten paradises, cities lost under the ice, and dystopian shanties sprawled across Mars' dusty embrace. Faced with the cruelty of Mars' iron-fist enforcers and alien wild-life, can you survive long enough to uncover the truth behind The Technomancer? ",
  "game_id": "The Technomancer (PC DVD)",
  "game_title": "The Technomancer",
  "images": {
    "image_banner": "./public/user/res/images/1000000008/banner.jpg",
    "image_review": "./public/user/res/images/1000000008/review.jpg",
    "image_large": "./public/user/res/images/1000000008/large.jpg",
    "image_thumb": "./public/user/res/images/1000000008/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000008/icon.jpg"
  },
  "tag": "Spiders studio is back with The Technomancer, a sci-fi RPG for PlayStation 4, Xbox One and PC set on Mars during the War of Water"
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d44a1c3aaa49df000004"),
  "amazon_link": "https://www.amazon.com/Watch-Dogs-2-PlayStation-4/dp/B01GKF7T9S/ref=sr_1_2?s=videogames&ie=UTF8&qid=1467308312&sr=1-2&keywords=watch+dogs+2",
  "date": ISODate("2016-06-30T17:41:35.749Z"),
  "description": "Explore the birthplace of the tech revolution as Marcus Holloway, a brilliant young hacker who has fallen victim to ctOS 2.0's predictive algorithms and accused of a crime he did not commit. In Marcus' quest to shut down ctOS 2.0 for good, hacking is the ultimate weapon.  Players can not only hack into the San Francisco Bay Area's infrastructure but also every person and any connected device they possess to trigger unpredictable chains of events in this vast open world. ",
  "game_id": "Watch Dogs 2 - PlayStation 4",
  "game_title": "Watch Dogs 2",
  "images": {
    "image_banner": "./public/user/res/images/1000000009/banner.jpg",
    "image_review": "./public/user/res/images/1000000009/review.jpg",
    "image_large": "./public/user/res/images/1000000009/large.jpg",
    "image_thumb": "./public/user/res/images/1000000009/thumb.jpg",
    "image_icon": "./public/user/res/images/1000000009/icon.jpg"
  },
  "tag": "Explore the birthplace of the tech revolution as Marcus Holloway"
});
db.getCollection("games").insert({
  "__v": 0,
  "_id": ObjectId("5775d45a1c3aaa9ebf000005"),
  "amazon_link": "https://www.amazon.com/Elex-PlayStation-4/dp/B01GT0RJVM/ref=sr_1_1?s=videogames&ie=UTF8&qid=1467308520&sr=1-1&keywords=elex",
  "date": ISODate("2016-06-30T17:44:48.768Z"),
  "description": "Advanced in technology, civilized and with a population of billions, Magalan was a planet looking to the future. Then the meteor hit. Those who survived are now trapped in a battle to survive, a struggle to decide the fate of a planet. At the center of this fight is the element \"Elex\". A precious, limited resource that arrived with the meteor, Elex can power machines, open the door to magic, or re-sculpt life into new, different forms. But which of these choices should be the future of Magalan? Can technology, or magic save this world? Or will this new power destroy all those left alive amongst the ruins? ELEX is an action, role-playing open world game for PC and Consoles, developed by Piranha Bytes, creators of the award winning Gothic series and is set in a brand new, post-apocalyptic, Science-Fantasy universe where magic meets mechs. ",
  "game_id": "Elex - PlayStation 4",
  "game_title": "Elex",
  "images": {
    "image_banner": "./public/user/res/images/1000000010/banner.jpg",
    "image_review": "./public/user/res/images/1000000010/review.jpg",
    "image_large": "./public/user/res/images/1000000010/large.jpg",
    "image_thumb": "./public/user/res/images/1000000010/thumb.png",
    "image_icon": "./public/user/res/images/1000000010/icon.jpg"
  },
  "tag": "Advanced in technology, civilized and with a population of billions, Magalan was a planet looking to the future"
});

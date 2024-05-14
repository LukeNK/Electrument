let SongList = [
    {
        name: 'Tenshi ni Fureta yo',
        artist: 'Ho-kago Tea Time',
        origin: 'Anime K-ON',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=bOMFXPkB8ZY'
    },
    {
        name: 'Hey Kid!',
        artist: 'The Oral Cigarettes',
        origin: 'Anime Nogarami Aragoto',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=KpcJbHqbaUU',
        thumbnail: 'https://www.deviantart.com/neko-slay/art/Noragami-Boundary-524213466',
        background: 'https://suzuyajuzoo.tumblr.com/post/131234634742/in-honor-of-noragami-season-new-icon-theme-and'
    },
    {
        name: 'Fallen Down',
        artist: 'Toby Fox',
        origin: 'Game Undertale (Ost 85)',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=nD8ftjwAYGc',
        thumbnail: 'https://wallpapercave.com/w/wp4714513',
        background: 'http://getwallpapers.com/wallpaper/full/7/1/3/6410.jpg#.Xje1uoA9xJE.link'
    },
    {
        name: 'Caramelldansen',
        artist: 'Caramella Girls',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=KvJbo_R7kfc',
        background: 'https://funnyjunk.com/anime/79107'
    },
    {
        name: 'Yuru camp no theme',
        artist: 'Akiyuki Tateyama',
        origin: 'Anime Yuru Camp',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=9K75R6KnigY',
        sheet: './sheet/[Piano] Yuru Camp Theme.pdf',
        MIDI: './midi/[Piano] Yuru Camp Theme.mid',
        thumbnail: 'https://wall.alphacoders.com/big.php?i=925917',
        background: 'https://wall.alphacoders.com/big.php?i=1010451'
    },
    {
        name: 'Reunited',
        artist: 'Toby Fox',
        origin: 'Game Undertale (Ost 92)',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=Wff5RelRZpg',
        background: 'http://getwallpapers.com/collection/undertale-wallpaper-1920x1080'
    },
    {
        name: 'Kirameki',
        english: 'Sparkle',
        artist: 'Wacci',
        origin: 'Anime Your Lie In April Ending',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=CA_gPa4zz5o',
        thumbnail: 'https://www.pixiv.net/en/artworks/52114925',
        background: 'https://www.pixiv.net/en/artworks/53508797'
    },
    {
        name: 'Hazumu Kokoro',
        artist: 'Kenichiro Suehiro',
        origin: 'Anime Girl Last Tour',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=GIDgrypKcd0',
        thumbnail: 'https://wall.alphacoders.com/big.php?i=897218',
        background: 'https://wall.alphacoders.com/big.php?i=955396'
    },
    {
        name: 'I Wanna Be a Girl',
        artist: 'Mafumafu',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=K2OlZojHKIo',
        original: 'https://www.youtube.com/watch?v=ucbx9we6EHk',
    },
    {
        name: 'Tell Your World',
        artist: 'kzLivetune',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=tTD8NwNLLVM',
        thumbnail: 'https://twitter.com/1030Aoiyui/status/1380893267886137344',
    },
    {
        name: 'Tomorrow',
        artist: 'Machico',
        origin: 'Anime Konosuba Season 2 Opening',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=t2Od3LNrohg',
        thumbnail: 'https://www.pixiv.net/en/artworks/108133645',
        background: 'https://twitter.com/Yansae81/status/1345655525795512321'
    },
    {
        name: 'Literature',
        artist: 'Reina Ueda',
        origin: 'Anime Wandering Witch: The Journey of Elaina',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=QeuLwONAJwc',
        sheet: './sheet/[Piano] Reina Ueda - Literature.pdf',
        thumbnail: 'https://twitter.com/pioko_b/status/1344980241744158722',
    },
    {
        name: 'Darkness',
        artist: 'Original song',
        youtube: 'https://www.youtube.com/watch?v=Trg25jTl_BI',
        instrument: 'Piano',
    },
    {
        name: 'Serenity',
        artist: 'Original song',
        youtube: 'https://www.youtube.com/watch?v=9WVLJvY3XsA',
        instrument: 'Piano, guitar',
    },
    {
        name: 'Tell Your World',
        artist: 'kzLivetune',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=dRL1kgDk33c',
        thumbnail: 'https://www.pixiv.net/en/artworks/95932921',
    },
    {
        name: 'Adrenaline!!!',
        artist: 'TrySail',
        origin: 'Anime Eromanga Sensei Opening',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=RAcLhmpxTsQ',
        thumbnail: 'https://twitter.com/Ixy/status/1378611244622610437/photo/1',
    },
    {
        name: 'Snowflake Memories',
        artist: 'IdolM@ster Shiny Colors',
        origin: 'Game IdolM@ster',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=Wpx9KjeuPoo',
        thumbnail: 'https://www.pixiv.net/en/artworks/77588541',
    },
    {
        name: 'Little Parade',
        artist: 'Kdash',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=0HnZwPqsozM',
        thumbnail: 'https://www.deviantart.com/neonoholic/art/Little-Parade-Keidasshu-ft-Hatsune-Miku-640374614',
    },
    {
        name: 'Short sketch 1',
        artist: 'Original song',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=zVtmTTi2-iM'
    },
    {
        name: 'Sunset March',
        artist: 'Kdash',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=o8U-fK6PtK4',
        sheet: './sheet/[Piano] Kdash - Sunset march.pdf',
        original: 'https://www.youtube.com/watch?v=ZLqrcMzbQAg',
        thumbnail: 'https://www.pixiv.net/en/artworks/67655952',
    },
    {
        name: 'Bless Your Breath',
        artist: 'WADATAKEAKI',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=D_2buf9vw84',
        sheet: './sheet/[Piano] WADATAKEAKI - Bless Your Breath.pdf',
        thumbnail: 'https://www.pixiv.net/en/artworks/74995694',
    },
    {
        name: 'Showdown',
        artist: 'Jose Pavli',
        origin: 'Game Project Wingman OST for mission 11',
        instrument: 'Piano, guitar',
        youtube: 'https://www.youtube.com/watch?v=mSiNrTrm6VQ',
        "piano sheet": './sheet/[Piano] Jose Pavli - Showdown.pdf',
        "guitar sheet": './sheet/[Guitar] Jose Pavli - Showdown.pdf',
        thumbnail: 'https://www.deviantart.com/chrissanti01/art/PROJECT-WINGMAN-PW-MK-1-THE-CRIMSON-MONARCH-947698491',
    },
    {
        name: 'Pliocene no Tabibito',
        artist: 'Saiph',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=bmISCG0vJ80',
        sheet: './sheet/[Piano] Saiph - Pliocene no Tabibito.pdf',
        thumbnail: 'https://www.pixiv.net/en/artworks/100886455',
    },
    {
        name: 'Sharing the World',
        artist: 'BIGHEAD',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=iPTnZeHLExA',
        thumbnail: 'https://twitter.com/apapico/status/720105504408780803',
    },
    {
        name: 'Illumination',
        artist: 'Alisa Okehazama',
        origin: "Anime Onimai: I'm Now Your Sister OST",
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=SchOe4y7b1M',
        sheet: './sheet/[Piano] Alisa Okehazama - Illumination.pdf',
        thumbnail: 'https://twitter.com/KoroB_Greey86/status/1638933279083737089/photo/1',
    },
    {
        name: 'Harumachi Clover',
        artist: 'Kosuke Okui',
        origin: "Anime One Room Season 1 Ending",
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=7hG80MmnGZc',
        thumbnail: 'https://www.pixiv.net/artworks/61862194',
    },
    {
        name: 'Ugoku, Ugoku',
        artist: 'kegani (Soutarou Namikawa)',
        origin: "Anime Girls' Last Tour Opening",
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=UjMet_cd8Zs',
        thumbnail: 'https://www.pixiv.net/en/artworks/67811136',
    },
    {
        name: 'Acrise',
        artist: 'L.Mity, EspiDev',
        instrument: 'Piano, violin',
        youtube: 'https://www.youtube.com/watch?v=mpP-25_wQAg',
        original: "https://www.youtube.com/watch?v=W_UEJNbygAc",
        thumbnail: 'https://www.pixiv.net/en/artworks/112173308',
    },
    {
        name: 'Farewell',
        artist: 'Pikasonic',
        instrument: 'Orchestra',
        youtube: 'https://www.youtube.com/watch?v=U1oozY6o9AQ',
        original: "https://www.youtube.com/watch?v=9z2wXMTNQuU",
        thumbnail: 'https://www.pixiv.net/en/artworks/80534776',
    },
    {
        name: 'Kataware Doki, River Flows in You, Canon in D medley',
        artist: 'RADWIMPS, Yurima, Pachelbel',
        instrument: 'Piano, guitar, violin',
        youtube: 'https://www.youtube.com/watch?v=Jp90ZG3ssEs',
        thumbnail: 'https://www.pixiv.net/en/artworks/59175405',
    },
    {
        name: 'The Amazing Digital Circus Main Theme',
        artist: 'Gooseworx',
        origin: 'The Amazing Digital Circus',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=Jmk0g5obzkE',
        sheet: './sheet/[Piano] Gooseworx - The Amazing Digital Circus Main Theme.pdf',
        original: 'https://www.youtube.com/watch?v=H-AT42lYGBg',
    },
    {
        name: 'Reunited',
        artist: 'Toby Fox',
        origin: 'Game Undertale (Ost 92)',
        instrument: 'Piano',
        youtube: 'https://www.youtube.com/watch?v=V7EPuD9Ke18',
        original: 'https://www.youtube.com/watch?v=8K0npQ--ACw',
        thumbnail: 'https://www.pixiv.net/en/artworks/66803694'
    },
    {
        name: 'Last Score',
        artist: 'Sekikomi Gohan',
        vocaloid: 'Hatsune Miku',
        instrument: 'Piano',
        youtube: 'https://youtu.be/vG12RuWFnB4',
        original: 'https://www.youtube.com/watch?v=zAWu9BK_V5M',
        thumbnail: 'https://twitter.com/wamavwv/status/1666416069530255362'
    },
    {
        name: 'Home',
        artist: 'Toby Fox',
        origin: 'Game Undertale (Ost 12)',
        instrument: 'Piano, guitar',
        youtube: 'https://youtu.be/MRsb50X-tvk',
        original: 'https://www.youtube.com/watch?v=J_hJDitrh8M',
        thumbnail: 'https://medibang.com/picture/wk2206152216405400014408735/'
    },
    {
        name: "But I'm Not Interested In Christmas At All",
        artist: 'Camellia',
        singer: 'Nanahira',
        instrument: 'Piano',
        youtube: 'https://youtu.be/eoLBplkEDC0',
        original: 'https://www.youtube.com/watch?v=jFt4GIgtpBE',
        sheet: './sheet/[Piano] Camellia - But I\'m Not Interested In Christmas At All.pdf',
        MIDI: './midi/[Piano] Camellia - But I\'m Not Interested In Christmas At All.mid',
        thumbnail: 'From the original video'
    },
    {
        name: 'Alice Good Night',
        artist: 'Yuk-Cheung Chun',
        origin: 'Game DEEMO soundtrack',
        instrument: 'Piano',
        youtube: 'https://youtu.be/PHCFGiW8UC0',
        sheet: './sheet/[Piano] Yuk-Cheung Chun - Alice Good Night.pdf',
        MIDI: './midi/[Piano] Yuk-Cheung Chun - Alice Good Night.mid',
        thumbnail: 'https://www.pixiv.net/en/artworks/88078058'
    },
    {
        name: 'Alice in the Freezer',
        artist: 'Orangestar',
        vocaloid: 'IA',
        instrument: 'Piano',
        youtube: 'https://youtu.be/v7aC1TcEtJc',
        original: 'https://www.youtube.com/watch?v=jQmYZWjLwzw',
        MIDI: './midi/[Piano] Orangestar - Alice in the Freezer.mid',
        thumbnail: 'https://www.pixiv.net/en/artworks/109971529'
    },
    {
        name: 'Yellow Rose',
        artist: 'Ros Mo',
        instrument: 'Piano',
        youtube: 'https://youtu.be/z-gjXq-mgEM',
        original: 'https://www.youtube.com/watch?v=1L7gwpGZ5Oc',
        MIDI: './midi/[Piano] Ros Mo - Yellow Rose.mid',
        thumbnail: 'From the original video'
    },
    {
        name: 'Only to Me in 10 Years',
        artist: '*Luna',
        singer: 'Kohana Lam',
        instrument: 'Piano',
        youtube: 'https://youtu.be/rQFF95J0IzE',
        original: 'https://www.youtube.com/watch?v=A0z7PeJF5ug',
        sheet: './sheet/[Piano] Luna - Only to Me in 10 Years.pdf',
        MIDI: './midi/[Piano] Luna - Only to Me in 10 Years.mid',
        thumbnail: 'https://www.pixiv.net/en/artworks/84932449'
    },
]
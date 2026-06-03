const fs = require('fs');

for (const id in SongList) {
    const song = SongList[id];

    let frontMatter = '---\n';
    frontMatter += `layout: song\n`;
    for (const key in song) {
        frontMatter += `${key}: ${song[key]}\n`;
    }
    frontMatter += '---\n';

    fs.writeFileSync('_song/' + id + '.html', frontMatter);
}
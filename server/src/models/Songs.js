module.exports = (sequelize, dataType) => {
  const Song = sequelize.define('Songs', {
    title: dataType.STRING,
    artist: dataType.STRING,
    genre: dataType.STRING,
    album: dataType.STRING,
    albumImageUrl: dataType.STRING,
    youtubeId: dataType.STRING,
    lyrics: dataType.TEXT,
    tab: dataType.TEXT
  })

  return Song
}

function MusicPlayer() {
  return (
    <div className="music-player">
      <audio controls>
        <source
          src="/music/song.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default MusicPlayer;
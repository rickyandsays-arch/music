const songGrid = document.getElementById('songGrid');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');

// Generate 50 Songs
for (let i = 1; i <= 50; i++) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
        <div style="width:100%; height:140px; background:#333; border-radius:4px; margin-bottom:10px; display:flex; align-items:center; justify-content:center; font-size:40px">🎵</div>
        <h4>Song Title ${i}</h4>
        <p style="color:#b3b3b3; font-size:13px">R.N Artist</p>
    `;
    
    card.onclick = () => {
        trackName.innerText = `Song Title ${i}`;
        trackArtist.innerText = `R.N Artist`;
        console.log("Playing song " + i);
    };
    
    songGrid.appendChild(card);
}

// Play Button Toggle
document.getElementById('masterPlay').addEventListener('click', function() {
    this.innerText = this.innerText === '▶' ? '⏸' : '▶';
});
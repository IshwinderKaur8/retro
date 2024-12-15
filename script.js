document.addEventListener('DOMContentLoaded', function() {
    let hitCount = localStorage.getItem('hitCount') || 0;
    hitCount++;
    localStorage.setItem('hitCount', hitCount);
    document.getElementById('hit-count').textContent = hitCount;
});

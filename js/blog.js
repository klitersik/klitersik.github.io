document.addEventListener('DOMContentLoaded', function () {
  const postsContainer = document.getElementById('blog-posts-container');
  const postsToShow = 6; // Display the latest 6 posts

  if (postsContainer && typeof blogPosts !== 'undefined' && blogPosts.length > 0) {
    // Sort posts by date in descending order (newest first)
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get the latest N posts
    const recentPosts = sortedPosts.slice(0, postsToShow);

    recentPosts.forEach(post => {
      const postElement = `
        <a href="${post.filePath}" class="block bg-dark-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-primary/30">
          ${post.imageSrc ? `<img src="${post.imageSrc}" alt="${post.title}" class="rounded-md mb-4 w-full h-48 object-cover">` : ''}
          <h3 class="text-xl font-bold mb-2 text-light-text">${post.title}</h3>
          <p class="text-sm text-secondary-text mb-3">${new Date(post.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p class="text-secondary-text text-sm">${post.summary}</p>
        </a>
      `;
      postsContainer.innerHTML += postElement;
    });
  } else {
    if (postsContainer) {
      postsContainer.innerHTML = '<p class="text-secondary-text col-span-full text-center">Nie znaleziono żadnych wpisów na blogu.</p>';
    }
    console.warn('Kontener wpisów bloga lub tablica blogPosts nie została znaleziona lub jest pusta.');
  }
});

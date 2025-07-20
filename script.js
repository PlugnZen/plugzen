
fetch('products_eur.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('product-grid');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-4 hover:shadow-lg transition';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="rounded-lg mb-3 w-full h-48 object-cover">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">${product.name}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">${product.description}</p>
        <p class="text-sm text-green-600 dark:text-green-400 font-bold">€ ${product.price_eur.toFixed(2)}</p>
      `;
      grid.appendChild(card);
    });
  });

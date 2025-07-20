
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('product-grid');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'border rounded-xl shadow p-4 hover:shadow-lg transition';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="rounded-lg mb-3 w-full h-48 object-cover">
        <h2 class="text-lg font-semibold mb-1">${product.name}</h2>
        <p class="text-sm text-gray-600 mb-2">${product.description}</p>
        <p class="text-sm text-gray-800 mb-1"><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</p>
        <p class="text-xs text-gray-500 mb-1">Lucro bruto: R$ ${product.profit_before_tax.toFixed(2)}</p>
        <p class="text-xs text-gray-500 mb-3">Lucro líquido: R$ ${product.profit_after_tax.toFixed(2)}</p>
        <a href="${product.affiliate_url}" target="_blank" class="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ver na Amazon</a>
      `;
      grid.appendChild(card);
    });
  });

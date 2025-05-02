
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('close-modal');
const zones = document.querySelectorAll('.zone');

const descriptions = {
  epipelagica: `<h2>Zona Epipelágica (0 - 200 m)</h2>
<p><strong>También llamada:</strong> Zona fótica (donde llega la luz solar).</p>
<p><strong>Características principales:</strong> Es la capa más cálida y luminosa del océano. La luz permite la fotosíntesis, lo que la convierte en el hogar del fitoplancton. Aquí ocurren la mayoría de las interacciones ecológicas y pesqueras.</p>
<p><strong>Vida marina:</strong> Fitoplancton, zooplancton, atunes, tiburones, ballenas, delfines, tortugas, corales.</p>
<p><strong>Adaptaciones:</strong> Colores para camuflaje, uso de la luz para crecer.</p>
<p><strong>Curiosidades:</strong> El 90% de la vida marina vive aquí.</p>`,

  mesopelagica: `<h2>Zona Mesopelágica (200 - 1,000 m)</h2>
<p><strong>También llamada:</strong> Zona crepuscular.</p>
<p><strong>Características principales:</strong> Luz tenue, presión alta, frío.</p>
<p><strong>Vida marina:</strong> Peces con bioluminiscencia, calamares, krill.</p>
<p><strong>Adaptaciones:</strong> Bioluminiscencia, ojos grandes.</p>
<p><strong>Curiosidades:</strong> Muchos animales son rojos o transparentes.</p>`,

  batipelagica: `<h2>Zona Batipelágica (1,000 - 4,000 m)</h2>
<p><strong>También llamada:</strong> Zona de medianoche.</p>
<p><strong>Características principales:</strong> Oscuridad total, presión brutal, frío extremo.</p>
<p><strong>Vida marina:</strong> Peces dragón, calamares gigantes, isópodos.</p>
<p><strong>Adaptaciones:</strong> Mandíbulas extensibles, cuerpos blandos.</p>
<p><strong>Curiosidades:</strong> Muchos peces tienen bocas enormes.</p>`,

  abisopelagica: `<h2>Zona Abisopelágica (4,000 - 6,000 m)</h2>
<p><strong>También llamada:</strong> Zona abisal.</p>
<p><strong>Características principales:</strong> Presión extrema, oscuridad, poco alimento.</p>
<p><strong>Vida marina:</strong> Gusanos tubulares, peces extraños.</p>
<p><strong>Adaptaciones:</strong> Enzimas especiales, metabolismo lento.</p>
<p><strong>Curiosidades:</strong> Hay respiraderos hidrotermales únicos.</p>`,

  hadal: `<h2>Zona Hadalpelágica (6,000 - 11,000 m)</h2>
<p><strong>También llamada:</strong> Zona hadal.</p>
<p><strong>Características principales:</strong> Presión aplastante, oscuridad total.</p>
<p><strong>Vida marina:</strong> Anfípodos, pez caracol, bacterias extremófilas.</p>
<p><strong>Adaptaciones:</strong> Enzimas resistentes, cuerpos sin aire.</p>
<p><strong>Curiosidades:</strong> Se han encontrado microplásticos incluso aquí.</p>`
};


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

zones.forEach(zone => {
  observer.observe(zone);
  const img = zone.querySelector('img');
  img.addEventListener('click', () => {
    modalText.textContent = img.dataset.description;
    modal.classList.remove('hidden');
  });
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    const zone = img.getAttribute('data-zone');
    modalText.innerHTML = descriptions[zone];
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalClose) {
    modal.classList.add('hidden');
  }
});

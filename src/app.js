function suma(a, b) {
  return a + b;
}

console.log('App lista');

function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}

// Evita errores en Jest (document no existe)
if (typeof document !== 'undefined') {
  document.getElementById('btn-agregar')?.addEventListener('click', () => {
    const input = document.getElementById('input-texto');
    if (input.value.trim() !== '') {
      agregarItem(input.value.trim());
      input.value = '';
    }
  });
}

module.exports = { suma, agregarItem };

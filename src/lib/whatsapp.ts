// Arma enlaces wa.me con mensaje prellenado. Lógica crítica: lleva pruebas (casos 1 y 6).

export interface Renglon {
  nombre: string;
  precio: number;
  cantidad: number;
}

const mxn = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });

export const formatoPrecio = (n: number) => mxn.format(n);

export function enlaceWhatsApp(numero: string, mensaje: string): string {
  const limpio = numero.replace(/\D/g, '');
  return `https://wa.me/${limpio}?text=${encodeURIComponent(mensaje)}`;
}

export function mensajeComanda(negocio: string, renglones: Renglon[]): string {
  const validos = renglones.filter((r) => r.cantidad > 0);
  if (validos.length === 0) return `Hola, ${negocio}. Quiero hacer un pedido.`;
  const lineas = validos.map((r) => `${r.cantidad} × ${r.nombre} — ${formatoPrecio(r.precio * r.cantidad)}`);
  const total = validos.reduce((s, r) => s + r.precio * r.cantidad, 0);
  return [`Hola, ${negocio}. Mi pedido:`, ...lineas, `Total: ${formatoPrecio(total)}`].join('\n');
}

import * as modalapi from './modal/modalapi.js';

export const g = selector => {
  const el = getelem(selector);
  if (!el) return {};
  return {
    ...dom.methods(el),
    ...modalapi.methods(el)
  };
};

if (typeof window !== 'undefined') {
  window.g = g;
}
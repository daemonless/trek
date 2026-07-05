// Canvas globals for pdf.js (bundled by pdf-parse). FreeBSD has no
// @napi-rs/canvas native binding, so these are otherwise undefined and
// pdf-parse throws "DOMMatrix is not defined" at import, crashing boot.
if (typeof globalThis.DOMMatrix === 'undefined')
  globalThis.DOMMatrix = class DOMMatrix { constructor(){ this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0; } };
if (typeof globalThis.ImageData === 'undefined')
  globalThis.ImageData = class ImageData { constructor(w,h){ this.width=w;this.height=h; } };
if (typeof globalThis.Path2D === 'undefined')
  globalThis.Path2D = class Path2D {};

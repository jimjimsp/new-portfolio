// rotating flag variable
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  zoom: 4,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  }
});

new Zdog.Shape({
  addTo: illo,
  path: [{ x: -10, y: 1 }, { x: 10, y: 1 }],
  translate: { z: 3 },
  stroke: 2.5,
  color: "#0c0f0c"
});

new Zdog.Shape({
  addTo: illo,
  path: [{ x: 0, y: 2 }, { x: 0, y: 8 }],
  translate: { z: 3 },
  stroke: 2.5,
  color: "#0c0f0c"
});

new Zdog.Shape({
  addTo: illo,
  path: [{ x: 5.5, y: 2 }, { x: 5.5, y: 8 }],
  translate: { z: 6 },
  stroke: 2.5,
  color: "#0c0f0c"
});

new Zdog.Shape({
  addTo: illo,
  path: [{ x: -5.5, y: 2 }, { x: -5.5, y: 8 }],
  translate: { z: -6 },
  stroke: 2.5,
  color: "#0c0f0c"
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 20,
  stroke: 2.5,
  translate: { z: 0 },
  color: "#0c0f0c"
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 0,
  stroke: 6,
  translate: { x: 4.1, y: -4.6, z: 5 },
  color: "#0c0f0c"
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 0,
  stroke: 6,
  translate: { x: -4.1, y: -4.6, z: -5 },
  color: "#0c0f0c"
});

function animate() {
  // rotate
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();

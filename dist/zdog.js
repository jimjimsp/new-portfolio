// rotating flag variable
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  zoom: 1,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  }
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  // position closer
  translate: { z: 40 },
  stroke: 20,
  color: "#0c0f0c"
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: "#0c0f0c",
  fill: true
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

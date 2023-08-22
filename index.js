const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xdddfff); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 6;

const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 1),
    new THREE.Vector2(4, 4),
]

const material = new THREE.LineBasicMaterial({ color: 0x000000});
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometryLine, material);
scene.add(line);

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({color: 0x84c76d});
const box = new THREE.Mesh(boxGeo, material1);
scene.add(box);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();
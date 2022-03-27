
// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 2)
const material = new THREE.MeshBasicMaterial({color: '#FF0000'})
const cubeMesh = new THREE.Mesh(geometry, material)
scene.add(cubeMesh)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 5
camera.position.x = 1
camera.position.y = 1

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
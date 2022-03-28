import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

//
// Mesh Example
//

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // Position
// // mesh.position.y = 0.7
// // mesh.position.x = 0.5
// // mesh.position.z = 1
// mesh.position.set(0.7, 0.5, 1)

// // Scale
// // mesh.scale.x(2)
// // mesh.scale.y(1)
// // mesh.scale.z(1)
// mesh.scale.set(2, 1, 1)

// // Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.x = Math.PI * 0.25

// scene.add(mesh)

// //  Axes helper (x, y, z axes)
// const axesHelper = new THREE.AxesHelper(99999)
// scene.add(axesHelper)


//
// Group
//

const group = new THREE.Group()

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)

cube2.position.x = -2

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})

)
group.add(cube3)
cube3.position.x = 2


scene.add(group)

group.scale.x = 0.5

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

// Distance between center of the scene and the mesh
// console.log(mesh.position.length())

// Distance between camera and the mesh
// console.log(mesh.position.distanceTo(camera.position))

// Set the distance between center of the scene and the mesh to 1 
// mesh.position.normalize()

// Look at the center of a mesh
// camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
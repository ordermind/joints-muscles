import wwMuscles from "./data/ww-muscles.js";

self.onmessage = (e) => {
    console.log('Received message', e.data);

    console.log('wwJoints', wwMuscles);
}
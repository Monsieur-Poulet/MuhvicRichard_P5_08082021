let camera;

//API request
const fetchCamera = async() => {
    camera = await fetch('http://localhost:3000/api/cameras').then(res => res.json());

    console.log(camera);
};

fetchCamera();
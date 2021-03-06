const socket = io("/");

const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

console.log(videoGrid);
/* De esta manera tenemos el audio y video del
usuario */
let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });

///------------------------------

socket.emit("join-room", ROOM_ID);

socket.on("user-connected", () => {
  connecToNewUser();
});

const connecToNewUser = () => {
  //peerjs para enviar streams entre dos personas
  console.log("new user");
};

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

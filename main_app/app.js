const config = [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun.stunprotocol.org:3478" },
]

const peerConnection = new RTCPeerConnection(config)
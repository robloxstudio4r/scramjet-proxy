// Configuration for static deployment

// Your Wisp WebSocket server URL
window.WISP_URL = "wss://glseries.net/wisp/";

// Scramjet configuration
// The prefix MUST live inside the service worker's scope.
// Since the worker is at /scramjet-proxy/sw.js, its scope is /scramjet-proxy/.
// Therefore, we prepend the repository name to the default /~/sj/ path.
window.SCRAMJET_CONFIG = {
    prefix: "/scramjet-proxy/~/sj/",
    
    // These paths are relative to the root of your public folder.
    // They should already be correct for this project, but are included for completeness.
    scramjetPath: "/scramjet-proxy/scramjet/scramjet.js",
    wasmPath: "/scramjet-proxy/scramjet/scramjet.wasm",
    injectPath: "/scramjet-proxy/controller/controller.inject.js"
};

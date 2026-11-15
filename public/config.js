// Wisp server
window.WISP_URL = "wss://glseries.net/wisp/";

// Override Scramjet's default prefix so it lives inside the service worker's scope
window.SCRAMJET_CONFIG = {
  prefix: "/scramjet-proxy/~/sj/"
};

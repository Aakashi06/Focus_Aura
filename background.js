document.addEventListener("DOMContentLoaded", () => {
  const color = localStorage.getItem("bgColor");
  const bgMedia = localStorage.getItem("bgMedia");
  const mediaType = localStorage.getItem("bgMediaType");

  // Apply color to all pages
  if (color) {
    document.body.style.background = color;
  }

  // Apply image/video to Focus and Customize pages only
  const page = window.location.pathname;
  if ((page.includes("index.html") || page.includes("customize.html")) && bgMedia) {
    document.body.style.background = "none"; // clear color background

    if (mediaType === "image") {
      document.body.style.backgroundImage = `url(${bgMedia})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    } else if (mediaType === "video") {
      const video = document.createElement("video");
      video.src = bgMedia;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.style.position = "fixed";
      video.style.top = "0";
      video.style.left = "0";
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      video.style.zIndex = "-1";
      document.body.prepend(video); // ensure video is behind other content
    }
  }
});

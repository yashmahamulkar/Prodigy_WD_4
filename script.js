particlesJS("particles-js", {
    particles: {
      number: {
        value: 750,
        density: { enable: true, value_area: 1119.552179128349 }
      },
      color: { value: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]},
     
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#d9d0d0" },
        polygon: { nb_sides:0},
        image: { src: "img/github.svg", width: 50, height: 100 }
      },
      opacity: {
        value: 0.8240703718514,
        random: true,
        anim: {
          enable: false,
          speed: 1.267885925337956,
          opacity_min: 0.0728963333144343,
          sync: false
        }
      },
      size: {
        value: 4.995201919232311,
        random: true,
        anim: {
          enable: false,
          speed: 2.4298777771478104,
          size_min: 0.8099592590492701,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 111.539384246302,
        color: "#a2d6f9",
        opacity: 0.191923230707717,
        width: 2
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

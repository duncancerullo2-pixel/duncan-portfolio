function toggleTheme() {
  document.body.classList.toggle("light");

  const button = document.querySelector("nav button");

  if (document.body.classList.contains("light")) {
    button.innerHTML = "☀️ Dark Mode";
  } else {
    button.innerHTML = "🌙 Light Mode";
  }
}


  
  
  
  
const words = [
  "Professional Website Design",
  "Business Websites",
  "Portfolio Websites",
  "Landing Pages",
  "Website Maintenance"
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const element = document.getElementById("typing");

  if (typing) {
    element.textContent = words[wordIndex].substring(0, charIndex++);
    if (charIndex > words[wordIndex].length) {
      typing = false;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    element.textContent = words[wordIndex].substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, typing ? 120 : 60);
}





typeEffect();
window.addEventListener("load", () => {
  animateCounter("projectsCount", 3, "+");
  animateCounter("responsiveCount", 100, "%");
  animateCounter("supportCount", 24, "/7");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

  

  
  
    
      

      
    
  

  
    

    
  
    
  



    

    
        
    
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
    window.addEventListener("load",()=>{
const loader = document.getElementById("preloader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});
function animateCounter(id, target, suffix = "") {
  const element = document.getElementById(id);
  let count = 0;

  const step = Math.max(1, Math.ceil(target / 50));

  const timer = setInterval(() => {
    count += step;

    if (count >= target) {
      count = target;
      clearInterval(timer);
    }

    element.textContent = count + suffix;
  }, 30);
}

window.addEventListener("load", () => {
  animateCounter("projectsCount", 3, "+");
  animateCounter("responsiveCount", 100, "%");
  animateCounter("supportCount", 24, "/7");
});
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
  }
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#25D366";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
  const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursorGlow.style.width = "35px";
        cursorGlow.style.height = "35px";
    });

    item.addEventListener("mouseleave", () => {
        cursorGlow.style.width = "20px";
        cursorGlow.style.height = "20px";
    });
});

  


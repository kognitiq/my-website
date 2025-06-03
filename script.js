// Initialize AOS (Animate On Scroll)
// import AOS from "aos"
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Go to top button
const goToTopBtn = document.getElementById("goToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    goToTopBtn.classList.add("show")
  } else {
    goToTopBtn.classList.remove("show")
  }
})

goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Portfolio filtering
const filterButtons = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")

    portfolioItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hide")
        item.style.display = "block"
      } else {
        item.classList.add("hide")
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".hero-bg")
  const speed = scrolled * 0.5

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`
  }
})

// Counter animation for stats
const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-item h3, .experience-badge h4")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent)
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current) + "+"
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target + "+"
      }
    }

    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter()
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(counter)
  })
}

// Initialize counter animation
animateCounters()

// Typing effect for hero title
const typeWriter = (element, text, speed = 100) => {
  let i = 0
  element.innerHTML = ""

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.remove("loading")
})

// Smooth reveal animation for sections
const revealSections = () => {
  const sections = document.querySelectorAll("section")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Initialize reveal animations
revealSections()

// Add hover effect for floating cards
const floatingCards = document.querySelectorAll(".floating-card")
floatingCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.animationPlayState = "paused"
    card.style.transform = "translateY(-10px) scale(1.05)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.animationPlayState = "running"
    card.style.transform = ""
  })
})

// Preload images for better performance
const preloadImages = () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    const imageUrl = img.src
    const imageElement = new Image()
    imageElement.src = imageUrl
  })
}

// Initialize preloading
preloadImages()

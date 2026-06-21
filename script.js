// ------------------------------------------------------------
      // 1. منوی همبرگری
      // ------------------------------------------------------------
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
      });

      // بستن منو با کلیک روی لینک‌ها
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("open");
        });
      });

      // بستن منو با کلیک بیرون
      document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          hamburger.classList.remove("active");
          navLinks.classList.remove("open");
        }
      });

      // ------------------------------------------------------------
      // 2. اسکرول نرم
      // ------------------------------------------------------------
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      // ------------------------------------------------------------
      // 3. فرم تماس با پیام موفقیت
      // ------------------------------------------------------------
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      });

      console.log("🔥 Parham — Digital Identity is live!");
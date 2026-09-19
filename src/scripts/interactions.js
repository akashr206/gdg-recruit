export function initInteractions() {
  let currentEnergy = 'tech';
  let selectedSkills = {
    tech: 0,
    design: 0,
    outreach: 0
  };

  const squadData = {
    tech: {
      title: "Tech Squad (Build)",
      eyebrow: "RECOMMENDED SQUAD",
      tagline: "You are wired to architect code, deploy real chapter platforms, explore tech, and lead tech workshops.",
      badgeColor: "bg-gdg-blue",
      focus: [
        "Maintain Chapter Web Apps, Portals & Hackathon tools",
        "Conduct Gemini API, Google Cloud & Flutter codelabs",
        "Mentorship for campus open-source contributors"
      ],
      btnText: "Apply for Tech Squad"
    },
    design: {
      title: "Design Squad (Create)",
      eyebrow: "RECOMMENDED SQUAD",
      tagline: "You turn raw ideas into visual magic. From high-octane event posters and social media graphics to fluid video editing.",
      badgeColor: "bg-gdg-red",
      focus: [
        "Lead branding for DevFest UVCE & signature summits",
        "Create motion graphics, reels, and video narratives",
        "Design eye-catching posters for all campus events"
      ],
      btnText: "Apply for Design Squad"
    },
    outreach: {
      title: "Outreach Squad (Connect)",
      eyebrow: "RECOMMENDED SQUAD",
      tagline: "You are the heartbeat of the chapter. You bring people together, host dynamic stages, manage sponsors, and create campus culture.",
      badgeColor: "bg-gdg-green",
      focus: [
        "Host tech keynotes, fireside chats & stage sessions",
        "Drive corporate sponsors & industry speaker relations",
        "Spearhead Instagram, LinkedIn & offline student buzz"
      ],
      btnText: "Apply for Outreach Squad"
    }
  };

  const questionBank = [
    [
      { q: "Your college fest needs a website. What's your first instinct?", options: [{ text: "Start coding the basic layout", squad: "tech" }, { text: "Sketch how beautiful it should look", squad: "design" }, { text: "Tell all my friends about it", squad: "outreach" }] },
      { q: "You just had a cool idea for an app. What do you do first?", options: [{ text: "Look up how to build it on YouTube", squad: "tech" }, { text: "Draw the screens on a piece of paper", squad: "design" }, { text: "Ask my classmates if they'd use it", squad: "outreach" }] },
      { q: "You have a free weekend with zero assignments. How do you spend it?", options: [{ text: "Following a beginner coding tutorial", squad: "tech" }, { text: "Playing around with Canva or Photoshop", squad: "design" }, { text: "Hanging out and meeting new people", squad: "outreach" }] },
      { q: "Your team just joined a hackathon. What role do you claim immediately?", options: [{ text: "The one who writes the code", squad: "tech" }, { text: "The one who makes the presentation look great", squad: "design" }, { text: "The one who pitches the idea to the judges", squad: "outreach" }] }
    ],
    [
      { q: "Which tool sounds the most fun to learn?", options: [{ text: "VS Code (Building apps & websites)", squad: "tech" }, { text: "Premiere Pro or Photoshop (Creating visuals)", squad: "design" }, { text: "Social Media (Building an audience)", squad: "outreach" }] },
      { q: "If you could instantly master one skill, what would it be?", options: [{ text: "Writing Python/JavaScript like a pro", squad: "tech" }, { text: "Creating jaw-dropping 3D animations", squad: "design" }, { text: "Speaking confidently in front of 500 people", squad: "outreach" }] },
      { q: "What type of YouTube videos do you enjoy watching the most?", options: [{ text: "Tech reviews and coding projects", squad: "tech" }, { text: "Speed-art or video editing breakdowns", squad: "design" }, { text: "Vlogs, podcasts, and communication tips", squad: "outreach" }] },
      { q: "Your ideal workspace looks like...", options: [{ text: "A dark screen filled with colorful text", squad: "tech" }, { text: "A tablet with a stylus and moodboards", squad: "design" }, { text: "A buzzing room full of people brainstorming", squad: "outreach" }] }
    ],
    [
      { q: "What gives you the biggest sense of achievement?", options: [{ text: "Fixing an error and seeing my code finally work", squad: "tech" }, { text: "Picking the perfect colors and fonts for a poster", squad: "design" }, { text: "Getting 100+ people to show up to an event", squad: "outreach" }] },
      { q: "What's the best compliment someone could give your project?", options: [{ text: "\"Wow, this runs incredibly fast and smooth!\"", squad: "tech" }, { text: "\"This looks absolutely stunning!\"", squad: "design" }, { text: "\"Everyone on campus is talking about this!\"", squad: "outreach" }] },
      { q: "At the end of the year, what would you be most proud of?", options: [{ text: "Building a real app that students use", squad: "tech" }, { text: "Designing the official merch for the college", squad: "design" }, { text: "Hosting the biggest tech event of the year", squad: "outreach" }] },
      { q: "You post a screenshot of your work on Instagram. What is it?", options: [{ text: "My very first successful 'Hello World' app", squad: "tech" }, { text: "A really cool digital art piece I made", squad: "design" }, { text: "A selfie with the massive crowd at my event", squad: "outreach" }] }
    ],
    [
      { q: "Your project isn't working the day before submission. You:", options: [{ text: "Drink coffee and hunt down the bug in the code", squad: "tech" }, { text: "Redesign the layout to hide the broken parts", squad: "design" }, { text: "Talk to the professor for an extension", squad: "outreach" }] },
      { q: "When you get stuck on a problem, your go-to move is:", options: [{ text: "Searching Google and StackOverflow for answers", squad: "tech" }, { text: "Looking at Pinterest or Dribbble for inspiration", squad: "design" }, { text: "Calling a senior or friend for advice", squad: "outreach" }] },
      { q: "Your team is running out of time. What do you prioritize?", options: [{ text: "Making sure the core features actually work", squad: "tech" }, { text: "Making sure the final presentation looks professional", squad: "design" }, { text: "Making sure the team stays motivated and calm", squad: "outreach" }] },
      { q: "Someone gives you harsh feedback on your work. You:", options: [{ text: "Double-check the logic to see where I went wrong", squad: "tech" }, { text: "Try a completely different visual style", squad: "design" }, { text: "Ask them follow-up questions to understand better", squad: "outreach" }] }
    ],
    [
      { q: "In a group project meeting, you are usually...", options: [{ text: "Figuring out HOW we are actually going to build it", squad: "tech" }, { text: "Sketching ideas on the whiteboard", squad: "design" }, { text: "Making sure everyone is participating", squad: "outreach" }] },
      { q: "Which title sounds the coolest to you?", options: [{ text: "Lead Developer", squad: "tech" }, { text: "Creative Director", squad: "design" }, { text: "Community Manager", squad: "outreach" }] },
      { q: "Your group just finished a big project. What do you do?", options: [{ text: "Go back and try to make the code cleaner", squad: "tech" }, { text: "Add screenshots of it to my design portfolio", squad: "design" }, { text: "Post about our success on LinkedIn", squad: "outreach" }] },
      { q: "If your team was a band, who are you?", options: [{ text: "The drummer (keeping the technical rhythm)", squad: "tech" }, { text: "The guitarist (adding the creative flair)", squad: "design" }, { text: "The lead singer (hyping up the crowd)", squad: "outreach" }] }
    ]
  ];

  let activeQuestions = [];
  let currentStep = 0;
  let quizScores = { tech: 0, design: 0, outreach: 0 };

  function initQuiz() {
    const storedResult = localStorage.getItem('gdg_squad_result');
    if (storedResult) {
      showResultScreen(storedResult);
      return;
    }

    const storedQuestions = localStorage.getItem('gdg_squad_questions');
    if (storedQuestions) {
      activeQuestions = JSON.parse(storedQuestions);
    } else {
      activeQuestions = questionBank.map(category => {
        const randomIndex = Math.floor(Math.random() * category.length);
        return category[randomIndex];
      });
      localStorage.setItem('gdg_squad_questions', JSON.stringify(activeQuestions));
    }

    document.getElementById('quiz-start-screen').classList.remove('hidden', 'opacity-0', '-translate-y-4');
    document.getElementById('quiz-question-screen').classList.add('hidden', 'opacity-0');
    document.getElementById('quiz-calculating-screen').classList.add('hidden', 'opacity-0');
    document.getElementById('quiz-result-screen').classList.add('hidden', 'opacity-0');
    document.getElementById('quiz-progress').classList.add('hidden');
  }

  window.startQuiz = function () {
    currentStep = 0;
    quizScores = { tech: 0, design: 0, outreach: 0 };
    document.getElementById('quiz-start-screen').classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => {
      document.getElementById('quiz-start-screen').classList.add('hidden');
      document.getElementById('quiz-question-screen').classList.remove('hidden');
      document.getElementById('quiz-progress').classList.remove('hidden');
      renderQuestion();
    }, 300);
  }

  function renderQuestion() {
    const qData = activeQuestions[currentStep];
    document.getElementById('quiz-progress').innerText = `STEP 0${currentStep + 1} / 05`;

    const qScreen = document.getElementById('quiz-question-screen');
    qScreen.classList.remove('opacity-100', 'translate-y-0');
    qScreen.classList.add('opacity-0', 'translate-y-4');

    setTimeout(() => {
      document.getElementById('quiz-question-text').innerText = qData.q;

      const optionsContainer = document.getElementById('quiz-options');
      optionsContainer.innerHTML = '';

      const shuffledOptions = [...qData.options].sort(() => Math.random() - 0.5);

      shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = "w-full p-4 sm:p-5 rounded-2xl text-left bg-white gdg-border shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all group relative overflow-hidden";
        btn.innerHTML = `
          <div class="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
          <div class="relative flex items-center justify-between">
            <span class="font-bold text-sm sm:text-lg text-gdg-black group-hover:text-gdg-blue transition-colors">${opt.text}</span>
            <span class="font-mono text-xs font-bold text-gray-400 group-hover:text-gdg-blue opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">SELECT <i data-lucide="arrow-right" class="w-4 h-4 inline"></i></span>
          </div>
        `;
        btn.onclick = () => window.handleAnswer(opt.squad);
        optionsContainer.appendChild(btn);
      });

      if (window.lucide) window.lucide.createIcons();

      qScreen.classList.remove('opacity-0', 'translate-y-4');
      qScreen.classList.add('opacity-100', 'translate-y-0');
    }, 300);
  }

  window.handleAnswer = function (squad) {
    quizScores[squad]++;
    currentStep++;

    if (currentStep < 5) {
      renderQuestion();
    } else {
      calculateFinalResult();
    }
  }

  function calculateFinalResult() {
    let winningSquad = 'tech';
    let max = -1;
    for (const [squad, score] of Object.entries(quizScores)) {
      if (score > max) {
        max = score;
        winningSquad = squad;
      }
    }

    localStorage.setItem('gdg_squad_result', winningSquad);

    document.getElementById('quiz-question-screen').classList.add('opacity-0', '-translate-y-4');
    document.getElementById('quiz-progress').classList.add('hidden');

    setTimeout(() => {
      document.getElementById('quiz-question-screen').classList.add('hidden');
      const calcScreen = document.getElementById('quiz-calculating-screen');
      calcScreen.classList.remove('hidden');

      setTimeout(() => {
        calcScreen.classList.remove('opacity-0');
        calcScreen.classList.add('opacity-100');

        typewriterEffect("Analyzing neural pathways...", document.getElementById('quiz-typing-text'), () => {
          setTimeout(() => {
            calcScreen.classList.remove('opacity-100');
            calcScreen.classList.add('opacity-0');
            setTimeout(() => {
              calcScreen.classList.add('hidden');
              showResultScreen(winningSquad);
            }, 300);
          }, 800);
        });
      }, 50);
    }, 300);
  }

  function typewriterEffect(text, element, callback) {
    element.innerText = '';
    let i = 0;
    const interval = setInterval(() => {
      element.innerText += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 40);
  }

  function showResultScreen(winningSquad) {
    document.getElementById('quiz-start-screen').classList.add('hidden');
    document.getElementById('quiz-question-screen').classList.add('hidden');
    document.getElementById('quiz-calculating-screen').classList.add('hidden');
    document.getElementById('quiz-progress').classList.add('hidden');

    const resScreen = document.getElementById('quiz-result-screen');
    resScreen.classList.remove('hidden');

    const data = squadData[winningSquad];
    document.getElementById('result-title').innerText = data.title;
    document.getElementById('result-eyebrow').innerText = data.eyebrow;
    document.getElementById('result-desc').innerText = data.tagline;

    const ribbon = document.getElementById('result-ribbon');
    ribbon.className = `absolute top-0 left-0 w-full h-2 ${data.ribbonColor} transition-colors duration-500`;

    const badge = document.getElementById('result-match-rate');
    badge.className = `inline-block px-3 py-1 mb-4 text-white rounded-full font-mono text-xs font-bold ${data.badgeColor} shadow-neo-sm transition-colors duration-500`;

    const selectModal = document.getElementById('modal-squad-select');
    if (selectModal) selectModal.value = winningSquad;

    setTimeout(() => {
      resScreen.classList.remove('opacity-0', 'scale-95');
      resScreen.classList.add('opacity-100', 'scale-100');
    }, 50);
  }

  window.retakeQuiz = function () {
    localStorage.removeItem('gdg_squad_result');
    localStorage.removeItem('gdg_squad_questions');

    const resScreen = document.getElementById('quiz-result-screen');
    resScreen.classList.remove('opacity-100', 'scale-100');
    resScreen.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
      resScreen.classList.add('hidden');
      initQuiz();
    }, 500);
  }

  window.preselectSquad = function (squadKey) {
    const selectModal = document.getElementById('modal-squad-select');
    if (selectModal) selectModal.value = squadKey;
    const matcher = document.getElementById('matcher');
    if (matcher) matcher.scrollIntoView({ behavior: 'smooth' });
  }

  initQuiz();

  window.toggleFaq = function (button) {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.faq-icon-plus').forEach(i => i.classList.remove('hidden'));
    document.querySelectorAll('.faq-icon-minus').forEach(i => i.classList.add('hidden'));

    if (!isOpen) {
      content.classList.add('open');
      const iconPlus = button.querySelector('.faq-icon-plus');
      const iconMinus = button.querySelector('.faq-icon-minus');
      if (iconPlus) iconPlus.classList.add('hidden');
      if (iconMinus) iconMinus.classList.remove('hidden');
    }
  }

  const modal = document.getElementById('application-modal');

  window.openApplicationModal = function () {
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  window.closeApplicationModal = function () {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeApplicationModal();
      }
    });
  }

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('opacity-0');
      mobileMenu.classList.toggle('pointer-events-none');
      mobileMenu.classList.toggle('-translate-y-4');
      mobileMenu.classList.toggle('translate-y-0');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
        mobileMenu.classList.remove('translate-y-0');
      });
    });
  }

  window.handleFormSubmit = function (e) {
    e.preventDefault();
    alert('Application received for GDG UVCE Core 2026–27! We will review your profile and reach out via email shortly.');
    window.closeApplicationModal();
  }

  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    let mouse = { x: null, y: null, px: null, py: null, vx: 0, vy: 0, radius: 25 };
    const mouseHistory = [];
    const DELAY_FRAMES = 10;

    let assembleState = 0;
    let hasAssembledOnce = false;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      initParticles(dpr);
    };

    const initParticles = (dpr) => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const overlay = document.getElementById('cinematic-overlay');

      if (!hasAssembledOnce) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';
        
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        window.scrollTo({ top: 0, behavior: 'instant' });

        assembleState = 0;

        if (window.bangTimeout) clearTimeout(window.bangTimeout);
        if (window.snapTimeout) clearTimeout(window.snapTimeout);

        if (overlay) overlay.style.opacity = '1';

        window.bangTimeout = setTimeout(() => {
          assembleState = 1;
          particles.forEach(p => {
            let initialAngle = Math.random() * Math.PI * 2;
            let burstSpeed = Math.random() * 80 * dpr;
            p.vx = Math.cos(initialAngle) * burstSpeed;
            p.vy = Math.sin(initialAngle) * burstSpeed;
          });
        }, 700);

        window.snapTimeout = setTimeout(() => {
          assembleState = 2;
          if (overlay) overlay.style.opacity = '0';
          hasAssembledOnce = true;

          setTimeout(() => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }, 1500);
        }, 1500);
      } else {
        assembleState = 2;
        if (overlay) overlay.style.opacity = '0';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }

      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
      tempCanvas.width = w;
      tempCanvas.height = h;

      const placeholder = document.getElementById('logo-placeholder');
      if (!placeholder) return;
      const rect = placeholder.getBoundingClientRect();
      const pw = rect.width * dpr;
      const ph = rect.height * dpr;
      const centerX = (rect.left + window.scrollX + rect.width / 2) * dpr;
      const centerY = (rect.top + window.scrollY + rect.height / 2) * dpr;

      tempCtx.lineJoin = 'round';
      tempCtx.lineCap = 'round';
      const base = Math.min(pw, ph) * 1.3;
      const scale = 1.05;

      tempCtx.lineWidth = base * 0.15 * scale;
      tempCtx.strokeStyle = 'white';

      const heightHalf = base * 0.18 * scale;
      const widthHalf = base * 0.26 * scale;
      const offsetX = base * 0.12 * scale;

      tempCtx.beginPath();
      tempCtx.moveTo(centerX - offsetX, centerY - heightHalf);
      tempCtx.lineTo(centerX - offsetX - widthHalf, centerY);
      tempCtx.lineTo(centerX - offsetX, centerY + heightHalf);
      tempCtx.stroke();

      tempCtx.beginPath();
      tempCtx.moveTo(centerX + offsetX, centerY - heightHalf);
      tempCtx.lineTo(centerX + offsetX + widthHalf, centerY);
      tempCtx.lineTo(centerX + offsetX, centerY + heightHalf);
      tempCtx.stroke();

      const imgData = tempCtx.getImageData(0, 0, w, h).data;

      let rawPoints = [];
      let minX = w, maxX = 0, minY = h, maxY = 0;

      const targetParticles = 2500;
      let attempts = 0;

      while (rawPoints.length < targetParticles && attempts < 100000) {
        let x = Math.floor(Math.random() * w);
        let y = Math.floor(Math.random() * h);
        if (imgData[(y * w + x) * 4 + 3] > 128) {
          rawPoints.push({ x, y });
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
        attempts++;
      }

      const exactCenterX = centerX;
      const exactCenterY = centerY;

      mouse.radius = 20 * dpr;

      rawPoints.forEach(pt => {
        let pColor = '#1e1e1e';
        if (pt.x < exactCenterX && pt.y < exactCenterY) pColor = '#EA4335';
        else if (pt.x < exactCenterX && pt.y >= exactCenterY) pColor = '#4285F4';
        else if (pt.x >= exactCenterX && pt.y < exactCenterY) pColor = '#34A853';
        else if (pt.x >= exactCenterX && pt.y >= exactCenterY) pColor = '#F9AB00';

        let startAngle = Math.random() * Math.PI * 2;
        let startRadius = Math.random() * 15 * dpr;
        let startX = hasAssembledOnce ? pt.x : (w / 2) + Math.cos(startAngle) * startRadius;
        let startY = hasAssembledOnce ? pt.y : (h / 2) + Math.sin(startAngle) * startRadius;

        let pSize = (Math.pow(Math.random(), 3) * 4.0 + 0.5) * dpr;

        particles.push({
          x: startX,
          y: startY,
          baseX: pt.x,
          baseY: pt.y,
          size: pSize,
          color: pColor,
          vx: 0,
          vy: 0,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.05 + 0.01
        });
      });
    };

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouse.vx *= 0.9;
      mouse.vy *= 0.9;

      mouseHistory.push({ x: mouse.x, y: mouse.y, vx: mouse.vx, vy: mouse.vy });

      let activeMouse = mouseHistory.length > DELAY_FRAMES ? mouseHistory.shift() : mouseHistory[0];

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        if (assembleState === 0) {
          p.x += (Math.random() - 0.5) * 3 * dpr;
          p.y += (Math.random() - 0.5) * 3 * dpr;

        } else if (assembleState === 1) {
          p.vx *= 0.94;
          p.vy *= 0.94;
          p.x += p.vx;
          p.y += p.vy;

        } else {

          let dx = activeMouse.x - p.x;
          let dy = activeMouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;

          const maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance && activeMouse.x !== null) {
            p.vx += activeMouse.vx * force * 0.8;
            p.vy += activeMouse.vy * force * 0.8;

            p.vx -= forceDirectionX * force * 0.8;
            p.vy -= forceDirectionY * force * 0.8;
          }

          p.angle += p.speed;
          let targetX = p.baseX + Math.cos(p.angle) * 6;
          let targetY = p.baseY + Math.sin(p.angle) * 6;

          p.vx *= 0.88;
          p.vy *= 0.88;

          p.x += p.vx;
          p.y += p.vy;

          p.x += (targetX - p.x) * 0.05;
          p.y += (targetY - p.y) * 0.05;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (e) => {
      const dpr = window.devicePixelRatio || 1;
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = (e.clientX + window.scrollX) * dpr;
      mouse.y = (e.clientY + window.scrollY) * dpr;

      if (mouse.px !== null) {
        mouse.vx = mouse.x - mouse.px;
        mouse.vy = mouse.y - mouse.py;
      }
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(resizeCanvas, 50);
    });
    resizeObserver.observe(canvas.parentElement);

    animate();
  }
}

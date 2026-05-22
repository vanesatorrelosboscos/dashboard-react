const dom = {
    // Navbar & Layout
    btnHamburger: document.getElementById("hamburger"),
    inputSearch: document.getElementById("globalSearch"),
    btnTheme: document.getElementById("themeToggle"),
    btnShortcuts: document.getElementById("shortcutsBtn"),
    btnNotif: document.getElementById("notifBtn"),
    sidebarOverlay: document.getElementById("sidebarOverlay"),
    sidebar: document.querySelector('.sidebar'),

    // Page Header & KPIs
    btnQuickAdd: document.getElementById("openModalBtn"),
    btnToastDemo: document.getElementById("showToastDemo"),
    kpiGrid: document.getElementById('kpiGrid'),

    // Tabs
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabPanels: document.querySelectorAll('.tab-panel'),

    // Tasks Tab
    taskInput: document.getElementById("todoInput"),
    taskBtnAdd: document.getElementById("addTodoBtn"),
    taskError: document.getElementById("todoError"),
    taskList: document.getElementById("todoList"),
    taskCount: document.getElementById("todoCount"),
    filterButtons: document.querySelectorAll('.filter-btn'),

    // Team Tab
    teamSearch: document.getElementById("teamSearch"),
    teamGrid: document.getElementById("teamGrid"),
    teamNoResults: document.getElementById("teamNoResults"),

    // Activity Tab
    activityFeed: document.getElementById("activityFeed"),

    // Form Tab
    contactForm: document.getElementById("contactForm"),
    formFields: {
        name: {
            input: document.getElementById("fname"),
            err: document.getElementById("fname-err"),
            ok: document.getElementById("fname-ok")
        },
        email: {
            input: document.getElementById("femail"),
            err: document.getElementById("femail-err"),
            ok: document.getElementById("femail-ok")
        },
        pass: {
            input: document.getElementById("fpass"),
            err: document.getElementById("fpass-err"),
            ok: document.getElementById("fpass-ok")
        },
        dept: { 
            input: document.getElementById("fdept"),
            err: document.getElementById("fdept-err"),
            ok: document.getElementById("fdept-ok")
        }
    },

    // Widgets (Chart & Timer)
    chartTooltip: document.getElementById("chartTooltip"),
    timerStatus: document.getElementById("timerStatus"),
    timerDisplay: document.getElementById("timerDisplay"),
    btnTimerStart: document.getElementById("timerStart"),
    btnTimerReset: document.getElementById("timerReset"),
    presetButtons: document.querySelectorAll('.preset-btn'),

    // Lists (Right Column)
    dragList: document.getElementById("dragList"),
    progressList: document.getElementById("progressList"),

    // Modals & Overlays
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    btnModalClose: document.getElementById("modalClose"),
    modalInputTitle: document.getElementById("modalTaskInput"),
    modalSelectPriority: document.getElementById("modalPriority"),
    modalSelectTag: document.getElementById("modalTag"),
    btnModalSubmit: document.getElementById("modalAddBtn"),

    // Shortcuts Modal
    shortcutsOverlay: document.getElementById("shortcutsOverlay"),
    btnShortcutsClose: document.getElementById("shortcutsClose"),

    // Toasts
    toastContainer: document.getElementById("toastContainer")
};


/* --------- MOBILE SIDEBAR --------- */
function openSideBar() {
    dom.sidebarOverlay.classList.add('active');
    dom.sidebar.classList.add('active');

    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
    document.body.style.overflow = "hidden";
}

function closeSideBar() {
    dom.sidebarOverlay.classList.remove('active');
    dom.sidebar.classList.remove('active');

    document.body.style.paddingRight = 0;
    document.body.style.overflow = "";
}

dom.btnHamburger.addEventListener('click', openSideBar);
dom.sidebarOverlay.addEventListener('click', closeSideBar);


/* --------- TOGGLE THEME --------- */
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    dom.btnTheme.textContent = isLight ? '☀️' : '🌙';

    showToast(`Theme switched to ${isLight ? "light" : "dark"} mode`, 'info');
}

dom.btnTheme.addEventListener("click", toggleTheme);

(function checkTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.body.classList.add("light-mode");
        dom.btnTheme.textContent = '☀️';
    } else {
        dom.btnTheme.textContent = '🌙';
    }
})();


/* --------- MODAL --------- */
function setupModal(openBtn, closeBtn, overlay) {
    function handleClose(e) {
        if ((e.type === 'keydown' && e.key === 'Escape') || (e.type === 'click' && e.target === overlay)) {
            closeModal();
        }
    }

    function openModal() {
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.style.overflow = "hidden";
        overlay.style.display = 'flex';

        openBtn.blur();

        document.addEventListener('keydown', handleClose);
        overlay.addEventListener('click', handleClose);
    }

    function closeModal() {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "0";
        overlay.style.display = 'none';

        document.removeEventListener('keydown', handleClose);
        overlay.removeEventListener('click', handleClose);
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    return {
        open: openModal,
        close: closeModal
    };
}

const modalShortcuts = setupModal(dom.btnShortcuts, dom.btnShortcutsClose, dom.shortcutsOverlay);
const modalQA = setupModal(dom.btnQuickAdd, dom.btnModalClose, dom.overlay);


/* --------- TOAST NOTIFICATIONS --------- */
function showToast(message, type, title) {
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const titles = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = ` <div class="toast-icon">${icons[type]}</div>
                        <div class="toast-content">
                            <div class="toast-title">${title || titles[type]}</div>
                            <div class="toast-msg">${message}</div>
                        </div>`;

    dom.toastContainer.appendChild(toast);

    let isClosing = false;
    let autoCloseTimer; 

    const closeToast = () => {
        if (isClosing || !toast.parentNode) return; 
        isClosing = true; 
        clearTimeout(autoCloseTimer); 
        
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    };

    toast.addEventListener('click', closeToast);
    autoCloseTimer = setTimeout(closeToast, 4000); 
}

dom.btnToastDemo.addEventListener('click', () => {
    ['success','error','warning','info'].forEach((text, index) =>
        setTimeout(() => showToast(`This is a ${text} notification!`, text), index * 300));
});

dom.btnNotif.addEventListener('click', () => {
    showToast('You have 3 new messages', 'info', 'Notifications');
});


/* ---------- KPI DATA & RENDER --------- */
const kpiData = [
    { icon: '👤', label: 'Total Users', target: 24819, prefix: '', suffix: '', change: '↑ 12.4% this month', changeClass: '', theme: 'kpi-theme-primary' },
    { icon: '💰', label: 'Revenue', target: 184320, prefix: '$', suffix: '', change: '↑ 8.7% this month', changeClass: '', theme: 'kpi-theme-success' },
    { icon: '🚀', label: 'Active Projects', target: 38, prefix: '', suffix: '', change: '↓ 2 from last week', changeClass: 'down', theme: 'kpi-theme-accent' },
    { icon: '⭐', label: 'Satisfaction', target: 96, prefix: '', suffix: '%', change: '↑ 3% this quarter', changeClass: '', theme: 'kpi-theme-warning' }
];

function renderKPIs() {
    dom.kpiGrid.innerHTML = ''; 
    const fragment = document.createDocumentFragment();

    kpiData.forEach(kpi => {
        const card = document.createElement('div');
        card.className = `kpi-card ${kpi.theme}`;

        card.innerHTML = `
            <div class="kpi-icon">${kpi.icon}</div>
            <div class="kpi-label">${kpi.label}</div>
            <div class="kpi-value" data-target="${kpi.target}" data-prefix="${kpi.prefix}" data-suffix="${kpi.suffix}">
                ${kpi.prefix}0${kpi.suffix}
            </div>
            <div class="kpi-change ${kpi.changeClass}">${kpi.change}</div>
        `;
        
        fragment.appendChild(card);
    });

    dom.kpiGrid.appendChild(fragment);
    initKPICounters();
}

/* ---------- KPI COUNTERS --------- */
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    if (isNaN(target) || target === 0) return;

    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1800; 
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;

        const timeProgress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(timeProgress * target);
        el.textContent = prefix + current.toLocaleString() + suffix;
        
        if (timeProgress < 1) { 
            window.requestAnimationFrame(step); 
        } else { 
            el.textContent = prefix + target.toLocaleString() + suffix; 
        }
    }; 
    window.requestAnimationFrame(step);
}

function initKPICounters() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.kpi-value[data-target]').forEach(el => obs.observe(el));
}

renderKPIs();


/* ---------- TABS --------- */
dom.tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        dom.tabButtons.forEach(btn => btn.classList.remove('active'));
        dom.tabPanels.forEach(panel => panel.classList.remove('active'));
        button.classList.add('active');
        
        const targetName = button.getAttribute('data-tab'); 
        const targetPanel = document.getElementById(`tab-${targetName}`); 
        
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});


/* ---------- TASKS --------- */
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let todoFilter = 'all';

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    dom.taskList.innerHTML = '';
    
    const filteredTodos = todos.filter(t => {
        if (todoFilter === 'all') return true;
        if (todoFilter === 'active') return !t.done;
        if (todoFilter === 'completed') return t.done;
    });

    filteredTodos.forEach(td => {
        const index = todos.indexOf(td);
        const li = document.createElement('div');
        li.className = `todo-item ${td.done ? 'done' : ''}`;
        li.draggable = true;
 
        li.innerHTML = `
            <span class="drag-handle">⠿</span>
            <input class="todo-cb" type="checkbox" ${td.done ? 'checked' : ''} />
            <span class="todo-text">${td.text}</span>
            <button class="todo-del">🗑</button>
        `;
        
        setupDragAndDrop(li, index, todos, 'tasks', renderTodos);

        li.querySelector('.todo-cb').addEventListener('change', () => {
            todos[index].done = !todos[index].done;
            saveTodos();
            renderTodos();
        });

        li.querySelector('.todo-del').addEventListener('click', () => {
            todos.splice(index, 1);
            showToast("Task deleted", "warning");
            saveTodos();
            renderTodos();
        });

        dom.taskList.appendChild(li);
    });

    const remaining = todos.filter(t => !t.done).length;
    dom.taskCount.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;
}

function addTodo(text) {
    if (!text.trim()) {
        dom.taskError.style.display = 'block';
        dom.taskInput.value = '';
        setTimeout(() => dom.taskError.style.display = 'none', 5000);
        return;
    }

    todos.push({ text: text.trim(), done: false });
    saveTodos();
    renderTodos();
    
    dom.taskInput.value = '';
    showToast(`"${text} added"`, "success");
}

dom.taskBtnAdd.addEventListener('click', () => addTodo(dom.taskInput.value));
dom.taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        addTodo(dom.taskInput.value);
    }
});

dom.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        dom.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        todoFilter = btn.dataset.filter; 
        renderTodos();
    });
});

if (todos.length === 0) {
    todos.push({ text: 'Design new landing page', done: false });
    todos.push({ text: 'Review pull requests', done: false });
    todos.push({ text: 'Write unit tests', done: true });
    saveTodos();
}

renderTodos();


/* --------- TEAM --------- */
const teamData = [
  { name: 'Alice Martin', role: 'Lead Designer', status: 'online', color: '#4F46E5' },
  { name: 'Bob Chen', role: 'Senior Dev', status: 'online', color: '#06B6D4' },
  { name: 'Carlos Ruiz', role: 'Product Manager', status: 'away', color: '#10B981' },
  { name: 'Diana Koval', role: 'QA Engineer', status: 'online', color: '#F59E0B' },
  { name: 'Ethan Patel', role: 'DevOps', status: 'away', color: '#EF4444' },
  { name: 'Fiona Walsh', role: 'Frontend Dev', status: 'online', color: '#8B5CF6' },
];

function renderTeam(query = '') {

    const filtered = teamData.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.role.toLowerCase().includes(query.toLowerCase())
    )
    dom.teamGrid.innerHTML = '';
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
        <div class="member-avatar" style="background:${p.color}">${p.name.split(' ').map(w=>w[0]).join('')}</div>
        <div class="name-status">
            <div class="member-name">${p.name}</div>
            <div class="member-status ${p.status}" title="${p.status}"></div>
        </div>
        <div class="member-role">${p.role}</div>
        `;
        dom.teamGrid.appendChild(card);
    });
    dom.teamNoResults.style.display = filtered.length === 0 ? 'block' : 'none';
}
renderTeam();
dom.teamSearch.addEventListener('input', e => renderTeam(e.target.value));


/*  --------- ACTIVITY --------- */
const activities = [
    { text: '<strong>Alice M.</strong> merged a pull request in <strong>Nexus Redesign</strong>', time: '2 minutes ago', color: '#4F46E5' },
    { text: '<strong>Bob C.</strong> completed task <strong>API auth refactor</strong>', time: '18 minutes ago', color: '#10B981' },
    { text: '<strong>Carlos R.</strong> commented on <strong>Sprint 14 planning</strong>', time: '1 hour ago', color: '#06B6D4' },
    { text: '<strong>Diana K.</strong> raised a bug: <strong>Login form validation</strong>', time: '3 hours ago', color: '#EF4444' },
    { text: '<strong>Fiona W.</strong> deployed <strong>v2.4.1</strong> to staging', time: 'Yesterday', color: '#F59E0B' },
];
activities.forEach(a => {
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `<div class="activity-dot" style="background:${a.color}"></div>
                    <div class="activity-body">
                        <div class="activity-text">${a.text}</div>
                        <div class="activity-time">${a.time}</div>
                    </div>`;
    dom.activityFeed.appendChild(item);
});


/* --------- FORM --------- */
dom.contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let isFormValid = true;

    Object.values(dom.formFields).forEach(({ input, err, ok }) => {
        let isValid = true;
        const val = input.value.trim();
        const { min, regex, required } = input.dataset;

        if (required && val === '') isValid = false;
        if (min && val.length < parseInt(min)) isValid = false;
        if (regex === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) isValid = false;
        if (regex === 'password' && !(val.length >= 8 && /[0-9]+/.test(val))) isValid = false;

        input.classList.toggle('valid', isValid);
        input.classList.toggle('invalid', !isValid);

        if (err) err.style.display = isValid ? 'none' : 'block';
        if (ok) ok.style.display = isValid ? 'block' : 'none';
        
        if (!isValid) isFormValid = false;
    });

    if (isFormValid) {
        showToast('Application submitted successfully! 🎉', 'success', 'Form Submitted');
        dom.contactForm.reset();
        
        Object.values(dom.formFields).forEach(({ input, ok }) => {
            input.classList.remove('valid');
            if (ok) ok.style.display = 'none';
        });
    } else {
        showToast('Please fix the errors above.', 'error');
    }
});


/* --------- TIMER --------- */
const TIMER_STATUS = {
    READY: 'READY',
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED'
};

let timerState = TIMER_STATUS.READY;
let initialSeconds = 1500;
let currentSeconds = 1500;
let timerInterval = null;

function updateTimerUI(buttonText, statusText, badgeType) {
    dom.btnTimerStart.textContent = buttonText;
    dom.timerStatus.textContent = statusText;
    dom.timerStatus.className = `badge badge-${badgeType}`;
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    dom.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startCountdown() {
    clearInterval(timerInterval);

    const endTime = Date.now() + (currentSeconds * 1000);

    timerInterval = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);
        
        if (secondsLeft > 0) {
            currentSeconds = secondsLeft;
            updateTimerDisplay();
        } else {
            currentSeconds = 0;
            updateTimerDisplay();
            clearInterval(timerInterval);
            
            updateTimerUI('▶ Start', 'Done!', 'success');
            showToast('Focus session complete! Time for a break 🎯', 'success', 'Timer Done');

            timerState = TIMER_STATUS.READY;
        }
    }, 200); 
}

dom.btnTimerStart.addEventListener('click', () => {
    if (currentSeconds === 0) {
        currentSeconds = initialSeconds; 
        updateTimerDisplay();
        showToast("Timer restarted", "info");
    }

    if (timerState !== TIMER_STATUS.RUNNING) {
        updateTimerUI('⏸ Pause', 'Running...', 'success');
        timerState = TIMER_STATUS.RUNNING;
        startCountdown();
    } else {
        updateTimerUI('▶ Resume', 'Paused', 'warning');
        timerState = TIMER_STATUS.PAUSED;
        clearInterval(timerInterval);
    }
});

dom.btnTimerReset.addEventListener('click', () => {
    if (timerState !== TIMER_STATUS.RUNNING) {
        updateTimerUI('▶ Start', 'Ready', 'primary');

        if (currentSeconds != initialSeconds) showToast("Timer reset", "info");
        clearInterval(timerInterval);   
        currentSeconds = initialSeconds; 
        updateTimerDisplay();
        timerState = TIMER_STATUS.READY;
    } else {
        showToast("Pause the timer to reset", "warning");
    }
});
 
dom.presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (timerState !== TIMER_STATUS.RUNNING) {
            clearInterval(timerInterval);
            const selectedTime = parseInt(btn.getAttribute('data-time'));
            initialSeconds = selectedTime;
            currentSeconds = selectedTime;
            updateTimerDisplay();

            updateTimerUI('▶ Start', 'Ready', 'primary');
            timerState = TIMER_STATUS.READY;
        } else {
            showToast("Pause the timer to select a new time", "warning");
        }
    });
});

updateTimerDisplay();

/*  --------- SPRINT PRIORITIES --------- */
let dragItems = [
  { text: 'Implement auth system', tag: 'Dev', priority: 'high', color: '#EF4444' },
  { text: 'Design onboarding flow', tag: 'Design', priority: 'high', color: '#EF4444' },
  { text: 'Write API documentation', tag: 'Dev', priority: 'medium', color: '#F59E0B' },
  { text: 'User testing sessions', tag: 'QA', priority: 'medium', color: '#F59E0B' },
  { text: 'Social media campaign', tag: 'Marketing', priority: 'low', color: '#10B981' },
];

function renderDragList() {
    dom.dragList.innerHTML = ''; 

    dragItems.forEach((a, index) => {
        const item = document.createElement('div');
        item.draggable = true;
        item.className = 'drag-card';
        item.innerHTML = `
            <div class="drag-priority" style="background:${a.color}"></div>
            <div class="drag-card-text">${a.text}</div>
            <div class="drag-card-tag">${a.tag}</div>
        `;
        dom.dragList.appendChild(item);

        setupDragAndDrop(item, index, dragItems, 'sprint', renderDragList);
    });
}

renderDragList();

//quick add
dom.btnModalSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = dom.modalInputTitle.value;
    const tag = dom.modalSelectTag.value;
    const priority = dom.modalSelectPriority.value;

    if (!title.trim()){
        dom.modalInputTitle.value = '';
        modalQA.close();
    
        showToast(`Couldn't add to sprint`, 'error');
        return;
    }

    const priorityColors = {
        'high': '#EF4444',
        'medium': '#F59E0B',
        'low': '#10B981'
    };
    const cardColor = priorityColors[priority];

    dragItems.push({ 
        text: title, 
        tag: tag, 
        priority: priority, 
        color: cardColor 
    });

    renderDragList();
    dom.modalInputTitle.value = '';
    modalQA.close();
    
    showToast(`Task "${title}" added to sprint!`, 'success');
});

dom.modalInputTitle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        dom.btnModalSubmit.click();
    }
});


/* ---------- DRAG AND DROP ---------- */
function setupDragAndDrop(el, index, dataArray, listKey, renderFn) {
    el.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('sourceList', listKey);
        e.dataTransfer.setData('itemIndex', index);
        setTimeout(() => el.classList.add('dragging'), 0);
    });

    el.addEventListener('dragend', () => el.classList.remove('dragging'));

    el.addEventListener('dragover', (e) => {
        e.preventDefault();
        el.classList.add('drag-over');
    });

    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));

    el.addEventListener('drop', (e) => {
        e.preventDefault();
        el.classList.remove('drag-over');

        const sourceList = e.dataTransfer.getData('sourceList');
        const fromIndex = parseInt(e.dataTransfer.getData('itemIndex'));
        const toIndex = index;

        if (sourceList !== listKey || isNaN(fromIndex) || fromIndex === toIndex) return;

        const movedItem = dataArray[fromIndex];
        dataArray.splice(fromIndex, 1);
        dataArray.splice(toIndex, 0, movedItem);

        if (listKey === 'tasks')saveTodos();
        renderFn();
    });
}


/*  --------- PROJECT PROGRESS --------- */
const projects = [
  { name: 'Nexus Redesign', pct: 78, color: '#4F46E5' },
  { name: 'API Migration', pct: 55, color: '#06B6D4' },
  { name: 'Mobile App v2', pct: 31, color: '#F59E0B' },
  { name: 'Analytics Platform', pct: 90, color: '#10B981' },
];
projects.forEach(p => {
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.innerHTML = `<label>${p.name}<span>${p.pct}%</span></label>
                        <div class="progress-track">
                            <div class="progress-fill" style="background:${p.color}" data-pct="${p.pct}"></div>
                        </div>`;
    dom.progressList.appendChild(item);
});
setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
    });
}, 300);



/*  --------- MONTHLY REVENUE --------- */
(function() {
  const canvas = document.getElementById('revenueChart');
  const ctx = canvas.getContext('2d');
  const tooltip = document.getElementById('chartTooltip');
  const data = [42, 58, 47, 73, 61, 88, 95, 72, 84, 103, 91, 118];
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const BAR_COLOR = '#4F46E5';
  const ACCENT_COLOR = '#06B6D4';

  function draw() {
    const W = canvas.offsetWidth;
    const H = 200;
    canvas.width = W; canvas.height = H;
    const pad = { top: 20, right: 20, bottom: 36, left: 48 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;
    const max = Math.max(...data) * 1.15;
    const barW = (chartW / data.length) * 0.6;
    const gap = (chartW / data.length) * 0.4 / 2;

    ctx.clearRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border') || 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (chartH / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
      const val = Math.round(max - (max / 4) * i);
      ctx.fillStyle = '#9CA3AF'; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'right';
      ctx.fillText('$' + val + 'k', pad.left - 6, y + 4);
    }

    // Bars
    data.forEach((val, i) => {
      const x = pad.left + i * (chartW / data.length) + gap;
      const bh = (val / max) * chartH;
      const y = pad.top + chartH - bh;

      const grad = ctx.createLinearGradient(0, y, 0, y + bh);
      grad.addColorStop(0, i === 11 ? ACCENT_COLOR : BAR_COLOR);
      grad.addColorStop(1, i === 11 ? 'rgba(6,182,212,0.2)' : 'rgba(79,70,229,0.2)');

      ctx.fillStyle = grad;
      const r = 4;
      ctx.beginPath();
      ctx.moveTo(x + r, y); ctx.lineTo(x + barW - r, y);
      ctx.arcTo(x + barW, y, x + barW, y + r, r);
      ctx.lineTo(x + barW, y + bh); ctx.lineTo(x, y + bh);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath(); ctx.fill();

      // X labels
      ctx.fillStyle = '#9CA3AF'; ctx.font = '11px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(labels[i], x + barW / 2, H - 10);
    });
  }

  draw();
  window.addEventListener('resize', draw);

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const W = canvas.width;
    const pad = { left: 48, right: 20, top: 20, bottom: 36 };
    const chartW = W - pad.left - pad.right;
    const idx = Math.floor((mx - pad.left) / (chartW / data.length));
    if (idx >= 0 && idx < data.length) {
      tooltip.style.opacity = '1';
      tooltip.style.left = (e.clientX - rect.left - 30) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 40) + 'px';
      tooltip.textContent = `${labels[idx]}: $${data[idx]}k`;
    } else {
      tooltip.style.opacity = '0';
    }
  });
  canvas.addEventListener('mouseleave', () => tooltip.style.opacity = '0');
})();


/*  --------- SHORTCUTS --------- */
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();

    if ((e.ctrlKey || e.metaKey)) {
        const handledKeys = ['k', 'e', 'b', 'm', 'd'];

        if (handledKeys.includes(key)) {
            e.preventDefault();
            
            if (key === 'k') {dom.inputSearch.focus();}
            else if (key === 'b') {modalShortcuts.open();}
            else if (key === 'm') { dom.taskInput.focus();}
            else if (key === 'd') { toggleTheme();}
            else if (key === 'e') {
                modalQA.open();
                setTimeout(() => {
                    dom.modalInputTitle.focus();
                }, 10);
            }
        }
    }
});
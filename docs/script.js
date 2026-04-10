document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    setupScrollSpy();
});

function renderSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const path = window.location.pathname;
    const isSubPage = path.includes('/research/');
    const isResearchHome = path.includes('research.html');
    
    // 1. Profile Section (Always same)
    const profileHtml = `
        <div class="sidebar-profile">
            <div class="profile-img">RB</div>
            <div class="profile-name">Reuben Badham</div>
            <div class="profile-bio">IT Security Student at UCL Odense <br>Valgfag: GenAI Misuse.</div>
            <ul class="profile-links">
                <li><a href="https://www.linkedin.com/in/reuben-badham/" target="_blank">LinkedIn</a></li>
            </ul>
        </div>`;

    // 2. Dynamic "On this page" Navigation
    let navHtml = "";
    const sections = document.querySelectorAll('main.content section[id]');
    const navLinks = [];

    sections.forEach(section => {
        if (section.id === 'hero' || section.id === 'research-home') return;
        
        const header = section.querySelector('h1, h2, h3');
        if (header) {
            navLinks.push({
                name: header.innerText,
                href: `#${section.id}`
            });
        }
    });

    if (navLinks.length > 0) {
        navHtml += `
            <h2>On this page</h2>
            <ul class="nav-contextual">
                ${navLinks.map(link => `<li><a href="${link.href}">${link.name}</a></li>`).join('')}
            </ul>`;
    }

    // 3. Research Topics (Visible on all pages now)
    const githubBase = "https://github.com/Sin9ularity1/Valgfag-Generative-AI-Misbrug/blob/main/";
    const topics = [
        { name: "LLM01: Prompt Injection", href: githubBase + "APPENDIX_03_LLM01_Prompt_Injection.md" },
        { name: "LLM02: Sensitive Info", href: githubBase + "APPENDIX_04_LLM02_Sensitive_Info_Disclosure.md" },
        { name: "LLM03: Supply Chain", href: githubBase + "APPENDIX_05_LLM03_Supply_Chain_Risks.md" },
        { name: "LLM04: Model Poisoning", href: githubBase + "APPENDIX_06_LLM04_Model_Poisoning.md" },
        { name: "LLM05: Output Handling", href: githubBase + "APPENDIX_07_LLM05_Improper_Output_Handling.md" },
        { name: "LLM06: Excessive Agency", href: githubBase + "APPENDIX_08_LLM06_Excessive_Agency.md" },
        { name: "LLM07: Prompt Leakage", href: githubBase + "APPENDIX_09_LLM07_System_Prompt_Leakage.md" },
        { name: "LLM08: Vector Weaknesses", href: githubBase + "APPENDIX_10_LLM08_Vector_Weaknesses.md" },
        { name: "LLM09: Misinformation", href: githubBase + "APPENDIX_11_LLM09_Misinformation.md" },
        { name: "LLM10: Unbounded Consumption", href: githubBase + "APPENDIX_12_LLM10_Unbounded_Consumption.md" }
    ];

    const researchNavHtml = `
        <h2 style="margin-top: 2rem;">Research Appendices</h2>
        <ul class="nav-contextual topics-list">
            ${topics.map(topic => `<li><a href="${topic.href}" target="_blank">${topic.name}</a></li>`).join('')}
        </ul>`;

    // 4. Technical Appendix Section (Always bottom)
    const appendixHtml = `
        <h2 style="margin-top: 2rem;">Technical Appendix</h2>
        <ul>
            <li><a href="${githubBase}APPENDIX_01_Glossary.md" target="_blank">Appendix 01: Glossary</a></li>
            <li><a href="${githubBase}APPENDIX_02_Logbook.md" target="_blank">Appendix 02: Logbook</a></li>
            <li><a href="${githubBase}README.md" target="_blank">Project Repository</a></li>
        </ul>`;

    sidebar.innerHTML = profileHtml + navHtml + researchNavHtml + appendixHtml;
    
    // Highlight active research topic if on a subpage
    if (isSubPage) {
        const currentFile = path.split('/').pop();
        sidebar.querySelectorAll('.topics-list a').forEach(a => {
            if (a.getAttribute('href').includes(currentFile)) {
                a.classList.add('active');
            }
        });
    }
}

function setupScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-contextual a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.1, rootMargin: '-10% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
}

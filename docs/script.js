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

    // 3. Research Topics (Only on research pages)
    let researchNavHtml = "";
    if (isResearchHome || isSubPage) {
        const rRoot = isSubPage ? "" : "research/";
        const topics = [
            { name: "LLM01: Prompt Injection", href: rRoot + "prompt_injection.html" },
            { name: "LLM02: Sensitive Info", href: rRoot + "sensitive_information_disclosure.html" },
            { name: "LLM03: Supply Chain", href: rRoot + "supply_chain.html" },
            { name: "LLM04: Model Poisoning", href: rRoot + "data_and_model_poisoning.html" },
            { name: "LLM05: Output Handling", href: rRoot + "improper_output_handling.html" },
            { name: "LLM06: Excessive Agency", href: rRoot + "excessive_agency.html" },
            { name: "LLM07: Prompt Leakage", href: rRoot + "system_prompt_leakage.html" },
            { name: "LLM08: Vector Weaknesses", href: rRoot + "vector_and_embedding_weaknesses.html" },
            { name: "LLM09: Misinformation", href: rRoot + "misinformation.html" },
            { name: "LLM10: Unbounded Consumption", href: rRoot + "unbounded_consumption.html" }
        ];

        researchNavHtml = `
            <h2 style="margin-top: 2rem;">Research Topics</h2>
            <ul class="nav-contextual topics-list">
                ${topics.map(topic => `<li><a href="${topic.href}">${topic.name}</a></li>`).join('')}
            </ul>`;
    }

    // 4. Technical Appendix Section (Always bottom)
    const appendixHtml = `
        <h2 style="margin-top: 2rem;">Technical Appendix</h2>
        <ul>
            <li><a href="https://github.com/Sin9ularity1/Valgfag-Generative-AI-Misbrug/blob/main/APPENDIX_1_Glossary.md" target="_blank">Appendix 1: Glossary</a></li>
            <li><a href="https://github.com/Sin9ularity1/Valgfag-Generative-AI-Misbrug/blob/main/APPENDIX_2_Logbook.md" target="_blank">Appendix 2: Logbook</a></li>
            <li><a href="https://github.com/Sin9ularity1/Selvvalgt-fordybelse-AI-Chatbot-IT-sikkerhed-projekt-" target="_blank">Project Repository</a></li>
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

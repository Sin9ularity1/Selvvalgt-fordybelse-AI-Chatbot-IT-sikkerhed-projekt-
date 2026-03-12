document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    setupScrollSpy();
});

function renderSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const path = window.location.pathname;
    const isSubPage = path.includes('/research/');
    const root = isSubPage ? '../' : '';

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

    // 2. Contextual Navigation Section
    let navTitle = "Navigation";
    let navLinks = [];

    if (path.endsWith('index.html') || path === '/' || path.endsWith('docs/')) {
        navLinks = [
            { name: "Purpose", href: "#home-summary" },
            { name: "Background", href: "#baggrund" },
            { name: "Problem Statement", href: "#problem-statement" },
            { name: "Key Highlights", href: "#key-highlights" }
        ];
    } else if (path.includes('project.html')) {
        navLinks = [
            { name: "About", href: "#om_projektet" },
            { name: "Motivation", href: "#motivation" },
            { name: "Goals", href: "#maal" },
            { name: "Milestones", href: "#milepaele" },
            { name: "Learning Objectives", href: "#læringsmål" }
        ];
    } else if (path.includes('analysis.html')) {
        navLinks = [
            { name: "Architecture", href: "#architecture" },
            { name: "Attack Surfaces", href: "#attack-surface" },
            { name: "Vulnerabilities", href: "#vulnerabilities" },
            { name: "Threat Mapping", href: "#threat-mapping" }
        ];
    } else if (path.includes('appendices.html')) {
        navLinks = [
            { name: "Appendix A: Glossary", href: "#appendix-a" },
            { name: "Appendix B: Logbook", href: "#appendix-b" }
        ];
    } else if (path.includes('research.html') || isSubPage) {
        navTitle = "Research Topics";
        const rRoot = isSubPage ? "" : "research/";
        navLinks = [
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
    }

    let navHtml = "";
    if (navLinks.length > 0) {
        navHtml = `
            <h2>${navTitle}</h2>
            <ul class="nav-contextual">
                ${navLinks.map(link => `<li><a href="${link.href}">${link.name}</a></li>`).join('')}
            </ul>`;
    }

    // 3. Technical Appendix Section (Always bottom)
    const appendixHtml = `
        <h2 style="margin-top: 2rem;">Technical Appendix</h2>
        <ul>
            <li><a href="https://github.com/Sin9ularity1/Valgfag-Generative-AI-Misbrug/blob/main/APPENDIX_1_Glossary.md" target="_blank">Appendix 1: Glossary</a></li>
            <li><a href="https://github.com/Sin9ularity1/Valgfag-Generative-AI-Misbrug/blob/main/APPENDIX_2_Logbook.md" target="_blank">Appendix 2: Logbook</a></li>
            <li><a href="https://github.com/Sin9ularity1/Selvvalgt-fordybelse-AI-Chatbot-IT-sikkerhed-projekt-" target="_blank">Project Repository</a></li>
        </ul>`;

    sidebar.innerHTML = profileHtml + navHtml + appendixHtml;
    
    // Highlight active page link if it's a direct file link (not anchor)
    if (isSubPage || path.includes('research.html')) {
        const currentFile = path.split('/').pop();
        sidebar.querySelectorAll('.nav-contextual a').forEach(a => {
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

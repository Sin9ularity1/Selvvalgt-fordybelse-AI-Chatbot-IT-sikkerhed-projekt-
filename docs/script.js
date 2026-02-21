document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.sidebar ul li a'); // This is for the original sidebar on index.html

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // This part is for highlighting sections within a page, not the lab sidebar itself
                // It should only run if there are actual section links in the sidebar.
                // The lab sidebar will be handled by generateLabSidebar.
                const pageSidebarLinks = document.querySelectorAll('.sidebar ul li a');
                pageSidebarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-40% 0px -60% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    const labs = [
        { title: "Research Home", path: "research.html" },
        { title: "Prompt Injection", path: "research/prompt_injection.html" },
        { title: "Sensitive Information Disclosure", path: "research/sensitive_information_disclosure.html" },
        { title: "Supply Chain Vulnerabilities", path: "research/supply_chain.html" },
        { title: "Data and Model Poisoning", path: "research/data_and_model_poisoning.html" },
        { title: "Improper Output Handling", path: "research/improper_output_handling.html" },
        { title: "Excessive Agency", path: "research/excessive_agency.html" },
        { title: "System Prompt Leakage", path: "research/system_prompt_leakage.html" },
        { title: "Vector and Embedding Weaknesses", path: "research/vector_and_embedding_weaknesses.html" },
        { title: "Misinformation", path: "research/misinformation.html" },
        { title: "Unbounded Consumption", path: "research/unbounded_consumption.html" },
    ];

    function generateLabSidebar() {
        const sidebarLists = document.querySelectorAll('.sidebar ul');
        if (sidebarLists.length === 0) return;

        const currentPath = window.location.pathname;
        let currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        const isInResearchDirectory = currentPath.includes('/research/');

        // If current page is research.html, its filename is 'research.html'
        // If current page is inside research/, like research/ai_phishing.html, then currentFileName is 'ai_phishing.html'

        sidebarLists.forEach(ul => {
            ul.innerHTML = ''; // Clear existing content

            labs.forEach(lab => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = lab.title;

                let hrefPath = lab.path;

                if (isInResearchDirectory) {
                    // Current page is in 'research/'
                    if (lab.path === "research.html") {
                        // Link to research.html from inside research/ should go up one level
                        hrefPath = "../research.html";
                    } else {
                        // Link to another lab page (e.g., ai_phishing.html -> prompt_injection.html)
                        hrefPath = lab.path.split('/').pop();
                    }
                }
                // If current page is research.html (not inResearchDirectory), paths are already correct (e.g., research/ai_phishing.html)

                a.href = hrefPath;

                // Determine if this link is active
                let labFileName = lab.path.split('/').pop();

                // Special handling for research.html to be active if currentFileName is also research.html
                if (currentFileName === labFileName || (currentFileName === 'research.html' && lab.path === 'research.html')) {
                    a.classList.add('active');
                }

                li.appendChild(a);
                ul.appendChild(li);
            });
        });
    }

    // Call the sidebar generation function if a sidebar exists AND it's a research-related page
    if (document.querySelector('.sidebar')) {
        const currentPath = window.location.pathname;
        if (currentPath.includes('research.html') || currentPath.includes('/research/')) {
            generateLabSidebar();
        }
    }
});

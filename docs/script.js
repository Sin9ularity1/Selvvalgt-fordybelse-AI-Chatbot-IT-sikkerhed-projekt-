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
        { title: "Labs Home", path: "labs.html" },
        { title: "AI Phishing Lab", path: "labs/ai_phishing.html" },
        { title: "Prompt Injection Lab", path: "labs/prompt_injection.html" },
        { title: "Sensitive Information Disclosure Lab", path: "labs/sensitive_information_disclosure.html" },
        { title: "Supply Chain Vulnerabilities Lab", path: "labs/supply_chain.html" },
        { title: "Data and Model Poisoning Lab", path: "labs/data_and_model_poisoning.html" },
        { title: "Improper Output Handling Lab", path: "labs/improper_output_handling.html" },
        { title: "Excessive Agency Lab", path: "labs/excessive_agency.html" },
        { title: "System Prompt Leakage Lab", path: "labs/system_prompt_leakage.html" },
        { title: "Vector and Embedding Weaknesses Lab", path: "labs/vector_and_embedding_weaknesses.html" },
        { title: "Misinformation Lab", path: "labs/misinformation.html" },
        { title: "Unbounded Consumption Lab", path: "labs/unbounded_consumption.html" },
    ];

    function generateLabSidebar() {
        const sidebarLists = document.querySelectorAll('.sidebar ul');
        if (sidebarLists.length === 0) return;

        const currentPath = window.location.pathname;
        let currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        const isInLabsDirectory = currentPath.includes('/labs/');

        // If current page is labs.html, its filename is 'labs.html'
        // If current page is inside labs/, like labs/ai_phishing.html, then currentFileName is 'ai_phishing.html'

        sidebarLists.forEach(ul => {
            ul.innerHTML = ''; // Clear existing content

            labs.forEach(lab => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = lab.title;

                let hrefPath = lab.path;

                if (isInLabsDirectory) {
                    // Current page is in 'labs/'
                    if (lab.path === "labs.html") {
                        // Link to labs.html from inside labs/ should go up one level
                        hrefPath = "../labs.html";
                    } else {
                        // Link to another lab page (e.g., ai_phishing.html -> prompt_injection.html)
                        hrefPath = lab.path.split('/').pop();
                    }
                }
                // If current page is labs.html (not inLabsDirectory), paths are already correct (e.g., labs/ai_phishing.html)

                a.href = hrefPath;

                // Determine if this link is active
                let labFileName = lab.path.split('/').pop();

                // Special handling for labs.html to be active if currentFileName is also labs.html
                if (currentFileName === labFileName || (currentFileName === 'labs.html' && lab.path === 'labs.html')) {
                    a.classList.add('active');
                }

                li.appendChild(a);
                ul.appendChild(li);
            });
        });
    }

    // Call the sidebar generation function if a sidebar exists
    if (document.querySelector('.sidebar')) {
        generateLabSidebar();
    }
});

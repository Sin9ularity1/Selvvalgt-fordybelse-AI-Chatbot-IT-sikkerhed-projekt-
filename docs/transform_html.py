import os
import re

# Define the common profile HTML
SIDEBAR_PROFILE = """        <div class="sidebar-profile">
            <div class="profile-img">RB</div>
            <div class="profile-name">Reuben Badham</div>
            <div class="profile-bio">IT Security Student at UCL Odense</div>
            <ul class="profile-links">
                <li>📍 Odense, Denmark</li>
                <li>🔗 <a href="https://www.linkedin.com/in/reuben-badham/" target="_blank">LinkedIn</a></li>
                <li>💻 <a href="https://github.com/Sin9ularity1/Selvvalgt-fordybelse-AI-Chatbot-IT-sikkerhed-projekt-" target="_blank">GitHub</a></li>
            </ul>
        </div>"""

FOOTER = "<footer>&copy; 2026 Reuben Badham. GenAI Security Research Project.</footer>"

RESEARCH_TOPICS = [

    ("LLM01: Prompt Injection", "prompt_injection.html"),
    ("LLM02: Sensitive Info Disclosure", "sensitive_information_disclosure.html"),
    ("LLM03: Supply Chain Risks", "supply_chain.html"),
    ("LLM04: Model Poisoning", "data_and_model_poisoning.html"),
    ("LLM05: Improper Output Handling", "improper_output_handling.html"),
    ("LLM06: Excessive Agency", "excessive_agency.html"),
    ("LLM07: System Prompt Leakage", "system_prompt_leakage.html"),
    ("LLM08: Vector Weaknesses", "vector_and_embedding_weaknesses.html"),
    ("LLM09: Misinformation", "misinformation.html"),
    ("LLM10: Unbounded Consumption", "unbounded_consumption.html")
]

def get_research_sidebar(rel_path_to_research):
    html = "        <ul>\n"
    for name, link in RESEARCH_TOPICS:
        html += f'            <li><a href="{rel_path_to_research}{link}">{name}</a></li>\n'
    html += "        </ul>"
    return html

def transform_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    file_name = os.path.basename(file_path)
    is_research_subdir = 'research/' in file_path and file_name != 'research.html'
    rel_root = '../' if is_research_subdir else ''
    rel_research = '' if is_research_subdir else 'research/'

    # 1. Update Header Logo
    content = re.sub(r'<(a|div)[^>]*class="logo"[^>]*>.*?</\1>', 
                     f'<a href="{rel_root}index.html" class="logo">GenAI Security</a>', 
                     content)

    # 2. Update Favicon and Manifest Paths (Ensure no leading slash)
    content = re.sub(r'href="/favicon', f'href="{rel_root}favicon', content)
    content = re.sub(r'href="/apple-touch-icon', f'href="{rel_root}apple-touch-icon', content)
    content = re.sub(r'href="/site\.webmanifest', f'href="{rel_root}site.webmanifest', content)
    
    # Also handle src in case
    content = re.sub(r'src="/(style\.css|script\.js)', f'src="{rel_root}\\1', content)

    # 3. Update Sidebar
    sidebar_match = re.search(r'<aside class="sidebar">(.*?)</aside>', content, re.DOTALL)
    if sidebar_match:
        old_sidebar_inner = sidebar_match.group(1)
        
        # Keep existing navigation if it exists
        nav_match = re.search(r'<h2>Navigation</h2>\s*<ul>.*?</ul>', old_sidebar_inner, re.DOTALL)
        navigation_html = nav_match.group(0) if nav_match else ""
        
        new_sidebar_inner = "\n" + SIDEBAR_PROFILE + "\n"
        if navigation_html:
            new_sidebar_inner += "        " + navigation_html + "\n"
        
        # If it's a research detail file, show the topics
        if is_research_subdir:
            new_sidebar_inner += get_research_sidebar(rel_research) + "\n"
            
        content = content.replace(old_sidebar_inner, new_sidebar_inner)

    # 4. Remove Footer
    content = re.sub(r'<footer>.*?</footer>', '', content, flags=re.DOTALL)

    # 5. Correct Navigation Paths for research subdir
    if is_research_subdir:
        links = ["index.html", "project.html", "research.html", "findings.html", "logbog.html", "about.html", "style.css", "script.js"]
        for link in links:
            content = content.replace(f'href="{link}"', f'href="../{link}"')
            content = content.replace(f'src="{link}"', f'src="../{link}"')
        
        # Clean up any potential double-prefixing
        content = content.replace('../../', '../')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

root_dir = "/home/sin9ularity/Documents/Selvvalgt_fordybelse/Valgfag/docs"
files_to_process = [
    "index.html", "about.html", "findings.html", "logbog.html", 
    "project.html", "references.html", "research.html"
]

for f in files_to_process:
    path = os.path.join(root_dir, f)
    if os.path.exists(path):
        print(f"Processing {path}")
        transform_file(path)

research_dir = os.path.join(root_dir, "research")
for f in os.listdir(research_dir):
    if f.endswith(".html"):
        path = os.path.join(research_dir, f)
        print(f"Processing {path}")
        transform_file(path)

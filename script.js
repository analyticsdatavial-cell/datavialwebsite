(function () { if (!window.chatbase || window.chatbase("getState") !== "initialized") { window.chatbase = (...args) => { if (!window.chatbase.q) { window.chatbase.q = [] } window.chatbase.q.push(arguments) }; window.chatbase = new Proxy(window.chatbase, { get(target, prop) { if (prop === "q") { return target.q } return (...args) => target(prop, ...args) } }) } const onLoad = function () { const script = document.createElement("script"); script.src = "https://www.chatbase.co/embed.min.js"; script.id = "tCKkfMcJOFD1oUHU_aMup"; script.domain = "www.chatbase.co"; document.body.appendChild(script) }; if (document.readyState === "complete") { onLoad() } else { window.addEventListener("load", onLoad) } })();

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.step-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Close all other open items
            document.querySelectorAll('.step-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });
            
            // Toggle current item
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

btn.addEventListener("click", () => {
  const term = prompt("Search this page for:");
  if (term) {
    window.find(term);
  }
});

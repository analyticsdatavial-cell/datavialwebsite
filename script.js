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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const header = document.querySelector('header h1');
    header.textContent = 'Welcome to My Interactive Page';
    
    // Change list items
    const listItems = document.querySelectorAll('ol li');
    listItems[0].textContent = 'Primary item';
    listItems[1].textContent = 'Secondary item';
    listItems[2].textContent = 'Tertiary item';
    
    // 2. Modify CSS styles via JavaScript
    const body = document.querySelector('body');
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.backgroundColor = '#f5f5f5';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = 'white';
        section.style.padding = '20px';
        section.style.margin = '10px 0';
        section.style.borderRadius = '5px';
        section.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
    
    // 3. Add a button to the footer
    const footer = document.querySelector('footer');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Image Section';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.backgroundColor = '#4CAF50';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '4px';
    toggleButton.style.cursor = 'pointer';
    footer.appendChild(toggleButton);
    
    // Add event listener to toggle image section
    const imageSection = document.querySelectorAll('section')[1];
    toggleButton.addEventListener('click', function() {
        if (imageSection.style.display === 'none') {
            imageSection.style.display = 'block';
            toggleButton.textContent = 'Hide Image Section';
            toggleButton.style.backgroundColor = '#4CAF50';
        } else {
            imageSection.style.display = 'none';
            toggleButton.textContent = 'Show Image Section';
            toggleButton.style.backgroundColor = '#f44336';
        }
    });
    
    // Additional interactive elements
    // Change table row colors on hover
    const tableRows = document.querySelectorAll('table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e9e9e9';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully! (This is a demo)');
        this.reset();
    });
    
    // Add current year to footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = `© ${new Date().getFullYear()} My Website`;
    footer.appendChild(document.createElement('br'));
    footer.appendChild(yearSpan);
});
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// ==========================================
// CERTIFICATE UPLOAD & DOWNLOAD FUNCTIONALITY
// ==========================================

const certFileInput = document.getElementById('certFileInput');
const fileLabel = document.querySelector('.file-label');
const uploadedFilesList = document.getElementById('uploadedFilesList');

// Initialize uploaded files on page load
loadUploadedFiles();

// Handle file input change
certFileInput.addEventListener('change', handleFileSelect);

// Drag and drop functionality
fileLabel.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileLabel.style.borderColor = '#5a6b7f';
    fileLabel.style.backgroundColor = 'rgba(107, 114, 128, 0.1)';
});

fileLabel.addEventListener('dragleave', () => {
    fileLabel.style.borderColor = '#6b7280';
    fileLabel.style.backgroundColor = 'var(--white)';
});

fileLabel.addEventListener('drop', (e) => {
    e.preventDefault();
    fileLabel.style.borderColor = '#6b7280';
    fileLabel.style.backgroundColor = 'var(--white)';
    const files = e.dataTransfer.files;
    certFileInput.files = files;
    handleFileSelect({ target: { files: files } });
});

function handleFileSelect(e) {
    const files = e.target.files;
    
    for (let file of files) {
        // Check file size (limit to 10MB)
        if (file.size > 10 * 1024 * 1024) {
            alert(`File ${file.name} is too large. Maximum size is 10MB.`);
            continue;
        }

        // Read file and store in localStorage
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = {
                name: file.name,
                type: file.type,
                size: file.size,
                data: event.target.result,
                uploadDate: new Date().toLocaleDateString()
            };
            
            // Get existing files
            let uploadedFiles = JSON.parse(localStorage.getItem('uploadedCerts')) || [];
            
            // Check if file already exists
            const fileExists = uploadedFiles.some(f => f.name === file.name && f.uploadDate === fileData.uploadDate);
            
            if (!fileExists) {
                uploadedFiles.push(fileData);
                localStorage.setItem('uploadedCerts', JSON.stringify(uploadedFiles));
                loadUploadedFiles();
            } else {
                alert(`File ${file.name} already uploaded.`);
            }
        };
        reader.readAsDataURL(file);
    }
    
    // Reset input
    certFileInput.value = '';
}

function loadUploadedFiles() {
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedCerts')) || [];
    uploadedFilesList.innerHTML = '';
    
    if (uploadedFiles.length === 0) {
        uploadedFilesList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--light-text);">No certificates uploaded yet</p>';
        return;
    }
    
    uploadedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'uploaded-file-item';
        
        const fileIcon = getFileIcon(file.type);
        const fileSize = formatFileSize(file.size);
        
        fileItem.innerHTML = `
            <div class="file-icon">${fileIcon}</div>
            <div class="file-name">${truncateFileName(file.name, 20)}</div>
            <div class="file-size">${fileSize}</div>
            <div class="file-actions">
                <button class="file-btn download-btn" onclick="downloadFile(${index})">
                    ⬇️ Download
                </button>
                <button class="file-btn delete-btn" onclick="deleteFile(${index})">
                    🗑️ Delete
                </button>
            </div>
        `;
        
        uploadedFilesList.appendChild(fileItem);
    });
}

function downloadFile(index) {
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedCerts')) || [];
    const file = uploadedFiles[index];
    
    if (!file) return;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = file.data;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function deleteFile(index) {
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedCerts')) || [];
    const fileName = uploadedFiles[index].name;
    
    if (confirm(`Are you sure you want to delete "${fileName}"?`)) {
        uploadedFiles.splice(index, 1);
        localStorage.setItem('uploadedCerts', JSON.stringify(uploadedFiles));
        loadUploadedFiles();
    }
}

function getFileIcon(fileType) {
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('word') || fileType.includes('document')) return '📋';
    return '📎';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function truncateFileName(name, maxLength) {
    if (name.length > maxLength) {
        return name.substring(0, maxLength - 3) + '...';
    }
    return name;
}

// ==========================================
// FORM SUBMISSION
// ==========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:joymaliyakelabraham@gmail.com?subject=Contact from ${encodeURIComponent(name)}: ${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards, service cards, and cert cards
const cards = document.querySelectorAll('.skill-card, .service-card, .cert-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #6b7280;
        border-bottom: 2px solid #6b7280;
    }
`;
document.head.appendChild(style);

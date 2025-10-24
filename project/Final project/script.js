document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      alert(`Searching for events related to: "${query}"`);
      // Implement your search functionality here
    } else {
      alert('Please enter a keyword to search.');
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if (currentUser) {
      document.getElementById('loginLink').classList.add('hidden');
      document.getElementById('profileLink').classList.remove('hidden');
    } else {
      document.getElementById('loginLink').classList.remove('hidden');
      document.getElementById('profileLink').classList.add('hidden');
    }
  });
  
// ฟังก์ชันโหลด footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data); // เพิ่ม footer ที่ส่วนท้ายของหน้า
    })
    .catch(error => console.error('Error loading footer:', error));
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener('DOMContentLoaded', loadFooter);

function addToCart(itemName) {
  alert(itemName + " is added to cart!");
}

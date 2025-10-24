document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // ป้องกันการ reload หน้า

    // ดึงค่าชื่อผู้ใช้จากฟอร์ม
    const username = document.getElementById('usernameInput').value;

    // บันทึกชื่อผู้ใช้ลงใน localStorage
    localStorage.setItem('username', username);

    // เปลี่ยนหน้าไปยัง Profile
    window.location.href = 'profile.html';
});

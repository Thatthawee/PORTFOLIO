// โหลดข้อมูลผู้ใช้จาก LocalStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// สลับระหว่างฟอร์ม Login และ Register
document.getElementById('switchToRegister').addEventListener('click', () => {
  document.getElementById('loginSection').classList.add('hidden');
  document.getElementById('registerSection').classList.remove('hidden');
});

document.getElementById('switchToLogin').addEventListener('click', () => {
  document.getElementById('registerSection').classList.add('hidden');
  document.getElementById('loginSection').classList.remove('hidden');
});

// การจัดการฟอร์มลงทะเบียน
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault(); // ป้องกันการส่งฟอร์ม

  const username = document.getElementById('registerUser').value.trim();
  const password = document.getElementById('registerPass').value.trim();
  const confirmPassword = document.getElementById('registerConfirmPass').value.trim();

  // ตรวจสอบฟิลด์ที่กรอก
  if (!username || !password || !confirmPassword) {
    alert('Please fill out all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // ตรวจสอบผู้ใช้ซ้ำ
  if (users.some(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }

  // บันทึกผู้ใช้ใหม่ใน LocalStorage
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');
  document.getElementById('switchToLogin').click(); // กลับไปหน้า Login
});

// การจัดการฟอร์มเข้าสู่ระบบ
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault(); // ป้องกันการส่งฟอร์ม

  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value.trim();

  // ตรวจสอบข้อมูลผู้ใช้
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'index.html'; // เปลี่ยนไปหน้าหลัก
  } else {
    alert('Invalid username or password.');
  }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // ป้องกันการ reload หน้า

  // ดึงค่าจาก input ที่ผู้ใช้กรอก
  const username = document.getElementById('usernameInput').value;

  // บันทึกชื่อผู้ใช้ลงใน localStorage
  localStorage.setItem('username', username);

  // เปลี่ยนหน้าไปยัง Profile
  window.location.href = 'profile.html';
});


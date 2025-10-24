document.addEventListener("DOMContentLoaded", function () {
  // Populate days
  const daySelect = document.getElementById("birthDay");
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Populate months
  const monthSelect = document.getElementById("birthMonth");
  const months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // Populate years
  const yearSelect = document.getElementById("birthYear");
  for (let i = 2024; i >= 1900; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  // Handle avatar upload
  const uploadAvatar = document.getElementById("uploadAvatar");
  const userAvatar = document.getElementById("userAvatar");
  uploadAvatar.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        userAvatar.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});


  // Handle Form Submission
  document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;

    // Validate phone number
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก");
      return;
    }

    alert("Profile updated successfully!");
  });

// ดึง Username จาก localStorage
const username = localStorage.getItem("username");

  // Check if a username exists
  if (username) {
    // Replace "MY PROFILE" with the username
    document.getElementById("profileUsername").textContent = username;
  } else {
    // If no username is found, keep it as "MY PROFILE"
    document.getElementById("profileUsername").textContent = "MY PROFILE";
  }



document.addEventListener('DOMContentLoaded', function () {
  // ดึงข้อมูลที่เก็บไว้ใน localStorage
  const savedData = JSON.parse(localStorage.getItem('userProfile')) || {};

  // โหลดข้อมูลที่บันทึกไว้ในฟอร์ม
  document.getElementById('profileUsername').textContent = savedData.username || 'MY PROFILE';
  document.getElementById('phoneInput').value = savedData.phone || '';
  document.getElementById('firstNameInput').value = savedData.firstName || '';
  document.getElementById('lastNameInput').value = savedData.lastName || '';
  document.getElementById('emailInput').value = savedData.email || '';
  document.getElementById('birthDay').value = savedData.birthDay || '';
  document.getElementById('birthMonth').value = savedData.birthMonth || '';
  document.getElementById('birthYear').value = savedData.birthYear || '';
  document.getElementById('genderInput').value = savedData.gender || '';

  // โหลดรูปภาพจาก localStorage
  if (savedData.avatar) {
      document.getElementById('userAvatar').src = savedData.avatar;
  }

  // จัดการการอัปโหลดรูปภาพ
  const uploadAvatar = document.getElementById('uploadAvatar');
    uploadAvatar.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('userAvatar').src = e.target.result;
                savedData.avatar = e.target.result; // บันทึก Base64
            };
            reader.readAsDataURL(file);
        }
    });

  // เมื่อกดปุ่ม "บันทึก"
  document.getElementById('saveButton').addEventListener('click', function () {
      // เก็บข้อมูลจากฟอร์ม
      savedData.username = document.getElementById('profileUsername').textContent;
      savedData.phone = document.getElementById('phoneInput').value;
      savedData.firstName = document.getElementById('firstNameInput').value;
      savedData.lastName = document.getElementById('lastNameInput').value;
      savedData.email = document.getElementById('emailInput').value;
      savedData.birthDay = document.getElementById('birthDay').value;
      savedData.birthMonth = document.getElementById('birthMonth').value;
      savedData.birthYear = document.getElementById('birthYear').value;
      savedData.gender = document.getElementById('genderInput').value;

      // บันทึกข้อมูลใน localStorage
      localStorage.setItem('userProfile', JSON.stringify(savedData));

      // ย้ายไปหน้า Profile
      window.location.href = 'profile.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const savedData = JSON.parse(localStorage.getItem('userProfile'));

  if (savedData) {
      // แสดงข้อมูลที่บันทึกไว้
      document.getElementById('profileUsername').textContent = savedData.username || 'MY PROFILE';
      document.getElementById('phoneInput').value = savedData.phone || '';
      document.getElementById('firstNameInput').value = savedData.firstName || '';
      document.getElementById('lastNameInput').value = savedData.lastName || '';
      document.getElementById('emailInput').value = savedData.email || '';
      document.getElementById('birthDay').value = savedData.birthDay || '';
      document.getElementById('birthMonth').value = savedData.birthMonth || '';
      document.getElementById('birthYear').value = savedData.birthYear || '';
      document.getElementById('genderInput').value = savedData.gender || '';

      // แสดงรูปภาพ
      if (savedData.avatar) {
          document.getElementById('userAvatar').src = savedData.avatar;
      }
  }
});

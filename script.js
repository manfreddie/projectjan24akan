document.getElementById("akan-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const dob = new Date(document.getElementById("dob").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    if (!dob || isNaN(dob)) {
      alert("Please enter a valid date.");
      return;
    }
  
    const dayOfWeek = (
        Math.floor((dob.getFullYear() / 4)
         - 2 * Math.floor(dob.getFullYear() / 100)
          + Math.floor((dob.getFullYear() % 100) / 4) 
          + Math.floor((26 * (dob.getMonth() + 1)) / 10) 
          + dob.getDate()
        ) % 7 + 7) % 7;
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
  });
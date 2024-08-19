document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((customers) => {
      const randomIndex = Math.floor(Math.random() * customers.length);
      const customerData = customers[randomIndex];

      // Populate the placeholders with dynamic content
      document.getElementById("childName").textContent = customerData.childName;
      document.getElementById("discountPercentage").textContent =
        customerData.discountPercentage;
      document.getElementById("discountCode").textContent =
        customerData.discountCode;
      document.getElementById("bearName").textContent = customerData.bearName;
      document.getElementById("purchaseDate").textContent =
        customerData.purchaseDate;
      document.getElementById("storeLocation").textContent =
        customerData.storeLocation;

      //Hide or show the Bonus Club section based on membership
      const bonusClubSection = document.getElementById("bonusClubSection");
      if (customerData.isBonusClubMember) {
        bonusClubSection.style.display = "none";
      } else {
        bonusClubSection.style.display = "block";
      }
    })
    .catch((error) => console.error("Error fetching the data:", error));
});

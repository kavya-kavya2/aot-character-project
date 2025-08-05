setTimeout(() => {
        const btn = document.getElementById("likeBtn");
        btn.style.pointerEvents = "auto";
        btn.addEventListener("click", () => {
          window.location.href = "cards.html";
        });
      }, 3000);
      
setTimeout(() => {
        const btn = document.getElementById("dislike");
        btn.style.pointerEvents = "auto";
        btn.addEventListener("click", () => {
          window.location.href = "exit.html";
        });
      }, 3000);
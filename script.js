function showLogin(){

    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";

    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
}

function showSignup(){

    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";

    document.getElementById("signupTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

/* Role Selector (Doctor / Patient) */
function selectRole(btn){
    let parent = btn.parentElement;
    let buttons = parent.querySelectorAll("button");

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}
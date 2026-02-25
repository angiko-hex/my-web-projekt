const btn = document.getElementById("#heme-toggle");
btn.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-mode');
    console.log("mód átváltva");//segít a hibakeresésben
});
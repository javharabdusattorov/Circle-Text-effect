const elText = document.querySelector('.text');
elText.innerHTML = elText.textContent.replace(/\S/g, "<span>$&</span>");

const elAllElement = document.querySelectorAll('span');
for(let i = 0; i < elAllElement.length; i++) {
    elAllElement[i].style.transform = "rotate("+i*18+"deg)"
}

document.addEventListener("mousemove", function(e) {
    elText.style.left = e.pageX + 'px';
    elText.style.top = e.pageY + 'px';
})
const progress1 = document.getElementById('progress-1');
const miniBars = progress1.querySelectorAll('.mini-bar');

const startProgress1 = (current) => {
    setTimeout(() => {
        if (current < 6) {
            miniBars[current].classList.add('active');
            startProgress1(current+1);
        } else {
            miniBars.forEach((bar) => bar.classList.remove('active'));
            startProgress1(0);
        }
    }, 1000);
}

const progress2 = document.getElementById('progress-2');
const loadingBar = document.getElementById('loading-bar');
const percent2 = progress2.querySelector('.percent');

let percent = 0;
const startProgress2 = () => {
    const id = setInterval(() => {
        percent += 5;
        if (percent <= 100) {
            percent2.innerHTML = `${percent}%`;
            loadingBar.style.width = `${percent}%`;
        } else {
            clearInterval(id)
        }
    }, 400)

}

// startProgress1(0);
startProgress2();
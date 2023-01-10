'use strict'; // 엄격모드on

// Main > Characters 버튼 클릭 이벤트
// Main > Characters 버튼 클릭하면 연관된 이미지와 콘텐츠를 보여줌
const controlBtn = document.querySelectorAll('.control_btn');
const controlImg = document.querySelectorAll('.characters_img > img');
const controlContent = document.querySelectorAll('.control_content');

controlBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        // 이미지 보여주기
        controlImg.forEach((viewImg)=>{
            if(button.name == viewImg.id){
                viewImg.classList.remove('active');
                viewImg.classList.add('active');
            }else{
                viewImg.classList.remove('active');
            } 
        });
        // 콘텐츠 보여주기
        controlContent.forEach((viewContent)=>{
            if(button.name == viewContent.dataset.content){
                viewContent.classList.remove('active');
                viewContent.classList.add('active');
            }else{
                viewContent.classList.remove('active');
            } 
        });
    });
});

//////////////////////////////////////////////////////////////////////

// Main > Trailer 동영상 캐러셀
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const trailerContainer = document.querySelector('.trailer_container');
const trailerContent = document.querySelectorAll('.trailer_content');
const trailerCount = trailerContent.length;
const trailerFullWidth = trailerContainer.offsetWidth;
const trailerWidth = trailerContainer.offsetWidth / trailerCount;
let count = '';
// next button
function nextCount(){
    count--;
    trailerContainer.style.transform = `translateX(-${-count * trailerWidth}px)`;
    console.log('nextCount :',count);
    console.log(-count * trailerWidth);
    if((-count * trailerWidth)==(trailerFullWidth-trailerWidth)){
        console.log('nextCount : stop');
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
    }
};
// prev button
function prevCount(){
    count++;
    trailerContainer.style.transform = `translateX(${count * trailerWidth}px)`;
    console.log('prevCount :',count);
    console.log(count * trailerWidth);
    if(count==0){
        console.log('prevCount : stop');
        prevBtn.disabled = true;
    }else{
        nextBtn.disabled = false;
    }
};
// 초기값 - prev버튼 비활성화
prevBtn.disabled = true; 
// Main > Trailer 버튼 이벤트 호출
prevBtn.addEventListener('click',prevCount);
nextBtn.addEventListener('click',nextCount);

//////////////////////////////////////////////////////////////////////

// Toggle Button event
const toggleBtn = document.querySelector('.toggle_btn');
const navMenu = document.querySelector('.header .nav_menu');
const snsLink = document.querySelector('.header .sns_link');

toggleBtn.addEventListener('click',()=>{
    navMenu.classList.toggle('active');
    snsLink.classList.toggle('active');
    toggleBtn.classList.toggle('active');
});

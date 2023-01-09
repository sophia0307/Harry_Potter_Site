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


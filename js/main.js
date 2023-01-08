const controlBtn = document.querySelectorAll('.control_btn');
const controlImg = document.querySelectorAll('.characters_img > img');

controlBtn.forEach((controlButton) => {
    controlButton.addEventListener('click',()=>{
        // console.log(controlButton.name);
        controlImg.forEach((viewImg)=>{
            if(controlButton.name == viewImg.id){
                viewImg.classList.remove('active');
                viewImg.classList.add('active');
                // console.log(controlButton.name,viewImg.id);
            }else{
                viewImg.classList.remove('active');
            }
        });
    });
});

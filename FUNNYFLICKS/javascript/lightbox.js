const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContainer1 = document.createElement("div");
const lightBoxContainer2 = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxText = document.createElement("div");
const lightBoxPara = document.createElement("div");
const lightBoxImg = document.createElement("img");
const crossBtn=document.createElement("button");
const ytBtn=document.createElement("button");
const img= '<img src="images/close.png" alt="image description">';

lightBoxContainer.classList.add("lightbox");
lightBoxContainer1.classList.add("lightbox1");
lightBoxContainer2.classList.add("lightbox2");
lightBoxContent.classList.add("lightbox-content");
lightBoxText.classList.add("lightbox-text");
lightBoxPara.classList.add("lightbox-para");
crossBtn.classList.add("crossBtn");
ytBtn.classList.add("ytBtn");


lightBoxContainer.appendChild(lightBoxContainer1);
lightBoxContainer.appendChild(lightBoxContainer2);
lightBoxContainer2.appendChild(lightBoxContent);
lightBoxContainer2.appendChild(lightBoxText);
lightBoxContainer1.appendChild(crossBtn);
lightBoxContent.appendChild(lightBoxImg);
lightBoxText.appendChild(lightBoxPara);
lightBoxText.appendChild(ytBtn);

function showLightBox(n) {
    document.body.appendChild(lightBoxContainer);
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
    // crossBtn.innerHTML=`<h3>X<h3>`;
    crossBtn.innerHTML=`${img}`;
    ytBtn.innerHTML=`Watch More`;
    if(index==1){
        lightBoxPara.innerHTML=`<h2>Anubhav Singh Bassi</h2>
        <p> is an Indian actor, YouTuber and stand-up comedian. His career as a standup comic started after an open mic in 2017. Bassi's YouTube videos have got 200 million+ views and he has over 4 million subscribers along with 2 million+ followers on Instagram.</p>`
    }
    else if(index==2){
        lightBoxPara.innerHTML=
        `<h2>Munawar Iqbal Faruqui</h2><p> is an Indian stand-up comedian and rapper. In 2022 he appeared as a contestant on Kangana Ranaut's reality television show Lock Upp Season 1 and emerged as the winner of the show.</p>`
    }
    else if(index==3){
        lightBoxPara.innerHTML=        `<h2>Aakash Gupta</h2><p>  is an Indian Comedian, actor, YouTuber and theatre artist. He was the co-winner of the second season of the stand-up comedy competition television series Comicstaan. He is trained in performing arts and sketch comedy.</p>`

    }
    else{
        lightBoxPara.innerHTML=        `<h2>Harsh Gujral</h2><p>  better known by her stage name “Sasta Vicky Kaushal,” hails from Uttar Pradesh, India, and is a well-known comedian, actor, YouTuber, social media star, television personality, and Internet face. His comedy’s punch lines, real-life stories helped him achieve national fame.</p>`

    }

    
}

function currentImage() {
    lightBoxContainer.style.display = "flex";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

function watchmore(){
    if(index==1){
        window.open("bassi.html");
    }
    else if(index==2){
        window.open("munawar.html");
    }
    else if(index==3){
        window.open("akash.html");
    }
    else{
        window.open("harsh.html");
    }
    
}

lightBoxContainer.addEventListener("click", closeLightBox);
crossBtn.addEventListener("click", closeLightBox);


ytBtn.addEventListener("click", watchmore);

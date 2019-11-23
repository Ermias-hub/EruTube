function subscribe(ele){

    if(ele.innerHTML=='subscribe'){
        ele.innerHTML = 'subscribed'
    }
    else{
        ele.innerHTML = 'subscribe'
    }

}

function show(){
    let file = uploader.files[0];

    console.log(file.name)
    console.log(new Date(file.lastModified))            
    let url = URL.createObjectURL(file);
    console.log(url)
    let div = document.createElement('div');
        header = document.createElement('h6');
        span=document.createElement('span');
        button = document.createElement('button');
    div.style.width = '260px';
    button.textContent = 'subscribe';
        // button.setAttribute("onclick","callJavascriptFunction(subscribe).ele");
    span.textContent= new Date(file.lastModified).toDateString();
    header.textContent = file.name;
    let video = document.createElement('video');
    video.type= 'video/mp4';
    video.controls = true;
    video.src = url;
    video.style.margin = '10%';
    video.className = 'vid-responsive';
    div.append(video,header,span,button);
    div.after(div);
    Uploader.before(div);
}
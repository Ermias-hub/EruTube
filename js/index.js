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
    let header = document.createElement('h6');
    let span=document.createElement('span');
    let button = document.createElement('button');
    div.style.width = '260px';
    // div.style.display = 'inline'
    button.textContent = 'subscribe';
        // button.setAttribute("onclick","callJavascriptFunction(subscribe).ele");
    span.textContent= new Date(file.lastModified).toDateString();
    header.textContent = file.name;
    let video = document.createElement('video');
    video.type= 'video/mp4';
    video.controls = true;
    video.src = url;
    video.className = 'vid-responsive';
    div.append(video,header,span,button);
    Uploader.before(div);
}
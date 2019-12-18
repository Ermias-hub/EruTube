function unsubscribe(ele){
    alert("you're removing a video refresh to quit before clicking ok" )
    var element = ele.closest('.placeholder');
        element.parentElement.removeChild(element);
}
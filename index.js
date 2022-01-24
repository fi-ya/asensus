function openFeed(event, feedName){

    const tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    const tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(feedName).style.display = "block";
    event.currentTarget.className += " active";
}

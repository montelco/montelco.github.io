function search() {
    var input, filter, searchable, sections, question, answer, i, resultCount;
    input = document.getElementById("searchQuery");
    filter = input.value.toUpperCase();
    searchable = document.getElementById("page-content");
    p = searchable.getElementsByTagName("p");
    resultCount = 0;
    for (i = 0; i < p.length; i++) {
        question = p[i].getElementsByTagName("span")[0];
        answer = p[i].getElementsByTagName("span")[1];
        if (question.innerHTML.toUpperCase().indexOf(filter) > -1 || answer.innerHTML.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
            resultCount = resultCount+1;
            if(resultCount === 0) {
                document.getElementById("results").innerHTML= 'No results.';
            } else if(resultCount === 1){
                document.getElementById("results").innerHTML= 'About '+ resultCount +' result.';
            } else{
                document.getElementById("results").innerHTML= 'About '+ resultCount +' results.';
            }
        } else {
            p[i].style.display = "none";
        }
    }
}
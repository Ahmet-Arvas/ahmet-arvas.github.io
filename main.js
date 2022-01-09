$.ajax({
        type: "GET",
        url: "https://api.github.com/users/ahmet-arvas/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                $("#repo_list").append(
                  "<fieldset><legend><a style='text-decoration:none; color:white;' href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a></li></legend>" + result[i]. description + "</fieldset>"
                );
                console.log("i: " + i);
            }
            console.log(result);
        }
});
document.addEventListener("DOMContentLoaded", function(){
    let tops_embed = document.getElementsByClassName('tops_embed');

    function resizeEmbed() {
        if(tops_embed != null) {
            if(tops_embed.length > 0) {
                for(let i = 0; i < tops_embed.length; i++) {
                    let current_embed = tops_embed[i];
                    console.log(current_embed);
                }
            }
        }
    }

    resizeEmbed();
});
let keller = ["K", "E", "L", "L", "E", "R"];
    i = 0;
    id = setInterval(function() {
        console.log(keller [i++]);
        if (i === keller.length) clearInterval(id);
    }, 1000);
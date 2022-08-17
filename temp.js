

var a;
a = 1;
console.log(a);
console.log(this.a);
console.log(window.a);
aaa();
function aaa(){
    var a = 2;
    console.log(a);
    console.log(this.a);
    console.log(window.a);
    bbb();
    function bbb(){
        //var a = 3;
        console.log(a);
        console.log(this.a);
        console.log(window.a);
        ccc();
        function ccc(){
            //var a = 4;
            console.log(a);
            console.log(this.a);
            console.log(window.a);
        }   
    }
    return 4;
}

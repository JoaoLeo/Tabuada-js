function tabuada(){
    var txtnum = document.getElementById('num')
    var num = Number(txtnum.value)
    var res = document.getElementById('res')
    var c = 1
    if (txtnum.value.length == 0){
        alert("Digite um valor válido")
    } else{
        res.innerHTML = ""
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            res.appendChild(item)
            c++
        }
        
    }
}
let a, b, c, x1, x2, x2c, x2z

function int_str(param_x,xres){
    let  xc, xz, i
    if (Number.isInteger(param_x)) {
        return param_x
    } 
    else {
        if (xres == 1) {
            xc=(-b+((b**2)-(4*a*c))**0.5)
        }
        else {
            xc=(-b-((b**2)-(4*a*c))**0.5)
        }
        xz=(2*a)
        for (i=2; i<10; i++){
            if(Number.isInteger(xc/i) && Number.isInteger(xz/i) ){
                xc = xc / i
                xz = xz / i
            }
        }
    }
    return xc+'/'+xz
}

window.onload = function () {
    console.log(document)

    console.log(document.getElementById('Enter'))
    console.log(document.getElementById('input1'))
    console.log(document.getElementById('input2'))
}

function EnterClick() {
    
}

function choose(){
    let y1_1, y1_2, y2_1, y2_2
    a = document.getElementById('input_a').value
    console.log(a)
    b = document.getElementById('input_b').value
    console.log(b)
    c = document.getElementById('input_c').value
    console.log(c)
    x1=(-b+((b**2)-(4*a*c))**0.5)/(2*a)
    x2=(-b-((b**2)-(4*a*c))**0.5)/(2*a)
    if (document.getElementById('input1').checked=true){
        console.log(document.getElementById('input1'))
        console.log(document.getElementById('input2'))
        document.getElementById('resultX').innerText='x1='+int_str(x1,1)
        document.getElementById('resultX').innerText=document.getElementById('resultX').innerText+'   '+'x2='+int_str(x2,2)    
    } else {
        if (x1>0){
            y1_1=x1**0.5
            y1_2=(x1**0.5)*(-1)
            document.getElementById('resultX').innerText='X1='+int_str(y1_1,1)
            document.getElementById('resultX').innerText=document.getElementById('resultX').innerText+'   '+'X2='+int_str(y1_2,2)   
        }
        if (x2>0){
            y2_1=x1**0.5
            y2_2='-'+x1**0.5
        }
    }
}

function abc(){
    console.log(document.getElementById('input2'))
}


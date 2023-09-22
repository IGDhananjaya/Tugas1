function tampilanAwal(){
    document.getElementById("hitungbalok").removeAttribute("hidden");
    document.getElementById("hitungbola").setAttribute("hidden", true);
    document.getElementById("hitungkerucut").setAttribute("hidden", true);
}
function tampilkanInput(jenis){
    document.getElementById("hitungbalok").setAttribute("hidden", true);
    document.getElementById("hitungbola").setAttribute("hidden", true);
    document.getElementById("hitungkerucut").setAttribute("hidden", true);

    if(jenis === "balok"){
        document.getElementById("hitungbalok").removeAttribute("hidden");
    } 
    else if(jenis === "bola"){
        document.getElementById("hitungbola").removeAttribute("hidden");
    } 
    else if (jenis === "kerucut"){
        document.getElementById("hitungkerucut").removeAttribute("hidden");
    }
}
function hitungvolume(){
    var jenis=document.getElementById("jbr").value;
    //mendapatkan nilai yang diperlukan dari form input
    var panjang, lebar, tinggi, jari;
    if(jenis === "balok"){
        panjang=parseFloat(document.getElementById("panjang").value);
        lebar=parseFloat(document.getElementById("lebar").value);
        tinggi=parseFloat(document.getElementById("tinggi").value);
    } 
    else if(jenis === "bola"){
        jari=parseFloat(document.getElementById("jarijaribola").value);
    }
    else if (jenis === "kerucut"){
        jari=parseFloat(document.getElementById("jarikerucut").value);
        tinggi=parseFloat(document.getElementById("tinker").value);
    }

    //proses perhitungan
    var vol=0;
    if(jenis === "balok"){
        vol=panjang*lebar*tinggi;
    }
    else if(jenis === "bola"){
        vol=(4/3)*Math.PI*Math.pow(jari,3);
    }
    else if(jenis === "kerucut"){
        vol=(1/3)*Math.PI*Math.pow(jari,2)*tinggi;
    }
    var hasil=document.getElementById("hasil");
    hasil.innerHTML="Volume "+ jenis + " adalah: "+vol.toFixed(2);
}
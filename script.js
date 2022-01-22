async function num(){
    var data=document.getElementById("input").value;
    try {
        var nums=await fetch(`https://api-thirukkural.vercel.app/api?num=${data}`);
        var result=await nums.json();
        
        // Tamil
        document.getElementById("tamil").innerHTML="தமிழ்";
        document.getElementById("kural").innerHTML=`குறள்-${result.number}`;
        document.getElementById("pal").innerHTML=`பால்: ${result.sect_tam}`;
        document.getElementById("iyeal").innerHTML=`இயல்: ${result.chapgrp_tam}`;
        document.getElementById("adhikaram").innerHTML=`அதிகாரம்: ${result.chap_tam}`;
        document.getElementById("tamile1").innerHTML=`${result.line1}<br>${result.line2}`;
        document.getElementById("porul").innerHTML=`பொருள்: ${result.tam_exp}`;

        // English
        document.getElementById("englisht").innerHTML=`English`;
        document.getElementById("english").innerHTML=`Kural-${result.number}`;
        document.getElementById("section").innerHTML=`Section: ${result.sect_eng}`;
        document.getElementById("chapter-gro").innerHTML=`Chapter Group: ${result.chapgrp_eng}`;
        document.getElementById("chapter").innerHTML=`Chapter: ${result.chap_eng}`;
        document.getElementById("eng").innerHTML=`${result.eng}`;
        document.getElementById("explain").innerHTML=`Explanation: ${result.eng_exp}`;
    } catch (error) {
        document.getElementById("search").innerHTML="Please Enter the valid Number 0 to 1330 Only";
        document.getElementById("search").style.color="red";
        document.getElementById('search').style.fontSize="45px";
    }
}
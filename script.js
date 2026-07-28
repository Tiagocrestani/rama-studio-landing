  // Contagem regressiva (reinicia a cada visita) - apenas escassez visual
  (function(){
    var total = 2*3600 - 1; // 2 horas
    var h=document.getElementById('h'),m=document.getElementById('m'),s=document.getElementById('s');
    function tick(){
      var hh=Math.floor(total/3600), mm=Math.floor((total%3600)/60), ss=total%60;
      h.textContent=String(hh).padStart(2,'0');
      m.textContent=String(mm).padStart(2,'0');
      s.textContent=String(ss).padStart(2,'0');
      if(total>0) total--;
    }
    tick(); setInterval(tick,1000);
  })();
function desenharCanvas(){
    tabuleiro.LineWidth = 8;
    tabuleiro.LineCap = "round";
    tabuleiro.LineJoin = "round";
    tabuleiro.fillStyle = "#f3f5fc";
    tabuleiro.strokeStyle = "#0A3871";

    //manipulação
    tabuleiro.fillReact(0, 0, 1200, 800);
    tabuleiro.beginPath();
    tabuleiro.LineTo(650,500);
}
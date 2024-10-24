function setup() {

// descrizione opera d'arte di riferimento su questo link --> https://www.moma.org/collection/works/105479
// tramite una griglia 200x200 realizziamo i 40.000 quadratini, cambio la grandezza del canvas per rendere l'elaborato usufruibile da desktop
// per centrare il canvas creao un padding (in css)

  createCanvas(600, 600); 
    let gridSize = 200; // n di quadrati per ogni riga e colonna (200x200)
    let squareSize = width / (gridSize + 2); // dimensione quadrato, basata sulle impostazioni della griglia che però tiene in considerazione il padding (TOLTO perchè BUGGAVA)
    //let padding = (width - gridSize * squareSize) / 2; // calcola il padding sulla base della griglia e della dim. quadrati

  for (let y = 0; y < gridSize; y++)   
  {
    for (let x = 0; x < gridSize; x++) 
    {
      let colorChoice = random() < 0.5 ? color(0, 0, 255) : color(255, 0, 0);
// random() < 0.5 imposta 50% probabilità di essere o blu o rosso

      fill(colorChoice);
      noStroke();
    
// alle cordinate di rect aggiunge il calcolo del padding (TOLTO perchè BUGGAVA)
      rect(x * squareSize, y * squareSize, squareSize, squareSize);
    }
  }
}
// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;


function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function isHit() {
  return Math.random() > 0.5;
}

function shipCanFire() {
  return shipAmmo > 0 && shipHealth > 0;
}

function isDestroyed(health) {
  if (shipHealth <= 0) {
      return True
  }
}

function reloadShip() {
  shipHealth -= 1
  shipAmmo += 3
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}
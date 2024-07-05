import { rotatePoint } from "./helpers"; // Import helper function

export default class Bullet {
  constructor(args) {
    // Calculate bullet position relative to ship's position and rotation
    let posDelta = rotatePoint(
      { x: 0, y: -20 }, // Offset relative to ship's center
      { x: 0, y: 0 }, // Rotation origin
      (args.ship.rotation * Math.PI) / 180
    );

    this.position = {
      x: args.ship.position.x + posDelta.x,
      y: args.ship.position.y + posDelta.y,
    };

    this.rotation = args.ship.rotation;
    this.velocity = {
      x: posDelta.x / 2,
      y: posDelta.y / 2,
    };
    this.radius = 2;
  }

  destroy() {
    this.delete = true; // Mark for deletion
  }

  render(state) {
    // Move the bullet based on its velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Check for out-of-bounds and destroy if necessary
    if (
      this.position.x < 0 ||
      this.position.y < 0 ||
      this.position.x > state.screen.width ||
      this.position.y > state.screen.height
    ) {
      this.destroy();
    }

    // Draw the bullet on the canvas
    const context = state.context;
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate((this.rotation * Math.PI) / 180);
    context.fillStyle = "#FFF"; // Set fill style to white
    context.lineWidth = 0; // Set line width to 0 (no outline)

    // Draw a filled circle for the bullet
    context.beginPath();
    context.arc(0, 0, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.restore();
  }
}

///////////////////////////////

// import { rotatePoint } from "./helpers"; // Import helper function

// export default class Bullet {
//   constructor(args) {
//     // Calculate bullet position relative to ship's position and rotation
//     let posDelta = rotatePoint(
//       { x: 0, y: -20 }, // Offset relative to ship's center
//       { x: 0, y: 0 }, // Rotation origin
//       (args.ship.rotation * Math.PI) / 180
//     );

//     this.position = {
//       x: args.ship.position.x + posDelta.x,
//       y: args.ship.position.y + posDelta.y,
//     };

//     this.rotation = args.ship.rotation;
//     this.velocity = {
//       x: posDelta.x / 2,
//       y: posDelta.y / 2,
//     };
//     this.radius = 2;
//   }

//   destroy() {
//     this.delete = true; // Mark for deletion
//   }

//   render(state) {
//     // Move the bullet based on its velocity
//     this.position.x += this.velocity.x;
//     this.position.y += this.velocity.y;

//     // Check for out-of-bounds and destroy if necessary
//     if (
//       this.position.x < 0 ||
//       this.position.y < 0 ||
//       this.position.x > state.screen.width ||
//       this.position.y > state.screen.height
//     ) {
//       this.destroy();
//     }

//     // Draw the bullet on the canvas
//     const context = state.context;
//     context.save();
//     context.translate(this.position.x, this.position.y);
//     context.rotate((this.rotation * Math.PI) / 180);
//     context.fillStyle = "#FFF"; // Set fill style to white
//     context.lineWidth = 0; // Set line width to 0 (no outline)

//     // Draw a filled circle for the bullet
//     context.beginPath();
//     context.arc(0, 0, 2, 0, 2 * Math.PI);
//     context.closePath();
//     context.fill();
//     context.restore();
//   }
// }

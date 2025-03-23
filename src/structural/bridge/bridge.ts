interface SuperHero {
	performAction(): void;
}

interface SuperPower {
	activate(): void;
}

// Concrete Implementation: Flight Power
class FlightPower implements SuperPower {
	activate(): void {
		console.log("Activating flight power!");
	}
}

// Concrete Implementation: Super Strength Power
class SuperStrengthPower implements SuperPower {
	activate(): void {
		console.log("Activating super strength power!");
	}
}

// Abstraction: Superhero with a reference to a SuperPower
class SuperHeroBridge implements SuperHero {
	private power: SuperPower;

	constructor(power: SuperPower) {
		this.power = power;
	}

	performAction(): void {
		this.power.activate();
	}

	setPower(newPower: SuperPower): void {
		this.power = newPower;
	}
}

// Usage
function demonstrationBridge() {
	const flightHero = new SuperHeroBridge(new FlightPower());
	const strengthHero = new SuperHeroBridge(new SuperStrengthPower());

	console.log(`Flight Hero: ${flightHero.performAction()}`);
	// Outputs: Activating flight power!

	console.log(`"Strength Hero: ${strengthHero.performAction()}`);
	// Outputs: Activating super strength power!
}

demonstrationBridge();

// Interface for the Superhero's State
export interface ISuperheroState {
	health: number;
	powerLevel: number;
	energy: number;
}

// Superhero class (Originator)
export class Superhero {
	private state: ISuperheroState;

	constructor({ health, powerLevel, energy }: ISuperheroState) {
		this.state = { health, powerLevel, energy };
	}

	// Getters and Setters for state properties
	get health(): number {
		return this.state.health;
	}

	set health(value: number) {
		if (value < 0 || value > 100) {
			throw new Error("Health must be between 0 and 100");
		}
		this.state.health = value;
	}

	get powerLevel(): number {
		return this.state.powerLevel;
	}

	set powerLevel(value: number) {
		if (value < 0 || value > 100) {
			throw new Error("Power Level must be between 0 and 100");
		}
		this.state.powerLevel = value;
	}

	get energy(): number {
		return this.state.energy;
	}

	set energy(value: number) {
		if (value < 0 || value > 500) {
			throw new Error("Energy must be between 0 and 500");
		}
		this.state.energy = value;
	}

	// Capture current state as memento
	captureState(): SuperheroMemento {
		return new SuperheroMemento(this.health, this.powerLevel, this.energy);
	}

	// Restore state from memento
	restoreState(memento: IMemento): void {
		this.health = memento.getHealth();
		this.powerLevel = memento.getPowerLevel();
		this.energy = memento.getEnergy();
	}

	// Method to display current status
	showStatus(): void {
		console.log(`
			Health: ${this.health},
			Power Level: ${this.powerLevel},
			Energy: ${this.energy}
		`);
	}
}

// Interface for Memento
export interface IMemento {
	getHealth(): number;
	getPowerLevel(): number;
	getEnergy(): number;
}

// SuperheroMemento class (Memento)
export class SuperheroMemento implements IMemento {
	constructor(
		private health: number,
		private powerLevel: number,
		private energy: number
	) {}

	// Getters for accessing memento's state
	getHealth(): number {
		return this.health;
	}

	getPowerLevel(): number {
		return this.powerLevel;
	}

	getEnergy(): number {
		return this.energy;
	}
}

// Type for array of saved states
type SavedStates = SuperheroMemento[];

// HeroCaretaker class (Caretaker)
export class HeroCaretaker {
	private superhero: Superhero;
	private savedStates: SavedStates = [];

	constructor(superhero: Superhero) {
		this.superhero = superhero;
	}

	// Method to save the current state
	save(): void {
		const memento = this.superhero.captureState();
		this.savedStates.push(memento);
		console.log("Saved successfully.");
	}

	// Method to load the last saved state
	loadLastSavedState(): void {
		if (this.savedStates.length === 0) {
			console.log("No saved states available.");
			return;
		}

		const lastSavedState = this.savedStates.pop();

		if (!lastSavedState) {
			console.error("Failed to restore state.");
			return;
		}

		this.superhero.restoreState(lastSavedState);
		console.log("Restored successfully.");
	}

	// Methods to modify Superhero's state
	setHealth(health: number): void {
		this.superhero.health = health;
	}

	setPowerLevel(powerLevel: number): void {
		this.superhero.powerLevel = powerLevel;
	}

	setEnergy(energy: number): void {
		this.superhero.energy = energy;
	}

	// Method to show current progress
	showCurrentProgress(): void {
		this.superhero.showStatus();
	}
}

// Usage example
function demonstrationMomento() {
	// Create a Superhero with initial parameters
	const heroCaretaker = new HeroCaretaker(
		new Superhero({
			health: 100,
			powerLevel: 50,
			energy: 300,
		})
	);

	// Display initial Superhero parameters
	heroCaretaker.showCurrentProgress();

	// Change Superhero state
	heroCaretaker.setHealth(80);
	heroCaretaker.setPowerLevel(70);
	heroCaretaker.setEnergy(150);

	// Show updated state
	heroCaretaker.showCurrentProgress();

	// Save
	heroCaretaker.save();

	// Change Superhero state again
	heroCaretaker.setHealth(60);
	heroCaretaker.setPowerLevel(85);
	heroCaretaker.setEnergy(120);

	// Show new state
	heroCaretaker.showCurrentProgress();

	// Load the last saved state
	heroCaretaker.loadLastSavedState();

	// Verify the state is restored
	heroCaretaker.showCurrentProgress();
}

demonstrationMomento();

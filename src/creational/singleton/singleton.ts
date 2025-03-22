class Superhero {
	private static instance: Superhero;
	private constructor() {
		// Private constructor to prevent instantiation
		console.log("Superhero instance created!");
	}

	public static getInstance(): Superhero {
		if (!Superhero.instance) {
			Superhero.instance = new Superhero();
		}
		return Superhero.instance;
	}

	public performAction(): void {
		console.log("Superhero is performing an action!");
	}
}

// Usage
function demonstrationSingleton() {
	const superman = Superhero.getInstance();
	const batman = Superhero.getInstance();
	const wonderwoman = Superhero.getInstance();
	const flash = Superhero.getInstance();

	console.log(superman === batman); // true
	console.log(batman === wonderwoman); // true
	console.log(wonderwoman === flash); // true
}

demonstrationSingleton();

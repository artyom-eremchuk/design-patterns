// Superhero interface
interface Superhero {
	name: string;
	powers: string[];
	weapons: string[];
	costume: string;
	performAction(): void;
}

// Superhero Builder interface
interface SuperheroBuilder {
	setName(name: string): SuperheroBuilder;
	addPower(power: string): SuperheroBuilder;
	addWeapon(weapon: string): SuperheroBuilder;
	setCostume(costume: string): SuperheroBuilder;
	build(): Superhero;
}

// Concrete Superhero Builder
class SuperheroBuilderImpl implements SuperheroBuilder {
	private superhero: Superhero = {
		name: "",
		powers: [],
		weapons: [],
		costume: "",
		performAction: () =>
			console.log(`${this.superhero.name} is performing an action!`),
	};

	constructor() {}

	setName(name: string): SuperheroBuilder {
		this.superhero.name = name;
		return this;
	}

	addPower(power: string): SuperheroBuilder {
		this.superhero.powers.push(power);
		return this;
	}

	addWeapon(weapon: string): SuperheroBuilder {
		this.superhero.weapons.push(weapon);
		return this;
	}

	setCostume(costume: string): SuperheroBuilder {
		this.superhero.costume = costume;
		return this;
	}

	build(): Superhero {
		return this.superhero;
	}
}

// Director class to manage the construction process
class Director {
	private builder: SuperheroBuilder;

	constructor(builder: SuperheroBuilder) {
		this.builder = builder;
	}

	constructSuperhero(
		name: string,
		powers: string[],
		weapons: string[],
		costume: string
	): void {
		this.builder.setName(name).setCostume(costume);

		powers.forEach((power) => this.builder.addPower(power));
		weapons.forEach((weapon) => this.builder.addWeapon(weapon));
	}

	getResult(): Superhero {
		return this.builder.build();
	}
}

// Usage
function demonstrationBuilder() {
	const builder = new SuperheroBuilderImpl();
	const director = new Director(builder);

	director.constructSuperhero(
		"Iron Man",
		["Flight", "Repulsor Beams"],
		["Arc Reactor"],
		"Red and Gold Suit"
	);

	const ironMan = director.getResult();
	ironMan.performAction();
	// Outputs: Iron Man is performing an action!
}

demonstrationBuilder();

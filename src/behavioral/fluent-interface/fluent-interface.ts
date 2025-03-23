interface IHero {
	getName(): string;
	getPowers(): string[];
	getWeaknesses(): string[];
}

class FluentHero implements IHero {
	private powers: string[] = [];
	private weaknesses: string[] = [];

	constructor(private name: string) {}

	getName(): string {
		return this.name;
	}

	getPowers(): string[] {
		return this.powers;
	}

	getWeaknesses(): string[] {
		return this.weaknesses;
	}

	addPower(power: string): FluentHero {
		this.powers.push(power);
		return this;
	}

	addWeakness(weakness: string): FluentHero {
		this.weaknesses.push(weakness);
		return this;
	}

	build(): IHero {
		return this;
	}
}

// Usage
function demonstrationFluentInterface() {
	const hero = new FluentHero("Superman")
		.addPower("Flight")
		.addPower("Super Strength")
		.addWeakness("Kryptonite")
		.build();

	console.log(hero);
}

demonstrationFluentInterface();

interface ISuperhero {
	getName(): string;
	getDescription(): string;
}

class BaseSuperhero implements ISuperhero {
	name: string;

	constructor(heroName: string) {
		this.name = heroName;
	}

	getName(): string {
		return this.name;
	}

	getDescription(): string {
		return `A hero named ${this.name}.`;
	}
}

abstract class SuperheroDecorator implements ISuperhero {
	protected superhero: ISuperhero;

	constructor(superhero: ISuperhero) {
		this.superhero = superhero;
	}

	getName(): string {
		return this.superhero.getName();
	}

	getDescription(): string {
		return this.superhero.getDescription();
	}
}

class FlyingDecorator extends SuperheroDecorator {
	getDescription(): string {
		return `${this.superhero.getDescription()} With the ability to fly.`;
	}
}

class StrengthDecorator extends SuperheroDecorator {
	getDescription(): string {
		return `${this.superhero.getDescription()} With superhuman strength.`;
	}
}

// Usage example
function demonstrationDecorator() {
	const hero = new BaseSuperhero("Iron Man");
	const flyingHero = new FlyingDecorator(hero);
	const strongFlyingHero = new StrengthDecorator(flyingHero);

	console.log(strongFlyingHero.getDescription());
	// Outputs: A hero named Iron Man. With the ability to fly. With superhuman strength.
}

demonstrationDecorator();

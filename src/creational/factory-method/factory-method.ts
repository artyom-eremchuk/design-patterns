interface ISuperhero {
	getName(): string;
	getDescription(): string;
	usePower(): void;
}

interface ISuperheroFactory {
	createSuperhero(type: SuperheroType): ISuperhero;
}

enum SuperheroType {
	Superman = "Superman",
	Batman = "Batman",
	WonderWoman = "WonderWoman",
}

class DefaultSuperheroFactory implements ISuperheroFactory {
	createSuperhero(type: SuperheroType): ISuperhero {
		switch (type) {
			case SuperheroType.Superman:
				return new Superman();
			case SuperheroType.Batman:
				return new Batman();
			case SuperheroType.WonderWoman:
				return new WonderWoman();
			default:
				throw new Error("Unknown superhero type");
		}
	}
}

class Superman implements ISuperhero {
	getName(): string {
		return "Superman";
	}

	getDescription(): string {
		return "Superman is a superhero with super strength and flight.";
	}

	usePower(): void {
		console.log("Superman uses flight!");
	}
}

class Batman implements ISuperhero {
	getName(): string {
		return "Batman";
	}

	getDescription(): string {
		return "Batman is a superhero with stealth and detective skills.";
	}

	usePower(): void {
		console.log("Batman uses stealth!");
	}
}

class WonderWoman implements ISuperhero {
	getName(): string {
		return "Wonder Woman";
	}

	getDescription(): string {
		return "Wonder Woman is a superhero with superhuman strength and combat skills.";
	}

	usePower(): void {
		console.log("Wonder Woman uses her lasso of truth!");
	}
}

// Usage
function demonstrationFactoryMethod() {
	const factory = new DefaultSuperheroFactory();

	const superman = factory.createSuperhero(SuperheroType.Superman);
	superman.usePower();

	const batman = factory.createSuperhero(SuperheroType.Batman);
	batman.usePower();

	const wonderWoman = factory.createSuperhero(SuperheroType.WonderWoman);
	wonderWoman.usePower();
}

demonstrationFactoryMethod();

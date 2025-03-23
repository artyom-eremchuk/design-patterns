// Strategy interface
interface IStrategy {
	execute(): void;
}

// Concrete strategy: Attack
class AttackStrategy implements IStrategy {
	execute(): void {
		console.log("Executing attack strategy!");
	}
}

// Concrete strategy: Defense
class DefenseStrategy implements IStrategy {
	execute(): void {
		console.log("Executing defense strategy!");
	}
}

// Concrete strategy: Rescue
class RescueStrategy implements IStrategy {
	execute(): void {
		console.log("Executing rescue strategy!");
	}
}

// Context using the strategy
class SuperHeroContext {
	private strategy: IStrategy;

	constructor(strategy: IStrategy) {
		this.strategy = strategy;
	}

	setStrategy(newStrategy: IStrategy): void {
		this.strategy = newStrategy;
	}

	executeStrategy(): void {
		this.strategy.execute();
	}
}

// Usage
function demonstrationStrategy() {
	const superhero = new SuperHeroContext(new AttackStrategy());
	superhero.executeStrategy();

	superhero.setStrategy(new DefenseStrategy());
	superhero.executeStrategy();

	superhero.setStrategy(new RescueStrategy());
	superhero.executeStrategy();
}

demonstrationStrategy();

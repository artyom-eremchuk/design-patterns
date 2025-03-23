// Superhero interface
interface Superhero {
	name: string;
	powers: string[];
	weapons: string[];
	costume: string;
	performAction(action?: string): void;
}

// Concrete implementation of the superhero
class RealSuperhero implements Superhero {
	constructor(
		public name: string,
		public powers: string[],
		public weapons: string[],
		public costume: string
	) {}

	performAction(action?: string): void {
		console.log(`${this.name} is performing action: ${action}`);
	}
}

// Action Logger class
class ActionLogger {
	private actionLog: string[] = [];

	logAction(action: string): void {
		this.actionLog.push(action);
	}

	getActionLog(): string[] {
		return this.actionLog;
	}
}

// Action Cache class
class ActionCache {
	private cachedAction: string | null = null;

	cacheAction(action: string): void {
		this.cachedAction = action;
	}

	getCache(): string | null {
		return this.cachedAction;
	}
}

// Proxy object interface
interface SuperheroProxy {
	getSuperhero(): Superhero;
	performAction(action?: string): void;
	getCachedAction(): string | null;
	getActionLog(): string[];
	printActionLog(): void;
	printCachedAction(): void;
}

// Refactored SuperheroProxy implementation
class SuperheroProxyImpl implements SuperheroProxy {
	constructor(
		private realSuperhero: Superhero,
		private logger: ActionLogger,
		private cache: ActionCache
	) {}

	getSuperhero(): Superhero {
		console.log(`I'm ${this.realSuperhero.name}`);
		return this.realSuperhero;
	}

	performAction(action?: string): void {
		const hero = this.getSuperhero();
		hero.performAction(action);

		if (action) {
			this.logger.logAction(action);
			this.cache.cacheAction(action);
		}
	}

	getCachedAction(): string | null {
		return this.cache.getCache();
	}

	getActionLog(): string[] {
		return this.logger.getActionLog();
	}

	printActionLog(): void {
		console.log("Action log:");
		this.getActionLog().forEach((action) => console.log(`- ${action}`));
	}

	printCachedAction(): void {
		console.log(`Cached action: ${this.getCachedAction()}`);
	}
}

// Usage
function demonstrationProxy() {
	const cache = new ActionCache();
	const logger = new ActionLogger();
	const realSuperhero = new RealSuperhero(
		"Batman",
		["strength", "intelligence"],
		["batarang"],
		"black"
	);

	const superheroProxy = new SuperheroProxyImpl(realSuperhero, logger, cache);

	superheroProxy.performAction("Fighting crime");
	superheroProxy.printCachedAction();
	superheroProxy.printActionLog();
}

demonstrationProxy();

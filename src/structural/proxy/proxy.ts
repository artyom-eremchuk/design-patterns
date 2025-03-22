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
	private realSuperhero: Superhero;
	private logger: ActionLogger;
	private cache: ActionCache;

	constructor(
		name: string,
		powers: string[],
		weapons: string[],
		costume: string,
		logger: ActionLogger,
		cache: ActionCache
	) {
		this.realSuperhero = new RealSuperhero(name, powers, weapons, costume);
		this.logger = logger;
		this.cache = cache;
	}

	getSuperhero(): Superhero {
		console.log(
			`The superhero introduces himself as: ${this.realSuperhero.name}`
		);
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
	const logger = new ActionLogger();
	const cache = new ActionCache();

	const proxy = new SuperheroProxyImpl(
		"Batman",
		["Strength", "Intelligence"],
		["Batarang"],
		"Black Suit",
		logger,
		cache
	);

	proxy.performAction("Fighting crime");
	proxy.printCachedAction();
	proxy.printActionLog();
}

demonstrationProxy();

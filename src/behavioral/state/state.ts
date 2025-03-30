enum States {
	IDLE = "idle",
	RUNNING = "running",
	JUMPING = "jumping",
	FIGHTING = "fighting",
}

interface HeroState {
	hero: SuperHero;
	performAction(hero: SuperHero): void;
}

class IdleState implements HeroState {
	constructor(public hero: SuperHero) {}

	performAction(hero: SuperHero) {
		console.log(`${hero.name} is idle.`);
	}
}

class RunningState implements HeroState {
	constructor(public hero: SuperHero) {}

	performAction(hero: SuperHero) {
		console.log(`${hero.name} is running!`);
	}
}

class JumpingState implements HeroState {
	constructor(public hero: SuperHero) {}

	performAction(hero: SuperHero) {
		console.log(`${hero.name} has jumped!`);
	}
}

class FightingState implements HeroState {
	constructor(public hero: SuperHero) {}

	performAction(hero: SuperHero) {
		console.log(`${hero.name} is fighting!`);
	}
}

class SuperHero {
	public name: string;
	private stateMap: Record<string, HeroState> = {};
	private currentState: HeroState | null = null;

	constructor(name: string) {
		this.name = name;
		this.stateMap = {
			[States.IDLE]: new IdleState(this),
			[States.RUNNING]: new RunningState(this),
			[States.JUMPING]: new JumpingState(this),
			[States.FIGHTING]: new FightingState(this),
		};

		this.currentState = this.stateMap[States.IDLE];
	}

	private setState(stateKey: States) {
		if (this.stateMap[stateKey]) {
			this.currentState = this.stateMap[stateKey];
		} else {
			console.error(`Invalid state key: ${stateKey}`);
		}
	}

	toggleState(stateKey: States) {
		this.setState(stateKey);
		this.currentState?.performAction(this);
	}
}

// Usage
function demonstrationState() {
	const superman = new SuperHero("Superman");

	superman.toggleState(States.RUNNING);
	superman.toggleState(States.JUMPING);
	superman.toggleState(States.FIGHTING);
	superman.toggleState(States.IDLE);
}

demonstrationState();

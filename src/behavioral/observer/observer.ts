// Interface for the Observer
export interface IObserver {
	name: string;
	receiveMessage(message: string): void;
}

// Interface for the Subject
export interface ISuperhero {
	name: string;
	subscribe(observer: IObserver): void;
	unsubscribe(observer: IObserver): void;
	notifyObservers(message: string): void;
}

// Concrete Observer: Superhero Assistant
export class Assistant implements IObserver {
	constructor(public name: string) {}

	receiveMessage(message: string): void {
		console.log(`${this.name} received a message: "${message}"`);
	}
}

// Concrete Subject: Superhero
export class Superhero implements ISuperhero {
	private observers: IObserver[] = [];
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	subscribe(observer: IObserver): void {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			console.log(`${observer.name} subscribed to the ${this.name}.`);
		}
	}

	unsubscribe(observer: IObserver): void {
		this.observers = this.observers.filter((obs) => obs !== observer);
		console.log(`${observer.name} unsubscribed from the ${this.name}.`);
	}

	notifyObservers(message: string): void {
		console.log(`${this.name} is sending a message: "${message}"`);
		this.observers.forEach((observer) => {
			if (observer) {
				observer.receiveMessage(message);
			}
		});
	}
}

// Usage
function demonstrationObserver() {
	const batman = new Superhero("Batman");

	const robin = new Assistant("Robin");
	const catwoman = new Assistant("Catwoman");

	batman.subscribe(robin);
	batman.subscribe(catwoman);

	batman.notifyObservers("Gotham needs us!");

	batman.unsubscribe(robin);
	batman.notifyObservers("Time to save the city!");
}

demonstrationObserver();

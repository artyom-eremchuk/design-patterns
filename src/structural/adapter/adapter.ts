// Vintage hero interface
interface VintageHero {
	useVintagePower(): void;
}

// Modern hero interface
interface ModernHero {
	useModernPower(): void;
}

// Vintage hero implementation
class VintageSuperman implements VintageHero {
	useVintagePower(): void {
		console.log("Vintage Superman using vintage power: Flight!");
	}
}

// Adapter to make VintageHero compatible with ModernHero
class HeroAdapter implements ModernHero {
	private vintageHero: VintageHero;

	constructor(vintageHero: VintageHero) {
		this.vintageHero = vintageHero;
	}

	useModernPower(): void {
		console.log("Adapting vintage power to modern power...");
		this.vintageHero.useVintagePower();
	}
}

function demonstrationAdapter() {
	// Usage
	const vintageSuperman = new VintageSuperman();
	const modernSuperman = new HeroAdapter(vintageSuperman);

	modernSuperman.useModernPower();
	// Outputs: Adapting vintage power to modern power... Vintage Superman using vintage power: Flight!
}

demonstrationAdapter();

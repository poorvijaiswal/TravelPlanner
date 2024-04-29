class TripLeg {
  constructor(modeOfTransport, distance) {
    this.modeOfTransport = modeOfTransport;
    this.distance = distance;
  }

  calculateEmissions() {
    // Placeholder emission factors (gCO2/km)
    switch (this.modeOfTransport) {
      case 'Plane':
        return this.distance * 0.15;
      case 'Car':
        return this.distance * 0.18;
      case 'Train':
        return this.distance * 0.04;
      case 'Bus':
        return this.distance * 0.08;
      default:
        return 0.0;
    }
  }
}

class Trip {
  constructor(legs) {
    this.legs = legs;
  }

  getTotalEmissions() {
    let totalEmissions = 0.0;
    for (let leg of this.legs) {
      totalEmissions += leg.calculateEmissions();
    }
    return totalEmissions;
  }
}

class TripCalculator {
  constructor() {
    this.formKey = null;
    this.modeOfTransport = 'Plane';
    this.distance = 0.0;
    this.tripLegs = [];
  }

  addTripLeg() {
    if (this.validateForm()) {
      this.tripLegs.push(new TripLeg(this.modeOfTransport, this.distance));
      this.modeOfTransport = 'Plane';
      this.distance = 0.0;
      this.updateUI();
    }
  }

  validateForm() {
    // Implement form validation logic here
    return true;
  }

  calculateTotalEmissions() {
    const trip = new Trip(this.tripLegs);
    return trip.getTotalEmissions();
  }

  updateUI() {
    // Implement UI update logic here
  }
}

// Usage example
const tripCalculator = new TripCalculator();
tripCalculator.addTripLeg();
console.log(`Total Emissions: ${tripCalculator.calculateTotalEmissions().toFixed(2)} grams of CO2`);

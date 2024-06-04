class Planet:
    def __init__(self, name, distance_from_star):
        self.name = name
        self.distance_from_star = distance_from_star

    def __repr__(self):
        return f"Planet(name='{self.name}', distance_from_star={self.distance_from_star})"

    def __str__(self):
        return f"{self.name} ({self.distance_from_star} AU)"

class StarSystem:
    def __init__(self, name):
        self.name = name
        self.planets = []

    def add_planet(self, planet):
        self.planets.append(planet)

    def sort_planets_by_distance(self):
        self.planets.sort(key=lambda planet: planet.distance_from_star)

    def find_planets_in_distance_range(self, min_distance, max_distance):
        return [planet for planet in self.planets if min_distance <= planet.distance_from_star <= max_distance]

    def __repr__(self):
        return f"StarSystem(name='{self.name}', planets={self.planets})"

    def __str__(self):
        planets_str = ', '.join(str(planet) for planet in self.planets)
        return f"Star System: {self.name}\nPlanets: {planets_str}"

solar_system = StarSystem("Solar System")

earth = Planet("Earth", 1.0)
mars = Planet("Mars", 1.5)
venus = Planet("Venus", 0.7)
jupiter = Planet("Jupiter", 5.2)
saturn = Planet("Saturn", 9.5)

solar_system.add_planet(earth)
solar_system.add_planet(mars)
solar_system.add_planet(venus)
solar_system.add_planet(jupiter)
solar_system.add_planet(saturn)

print("До сортировки:")
print(solar_system)

solar_system.sort_planets_by_distance()

print("\nПосле сортировки:")
print(str(solar_system))

min_distance = 0.5
max_distance = 2.0

planets_in_range = solar_system.find_planets_in_distance_range(min_distance, max_distance)
print(f"\nPlanets between {min_distance} AU and {max_distance} AU:")
print(", ".join(str(planet) for planet in planets_in_range))

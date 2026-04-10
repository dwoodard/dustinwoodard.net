<?php

namespace Database\Factories;

use App\Models\PortfolioItem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PortfolioItem>
 */
class PortfolioItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(),
            'image' => 'https://picsum.photos/seed/' . $this->faker->uuid . '/800/600',
            'url' => $this->faker->url(),
            'tags' => $this->faker->words(3),
            'sort_order' => $this->faker->numberBetween(1, 10),
            'is_visible' => true,
        ];
    }
}

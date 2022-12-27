<?php

namespace Database\Factories;

use App\Models\Firm;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FirmFactory extends Factory
{

     /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Firm::class;
   /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
    return [
        'title' => $this->faker->title(),
        'avatar_name' => $this->faker->sentence(),
        'firmtype' => $this->faker->sentence(),
        'purpose' => $this->faker->sentence(),
        'sitepage' => $this->faker->sentence(),
        'description' => $this->faker->sentence(),
        'twitter' => $this->faker->sentence(),
        'telegram' => $this->faker->sentence(),
        'discord' => $this->faker->sentence(),
        'github' => $this->faker->sentence(),
        'medium' => $this->faker->sentence(),
    ];
    }

}
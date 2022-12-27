<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class JobFactory extends Factory
{

     /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Job::class;
   /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
    return [
        'title' => $this->faker->jobTitle(),
        'firmname' => $this->faker->company(),
        'location' => $this->faker->address(),
        'type' => $this->faker->creditCardType(),
        'tag' => $this->faker->creditCardType(),
        'salarytype' => $this->faker->creditCardType(),
        'description' => $this->faker->text(),
        'salaryrange' => $this->faker->sentence(),
        'applytype' => $this->faker->sentence(),
        'contactinfo' => $this->faker->sentence(),
    ];
    }

}
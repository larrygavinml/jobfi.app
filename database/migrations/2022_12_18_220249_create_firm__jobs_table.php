<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFirmJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('firm_jobs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('firm_id')->unsigned();

            $table->integer('job_id')->unsigned();
        
            $table->foreign('firm_id')->references('id')->on('firms')->onDelete('cascade');
            $table->foreign('job_id')->references('id')->on('jobs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('firm_jobs');
    }
}

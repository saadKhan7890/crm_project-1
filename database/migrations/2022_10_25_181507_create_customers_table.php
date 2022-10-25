<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name',225);
            $table->string('date');
            $table->float('revenue');
            $table->float('cost');
            $table->float('reseller');
            $table->float('commission');
            $table->float('profit');
            $table->float('profit_per');
            $table->integer('switch_id')->default(0);
            $table->integer('reseller_id')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSubsStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subs_status', function (Blueprint $table) {
            $table->dropColumn('subs_id');
            $table->unsignedBigInteger('subs_id');
            $table->foreign('subs_id')->references('id')->on('subscriptions')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subs_status', function ($table) {
            $table->dropForeign('subs_id');
            $table->dropColumn('subs_id');
        });
    }
}

<?php

namespace Database\Seeders;

use App\Models\{Permission, Role, RolePermission, User};
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 *
	 * @return void
	 */
	public function run()
	{
		// \App\Models\User::factory(10)->create();

		Role::factory(10)->create();
		Permission::factory(10)->create();
		RolePermission::factory(10)->create();
		User::factory(10)->create();
	}
}

<?php

namespace App\Providers;

use App\Policies\{UserPolicy, PermissionPolicy, RolePolicy, BrandPolicy, ItemTypePolicy, CommonIssuePolicy, ProductPolicy};
use App\Models\{User, Permission, Role, Brand, ItemType, CommonIssue, Product};
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        User::class => UserPolicy::class,
        Permission::class => PermissionPolicy::class,
        Role::class => RolePolicy::class,
        Brand::class=>BrandPolicy::class,
        ItemType::class=>ItemTypePolicy::class,
        CommonIssue::class=>CommonIssuePolicy::class,
        Product::class=>ProductPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        if (! $this->app->routesAreCached()) {
            // Passport::routes();
            Passport::tokensExpireIn(now()->addDays(15));
            Passport::refreshTokensExpireIn(now()->addDays(30));
            Passport::personalAccessTokensExpireIn(now()->addMonths(6));
        }
        // Gate::guessPolicyNamesUsing(function ($modelClass) {
        //     // Return the name of the policy class for the given model...
        // });
    }
}

<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $server_ip_address = 'http://158.108.34.49/boo/iotserver';
        $path = '/var/www/html/boo/website/';
        
        config([
            'ip' => $server_ip_address,
            'path' => $path
        ]);
    }
}

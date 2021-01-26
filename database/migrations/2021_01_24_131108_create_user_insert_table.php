<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class CreateUserInsertTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $data = [
            'name'              =>'Admin',
            'email'             => 'admin@admin.com',
            'password'       => Hash::make('password'),
            'email_verified_at' => now()
        ];
        User::create($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_insert');
    }
}

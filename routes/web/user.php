<?php

$prefix = config('web.user.prefix');

Route::group(['prefix'=>$prefix], function() use($prefix){

    Route::get('/', 'UserController@index')->name($prefix.'index');
    Route::post('store', 'UserController@store');
});
<?php

$prefix = config('web.student.prefix');

Route::group(['prefix'=>$prefix], function() use($prefix){

    Route::get('/', 'StudentController@index')->name($prefix.'index');
    Route::post('store', 'StudentController@store');
});
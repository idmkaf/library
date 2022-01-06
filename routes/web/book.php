<?php

$prefix = config('web.book.prefix');

Route::group(['prefix'=>$prefix], function() use($prefix){

    Route::get('/', 'BookController@index')->name($prefix.'index');
    Route::post('store', 'BookController@store');
});
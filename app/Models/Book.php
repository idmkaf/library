<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'name', 'book_no', 'description', 'reference_no', 'published_year'
    ];

    public function saveData($request)
    {
        $book = new Book();
        $book->name = $request->name;
        $book->description = $request->description;
        $book->published_year = $request->published_year;
        $book->book_no = $request->book_no;
        $book->reference_no = $request->reference_no;

        if($book->save()){
            return $book;
        }
        return false;
    }
}

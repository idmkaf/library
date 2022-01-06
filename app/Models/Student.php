<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillabe = [
        
        'student_no','first_name','last_name','phone_number','gender'
    ];

    protected $date = ['deleted_at'];

    public function saveData($request)
    {
        $student = new Student();
        $student->student_no = $request->student_no;
        $student->first_name = $request->first_name;
        $student->last_name = $request->last_name;
        $student->phone_number = $request->phone_number;
        $student->gender = $request->gender;
       
        if($student->save()){
            return $student;
        }
        return false;
    }
}
